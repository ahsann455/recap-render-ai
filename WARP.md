# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Commands
- **Install dependencies**: `npm i`
- **Start dev server**: `npm run dev` (runs on port 8080)
- **Build for production**: `npm run build`
- **Build for development**: `npm run build:dev`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`

## Project Architecture

### Tech Stack
- **Build Tool**: Vite with React SWC plugin
- **Framework**: React 18 with TypeScript
- **UI Library**: shadcn-ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner toasts

### Project Structure
```
src/
├── components/          # React components
│   ├── ui/             # shadcn-ui components (Radix UI wrappers)
│   ├── Hero.tsx        # Landing page hero section
│   ├── Features.tsx    # Features showcase section
│   ├── HowItWorks.tsx  # Process explanation section
│   └── UploadSection.tsx # File upload and lecture generation UI
├── pages/              # Route pages
│   ├── Index.tsx       # Main landing page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
│   └── utils.ts        # cn() helper for className merging
├── assets/             # Static assets (images, etc.)
├── App.tsx             # Root component with providers
└── main.tsx            # Entry point
```

### Key Architectural Patterns

#### Path Aliases
- `@/*` maps to `./src/*` - use absolute imports from src: `import { Button } from "@/components/ui/button"`

#### Component Organization
- **UI Components** (`components/ui/`): Pre-built shadcn-ui components. DO NOT modify these directly - they follow shadcn conventions
- **Feature Components** (`components/`): Application-specific components like Hero, Features, UploadSection
- **Pages** (`pages/`): Top-level route components that compose feature components

#### Design System
The application uses a comprehensive HSL-based color system defined in `src/index.css`:

**Color Tokens:**
- `--primary`: Main brand color (dark blue - HSL 215 85% 25%)
- `--primary-glow`: Lighter variant for gradients
- `--accent-summary`, `--accent-detailed`, `--accent-test`: Mode-specific accent colors
- Custom CSS variables for shadows: `--shadow-glow`, `--shadow-card`, `--shadow-elevated`
- Custom gradients: `--gradient-primary`, `--gradient-hero`, `--gradient-card`
- Dark mode fully supported via `.dark` class

**Design Principles:**
- All colors MUST be defined in HSL format
- Use gradient utilities: `bg-gradient-to-r from-primary to-primary-glow`
- Apply shadow classes via Tailwind: hover effects use `hover:shadow-elevated`
- Animations use cubic-bezier transitions defined in CSS variables

#### State Management Pattern
- **QueryClient**: Configured in App.tsx for data fetching/caching
- **Local State**: Component state with useState for UI interactions
- **Form State**: React Hook Form with Zod for validation

#### TypeScript Configuration
- Path mapping enabled for `@/*` imports
- Relaxed strictness: `noImplicitAny: false`, `strictNullChecks: false`
- Skip lib checking for faster builds

### Application Flow

**User Journey:**
1. User lands on Index page → sees Hero, HowItWorks, Features sections
2. Clicks "Get Started" → scrolls to UploadSection
3. Selects learning mode (summary/detailed/test) and style (professor/visual)
4. Uploads file (PDF/DOC/DOCX/TXT)
5. Generates AI lecture video (placeholder functionality in MVP)

**Component Data Flow:**
- Hero → receives `onGetStarted` callback prop for smooth scrolling
- UploadSection → manages file upload state, mode/style selection
- Uses Sonner toast for user feedback

### Lovable Integration
This project is managed via Lovable.dev platform:
- Changes pushed to Git are synced to Lovable
- Can be edited via Lovable UI or local IDE
- Uses `lovable-tagger` plugin for development mode component tagging

## Development Guidelines

### Adding New Routes
1. Create page component in `src/pages/`
2. Add route in `App.tsx` ABOVE the catch-all `*` route
3. Follow pattern: `<Route path="/your-path" element={<YourPage />} />`

### Styling Conventions
- Use Tailwind utility classes
- Leverage `cn()` from `@/lib/utils` for conditional classes
- Reference design system CSS variables from `index.css`
- Gradients: `bg-gradient-to-r from-[color] to-[color]`
- Shadows: Use custom shadow classes or `shadow-elevated`, `shadow-glow`

### Adding shadcn-ui Components
- Components are pre-installed in `src/components/ui/`
- Import with: `import { ComponentName } from "@/components/ui/component-name"`
- DO NOT modify ui/ components directly - they follow shadcn conventions

### Form Handling
- Use React Hook Form with Zod for validation
- Import resolver: `import { zodResolver } from "@hookform/resolvers/zod"`
- Define Zod schemas for type-safe validation

### ESLint Configuration
- TypeScript ESLint with recommended rules
- React Hooks rules enforced
- Unused variables checking disabled (`@typescript-eslint/no-unused-vars: off`)
