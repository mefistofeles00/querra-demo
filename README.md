# Querra: AI support assistant (portfolio demo)

A marketing site and analytics dashboard for a fictional AI support product, built to show
production-quality front-end work. The brand, customers and numbers are made up.

**Pages**
- `/`: landing page (hero with live widget mock, features, how it works, analytics preview, pricing, FAQ)
- `/case-studies/[slug]`: statically generated case study
- `/dashboard`: analytics dashboard with KPI sparklines, volume chart, filterable conversations table and document ingestion status

**Stack:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS. No UI or chart libraries.
Charts are hand-written SVG to keep the bundle small.

**Quality**
- Lighthouse (mobile): Accessibility 100, Best Practices 100, SEO 100, Performance 92 to 99 depending on page. Desktop Performance 100.
- Fully static, server components by default; only the scroll-reveal and the table filter ship JavaScript.
- Accessible: semantic landmarks, skip link, keyboard focus styles, WCAG AA contrast, `prefers-reduced-motion` support.
- Animations are progressive enhancement: content is visible without JavaScript.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Deploy

Push to GitHub and import the repository on Vercel. No environment variables are needed.
