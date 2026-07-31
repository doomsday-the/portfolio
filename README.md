# Arush Mehta - Personal Portfolio

A fast, responsive, and minimalist personal portfolio built with Next.js (App Router), Tailwind CSS, and Framer Motion. 
Features dark mode by default and is fully data-driven via simple config files.

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- Framer Motion (Subtle entrance animations)
- Lucide React (Icons)
- next-themes (Dark/Light mode)

## Data-Driven Content Editing
To edit the content of the portfolio without touching any layout code, simply modify the files in `src/data/`:
- `src/data/profile.ts`: Name, tagline, bio, social links, and resume.
- `src/data/projects.ts`: Your projects. You can mark them as "Featured", "In Progress", or "Completed".
- `src/data/skills.ts`: Your categorized skills and what you're currently learning.

## Local Development
1. Clone the repository and navigate into the directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel
This project is pre-configured to be deployed easily on Vercel:
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Leave the default build settings (Framework Preset: Next.js).
5. Click **Deploy**. Vercel will automatically build and deploy your site. Every future push to the `main` branch will trigger an automatic update.
