# Deployment

1. Install dependencies: `npm install`
2. Authenticate: `npx wrangler login`
3. Create D1/KV/R2 resources in Cloudflare.
4. Replace resource IDs in `wrangler.jsonc`.
5. Run `npm run cf:check`.
6. Run `npm run cf:types`.
7. Apply D1 migrations with `npm run db:migrate:remote`.
8. Deploy with `npm run cf:deploy`.
9. Configure DNS for the required hostnames.
10. Configure Zero Trust Access for private hostnames.
11. Create a Tunnel for internal services.

For GitHub Actions, configure repository/environment secrets:
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Use a least-privilege token. Never commit credentials.