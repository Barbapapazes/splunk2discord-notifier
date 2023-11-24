import process from 'node:process'

export default defineNitroConfig({
  runtimeConfig: {
    discordWebhook: process.env.DISCORD_WEBHOOK,
  },
})
