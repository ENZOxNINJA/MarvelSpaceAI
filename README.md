# TheMarvel Cloudflare Platform

Infrastructure foundation for `themarvel.space`.

## Cloudflare
- DNS / TLS / CDN / DDoS / WAF
- Workers API
- D1 / KV / R2
- Workers AI
- Turnstile
- Zero Trust / Tunnel

## Zero Trust
`themarvel5.cloudflareaccess.com`

## Hostnames
- `www.themarvel.space` — public website
- `app.themarvel.space` — application
- `api.themarvel.space` — API
- `admin.themarvel.space` — protected admin
- `dashboard.themarvel.space` — protected dashboard
- `status.themarvel.space` — status
- `dev.themarvel.space` — development
- `lab.themarvel.space` — private lab
- `nas.themarvel.space` — private NAS
- `ssh.themarvel.space` — private SSH

## Quick start
```bash
npm install
npx wrangler login
npm run cf:check
npm run cf:types
npm run cf:deploy
```

Replace account-specific resource IDs in `wrangler.jsonc` before deployment. Never commit Cloudflare tokens, tunnel credentials, private keys, or other secrets.