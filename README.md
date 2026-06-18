# Mughal Medical & Gynae Centre — Website

A modern, premium marketing site for **Mughal Medical & Gynae Centre**, Johar Town, Lahore — an upgraded replacement for the current `mughalgynaehospital.com`.

Built with **Astro 6 + Tailwind CSS v4**. Multi-page, fully responsive, animated, and SEO-ready. Outputs static HTML — host it anywhere.

---

## 🚀 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview the production build locally         |

## 🗂️ Structure

```
src/
├── data/            ← EDIT CONTENT HERE
│   ├── site.ts        site name, contact details, nav, socials
│   ├── doctors.ts     doctor roster
│   └── services.ts    services + extra-services chips
├── components/      reusable UI (Navbar, Footer, cards, CTA, form, …)
├── layouts/
│   └── Layout.astro   shared shell: <head>, fonts, animations script, View Transitions
├── pages/           one file = one route
│   ├── index.astro    Home
│   ├── about.astro    About
│   ├── services.astro Services
│   ├── doctors.astro  Doctors
│   └── contact.astro  Contact + appointment form + map
└── styles/global.css  design system (maroon & gold theme + animations)
```

## ✨ Features

- **Premium maroon & gold** theme — Google Sans look across headings & body (DM Sans is the free fallback that actually loads; `Google Sans` sits first in the stack for licensed environments)
- **Animations:** Astro View Transitions between pages, scroll-reveal, animated stat counters, hover/shine micro-interactions, floating badges
- **WhatsApp-first booking:** click-to-call + appointment form that opens a pre-filled WhatsApp message
- Google Map, opening hours, 24/7 emergency card
- SEO meta + Open Graph + `MedicalClinic` structured data, custom favicon, `prefers-reduced-motion` support

---

## ⚠️ PLACEHOLDERS TO CONFIRM BEFORE GOING LIVE

All placeholder values are tagged with `TODO: confirm` — search the project for that string.

### 1. Contact details — `src/data/site.ts`
Reconstructed from public directory listings (oladoc / Marham); **please verify the real ones**:
- `phoneDisplay` / `phoneHref` — primary landline (currently `042-3237 7001`)
- `whatsappDisplay` / `whatsappNumber` — WhatsApp line (currently `0311-1222398` → `923111222398`)
- `email`, `emergencyDisplay`, social links (Instagram/YouTube)

> The WhatsApp number drives every "Book"/"WhatsApp" button and the appointment form. Update `whatsappNumber` (international format, no `+`) in one place and it applies everywhere.

### 2. Doctors — `src/data/doctors.ts`
Verify each doctor's **name spelling, qualifications and years of experience**. Photos use elegant branded initial-avatars by default; to use real portraits, drop an image in `public/doctors/` and set `image: "/doctors/filename.jpg"` on that doctor.

### 3. Testimonials — `src/components/Testimonials.astro`
Currently **illustrative placeholders**. Replace with real, consented patient reviews.

### 4. Stats — `src/components/Stats.astro`
Figures are derived from the doctor roster (combined experience, head-count) — safe and defensible. Swap in real centre figures (e.g. deliveries, patients) if you have them.

### 5. Images
Hero & about photos are Unsplash placeholders. Replace with real centre/clinic photos for authenticity (put them in `public/` and update the `src` in `index.astro` / `about.astro`).

---

## 🎨 Customising the look
- **Colours & fonts:** `src/styles/global.css` → the `@theme { … }` block (maroon / gold scales, fonts, shadows).
- **Nav / footer / contact bar:** content comes from `src/data/site.ts`.

## 🌐 Deployment
`npm run build` produces a fully static `./dist/`. Deploy to Netlify, Vercel, Cloudflare Pages, GitHub Pages, or any static host / cPanel. No server required.
