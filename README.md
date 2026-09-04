# crowley-capital.com

Family office allocator across venture capital, private equity and hedge funds.

Stack: Vite, React, TypeScript, Tailwind. Hosted on Render (static site, auto-deploys from `main`). Domain and DNS on Cloudflare.

## Editing the site

Almost everything you will ever change lives in `src/content/`. Edit the text between the quotes, commit to `main`, and Render publishes it within a few minutes.

| To change | Edit |
|---|---|
| Firm name, offices, contact email, social links, principal title, button labels | `src/content/site.ts` |
| Homepage headline, pillars line, lead paragraph, the three pillars | `src/content/hero.ts` |
| Investment focus grid labels | `src/content/focus.ts` |
| How we invest | `src/content/philosophy.ts` |
| Investment Strategies page (venture, private equity, family offices sections) | `src/content/strategies.ts` |
| Family Offices page and the homepage family office section | `src/content/family-offices.ts` |
| Private Capital Convenings copy and participants | `src/content/convenings.ts` (photographs are in `src/components/CCV/CCVConvenings.tsx`) |
| About page and homepage leadership section, Jake's biography | `src/content/about.ts` |
| Insights page heading and intro | `src/content/insights.ts` |
| Footer disclaimer text | `src/content/footer.ts` |
| Section order on the homepage | `src/pages/CrowleyCapital.tsx` |
| Browser tab title, Google description, link previews, structured data | `index.html` |
| Link-preview image, favicon | `public/og-image.png`, `public/favicon.ico` |
| Colors and fonts | `src/index.css` (brand variables) and `tailwind.config.ts` |

Pages: `/` home, `/strategies`, `/family-offices`, `/insights` (articles), `/about`, `/privacy`, `/terms`. `/articles` redirects to `/insights`.

### Where requests go

Discuss an Opportunity, Contact and Request an Invitation all open a pre-filled email to the address in `site.contact.email`.

## Running locally

```sh
npm install
npm run dev
```

## Deploying

Push to `main`. Render builds with `npm run build` and serves the `dist` folder. Subpages (`/strategies`, `/about` and so on) need a rewrite rule in the Render dashboard (Redirects/Rewrites: source `/*`, destination `/index.html`, type Rewrite) so they load on refresh and direct link.

For anything larger than a text edit, work on a branch, open a pull request, review the Render preview URL, then merge.

## Environment

Copy `.env.example` to `.env` for local work. Never commit `.env`.
