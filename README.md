# Nawab Ali — Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: CSS + Intersection Observer API
- **Fonts**: Syne + DM Sans (Google Fonts)

## Project Structure

```
nawab-portfolio/
├── app/
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Footer.tsx        # Footer
│   ├── sections/
│   │   ├── Hero.tsx      # Hero + stats bar
│   │   ├── Skills.tsx    # Skills grid
│   │   ├── Experience.tsx# Timeline experience
│   │   ├── Projects.tsx  # Project cards
│   │   ├── Education.tsx # Education + languages
│   │   └── Contact.tsx   # Contact section
│   └── ui/
│       └── AnimatedSection.tsx  # Reusable scroll-reveal wrapper
├── lib/
│   └── data.ts           # All portfolio data (single source of truth)
└── public/               # Static assets
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Customization

All content is in **`lib/data.ts`** — just edit that file to update your info, skills, experience, or projects. No need to touch the components.

## Deployment

Deploy on [Vercel](https://vercel.com) with zero config:

```bash
npm i -g vercel
vercel
```
