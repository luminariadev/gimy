<div align="center">
  <h1>💻 Gimy Store</h1>
  <p><strong>Modern PC Hardware & Gaming Component Catalog Web Application</strong></p>

  <p>
    <a href="https://github.com/luminariadev/gimy/actions/workflows/ci.yml"><img src="https://github.com/luminariadev/gimy/actions/workflows/ci.yml/badge.svg" alt="CI"/></a>
    <img src="https://img.shields.io/badge/Angular-20.x-DD0031?style=flat-square&logo=angular" alt="Angular 20"/>
    <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript" alt="TypeScript"/>
    <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker" alt="Docker"/>
    <img src="https://img.shields.io/badge/License-MIT-blue?style=flat-square" alt="License"/>
  </p>
</div>

---

## 📌 Overview

**Gimy Store** is a responsive web application built with **Angular 20** for browsing, filtering, and managing computer hardware components and custom gaming PC parts. Designed with modern Angular standalone components and reactive architecture, Gimy Store enables seamless hardware catalog exploration, category-based filtering, detailed specification inspection, and inventory item management.

---

## ✨ Features

- 🖥️ **Hardware Catalog**: Comprehensive catalog for Processors (CPU), Graphics Cards (GPU), Motherboards, RAM, Storage (NVMe/SSD), Power Supplies, Cooling, and Accessories.
- 🎯 **Category & Spec Filtering**: Fast filtering by component categories, manufacturers/brands, price ranges, and technical specifications.
- 📋 **Inventory & Product Management**: Reactive forms to add, update, and manage hardware products with image URLs and hardware specs.
- ⚡ **Standalone Component Architecture**: Fully leverages Angular 20 Standalone Components and Angular Routing without legacy `NgModule` boilerplate.
- 🐳 **Dockerized Deployment**: Multi-stage Docker build served via lightweight Nginx Alpine container.
- 🔄 **Automated CI**: GitHub Actions workflow verifying TypeScript compilation and production builds on push/PR.

---

## 🛠️ Tech Stack

- **Framework**: Angular 20 (Standalone Components)
- **Language**: TypeScript 5.9
- **State & Reactivity**: RxJS 7.8
- **Tooling**: Angular CLI & `@angular/build` (Vite/esbuild-powered application builder)
- **Containerization**: Docker & Nginx Alpine

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20.x or newer)
- [npm](https://www.npmjs.com/) (v10.x or newer)
- [Docker](https://www.docker.com/) (optional, for containerized run)

---

### Option 1: Running with Docker (Recommended)

Run the containerized application with a single command:

```bash
docker compose up -d
```

The application will be accessible at:
👉 **http://localhost:4200**

---

### Option 2: Local Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/luminariadev/gimy.git
   cd gimy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   npx ng serve
   ```

4. **Open in browser:**
   Navigate to `http://localhost:4200/`.

---

## 📁 Project Structure

```plaintext
gimy/
├── .github/workflows/
│   └── ci.yml                 # GitHub Actions CI workflow
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/        # Navigation header & brand search
│   │   │   ├── product-form/  # Component creation & edit modal
│   │   │   └── product-list/  # Product grid & category filtering
│   │   ├── models/            # TypeScript interfaces & enums
│   │   ├── services/          # Reactive product state service
│   │   ├── app.component.ts   # Root standalone component
│   │   ├── app.html           # Main view template
│   │   └── app.routes.ts      # Client-side routing configuration
│   ├── index.html             # Main HTML entry
│   ├── main.ts                # Application bootstrap
│   └── styles.css             # Global stylesheet
├── angular.json               # Angular workspace configuration
├── docker-compose.yml         # Container orchestration
├── Dockerfile                 # Multi-stage production build
├── nginx.conf                 # Nginx SPA fallback configuration
└── tsconfig.json              # TypeScript configuration
```

---

## 🧪 Build & Verification

```bash
# Type check with TypeScript compiler
npx tsc --noEmit

# Production build
npm run build
```

The compiled assets will be generated in `dist/gimy-store/browser`.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
