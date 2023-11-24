import { DiscordEmbed } from "../types/discord"
import { SplunkNotification } from "../types/splunk"

export default defineEventHandler(async (event) => {
  const body = await readBody<{ hint: string, title: string, message: string, event: SplunkNotification, link: string }>(event)
  const splunkEvent = body.event

  const webhook = useRuntimeConfig(event).discordWebhook

  const embed: DiscordEmbed = {
    title: splunkEvent.event_title,
    description: body.message,
    url: body.link,
    color: priorityToColor(splunkEvent.priority),
    // splunk send the timestamp in seconds
    timestamp: new Date(splunkEvent.most_recent * 1000).toISOString(),
    fields: [
      {
      name: "Tenant UID",
      value: splunkEvent.tenant_uid,
      inline: true,
      },
      {
        name: "Impact",
        value: splunkEvent.impact,
        inline: true,
      },
      {
        name: "Urgency",
        value: splunkEvent.urgency,
        inline: true,
      },
    ]
  }

  await $fetch(webhook, {
    method: 'POST',
    body: {
      embeds: [embed]
    }
  })

  return
})

function priorityToColor(priority: SplunkNotification['priority']): number {
  switch (priority) {
    case 'informational':
      return 3447003
    case 'low':
      return 5763719
    case 'medium':
      return 16776960
    case 'high':
      return 15105570
    case 'critical':
      return 15548997
  }
}
