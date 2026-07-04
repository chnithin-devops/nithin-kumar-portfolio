
## Overview

Build a single-page premium portfolio for **Nithin Kumar Chennavoina** (DevOps / Cloud / Azure DevOps Engineer). All content is sourced strictly from the uploaded resume and photo — no invented data. Design language: dark, glassmorphic, Apple/Stripe/Vercel-inspired, with smooth Lenis scrolling, Framer Motion animations, and a functional loader.

## Assets (uploaded → Lovable Assets)

- `Nithin_Resume_PDF.pdf` → asset pointer, used for embed / download / open / print.
- Professional photo (`52910b32….png`) → asset pointer, used in Hero + About.

## Route Architecture

Single-page portfolio at `/` with anchored sections; premium 404 stays as-is.

- `src/routes/__root.tsx` — global head (title, description, OG/Twitter, JSON-LD Person schema), Poppins + Inter via Google Fonts `<link>`, Lenis provider mount.
- `src/routes/index.tsx` — Loader → Navbar → Hero → About → Experience → Skills → Projects → Services → Certifications → Achievements → Education → Resume → Contact → Footer.

## Design System (src/styles.css)

Semantic tokens (all oklch equivalents of the requested palette):
- `--background` #050816, `--primary` #0F172A, `--accent` #3B82F6, `--accent-2` #06B6D4, `--foreground` white, `--muted-foreground` gray-400.
- Gradients: `--gradient-primary` (accent → secondary accent), `--gradient-hero` radial glow, `--gradient-text` for headline sweeps.
- Shadows: `--shadow-glow`, `--shadow-elegant`, `--shadow-card`.
- Custom utilities: `.glass` (backdrop-blur + border + bg-white/5), `.glass-strong`, `.hover-glow`, `.text-gradient`, `.section` (consistent vertical rhythm).
- Fonts registered as Tailwind theme tokens: `font-display` (Poppins), `font-sans` (Inter).

## Components (src/components/portfolio/)

- `Loader.tsx` — Full-screen dark overlay, animated "Nithin Kumar" wordmark (letter stagger + gradient sweep), progress bar, auto-dismiss after ~1.8s with scale/blur exit.
- `SmoothScroll.tsx` — Lenis instance in a `useEffect` + rAF loop; scroll-to-anchor helper.
- `Navbar.tsx` — Sticky, transparent → glass on scroll (framer scroll listener), active section via IntersectionObserver, desktop links + mobile Sheet drawer. Links use in-page smooth scroll via Lenis `scrollTo`.
- `Hero.tsx` — Two-column: left = greeting, name (display font, gradient), rotating typing animation (`DevOps Engineer / Cloud Engineer / Azure DevOps Engineer / Azure Specialist`) built without extra deps, CTA row (Download Resume, View Projects, Hire Me, Contact Me). Right = professional photo in a glass ring with animated gradient border; floating tech-stack chips (Azure, AWS, Docker, Kubernetes, Terraform, Git, Linux, Azure DevOps, Jenkins) using `react-icons` / `lucide-react`, each with `y` float loop.
- `About.tsx` — Copy distilled from resume summary; animated counters (2.5+ Yrs Experience, 9+ Cloud Tools, 1 Flagship Project, 2 Certifications) via framer `useInView` + `animate`.
- `Experience.tsx` — Vertical glass timeline; single entry: Zasta Enterprise Pvt Ltd — DevOps Engineer — Oct 2023 – Present, with the full responsibility bullet list from the resume.
- `Skills.tsx` — Categorized cards (Cloud & Azure, DevOps & CI/CD, Containers & IaC, Databases, Languages & OS, Quality & Security). Each skill has an animated proficiency bar; hover glow + tilt.
- `Projects.tsx` — Featured: IPOS — Integrated Port Operating System. Sections: Overview, Responsibilities, Architecture, Tech Stack (badges: Azure DevOps, Jenkins, Docker, AKS, Terraform, SonarQube, Maven, Azure SQL, ADF, Databricks), Deployment Flow, CI/CD Pipeline, Business Impact.
- `Services.tsx` — Grid of glass cards with icons: CI/CD Pipeline Development, Cloud Infrastructure, IaC, Azure Administration, AWS Administration, Docker, Kubernetes, Terraform, Release Management, Automation.
- `Certifications.tsx` — Two premium cards: Azure DevOps Engineer Expert, JSpiders Full Stack Developer. Each has an editable `certificateUrl` constant at the top of the file (placeholder — commented so the user can paste real URLs); if empty, the "View Certificate" button is disabled with tooltip "URL not set" instead of using `#`.
- `Achievements.tsx` — Cards: Internal Award (Zasta), Hackathon Participation, National Science Olympiad, Blood Donation Camp.
- `Education.tsx` — Three cards: B.Sc (MECS) — Gauthami Degree College; Intermediate (MPC) — Sri Gayatri Junior College; SSC — SPR School of Excellence. No marks/percentages shown.
- `Resume.tsx` — Embedded PDF via `<iframe src={resumeUrl}>` in a glass frame; three real buttons:
  - Download → `<a href download>`.
  - Open → `<a target="_blank" rel="noopener noreferrer">`.
  - Print → opens PDF in hidden iframe and calls `contentWindow.print()`.
