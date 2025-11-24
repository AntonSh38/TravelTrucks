🚐 Campers Rental — Premium Next.js Application

A production-grade camper rental platform built with Next.js 14 (App Router),
TypeScript, and a fully responsive UI crafted precisely according to the Figma
design. The application features server-side filtering, dynamic routing,
URL-driven state, real-time search, Formik bookings, and a complete
design-system-consistent component architecture.

<div align="center">
🔥 Live Features Overview
Feature	Status
🚀 Server-side filters with URL sync	✅
🎛 Debounced real-time search	✅
🛠 Full TypeScript safety	✅
🗂 Campers catalog with pagination	✅
🖼 Gallery, features, reviews	✅
📅 Custom datepicker (Figma-accurate)	✅
📝 Formik + Yup booking form	✅
🖍 Fully styled using CSS Modules	✅
🧩 SVG sprite icon system	✅
</div>
📑 Table of Contents

✨ Features

🧰 Tech Stack

📁 Project Structure

🔗 API Layer

🚀 Getting Started

🌐 Deployment

🧠 Architecture Decisions

🧹 Code Quality

📌 Roadmap

📄 License

✨ Features 🔎 Smart Camper Catalog

Server-side filters (location, equipment, vehicle type, etc.)

Auto-applied filtering with debounce (300–500ms)

Pagination with URL state:

/catalog?page=2&limit=4&form=panelTruck&AC=true

All filter values saved in the URL (shareable links)

🚐 Dynamic Camper Detail Page

High-quality responsive gallery

Rating and review system

Feature visibility based on backend fields

Vehicle specifications block

Beautiful tab UI (Features / Reviews)

📝 Advanced Booking Form

Built using Formik + Yup

Custom datepicker matching Figma pixel-perfect

Disabled past dates

Success toast on form submit

Full validation and ergonomic UX

🧩 SVG Icon System

All feature icons loaded from a single /symbol-defs.svg sprite

Lightweight SvgIcon component ensures:

color inheritance

size scaling

zero network overhead

🧰 Tech Stack Frontend

Next.js 14 App Router

TypeScript

React

Axios

Formik + Yup

React Image Gallery

CSS Modules

SVG Sprite Icons

Tooling

ESLint (strict)

Prettier

Husky & lint-staged ready (optional)

📁 Project Structure src/ ├── app/ │ ├── catalog/ │ │ ├── page.tsx │ │ └── [id]/
│ │ └── page.tsx │ ├── layout.tsx │ └── globals.css │ ├── components/ │ ├──
FiltersPanel/ │ ├── BookingForm/ │ ├── FeaturesSection/ │ ├── ReviewsSection/ │
├── Gallery/ │ ├── Tabs/ │ ├── SvgIcon/ │ └── RatingStars/ │ ├── lib/ │ ├──
api.ts │ ├── types.ts │ └── utils/ │ └── public/ └── symbol-defs.svg

🔗 API Layer 🟦 GET /campers

Supports filtering via query parameters:

/campers? page=1 &limit=4 &location=Kyiv &form=panelTruck &AC=true &kitchen=true

🟦 GET /campers/:id

Returns:

general camper info

dimensions

gallery

features

reviews

🚀 Getting Started 1️⃣ Install dependencies npm install

2️⃣ Start in development mode npm run dev

3️⃣ Build for production npm run build npm start

🌐 Deployment (Vercel Recommended)

Push project to GitHub

Open Vercel → New Project

Import repository

Deploy

Enjoy automatic previews & caching

The project is 100% compatible with edge/runtime deployment.

🧠 Architecture Decisions SSR + URL State

Filters are synchronized with the URL so:

pages are shareable

SSR pages receive stable input

hydration mismatches are prevented

Strict TypeScript

Everything is typed:

API responses

Filters

Camper model

Formik form values

URL query parser

Component Isolation

Each UI block lives in its own folder with:

index.ts

component.tsx

component.module.css

Back-end Driven Features

FeaturesSection shows only data that the backend provides.

🧹 Code Quality

Strict ESLint rules (no any)

Prettier formatting

Meaningful folder structure

Zero hydration mismatches

Debounce to prevent unnecessary API calls

Avoids prop drilling using colocated logic

📌 Roadmap

✔ Mobile-first full redesign ✔ URL-based filter persistence ✔ Formik booking
form ➖ Add authentication ➖ Add favorites list ➖ Infinite scroll instead of
pagination ➖ Add real backend instead of MockAPI

📄 License

This project is open-source and free to use for personal or commercial purposes.
Created with ❤️ by a Frontend Developer.
