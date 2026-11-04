# Nilesh Srivastava — DevOps Engineer Portfolio (React.js)

A personal portfolio web application built with **React 18 + Vite**, custom modern CSS, and full responsiveness.

Designed specifically for **Nilesh Srivastava** (DevOps Engineer specializing in Kubernetes, Docker, Microservices APM, Linux, and OpenTelemetry Observability).

---

## 🌟 React Architecture & Features

- **Component-Driven Structure**:
  - `src/components/Navbar.jsx`: Theme toggle, desktop & mobile drawer, active section scroll-spy, direct resume download.
  - `src/components/Hero.jsx`: Profile portrait with glowing ambient ring, React typewriter hook, CTAs, and social links.
  - `src/components/About.jsx`: Professional summary, details matrix, stat counter cards, and resume triggers.
  - `src/components/Skills.jsx`: Interactive React category filter (`activeTab`), animated progress bars, and soft skills cloud.
  - `src/components/Experience.jsx`: Vertical timeline with glowing nodes, detailed responsibilities, and tech stack tags.
  - `src/components/Projects.jsx`: Microservices APM, Kubernetes deployment, and React portfolio showcase cards.
  - `src/components/Education.jsx`: B.Tech Computer Science and schooling cards.
  - `src/components/Contact.jsx`: Interactive form with `useState` validation, button loading spinner, and success toast.
  - `src/components/ResumeModal.jsx`: ATS-friendly digital resume modal popup with `window.print()` and PDF download.
  - `src/components/Footer.jsx`: Brand, quick links, and dynamic copyright year.
- **Single Source of Truth**:
  - All data (bio, roles, experience, projects, education, contacts) is centralized in `src/data/portfolioData.js`. Easily edit your details in one file!
- **State Management**:
  - Dark / Light mode toggle with `localStorage` persistence.
  - Modal open/close state with background scroll lock and Escape key listener.
  - Smooth scroll-spy and floating back-to-top button.

---

## 📁 File Structure

```text
Portfolio/
├── index.html              # Vite HTML root
├── vite.config.js          # Vite configuration
├── package.json            # React 18, Vite dependencies & scripts
├── run-dev.sh              # 1-click script to start Vite dev server
├── run-build.sh            # 1-click script to build for production
├── public/                 # Static assets
│   ├── favicon.svg         # Monogram icon
│   └── assets/
│       ├── profile.jpg     # Nilesh Srivastava's real portrait
│       └── Nilesh_Srivastava_Resume.pdf  # Official resume PDF
├── src/
│   ├── main.jsx            # React root entry
│   ├── App.jsx             # Main layout, theme state & modal state
│   ├── index.css           # Modern theme styling, glassmorphism & responsive rules
│   ├── data/
│   │   └── portfolioData.js  # Centralized portfolio data
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Experience.jsx
│       ├── Projects.jsx
│       ├── Education.jsx
│       ├── Contact.jsx
│       ├── Footer.jsx
│       └── ResumeModal.jsx
└── dist/                   # Production-ready build
```

---

## 🚀 How to Run

### 1. Start Development Server (Hot Reload)
Run the convenience script:
```bash
./run-dev.sh
```
Or with npm directly:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser. Any changes you make to components will instantly update with Vite HMR!

### 2. Build for Production
```bash
./run-build.sh
```
Or:
```bash
npm run build
```
The optimized production bundle is generated in `dist/`.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 🌐 Free 1-Click Deployment

- **Vercel**: Run `npx vercel` or connect your GitHub repository to Vercel (zero config needed, Vite is automatically detected).
- **Netlify**: Connect your repository or drag-and-drop the `dist/` folder into [Netlify Drop](https://app.netlify.com/drop).
- **GitHub Pages**: Build with `npm run build` and deploy the `dist/` directory.
