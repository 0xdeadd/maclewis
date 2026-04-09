# Mac Lewis Clearing and Grading, LLC

Marketing website for Mac Lewis Clearing and Grading — a West Georgia site development contractor.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4**
- **shadcn/ui** components
- Deployed on **Vercel**

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
# One-command deploy
npx vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deploys on push.

## Before Launch

See [TODO.md](./TODO.md) for a full checklist of placeholders to replace (photos, phone number, email, logo, etc.).

## Project Structure

```
src/
├── app/
│   ├── api/quote/route.ts   # Quote form handler (wire to email service)
│   ├── globals.css           # Theme + Tailwind config
│   ├── layout.tsx            # Root layout, fonts, SEO, structured data
│   └── page.tsx              # Single-page layout
├── components/
│   ├── about.tsx             # About / trust section
│   ├── contact.tsx           # Quote request form
│   ├── footer.tsx            # Footer
│   ├── gallery.tsx           # Project photo grid
│   ├── header.tsx            # Sticky header + mobile nav
│   ├── hero.tsx              # Hero with CTA
│   ├── service-area.tsx      # Counties served
│   └── services.tsx          # Service cards
└── lib/
    └── utils.ts              # shadcn utilities
```