- `Contact.tsx` — Left: contact info (Email → `mailto:`, Phone → `tel:`, LinkedIn / GitHub → `target="_blank" rel="noopener noreferrer"`), "Available for Work" pulsing badge. Right: form (Name, Email, Subject, Message) using react-hook-form + zod; loading spinner on submit; sonner toast success; opens `mailto:` with prefilled body as the actual delivery mechanism (no backend needed, no dead submit).
- `Footer.tsx` — Quick links (smooth-scroll), social links (real URLs, new tab), Download Resume button, Back-to-Top (Lenis scrollTo 0), © 2026 Nithin Kumar.

## Link & Button Correctness Rules

- No `#`, no `javascript:void(0)`, no placeholder URLs anywhere.
- Section navigation uses Lenis `scrollTo('#id')` handlers, not `<a href="#id">` (avoids Chrome's blocked-navigation edge cases and keeps history clean).
- All external links: plain `<a target="_blank" rel="noopener noreferrer">` — never TanStack `<Link>`.
- Certificate URLs live in one constants file (`src/lib/portfolio-data.ts`); if unset, the button is visibly disabled — never a dead link.

## Dependencies to add

`framer-motion`, `lenis`, `react-icons`, `react-hook-form`, `zod`, `@hookform/resolvers` (lucide-react, sonner, shadcn already present).

## SEO / Head

`__root.tsx` head: title "Nithin Kumar — DevOps & Cloud Engineer", description, `og:title/description/type=website/url=/`, `twitter:card=summary_large_image`, JSON-LD `Person` schema (name, jobTitle, email, url, sameAs LinkedIn/GitHub). Favicon left as project default.

## Responsiveness & Performance

- Mobile-first with `grid-cols-[minmax(0,1fr)_auto]` header pattern, `min-w-0` + `truncate` on all text-in-flex rows.
- Photo served via lovable-assets (optimized), `loading="lazy"` on non-hero images.
- Framer Motion `whileInView` with `once: true` to avoid re-runs.
- Reduced-motion respected via `useReducedMotion`.

## QA Checklist (verified before completion)

Navbar links scroll to correct sections · Loader dismisses and doesn't trap focus · LinkedIn/GitHub open in new tab · mailto/tel fire native handlers · Resume download / open / print all work · Contact form validates and submits · No `#` hrefs · No console/TS errors · Layout intact from 320px → 1920px.

## Technical Notes

- Lenis mounted once at root; navbar/footer use a shared `scrollToSection(id)` helper that calls `lenis.scrollTo(el)`.
- Typing animation implemented in ~30 lines with `useEffect` + interval, no extra package.
- Counters use `motion.span` with a custom `useCountUp` hook triggered by `useInView`.
- PDF embed uses the Lovable Asset URL directly; browsers render inline. Print helper: create hidden iframe, `onload` → `contentWindow.focus(); contentWindow.print()`.
