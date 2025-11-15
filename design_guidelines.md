# 3D Portfolio Website Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from award-winning 3D portfolio experiences (Bruno Simon, Awwwards winners) while maintaining unique creative elements. This portfolio prioritizes visual impact and memorable interactions to differentiate in competitive creative markets.

**Core Principles**:
- Immersive 3D interactions that showcase technical prowess
- Smooth, physics-based animations that feel natural
- Depth and dimensionality throughout the interface
- Performance-optimized for cross-device experiences

---

## Typography System

**Font Stack**: 
- Primary: 'Inter' or 'Outfit' (Google Fonts) - clean, modern sans-serif for UI
- Accent: 'Space Grotesk' (Google Fonts) - geometric headlines with personality

**Hierarchy**:
- Hero Headline: 4xl to 6xl (clamp(2.5rem, 5vw, 4rem)) - bold (700)
- Section Headlines: 3xl to 4xl - semibold (600)
- Subheadings: xl to 2xl - medium (500)
- Body Text: base to lg - regular (400)
- Captions/Labels: sm to base - regular (400)

**Line Heights**: Generous spacing (1.6 for body, 1.2 for headlines)

---

## Layout & Spacing System

**Tailwind Units**: Consistently use 4, 8, 12, 16, 20, 24, 32 units
- Component padding: p-8 to p-12 (mobile), p-16 to p-24 (desktop)
- Section spacing: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Element gaps: gap-4, gap-8, gap-12

**Container Strategy**:
- Full-width sections with max-w-7xl inner containers
- Content max-width: max-w-6xl
- Text content: max-w-4xl for readability

**Grid Systems**:
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Skills/Tech: grid-cols-3 md:grid-cols-6 lg:grid-cols-8
- Timeline: Single column with offset cards

---

## Component Library

### Hero Section (100vh)
- Full-viewport 3D canvas background with interactive particle system or geometric shapes
- Centered content overlay with gradient text headline
- Floating tech stack icons with 3D depth (translateZ effects)
- Smooth scroll indicator with animated arrow
- Two-CTA layout: primary "Let's Talk" + secondary "View Resume"

### Navigation
- Fixed header with glassmorphism effect (backdrop-blur)
- Smooth scroll-to-section navigation
- Mobile: Hamburger menu with slide-in drawer
- Subtle hover states with underline animations

### About Section
- Two-column layout (desktop): Text left, 3D visual element right
- Floating 3D skill badges with stagger animations on scroll
- Professional headshot with subtle 3D tilt effect on hover

### Experience Timeline
- Vertical timeline with alternating card positions (zigzag on desktop)
- Company logo circles with elevated shadow effects
- Cards with glassmorphism backdrop and border glow
- Smooth reveal animations as user scrolls (stagger effect)
- Role, duration, and bullet points clearly structured

### Projects Showcase
- Card grid with 3D perspective tilt on hover (transform: rotateX/Y)
- Project thumbnail images with overlay gradient on hover
- Category tags with pill badges
- Expand modal for detailed project views with image galleries
- "View More" CTA linking to external demos

### Testimonials Section
- Carousel with 3D card stack effect (cards behind appear smaller/faded)
- Circular avatar images with border glow
- Quote text with large quotation marks
- Navigation dots below with smooth transitions
- Auto-play with pause on hover

### Project Gallery Carousel
- Infinite horizontal scroll with momentum physics
- Duplicate images for seamless loop
- 3D perspective depth (images further back appear smaller)
- Smooth auto-scroll with pause on hover

### Contact/CTA Section
- Full-width section with gradient background
- Large headline with animated CTA button
- Social media icon links with hover lift effects
- Email and calendar links clearly presented

### Footer
- Simple two-row layout: Links top, copyright bottom
- Social icons with subtle hover animations
- "Back to top" smooth scroll button

---

## Animation Guidelines

**Scroll-Triggered Animations**:
- Fade-in + slide-up for all sections (translate-y-8 to translate-y-0)
- Stagger delays for card grids (100-200ms increments)
- Progress-based animations for timeline elements

**3D Interactions**:
- Mouse parallax on hero (subtle movement tracking)
- Card tilt effects on hover (max 10-15 degrees)
- Floating animations for tech icons (subtle vertical oscillation)

**Transitions**:
- Duration: 300-500ms for UI elements, 1000ms for sections
- Easing: cubic-bezier(0.4, 0.0, 0.2, 1) for smooth natural motion

**Performance**: Use CSS transforms and opacity only, leverage `will-change` sparingly

---

## Icons & Assets

**Icon Library**: Heroicons (CDN) for UI icons
**Tech Stack Icons**: Devicons (https://cdn.jsdelivr.net/gh/devicons/devicon/) for technology logos
**3D Elements**: Three.js via CDN for canvas-based 3D graphics

---

## Images

**Hero Section**: No static image - 3D canvas background with particles/geometry

**Project Cards**: Include project thumbnail images (16:9 aspect ratio)
- Placeholder: Modern UI screenshots or abstract project visuals
- Implement lazy loading for performance

**Testimonial Avatars**: Circular professional headshots (150x150px minimum)

**Company Logos**: Clean PNG/SVG logos in experience timeline (contained within 80x80px circles)

**About Section**: Optional floating abstract 3D visualization or professional headshot with 3D effect

---

## Responsive Strategy

**Breakpoints**:
- Mobile: < 768px (single column, simplified 3D)
- Tablet: 768px - 1024px (two columns for grids)
- Desktop: > 1024px (full multi-column, enhanced 3D)

**3D Adaptations**:
- Mobile: Reduce particle count, simplify geometry for performance
- Touch devices: Replace hover tilts with tap-triggered animations
- Disable complex 3D on low-performance devices (progressive enhancement)

**Touch Interactions**:
- Swipe gestures for carousels
- Tap for card interactions instead of hover
- Larger touch targets (min 44x44px)

---

This design creates a visually stunning, modern portfolio that demonstrates technical expertise through immersive 3D elements while maintaining usability and performance across all devices.