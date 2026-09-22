# V Mechanic Customer Portal

Customer-facing car-care portal for V Mechanic — *Expert care · Smoother ride*.
Built with Next.js (vinext on Cloudflare Workers), React 19, TypeScript and Tailwind CSS 4.

## Features

- **Overview** — live job hero with 5-step progress, estimate card, garage summary, requested appointments and maintenance plan (full schedule dialog)
- **Service tracker** — detailed timeline, advisor note with Call / WhatsApp, 58-point inspection report (good / attention / urgent)
- **Estimates** — approve or decline each item, “Approve all”, live summary, printable PDF estimate
- **My cars** — switch between vehicles, specs, health score, documents with renewal warnings, expandable service history, drag-to-compare before/after repair photos, downloadable history
- **Invoices** — outstanding/paid totals, filter (All / Due / Paid), PDF download, demo UPI/Card checkout
- **Support** — call, WhatsApp and email cards, FAQ, callback request form, workshop locations
- **Booking** — validated booking form (vehicle, service, workshop, date, pick-up & drop) with confirmation
- Notifications with unread counts, toasts, light/dark theme, account menu with “Reset demo”
- Deep links per page (`/#/estimates`, `/#/invoices` …) with working browser back/forward
- Demo state (approvals, payments, bookings) is saved in the browser and synced across tabs
- Accessible: skip link, labelled controls, keyboard-operable slider, visible focus, reduced-motion support
- Responsive: sidebar on desktop, drawer + bottom tab bar on mobile

## Run locally

Requirements: Node.js 22.13 or later and pnpm.

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build
pnpm lint
```

## Project structure

| Path | What it is |
| --- | --- |
| `app/page.tsx`, `app/layout.tsx` | Route entry, metadata, fonts |
| `app/globals.css` | Brand design tokens (light + dark) and all portal styles |
| `components/brand/logo.tsx` | Official V Mechanic logo as SVG components (`LogoFull`, `LogoWordmark`, `LogoMark`) — uses `currentColor` |
| `components/portal/portal-app.tsx` | Providers (theme, toasts, state) and view switcher |
| `components/portal/portal-context.tsx` | Portal state, persistence, hash routing, notifications |
| `components/portal/shell.tsx` | Sidebar, top bar, notifications, account menu, mobile tab bar |
| `components/portal/views/*` | One file per page |
| `components/portal/booking-dialog.tsx`, `before-after.tsx`, `primitives.tsx` | Shared pieces |
| `lib/portal-data.ts` | **All demo data and business contact details** — replace with API calls |
| `lib/print-document.ts` | Branded estimate / invoice / history print-to-PDF |
| `public/brand/` | Logo PNGs (white and dark) · `public/favicon.svg` uses the V-arrow mark |

## Brand

- Colours: brand black `#0B0B0B`, white, warm gold accent `#C99A3B` (tokens in `app/globals.css`; change `--accent` to re-theme)
- Type: Archivo (headings, semi-expanded to echo the stencil logo) + Inter (body)

## Going to production

This is a front-end prototype. Customer identity/OTP login, live workshop data, payments (UPI/card gateway), WhatsApp notifications and server-generated PDFs need backend integration. `lib/portal-data.ts` is the single place to swap for real data.
