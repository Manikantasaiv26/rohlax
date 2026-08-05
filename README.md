# ROHLAX Website

Corporate site for **ROHLAX** — Staffing · Development · Consulting.

## Live URLs (after DNS + Pages)

| Page | URL |
|------|-----|
| Home | https://rohlax.com/ |
| Login | https://rohlax.com/login.html |
| GitHub Pages backup | https://manikantasaiv26.github.io/rohlax/ |

## Login

Client portal: https://rohlax.com/login.html

## GoDaddy DNS (required for rohlax.com)

In **DNS Management → DNS Records** for `rohlax.com`:

### 1. Delete / edit parking records
Remove or change any existing **A** records for `@` that point to GoDaddy parking IPs such as:
- `76.223.105.230`
- `13.248.243.5`

Also turn **off** Domain Forwarding if it is on (Forwarding tab).

### 2. Add these records for GitHub Pages

| Type | Name | Data | TTL |
|------|------|------|-----|
| A | `@` | `185.199.108.153` | 600 |
| A | `@` | `185.199.109.153` | 600 |
| A | `@` | `185.199.110.153` | 600 |
| A | `@` | `185.199.111.153` | 600 |
| CNAME | `www` | `manikantasaiv26.github.io.` | 600 |

### 3. Enable GitHub Pages
Repo → **Settings → Pages**:
- Source: **Deploy from a branch**
- Branch: **`gh-pages`** / `/ (root)`
- Custom domain: **`rohlax.com`** (check “Enforce HTTPS” after DNS propagates)

DNS can take 15–60 minutes (sometimes up to 48 hours).

## Local preview

```bash
npx --yes serve .
```
