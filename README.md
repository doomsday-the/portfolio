# Arush Mehta — Personal Portfolio

A fast, responsive, and minimalist personal portfolio built with Next.js (App Router), Tailwind CSS, and Framer Motion.
Features dark mode by default and is fully data-driven via simple config files.

**Live:** [arushmehta.vercel.app](https://arushmehta.vercel.app) <!-- update if URL differs -->

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS + Vanilla CSS variables |
| Animations | Framer Motion |
| Icons | Lucide React, React Icons |
| Theme | Custom ThemeProvider (localStorage, no script injection) |
| Deployment | Vercel |

## Data-Driven Content

All content lives in `src/data/` — no layout code changes needed:

| File | What it controls |
|---|---|
| `profile.ts` | Name, tagline, bio, email, phone, GitHub, resume link |
| `projects.ts` | Projects — status: `Featured`, `In Progress`, `Completed`, or `Coming Soon` |
| `skills.ts` | Skill categories (Languages, Frameworks, Tools, Data & AI) + Currently Learning |

## Projects Showcased

- **Tata Steel IoT Intelligence Dashboard** *(Featured — Internship)* — NL-to-SQL chatbot dashboard
- **Pulse AI — India Edition** *(Completed)* — Real-time India-centric tech news feed
- **Project Genesis** *(In Progress)* — AI-first Personal Media Companion

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

Connected to Vercel — every push to `master` triggers an automatic deploy.
