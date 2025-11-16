# Portfolio Website

## Overview

A modern 3D portfolio website showcasing professional experience, projects, and skills in software development, AI/ML, and cybersecurity. Built with React, TypeScript, and Express, featuring immersive animations, smooth scrolling sections, and a cyberpunk-inspired neon design aesthetic. The site emphasizes visual depth through particle effects, glass morphism, and interactive hover states.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack**: React 18 with TypeScript, leveraging Vite as the build tool and development server for fast hot module replacement and optimized production builds.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. Single-page application with route definitions in `App.tsx`.

**UI Component Library**: Shadcn UI (New York variant) built on Radix UI primitives, providing accessible, unstyled components with custom styling through Tailwind CSS. All UI components follow a consistent design system with pre-configured path aliases.

**Styling System**: 
- Tailwind CSS for utility-first styling with custom theme extensions
- CSS custom properties for dynamic theming (dark mode focused)
- Framer Motion for declarative animations and scroll-based interactions
- Custom neon color palette (purple, cyan, pink) with glow effects

**State Management**: TanStack Query (React Query) v5 for server state management with configured query client for API data fetching and caching.

**Key Design Patterns**:
- Component composition with separate example components for development/testing
- Custom hooks for reusable logic (mobile detection, toast notifications)
- Intersection Observer pattern via Framer Motion's `useInView` for scroll animations
- Particle system using Canvas API for background effects

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript, configured for ESM modules.

**Development vs Production**: 
- Development: Vite middleware integration for hot reloading
- Production: Static file serving from pre-built dist directory

**Request/Response Flow**:
- JSON body parsing with raw body preservation for webhook verification
- Request logging middleware capturing method, path, status, duration, and response JSON
- Automatic route registration pattern through `registerRoutes` function

**Storage Layer**: Modular storage interface (`IStorage`) with in-memory implementation (`MemStorage`) for development. Designed for easy swapping to database-backed storage.

### Data Storage Solutions

**Database ORM**: Drizzle ORM configured for PostgreSQL with schema-first approach using `drizzle-zod` for runtime validation.

**Database Provider**: Neon Database serverless PostgreSQL (via `@neondatabase/serverless` driver).

**Schema Design**: 
- User table with UUID primary keys using PostgreSQL's `gen_random_uuid()`
- Zod schemas auto-generated from Drizzle tables for type-safe validation
- Migration strategy using Drizzle Kit with migrations stored in `/migrations`

**Connection Strategy**: Environment variable-based connection string (`DATABASE_URL`) with validation at config load time.

**Storage Abstraction**: Interface-based storage layer allows switching between in-memory (development) and database-backed (production) implementations without code changes.

### Authentication and Authorization

**Current State**: Basic user schema with username/password fields defined, but no active authentication implementation in routes.

**Session Management**: `connect-pg-simple` dependency suggests intent for PostgreSQL-backed session storage.

**Future Implementation**: Framework ready for session-based authentication with PostgreSQL session store.

### External Dependencies

**UI Framework**: 
- Radix UI v1.x - Accessible component primitives (accordions, dialogs, dropdowns, etc.)
- Framer Motion - Animation library for micro-interactions and scroll effects
- React Icons - Icon library (specifically SiPython, SiJavascript, etc. for tech stack display)

**Development Tools**:
- Vite - Build tool and dev server
- TypeScript - Type safety across client and server
- ESBuild - Server-side bundling for production
- Replit-specific plugins (cartographer, dev banner, error overlay) for Repl environment

**Utilities**:
- clsx + tailwind-merge (via `cn` utility) - Class name management
- date-fns - Date formatting and manipulation
- nanoid - ID generation
- class-variance-authority - Component variant management

**Design Assets**: Generated images stored in `attached_assets/generated_images/` for avatars and project screenshots.

**Google Fonts**: 
- Inter / Outfit - Primary UI font
- Space Grotesk - Headings font
- Architects Daughter, DM Sans, Fira Code, Geist Mono - Supplementary fonts

**Database**: 
- Neon PostgreSQL - Serverless PostgreSQL database
- Drizzle ORM - Type-safe database queries and migrations

**Build & Deployment**:
- Node.js runtime with ESM module support
- Scripts: `dev` (development with tsx), `build` (Vite + ESBuild), `start` (production)
- Database migrations via `db:push` command