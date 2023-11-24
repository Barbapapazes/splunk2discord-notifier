# Splunk2Discord Notifier

Used to send Splunk alerts (via Alert Manager Enterprise) to Discord via a webhook.

In the application Alert Manager Enterprise, you will need to configure the notificiation to `web` using the URL of this server.

Splunk will send body to the server which will then be sent to Discord after some formatting to use Discord's embeds.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

You will also need to create a `.env` file with the following variables:

```bash
# Discord webhook URL
DISCORD_WEBHOOK=
```

> [!NOTE]
> Do not forget to add it to your production environment as well.

## Development

Start the development server on `http://localhost:3000`

```bash
pnpm run dev
```

> [!TIP]
> You can use [https://smee.io/](https://smee.io/) to test the application locally.

## Linting

Run ESLint:

```bash
pnpm run lint
```

Fix ESLint errors:

```bash
pnpm run lint:fix
```

## Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

## Deployment

We use [pm2](https://pm2.keymetrics.io/) to manage the application in production.

```bash
# Start the application
pm2 start ecosystem.config.cjs
```

```bash
# Stop the application
pm2 stop ecosystem.config.cjs
```

```bash
# Restart the application
pm2 restart ecosystem.config.cjs
# Or reload the application using pm2 reload ...
```

You can also access the application logs using pm2:

```bash
pm2 logs
```
