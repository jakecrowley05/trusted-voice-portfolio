# crowley-capital.com

Family office allocator across venture capital, private equity and hedge funds.

Stack: Vite, React, TypeScript, Tailwind. Hosted on Render (static site, auto-deploys from `main`). Domain and DNS on Cloudflare.

## Editing the site

Almost everything you will ever change lives in `src/content/`. Edit the text between the quotes, commit to `main`, and Render publishes it within a few minutes.

| To change | Edit |
|---|---|
| Firm name, current deployments, offices, contact email, social links, principal title | `src/content/site.ts` |
| Homepage headline, lead paragraph, button labels, the three allocation lanes | `src/content/hero.ts` |
| Fields of emphasis (Infrastructure, Data centers, and so on) | `src/content/emphasis.ts` |
| Innovation arm sectors and stage | `src/content/innovation.ts` |
| Long-term outlook statement and the flywheels | `src/content/outlook.ts` |
| About the firm, principles | `src/content/firm.ts` |
| Gatherings and the request-invitation button label | `src/content/events.ts` |
| Footer blurb, legal links, disclaimer | `src/content/footer.ts` |
| Section order on the homepage | `src/pages/CrowleyCapital.tsx` |
| Browser tab title, Google description, link previews | `index.html` |
| Link-preview image, favicon | `public/og-image.png`, `public/favicon.ico` |
| Colors and fonts | `src/index.css` (brand variables) and `tailwind.config.ts` |

The "Current deployments" block in the hero is set in `src/content/site.ts` under `deployments`. Edit the lanes list to change what is shown.

### Adding a gathering

Open `src/content/events.ts` and add an entry to `list`:

```ts
{
  title: "Spring gathering",
  date: "April 2027",
  location: "London",
  description: "One line about the room.",
},
```

### Where invitation requests go

The request form posts to whatever URL is set as `VITE_EVENTS_WEBHOOK_URL` in Render's Environment tab (a Zoho form endpoint, a Zapier or Make webhook, or a Supabase function). If that variable is not set, the form opens a pre-filled email to the address in `site.contact.email`, so no request is ever lost.

## Running locally

```sh
npm install
npm run dev
```

## Deploying

Push to `main`. Render builds with `npm install && npm run build` and serves the `dist` folder. `render.yaml` in this repo carries that configuration plus the rewrite rule that lets `/privacy` and `/terms` load on refresh.

For anything larger than a text edit, work on a branch, open a pull request, review the Render preview URL, then merge.

## Environment

Copy `.env.example` to `.env` for local work. Never commit `.env`.
