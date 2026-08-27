# Olatomiwa Olabode (OlatomiwaTech) — Developer Portfolio

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-v8.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue.style=flat-square)](LICENSE)

A clean, premium, modern dark-mode personal website and developer portfolio for **Olatomiwa Olabode (OlatomiwaTech)** — Full-Stack Software Engineer & Entrepreneur.

Built with **React 19**, **TypeScript**, and **Tailwind CSS v4**, this application is engineered to showcase real-world projects, technical competencies, product architecture, and developer mindset with high performance, tight accessibility, and refined visual hierarchy.

---

## 🌟 Key Features

- **🎨 Modern Dark Mode Design System**:
  - Custom color palette: `#0A0E1A` background, `#111827` cards, and `#38BDF8` primary cyan accent.
  - Typography powered by Google Fonts `Inter` (sans-serif) and `JetBrains Mono` (code snippet font).
  - Subtle noise/grid backgrounds, restrained radial cyan glows, and smooth transitions.

- **⚡ Sticky Navigation (`Navbar.tsx`)**:
  - Glassmorphic blur backdrop on scroll with active section tracking.
  - Status indicator: `● Available for opportunities` with pulsing cyan animation.
  - Accessible mobile drawer menu.

- **💻 Interactive Hero Editor (`Hero.tsx`)**:
  - Live interactive TypeScript editor simulation (`developer.ts` & `stack.config.ts`).
  - Copy-to-clipboard functionality and terminal execution simulation (`✓ Compiled cleanly`).
  - Dual call-to-action buttons for project browsing and direct GitHub profile access.

- **🚀 Featured Projects (`ProjectSection.tsx` & `ProjectCard.tsx`)**:
  - **Project 01 — SoloHub**: Developer workflow management & feature tracking platform with interactive Kanban UI matrix preview. ([SoloHub Repository](https://github.com/OlatomiwaTech/SoloHub))
  - **Project 02 — Nuvora**: Collaborative school administration & record tracking platform with live metrics dashboard preview. ([Nuvora Repository](https://github.com/Michael-aal/petra-school-project))
  - Interactive **Architecture Modal** (`ProjectModal.tsx`) breaking down key features and stack details for each project.

- **🛠️ Interactive Tech Stack Matrix (`TechStack.tsx` & `TechBadge.tsx`)**:
  - Responsive matrix featuring 9 core technologies: `HTML`, `CSS`, `JavaScript`, `TypeScript`, `Node.js`, `Express`, `SQL`, `Prisma`, and `Linux`.
  - Category filtering (`Frontend`, `Backend`, `Database`, `DevOps & Tools`) with cyan hover highlights.

- **🧠 Developer Mindset & Highlights (`About.tsx`)**:
  - Highlights core engineering values: `Problem Solver`, `Product Builder`, `Full-Stack Development`, and `Entrepreneurial Mindset`.

- **📩 Direct Contact Form (`Contact.tsx`)**:
  - Real-time client-side form validation.
  - Submits directly to `mrcodex2012@gmail.com` with Formspree API and fallback `mailto:` handler.
  - Success modal confirmation state.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Core** | React 19, TypeScript, HTML5 |
| **Styling** | Tailwind CSS v4, Vanilla CSS Design Tokens, Google Fonts |
| **Iconography** | Lucide React |
| **Build Tooling** | Vite 8, ESBuild, PostCSS |
| **Linting & Types** | TypeScript Compiler (`tsc`), ESLint |

---

## 📂 Project Structure

```text
c:\Development\portfolio\
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images & static assets
│   ├── components/         # Modular React UI components
│   │   ├── icons/          # Custom SVG Icon wrappers (GithubIcon, etc.)
│   │   ├── About.tsx       # Developer mindset section
│   │   ├── Contact.tsx     # Contact form component
│   │   ├── Footer.tsx      # Portfolio footer
│   │   ├── Hero.tsx        # Hero section with interactive TypeScript panel
│   │   ├── Navbar.tsx      # Sticky navigation & status badge
│   │   ├── ProjectCard.tsx # Interactive project cards & UI previews
│   │   ├── ProjectModal.tsx# Detailed architecture modal view
│   │   ├── ProjectSection.tsx# Featured projects section wrapper
│   │   ├── TechBadge.tsx   # Individual technology stack badge
│   │   └── TechStack.tsx   # Interactive tech stack matrix & filter
│   ├── data/
│   │   └── portfolioData.ts# Structured data for projects, stack, & personal info
│   ├── types/
│   │   └── portfolio.ts    # TypeScript definitions & interfaces
│   ├── App.tsx             # Root application component
│   ├── index.css           # Global Tailwind directives & custom utilities
│   └── main.tsx            # React application entry point
├── index.html              # HTML5 root template
├── package.json            # NPM dependencies & scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v18+ recommended) and npm installed:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/OlatomiwaTech/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser to view the live portfolio.

---

## 📦 Production Build & Verification

To verify TypeScript types and create a production build bundle:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

---

## 📬 Contact & Links

- **Developer**: Olatomiwa Olabode
- **GitHub**: [github.com/OlatomiwaTech](https://github.com/OlatomiwaTech)
- **Email**: [mrcodex2012@gmail.com](mailto:mrcodex2012@gmail.com)

---

© 2026 Olatomiwa Olabode. Built with React, TypeScript, and Tailwind CSS.
