# Devi Shilpalaya Website

## Overview

A marketing website for Devi Shilpalaya, a traditional sculpture workshop in Siliguri, West Bengal, India, established in 1970. The site showcases their handcrafted religious sculptures (fibre statues, marble sculptures, clay idols) and serves as a lead generation tool for custom commissions.

This is a static React single-page application with no backend or database. It's a brochure-style website focused on visual presentation and contact conversion.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18** with **TypeScript** - Modern component-based architecture
- **Vite** - Fast development server and build tool with SWC for compilation
- **React Router** - Client-side routing for multi-page navigation

### Styling System
- **Tailwind CSS** - Utility-first CSS framework with custom earth-toned color palette
- **shadcn/ui** - Pre-built accessible component library built on Radix UI primitives
- **Custom CSS Variables** - HSL-based theming system in `src/index.css`
- **Custom Fonts** - Cormorant Garamond (headings) and DM Sans (body text)

### Design Patterns
- **Component Composition** - Layout wraps all pages with shared Header and Footer
- **Path Aliases** - `@/` maps to `src/` for clean imports
- **Feature-based Organization** - Home page components in `src/components/home/`, layout in `src/components/layout/`

### Key Routes
- `/` - Home page with hero, intro, gallery preview, services preview, CTA
- `/gallery` - Full gallery with category filtering and lightbox
- `/services` - Detailed service offerings
- `/contact` - Contact form and business information

### Build Configuration
- Development server runs on port 5000
- Production build uses `vite build`
- Preview mode available via `npm start`

## External Dependencies

### UI Component Libraries
- **Radix UI** - Comprehensive accessible primitive components (dialogs, menus, tooltips, etc.)
- **Lucide React** - Icon library
- **Embla Carousel** - Carousel/slider functionality
- **class-variance-authority** - Component variant management

### State & Data
- **TanStack React Query** - Data fetching and caching (configured but minimal usage currently)
- **React Hook Form** with **Zod** - Form handling and validation

### Notifications
- **Sonner** - Toast notifications
- **Radix Toast** - Alternative toast system

### Theming
- **next-themes** - Theme switching support (configured for potential dark mode)

### Image Assets
- Local image files in `src/assets/` directory (real-gallery-*.jpg, gallery-*.jpg)
- Referenced directly in components via Vite imports

### SEO & Metadata
- Structured data (JSON-LD) for local business schema in `index.html`
- Open Graph and Twitter meta tags for social sharing
- robots.txt configured for search engine crawling