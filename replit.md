# Portfolio Website

## Overview

This is a modern 3D portfolio website built to showcase professional experience, projects, and skills in software development, AI/ML, and cybersecurity. The application features immersive 3D interactions, smooth physics-based animations, and a responsive design optimized for cross-device experiences. The portfolio draws inspiration from award-winning 3D experiences while maintaining unique creative elements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework Stack**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing
- Framer Motion for advanced animations and 3D interactions
- TanStack Query (React Query) for server state management

**UI Component System**
- shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design tokens
- Custom CSS variables for theming (dark mode optimized with neon color palette)
- Typography system using Inter/Outfit for body text and Space Grotesk for headings

**Design Approach**
- Mobile-first responsive design with breakpoints at 768px (md) and 1024px (lg)
- Custom spacing system based on Tailwind's 4px increment scale
- Gradient-based visual effects with neon purple, cyan, and pink accent colors
- Interactive particle background for enhanced visual depth
- Scroll-triggered animations using Framer Motion's useInView hook

**Component Structure**
- Page-level components: Home (main landing page), NotFound
- Section components: Hero, About, Experience, Projects, Contact, Footer, Navigation
- Reusable UI components from shadcn/ui library
- Custom ParticleBackground component with canvas-based animations

### Backend Architecture

**Server Framework**
- Express.js running on Node.js for HTTP server
- TypeScript for type safety across the entire stack
- ESM (ES Modules) for modern JavaScript module system

**Development Setup**
- Development mode uses Vite middleware for SSR-style development experience
- Production build separates client (Vite) and server (esbuild) bundles
- Custom logging middleware for API request tracking
- JSON body parsing with raw body preservation for webhook support

**API Design**
- RESTful API structure with `/api` prefix for all backend routes
- Modular route registration through `registerRoutes` function
- Storage abstraction layer for data persistence flexibility

### Data Storage Solutions

**Database Setup**
- Drizzle ORM for type-safe database operations
- PostgreSQL as the primary database (via Neon serverless driver)
- Schema defined in shared TypeScript files for full-stack type safety
- Migration system using drizzle-kit

**Storage Interface**
- Abstract IStorage interface defining CRUD operations
- In-memory storage implementation (MemStorage) for development/testing
- Database-backed storage can be implemented by extending IStorage
- Current schema includes user management with username/password fields

**Data Models**
- User model with id (UUID), username, and password fields
- Zod schemas for runtime validation using drizzle-zod
- Type inference from Drizzle schema for compile-time safety

### Authentication and Authorization

**Current Implementation**
- Basic user storage structure in place
- No authentication middleware currently implemented
- Session storage configured via connect-pg-simple (PostgreSQL session store)
- Ready for implementation of session-based or token-based auth

### Path Aliases and Module Resolution

**TypeScript Path Mapping**
- `@/*` maps to `client/src/*` for frontend code
- `@shared/*` maps to `shared/*` for code shared between client and server
- `@assets/*` maps to `attached_assets/*` for static assets

**Vite Alias Configuration**
- Matches TypeScript paths for seamless module resolution
- Enables clean imports without relative path navigation

## External Dependencies

### UI and Component Libraries
- **Radix UI**: Comprehensive collection of accessible component primitives (@radix-ui/react-*)
- **shadcn/ui**: Pre-built, customizable component system built on Radix
- **Framer Motion**: Animation library for smooth, physics-based animations
- **Lucide React**: Icon library for consistent iconography
- **React Icons**: Additional icon sets (specifically Simple Icons for tech stack logos)
- **Embla Carousel**: Carousel/slider component for project showcases

### Form Handling and Validation
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### Styling Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **clsx & tailwind-merge**: Utility for conditional className merging

### Database and ORM
- **Drizzle ORM**: Type-safe SQL query builder
- **@neondatabase/serverless**: Serverless PostgreSQL driver for Neon
- **drizzle-zod**: Zod schema generation from Drizzle schemas
- **connect-pg-simple**: PostgreSQL session store for Express

### Development Tools
- **tsx**: TypeScript execution for development server
- **esbuild**: Fast JavaScript bundler for production builds
- **Vite**: Next-generation frontend build tool
- **@replit plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment

### Additional Utilities
- **cmdk**: Command menu component
- **date-fns**: Date manipulation library
- **nanoid**: Unique ID generation
- **wouter**: Minimal routing library (~1KB alternative to React Router)

### Fonts
- **Google Fonts**: Inter, Outfit, Space Grotesk, DM Sans, Fira Code, Geist Mono, Architects Daughter