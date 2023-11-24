import process from 'process'

export default defineNitroConfig({
  runtimeConfig: {
    discordWebhook: process.env.DISCORD_WEBHOOK,
  }
})
