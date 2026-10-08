# FutureEngineers.pk - Engineering Careers, Scholarships & Certifications

A modern, responsive, and full-featured React website for **FutureEngineers.pk** — Pakistan's premier directory connecting engineering students and graduates with jobs, internships, scholarships, courses, and CV resources.

---

## 📂 Project Architecture

```
Future eng/
├── frontend/                     # React + Vite Client Application
│   ├── public/                   # Static assets, images, icons
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── context/              # Context providers (Saved, Theme, Toast)
│   │   ├── data/                 # Opportunities dataset
│   │   ├── pages/                # React Router pages
│   │   ├── App.jsx               # Application routes
│   │   ├── index.css             # Main stylesheet
│   │   └── main.jsx              # React entry point
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json               # SPA routing configuration for Vercel
│
├── backend/                      # Reserved for future API & backend services
│   └── README.md
│
├── vercel.json                   # Root deployment configuration for Vercel
├── package.json                  # Root runner scripts
└── README.md
```

---

## 🛠️ Getting Started

### 1. Run Development Server
```bash
# From root directory:
npm run dev

# Or directly inside frontend:
cd frontend
npm install
npm run dev
```
Development server runs at `http://localhost:3000`.

### 2. Build for Production
```bash
# From root:
npm run build

# Or directly inside frontend:
cd frontend
npm run build
```

---

## 🚀 Vercel Deployment

This project is fully pre-configured for Vercel deployment:
- **Root Directory**: Select `frontend` (or leave as root, root `vercel.json` will route to `frontend`)
- **Framework Preset**: Vite
- **SPA Rewrites**: Configured in `vercel.json` to prevent 404s on page refresh for all routes (`/about`, `/scholarships`, `/jobs-internships`, etc.)
