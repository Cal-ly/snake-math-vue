# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Snake Math Vue" - an interactive mathematics learning platform built with Vue 3 and Vite. The project is designed as a single-page application with component-based navigation, focusing on educational math content with interactive visualizations.

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
- **Single-page application** using Vue 3 Composition API
- **Component-based navigation** without Vue Router
- **Vite** as build tool with alias support (`@` points to `src/`)
- **Math rendering** intended to use KaTeX for mathematical expressions
- **Responsive design** with mobile-first approach

### Key Design Principles
1. **Modular topic organization**: Each math subject (Basics, Algebra, etc.) is a separate component
2. **Subtopic switching**: Dynamic content within each topic using component switching
3. **Interactive widgets**: Reusable visualization components across topics
4. **Progressive enhancement**: Start with basic content, add interactivity incrementally

### Current State
- Basic Vue 3 project scaffolding with default components
- Standard Vite configuration with Vue plugin and devtools
- Project instructions indicate this should become a comprehensive math learning platform
- Intended to include topics: Basics, Algebra, Statistics, Trigonometry, Linear Algebra, Calculus

### Planned Features (from project instructions)
- Topic sidebar with navigation
- Math expression rendering with KaTeX
- Interactive visualizations (quadratic functions, unit circle, etc.)
- Practice problems with feedback
- Responsive mobile design
- GitHub Pages deployment ready

## Implementation Notes

### When adding new features:
1. Follow the single-page app pattern - use component switching rather than routing
2. Create topic components in `src/components/topics/`
3. Build reusable widgets in `src/components/widgets/`
4. Use Vue 3 Composition API with `<script setup>`
5. Install KaTeX when implementing math rendering: `npm install katex`

### File Organization (planned)
- `src/components/common/` - Shared components like navigation, math renderer
- `src/components/topics/` - Main topic content components
- `src/components/widgets/` - Interactive learning widgets
- `src/utils/` - Math helpers and utility functions

The project is currently in initial scaffolding state and needs implementation of the math learning platform as described in the instructions.