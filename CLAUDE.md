# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
Further, it is the **entrypoint** for any intelligent agent assisting with the Snake Math Vue project.

## Instruction File Index
These are all found in folder `instructions/`

* **HANDOFF.md** – Project architecture, current state, and implementation progress
* **TASKLIST.md** – High-priority next steps for the system
* **TASKLOG.md** – Completed work log with intent and outcome
* **DESIGN-PRINCIPLES.md** – Canonical guide for UI, interactivity, and component standards
* **SYSTEM-MEMORY.md** – Persistent truths and system facts
* **AGENT-CONDUCT.md** – Behavior rules, delegation hierarchy, fallback protocols
* **IDEAS.md** – Non-binding brainstorms and deferred feature ideas
* **CONTENT.md** – Overview of current content structure and roadmap for future topics/components
* **WORKFLOW.md** – Systematic workflow for instruction file management and task execution

## Agent Workflow Summary

**IMPORTANT**: Follow the systematic workflow prescribed in `WORKFLOW.md` for all work sessions.

**Quick Reference**:
1. **Start**: Read `CLAUDE.md` → `HANDOFF.md` → `TASKLIST.md`
2. **Plan**: Consult `SYSTEM-MEMORY.md` and `DESIGN-PRINCIPLES.md` for standards
3. **Execute**: Follow `AGENT-CONDUCT.md` behavioral guidelines
4. **Document**: Update `TASKLOG.md` and relevant instruction files
5. **Close**: Verify consistency and mark TodoWrite tasks as completed

**See `WORKFLOW.md` for comprehensive step-by-step workflow guidance.**

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
- **Math rendering** using MathJax 3 for comprehensive LaTeX support
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
- **Production-ready build system** with Vite PWA plugin (329KB CSS, 245KB JS - 52% JS reduction)
- **Complete responsive design** for all device sizes with 1400px max-width
- **Modular component architecture** with topic-based content switching
- **Interactive canvas visualization** system with theme-agnostic styling
- **Vertical stacked layout** for natural learning progression
- **Compact 4-column topic cards** optimized for content density
- **Math rendering ready** with MathJax 3 integration
- Includes topics: Basics, Algebra (with 4 interactive subtopics), Statistics, Trigonometry, Linear Algebra, Calculus

### Implemented Features
- ✅ **PWA Configuration**: Service worker, manifest, offline caching
- ✅ **Responsive Header Navigation**: TopicNavigation component with mobile dropdown
- ✅ **Bootstrap Integration**: Custom theme with Snake Math branding
- ✅ **FontAwesome Icons**: Topic-specific icons throughout application
- ✅ **Dark Theme System**: Bootstrap data-bs-theme with proper styling
- ✅ **Static Build Ready**: Optimized for GitHub Pages deployment
- ✅ **Mobile-First Design**: Responsive across all breakpoints
- ✅ **Interactive Canvas System**: Theme-agnostic mathematical visualization
- ✅ **Algebra Interactive Content**: Quadratics, Linear, Exponentials, Summation with standardized layouts
- ✅ **Vertical Layout System**: Natural learning progression with stacked cards
- ✅ **Optimized Layout**: Compact topic cards with 1400px max-width constraint
- ✅ **MathJax Integration**: Professional math rendering with 52% bundle size reduction
- ✅ **Design System Compliance**: All algebra components follow standard layout patterns

### Remaining Features to Implement
- **Interactive Widgets**: Reusable math visualization components for other topics
- **Content Development**: Rich interactive content for remaining 5 topic components
- **Practice Problems**: Interactive exercises with feedback and scoring
- **Advanced Math Rendering**: Complex equations and formula derivations
- **Topic Expansion**: Additional subtopics for comprehensive coverage

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
- `src/components/common/` - Shared components (TopicNavigation, ThemeSwitcher, MathJaxRenderer)
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
- **Layout**: Responsive layout with 1400px max width for widescreen users
- **Topic Cards**: Compact 4-column grid layout on desktop, responsive stacking on mobile
- **Dependencies**: Added vite-plugin-pwa, workbox-window, bootstrap, @fortawesome/fontawesome-free, vue-mathjax-next
- **Math System**: Migrated from KaTeX to MathJax 3 for better LaTeX compatibility and performance

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
- **Canvas Implementation**: Interactive mathematical visualizations with theme-agnostic styling
- **Standard Layout**: SYSTEM-MEMORY.md compliant structure (Generated equation → Graph → Controls)
- **File Organization**: Group related subtopics in topic folders for 40+ subtopics scalability
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

## Project State (2025-06-26)
- Progressive Web App (PWA) with Vue 3 + Vite + Bootstrap 5.3.7
- MathJax 3 integration (replaced KaTeX - 52% JS bundle reduction)
- Build: 329KB CSS, 245KB JS - production ready
- All 4 algebra components standardized with design system compliance

## Critical Workflow
1. ALWAYS start by reading CLAUDE.md → HANDOFF.md → TASKLIST.md
2. Follow WORKFLOW.md prescribed patterns for all work
3. MUST update TASKLOG.md after any meaningful work
4. Use TodoWrite for task tracking and mark completed immediately

## Design System (SYSTEM-MEMORY.md Standards)
- Standard Layout: Introduction Card + Interactive Explorer Card
- Explorer structure: Generated equation → Graph visualization → Controls
- MathJax 3 for all math rendering (MathJaxRenderer component)
- Theme-agnostic canvas styling (#f8f9fa background)
- 1400px max-width, Bootstrap utilities, FontAwesome icons

## Current Architecture
- Modular components: src/components/topics/[topic]/[subtopic]Content.vue
- All algebra components fully standardized (Quadratics, Linear, Exponentials, Summation)
- Next priority: Apply standard layout to remaining 5 topics
- Instruction files: 8 total in instructions/ folder, all synchronized

## Key Files to Remember
- MathJaxRenderer.vue (replaced MathRenderer.vue)
- Standard layout established in all algebra components
- WORKFLOW.md contains comprehensive workflow guidance
- All instruction files updated and synchronized 2025-06-26