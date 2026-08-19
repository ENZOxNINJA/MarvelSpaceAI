# TheMarvel DNS plan

Domain: `themarvel.space`

Create records only after the corresponding service exists.

| Hostname | Purpose | Service |
|---|---|---|
| `@` | Root | Website |
| `www` | Public site | Pages |
| `app` | Application | Workers/Pages |
| `api` | API | Worker |
| `admin` | Protected admin | Access + application |
| `dashboard` | Protected dashboard | Access + application |
| `status` | Status | Pages |
| `dev` | Development | Tunnel/Workers |
| `lab` | Private lab | Tunnel |
| `nas` | Private NAS | Tunnel |
| `ssh` | Private SSH | Tunnel/Access |

Keep mail records DNS-only. Do not expose origin IPs unnecessarily.