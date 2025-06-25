# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Snake Math Vue" - an interactive mathematics learning platform built as a **Progressive Web App (PWA)** with Vue 3 and Vite. The project is designed as a single-page application with header-based navigation, focusing on educational math content with interactive visualizations and offline capability.

## Development Commands

```bash
# Install dependencies
npm install

# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Core Structure
- **Progressive Web App (PWA)** with offline capability and service worker
- **Single-page application** using Vue 3 Composition API
- **Header-based navigation** with responsive design (no Vue Router)
- **Bootstrap 5.3.7** with custom Snake Math theme and FontAwesome icons
- **Vite** as build tool with PWA plugin and alias support (`@` points to `src/`)
- **Math rendering** using KaTeX for mathematical expressions
- **Mobile-first responsive design** with header navigation

### Key Design Principles
1. **Modular topic organization**: Each math subject (Basics, Algebra, etc.) is a separate component
2. **Header-based navigation**: Responsive navigation in header (desktop horizontal, mobile dropdown)
3. **Subtopic switching**: Dynamic content within each topic using component switching
4. **Interactive widgets**: Reusable visualization components across topics
5. **Progressive enhancement**: Start with basic content, add interactivity incrementally
6. **Offline-first**: PWA with service worker for offline functionality

### Current State
- **Fully configured PWA** with service worker and offline capability
- **Header-based responsive navigation** (desktop horizontal, mobile dropdown)
- **Bootstrap 5.3.7 integration** with custom Snake Math theme (#10b981 green)
- **Dark theme system** using Bootstrap's data-bs-theme with proper header styling
- **FontAwesome icons** integrated throughout with topic-specific icons
- **Production-ready build system** with Vite PWA plugin (374KB CSS, 341KB JS)
- **Complete responsive design** for all device sizes
- **Modular component architecture** with topic-based content switching
- **Math rendering ready** with KaTeX integration
- Includes topics: Basics, Algebra, Statistics, Trigonometry, Linear Algebra, Calculus

### Implemented Features
- ✅ **PWA Configuration**: Service worker, manifest, offline caching
- ✅ **Responsive Header Navigation**: TopicNavigation component with mobile dropdown
- ✅ **Bootstrap Integration**: Custom theme with Snake Math branding
- ✅ **FontAwesome Icons**: Topic-specific icons throughout application
- ✅ **Dark Theme System**: Bootstrap data-bs-theme with proper styling
- ✅ **Static Build Ready**: Optimized for GitHub Pages deployment
- ✅ **Mobile-First Design**: Responsive across all breakpoints

### Remaining Features to Implement
- **Algebra Content**: Quadratic visualizer, equation solver (NEXT PRIORITY)
- **Interactive Widgets**: Reusable math visualization components
- **Math Rendering**: KaTeX integration for mathematical expressions
- **Content Development**: Rich content for all 6 topic components
- **Practice Problems**: Interactive exercises with feedback

## Implementation Notes

### When adding new features:
1. **Follow modular architecture** - Create subtopics in topic-specific folders
2. **Use established patterns** - Reference `DESIGN-PRINCIPLES.md` for component structure
3. Follow the single-page app pattern - use component switching rather than routing
4. Create topic components in `src/components/topics/[topic]/`
5. Build reusable widgets in `src/components/widgets/`
6. Use Vue 3 Composition API with `<script setup>`
7. Maintain PWA performance - optimize for offline usage
8. Test responsive design across all breakpoints

### File Organization (current)
- `src/components/common/` - Shared components (TopicNavigation, ThemeSwitcher, MathRenderer)
- `src/components/topics/` - Main topic content components (6 topics implemented)
  - `algebra/` - Modular algebra subtopics (QuadraticsContent.vue, LinearContent.vue, etc.)
  - `[other-topics]/` - Future modular subtopic implementations
- `src/components/widgets/` - Interactive learning widgets (to be implemented)
- `src/utils/` - Math helpers and utility functions (to be implemented)
- `src/assets/styles/` - Bootstrap custom theme (bootstrap-custom.scss, main.css)
- `.archive/` - Deprecated/unused files (includes old components, icons, assets)
- `instructions/` - Project documentation and task tracking
- `HANDOFF.md` - Current state summary and next steps for developers
- `DESIGN-PRINCIPLES.md` - **Comprehensive design guide and component patterns**

### PWA Features
- **Service Worker**: Automatic updates and offline caching
- **Web App Manifest**: Installable as native app
- **Responsive Design**: Works on all devices
- **Static Build**: Deployable to any static hosting (GitHub Pages ready)

### Architecture Changes Made
- **Navigation**: Moved from sidebar to responsive header navigation
- **Build System**: Added PWA plugin with workbox configuration
- **Design System**: Integrated Bootstrap 5.3.7 with custom Snake Math theme
- **Icons**: Added FontAwesome with topic-specific icons (calculator, chart-bar, etc.)
- **Theme System**: Bootstrap data-bs-theme for proper light/dark mode
- **Layout**: Full-width content layout optimized for all screen sizes
- **Dependencies**: Added vite-plugin-pwa, workbox-window, bootstrap, @fortawesome/fontawesome-free

## Development Guidelines

### Bootstrap Usage
- Use Bootstrap utility classes over custom CSS when possible
- Follow mobile-first responsive design principles
- Leverage Bootstrap's grid system and components
- Custom theme variables defined in `src/assets/styles/bootstrap-custom.scss`

### FontAwesome Icons
- Topic icons: `fas fa-book` (Basics), `fas fa-calculator` (Algebra), etc.
- UI icons: `fas fa-bars` (menu), `fas fa-times` (close), etc.
- Use consistent icon sizing and styling

### Theme System
- Bootstrap's `data-bs-theme="dark"` for dark mode
- Custom CSS variables for Snake Math branding
- Automatic system preference detection with manual override

### Content Development
- **Modular Architecture**: Each subtopic in separate .vue file (e.g., `topics/algebra/QuadraticsContent.vue`)
- **Design Standards**: **MUST follow `DESIGN-PRINCIPLES.md`** for all new components
- **File Organization**: Group related subtopics in topic folders for 40+ subtopics scalability
- Follow patterns from `instructions/old-concept-page-template.md`
- Use modular component structure for reusability
- Implement interactive widgets in `src/components/widgets/`
- Maintain accessibility standards (ARIA labels, keyboard navigation)

### Scalability for 40+ Subtopics
- **Recommended Structure**: `src/components/topics/[topic]/[subtopic]Content.vue`
- **Example**: 
  ```
  topics/
  ├── algebra/
  │   ├── QuadraticsContent.vue
  │   ├── LinearContent.vue  
  │   ├── ExponentialsContent.vue
  │   └── SummationContent.vue
  ├── calculus/
  │   ├── LimitsContent.vue
  │   ├── DerivativesContent.vue
  │   └── IntegralsContent.vue
  └── statistics/
      ├── DescriptiveStatsContent.vue
      └── ProbabilityContent.vue
  ```
- **Benefits**: Easier maintenance, faster development, better code organization
- **Import Pattern**: Import specific subtopic components in main topic component