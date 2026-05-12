# h2oflows-app/docs

Pilot + feature documentation site for the H2OFlows streamflow platform. Built on Nuxt 4 + Nuxt UI Pro + Nuxt Content.

Deployed on **Netlify** (or Cloudflare Pages). Sister repos: [h2oflows-app/api](https://github.com/h2oflows-app/api), [h2oflows-app/web](https://github.com/h2oflows-app/web).

---

## Setup

```bash
npm install
npm run dev
```

Dev server: `http://localhost:3000`.

## Production

```bash
npm run build      # builds .output/
npm run preview    # previews the production build locally
```

## Content

All docs live in `content/`. Filenames prefixed with numbers (`1.getting-started`) control nav order. See the [Nuxt Content docs](https://content.nuxt.com) for the markdown + MDC syntax this template uses.
