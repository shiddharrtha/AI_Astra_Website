# AI Astra Innovations

Modern marketing website for **AI Astra Innovations** — an AI solutions company building intelligent websites, LLM-powered chatbots, AI agents, workflow automation, and custom digital platforms.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, services, projects, testimonials, and CTA |
| `/services` | Detailed service offerings |
| `/projects` | Filterable project gallery |
| `/projects/[slug]` | Individual case study pages |
| `/about` | Company mission, values, and story |
| `/contact` | Project inquiry form |
| `/privacy` | Privacy policy (placeholder) |
| `/terms` | Terms of service (placeholder) |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # Reusable UI components
└── lib/
    ├── data.ts           # Content and configuration
    └── utils.ts          # Utility functions
```

## Deployment

Deploy to [Vercel](https://vercel.com):

```bash
npm run build
```

## Design System

- **Primary:** `#4F46E5` (Indigo)
- **Secondary Blue:** `#2563EB`
- **Accent Cyan:** `#22D3EE`
- **Accent Teal:** `#14B8A6`
- **Dark Section:** `#07111F`
- **Fonts:** Space Grotesk (headings), Inter (body)
