# Splunk2Discord Notifier

Used to send Splunk alerts (via Alert Manager Enterprise) to Discord via a webhook.

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

## Development

Start the development server on `http://localhost:3000`

```bash
pnpm run dev
```

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
