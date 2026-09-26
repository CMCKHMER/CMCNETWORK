# CMC Network Hub

**Creative Minds Network (CMC Network)**  
A next-generation teacher resource and TOEFL preparation platform for educators, schools, and language academies worldwide. Built with React, Vite, Tailwind CSS, and TypeScript.

---

## 📡 Live site

Deployed via GitHub Pages at:  
**https://cmckhmer.github.io/CMCNETWORK/**

---

## 🚀 What this project is

CMC Network Hub is a public-facing marketing and interactive demo site for the CMC Network educational ecosystem. It showcases:

- **AI Auto-Grading Engine** for grammar, written responses, and TOEFL-style submissions.
- **Smart Worksheet Generator** that creates differentiated classroom resources instantly.
- **TOEFL Practice Suite** aligned to TOEFL Primary, Junior, and iBT frameworks.
- **Prefix & Suffix Morphology Lab** for elementary and ESL learners.
- **Resource Library** with downloadable PDF-style previews for teachers.
- **ROI Calculator** demonstrating weekly teacher time savings.
- **Pricing, FAQ, and Lead Capture** for individual teachers, Pro Educators, and school campus licenses.

> **This repository contains the source code, design system, and proprietary content for the CMC Network brand.**
> **It is not open source. Unauthorized reproduction, cloning, remixing, or commercial reuse is strictly prohibited.**

---

## 🛠 Tech stack

| Layer            | Tool / Library                                   |
| ---------------- | ------------------------------------------------ |
| Language         | TypeScript 5.9                                   |
| Framework        | React 19.2                                       |
| Build tool       | Vite 7.3                                         |
| Styling          | Tailwind CSS 4.1 + custom `index.css` utilities  |
| UI icons         | Lucide React                                     |
| Effects          | Canvas Confetti                                  |
| Utility helpers  | clsx, tailwind-merge                             |
| Single-file build| vite-plugin-singlefile                           |
| Deployment       | GitHub Pages (`base: "/CMCNETWORK/"`)            |

---

## 📁 Project structure

```text
CMCNETWORK/
├── .github/              # GitHub workflows and health files
├── public/               # Static assets
├── src/
│   ├── components/       # React components (Navbar, Hero, Pricing, Footer, modals, etc.)
│   ├── data/             # Landing page copy, resources, testimonials, pricing
│   ├── hooks/            # Reusable React hooks (modals, delayed reset)
│   ├── types/            # Shared TypeScript interfaces
│   ├── utils/            # Small helpers (cn class merger)
│   ├── App.tsx           # Main page composition
│   ├── index.css         # Tailwind + custom glass-panel utilities
│   └── main.tsx          # React entry point
├── index.html            # HTML shell
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite + single-file build config
├── LICENSE               # Proprietary license (All Rights Reserved)
├── CONTRIBUTING.md       # Contribution and content protection policy
├── CODEOWNERS            # Mandatory code-owner review rules
└── README.md             # This file
```

---

## 💻 Local development

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Build for production

```bash
npm run build
```

Vite will output the static site to `dist/`.

### Preview the production build

```bash
npm run preview
```

---

## 🧱 Design system notes

- **Color palette:** Dark slate background (`bg-slate-950`) with cyan accents (`text-cyan-400`, `border-cyan-500/40`).
- **Typography:** `Plus Jakarta Sans` for body text, `Space Grotesk` for display headings.
- **Glass effects:** `.glass-panel`, `.glass-panel-light`, `.glass-card-interactive` for frosted UI surfaces.
- **Animation:** Custom keyframes for floating, pulsing, and shimmer effects.
- **Accessibility:** Treats scroll-smooth, modal a11y hooks, aria-labels, and keyboard focus states.

---

## 🔐 License & legal notice

**© 2026 Creative Minds Network. All Rights Reserved.**

This repository is the confidential and proprietary intellectual property of Creative Minds Network. It contains:

- Custom code authored by or for the owner
- Original design system, layout, and UX patterns
- Curriculum-aligned content, sample questions, and resource descriptions
- Branding, naming, imagery, and product claims

**You may not** fork, clone, copy, redistribute, modify, remix, republish, sell, sublicense, or otherwise use any part of this code or design for your own projects, games, apps, websites, or educational products.

**You may not** add, modify, or submit content, pull requests, issues, or derivative works without written authorization.

For licensing inquiries, contact the repository owner.

See [`LICENSE`](./LICENSE) and [`CONTRIBUTING.md`](./CONTRIBUTING.md) for full terms.

---

## 🤝 Contributions

This project is **not open to external contributions** at this time.  
Please see [`CONTRIBUTING.md`](./CONTRIBUTING.md) before opening issues or pull requests.

---

## 🙋‍♂️ Questions or support

If you are a teacher, school administrator, or potential partner:

- Open a GitHub issue only for public-facing site bugs.
- For commercial, licensing, or partnership questions, contact the repository owner directly.

---

**Creative Minds Network — Empowering educators, engaging students.**
