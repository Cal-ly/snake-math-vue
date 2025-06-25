# Snake Math Vue 3 Project Blueprint

## Project Architecture Overview

This blueprint defines the complete file structure, component organization, and implementation guidelines for the Snake Math Vue 3 interactive mathematics learning platform. **Updated to reflect Progressive Web App (PWA) architecture with header-based navigation.**

### Core Design Principles
1. **Progressive Web App**: Offline-first architecture with service worker caching
2. **Simplicity**: Minimal dependencies, native Vue/Vite tools with PWA plugin
3. **Modularity**: Reusable components across mathematical domains
4. **Header Navigation**: Responsive navigation integrated into header (mobile dropdown)
5. **Maintainability**: Clear structure with consistent patterns
6. **Performance**: Optimized builds with efficient component loading
7. **Accessibility**: WCAG 2.1 AA compliance throughout

## Complete File Structure

```
snake-math-vue/
├── public/
│   ├── index.html                  # Main HTML template
│   ├── favicon.ico                 # Site favicon
│   └── robots.txt                  # SEO configuration
│
├── src/
│   ├── main.js                     # Vue application entry point
│   ├── App.vue                     # Root application component
│   │
│   ├── components/
│   │   ├── common/                 # Shared utility components
│   │   │   ├── TopicNavigation.vue # Header navigation (responsive)
│   │   │   ├── ThemeSwitcher.vue   # Light/dark theme toggle
│   │   │   ├── MathRenderer.vue    # KaTeX mathematical notation
│   │   │   ├── CodeFold.vue        # Collapsible code blocks
│   │   │   ├── ErrorBoundary.vue   # Error handling wrapper
│   │   │   ├── LoadingSpinner.vue  # Loading state indicator
│   │   │   └── ExportDialog.vue    # Data export functionality
│   │   │
│   │   ├── topics/                 # Main topic content components
│   │   │   ├── BasicsContent.vue   # Mathematical foundations
│   │   │   ├── AlgebraContent.vue  # Algebraic concepts
│   │   │   ├── StatisticsContent.vue # Statistical analysis
│   │   │   ├── TrigonometryContent.vue # Trigonometric functions
│   │   │   ├── LinearAlgebraContent.vue # Vectors and matrices
│   │   │   └── CalculusContent.vue # Limits and derivatives
│   │   │
│   │   └── widgets/                # Interactive mathematical components
│   │       ├── algebra/
│   │       │   ├── QuadraticVisualizer.vue    # Parabola exploration
│   │       │   ├── LinearSystemSolver.vue     # System of equations
│   │       │   ├── ExponentialCalculator.vue  # Exponential functions
│   │       │   └── SummationDemo.vue          # Sigma notation
│   │       │
│   │       ├── statistics/
│   │       │   ├── StatisticsCalculator.vue   # Descriptive statistics
│   │       │   ├── ProbabilitySimulator.vue   # Probability distributions
│   │       │   ├── HistogramGenerator.vue     # Data visualization
│   │       │   └── CorrelationExplorer.vue    # Relationship analysis
│   │       │
│   │       ├── trigonometry/
│   │       │   ├── UnitCircleExplorer.vue     # Trigonometric functions
│   │       │   ├── WaveformGenerator.vue      # Sine/cosine waves
│   │       │   └── TriangleCalculator.vue     # Triangle properties
│   │       │
│   │       ├── linear-algebra/
│   │       │   ├── VectorOperations.vue       # Vector mathematics
│   │       │   ├── MatrixCalculator.vue       # Matrix operations
│   │       │   ├── TransformationDemo.vue     # Linear transformations
│   │       │   └── EigenvalueExplorer.vue     # Eigenvalues/vectors
│   │       │
│   │       ├── calculus/
│   │       │   ├── LimitsExplorer.vue         # Limit calculations
│   │       │   ├── DerivativeVisualizer.vue   # Derivative concepts
│   │       │   ├── IntegralCalculator.vue     # Integration
│   │       │   └── OptimizationDemo.vue       # Optimization problems
│   │       │
│   │       └── basics/
│   │           ├── FunctionPlotter.vue        # General function plotting
│   │           ├── NumberLineExplorer.vue     # Number systems
│   │           ├── VariableExpressionDemo.vue # Algebraic expressions
│   │           └── CalculatorWidget.vue       # Basic calculator
│   │
│   ├── utils/                      # Utility functions and helpers
│   │   ├── mathHelpers.js          # Core mathematical operations
│   │   ├── graphing.js             # Canvas visualization utilities
│   │   ├── formatters.js           # Number and expression formatting
│   │   ├── validators.js           # Input validation functions
│   │   ├── exporters.js            # Data export utilities
│   │   └── accessibility.js        # A11y helper functions
│   │
│   ├── data/                       # Static data and configurations
│   │   ├── topics.js               # Topic metadata and navigation
│   │   ├── examples.js             # Mathematical examples and datasets
│   │   ├── constants.js            # Mathematical constants
│   │   └── presets.js              # Component default configurations
│   │
│   └── assets/                     # Static assets
│       └── styles/                 # Modular CSS architecture
│           ├── main.css            # Global styles and CSS variables
│           ├── components.css      # Component-specific styles
│           ├── responsive.css      # Responsive design utilities
│           └── themes.css          # Light/dark theme support
│
│   ├── .archive/                   # Deprecated/unused files
│   │   ├── TopicSidebar.vue        # Old sidebar component
│   │   ├── HelloWorld.vue          # Default Vue components
│   │   ├── TheWelcome.vue          # Default Vue components
│   │   ├── WelcomeItem.vue         # Default Vue components
│   │   ├── icons/                  # Default Vue icons
│   │   ├── logo.svg                # Default Vue logo
│   │   ├── base.css                # Unused CSS files
│   │   └── main.css                # Unused CSS files
│
├── .github/
│   └── workflows/
│       ├── deploy.yml              # GitHub Pages deployment
│       ├── test.yml                # Automated testing pipeline
│       └── code-quality.yml        # Linting and quality checks
│
├── docs/                           # Documentation
│   ├── CONTRIBUTING.md             # Contribution guidelines
│   ├── COMPONENT_API.md            # Component API documentation
│   ├── MATHEMATICAL_ACCURACY.md    # Mathematical verification process
│   └── ACCESSIBILITY.md            # Accessibility guidelines
│
├── tests/                          # Test files
│   ├── unit/                       # Unit tests
│   │   ├── components/             # Component tests
│   │   └── utils/                  # Utility function tests
│   │
│   ├── integration/                # Integration tests
│   │   └── mathematical-accuracy/  # Mathematical calculation tests
│   │
│   └── e2e/                        # End-to-end tests
│       └── user-workflows/         # Complete user journey tests
│
├── vite.config.js                  # Vite build configuration
├── package.json                    # Dependencies and scripts
├── package-lock.json               # Dependency lock file
├── .gitignore                      # Git ignore rules
├── README.md                       # Project documentation
├── CLAUDE.md                       # AI assistant guidance
├── project-outline.md              # Project vision and goals
├── project-blueprint.md            # This file - technical architecture
└── LICENSE                         # MIT License
```

## Component Architecture Specifications

### Topic Content Components

Each topic component follows a standardized structure:

**BasicsContent.vue Example Structure:**
```vue
<template>
  <div class="topic-content">
    <header class="topic-header">
      <h1>{{ topicMeta.title }}</h1>
      <p>{{ topicMeta.description }}</p>
    </header>
    
    <div class="subtopic-grid">
      <SubtopicCard 
        v-for="subtopic in subtopics" 
        :key="subtopic.id"
        :subtopic="subtopic"
        :active="activeSubtopic === subtopic.id"
        @select="selectSubtopic"
      />
    </div>
    
    <div class="content-area">
      <component 
        :is="currentContent" 
        :key="activeSubtopic"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { topicMetadata } from '@/data/topics.js'

// Component implementation...
</script>
```

### Interactive Widget Components

All mathematical widgets implement a standard interface:

**Required Props Interface:**
```typescript
interface MathWidgetProps {
  // Configuration
  initialValues?: Record<string, number>
  constraints?: Record<string, {min: number, max: number}>
  precision?: number
  realTime?: boolean
  
  // Display options
  showSteps?: boolean
  showFormulas?: boolean
  enableExport?: boolean
  theme?: 'light' | 'dark'
  
  // Canvas settings (for visualization widgets)
  canvasSize?: {width: number, height: number}
  bounds?: {xMin: number, xMax: number, yMin: number, yMax: number}
}
```

**Required Events:**
```typescript
interface MathWidgetEvents {
  parameterChange: (params: Record<string, number>) => void
  calculationComplete: (result: any) => void
  error: (error: Error) => void
  export: (data: ExportData) => void
  reset: () => void
}
```

**Example Widget Implementation:**
```vue
<!-- QuadraticVisualizer.vue -->
<template>
  <div class="quadratic-visualizer">
    <div class="controls">
      <ParameterSlider 
        v-model="coefficients.a"
        label="Coefficient a"
        :min="-5"
        :max="5"
        :step="0.1"
        @change="updateVisualization"
      />
      <!-- Additional controls -->
    </div>
    
    <div class="visualization">
      <canvas 
        ref="canvas"
        :width="canvasSize.width"
        :height="canvasSize.height"
        @click="handleCanvasClick"
      />
    </div>
    
    <div class="analysis" v-if="showSteps">
      <MathRenderer 
        :expression="quadraticFormula"
        :display-mode="true"
      />
      <div class="results">
        <p>Vertex: ({{ vertex.x }}, {{ vertex.y }})</p>
        <p>Discriminant: {{ discriminant }}</p>
        <p>Roots: {{ roots.join(', ') }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { GraphRenderer } from '@/utils/graphing.js'
import { evaluateQuadratic, solveQuadratic } from '@/utils/mathHelpers.js'

// Component implementation...
</script>
```

## Utility Module Specifications

### mathHelpers.js
Core mathematical operations with high precision:

```javascript
/**
 * Mathematical utility functions with precision handling
 */

export const formatNumber = (num, decimals = 3) => {
  if (typeof num !== 'number' || isNaN(num)) {
    throw new Error('Invalid number input')
  }
  return Number(num.toFixed(decimals))
}

export const validateDomain = (value, domain) => {
  const { min = -Infinity, max = Infinity, excludes = [] } = domain
  
  if (value < min || value > max) {
    throw new Error(`Value ${value} outside domain [${min}, ${max}]`)
  }
  
  if (excludes.includes(value)) {
    throw new Error(`Value ${value} excluded from domain`)
  }
  
  return true
}

export const evaluateQuadratic = (a, b, c, x) => {
  validateDomain(a, { excludes: [0] }) // a cannot be zero
  return a * x * x + b * x + c
}

export const solveQuadratic = (a, b, c) => {
  validateDomain(a, { excludes: [0] })
  
  const discriminant = b * b - 4 * a * c
  
  if (discriminant < 0) {
    return { 
      solutions: [], 
      discriminant,
      type: 'no-real-solutions' 
    }
  } else if (discriminant === 0) {
    return { 
      solutions: [formatNumber(-b / (2 * a))], 
      discriminant,
      type: 'one-solution' 
    }
  } else {
    const sqrtDiscriminant = Math.sqrt(discriminant)
    return { 
      solutions: [
        formatNumber((-b + sqrtDiscriminant) / (2 * a)),
        formatNumber((-b - sqrtDiscriminant) / (2 * a))
      ], 
      discriminant,
      type: 'two-solutions' 
    }
  }
}

// Additional mathematical functions...
```

### graphing.js
Canvas visualization utilities:

```javascript
/**
 * Canvas-based graphing utilities for mathematical visualizations
 */

export class GraphRenderer {
  constructor(canvas, options = {}) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.options = {
      xMin: -10,
      xMax: 10,
      yMin: -10,
      yMax: 10,
      gridColor: '#e5e7eb',
      axisColor: '#374151',
      backgroundColor: '#ffffff',
      ...options
    }
    
    this.setupCoordinateSystem()
    this.setupEventListeners()
  }
  
  setupCoordinateSystem() {
    const { xMin, xMax, yMin, yMax } = this.options
    this.scaleX = this.canvas.width / (xMax - xMin)
    this.scaleY = this.canvas.height / (yMax - yMin)
    this.originX = -xMin * this.scaleX
    this.originY = this.canvas.height + yMin * this.scaleY
  }
  
  clear() {
    this.ctx.fillStyle = this.options.backgroundColor
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }
  
  drawGrid() {
    const { xMin, xMax, yMin, yMax, gridColor } = this.options
    this.ctx.strokeStyle = gridColor
    this.ctx.lineWidth = 1
    
    // Vertical grid lines
    for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
      const canvasX = this.xToCanvas(x)
      this.ctx.beginPath()
      this.ctx.moveTo(canvasX, 0)
      this.ctx.lineTo(canvasX, this.canvas.height)
      this.ctx.stroke()
    }
    
    // Horizontal grid lines
    for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
      const canvasY = this.yToCanvas(y)
      this.ctx.beginPath()
      this.ctx.moveTo(0, canvasY)
      this.ctx.lineTo(this.canvas.width, canvasY)
      this.ctx.stroke()
    }
  }
  
  drawAxes() {
    const { axisColor } = this.options
    this.ctx.strokeStyle = axisColor
    this.ctx.lineWidth = 2
    
    // X-axis
    if (this.originY >= 0 && this.originY <= this.canvas.height) {
      this.ctx.beginPath()
      this.ctx.moveTo(0, this.originY)
      this.ctx.lineTo(this.canvas.width, this.originY)
      this.ctx.stroke()
    }
    
    // Y-axis
    if (this.originX >= 0 && this.originX <= this.canvas.width) {
      this.ctx.beginPath()
      this.ctx.moveTo(this.originX, 0)
      this.ctx.lineTo(this.originX, this.canvas.height)
      this.ctx.stroke()
    }
  }
  
  plotFunction(func, color = '#3b82f6', lineWidth = 2) {
    const { xMin, xMax } = this.options
    this.ctx.strokeStyle = color
    this.ctx.lineWidth = lineWidth
    this.ctx.beginPath()
    
    let firstPoint = true
    const step = (xMax - xMin) / this.canvas.width
    
    for (let x = xMin; x <= xMax; x += step) {
      try {
        const y = func(x)
        const canvasX = this.xToCanvas(x)
        const canvasY = this.yToCanvas(y)
        
        // Check if point is within canvas bounds
        if (canvasY >= 0 && canvasY <= this.canvas.height) {
          if (firstPoint) {
            this.ctx.moveTo(canvasX, canvasY)
            firstPoint = false
          } else {
            this.ctx.lineTo(canvasX, canvasY)
          }
        } else {
          firstPoint = true
        }
      } catch (error) {
        // Skip invalid points
        firstPoint = true
      }
    }
    this.ctx.stroke()
  }
  
  plotPoint(x, y, color = '#ef4444', radius = 4) {
    const canvasX = this.xToCanvas(x)
    const canvasY = this.yToCanvas(y)
    
    this.ctx.fillStyle = color
    this.ctx.beginPath()
    this.ctx.arc(canvasX, canvasY, radius, 0, 2 * Math.PI)
    this.ctx.fill()
  }
  
  xToCanvas(x) {
    return this.originX + x * this.scaleX
  }
  
  yToCanvas(y) {
    return this.originY - y * this.scaleY
  }
  
  canvasToX(canvasX) {
    return (canvasX - this.originX) / this.scaleX
  }
  
  canvasToY(canvasY) {
    return (this.originY - canvasY) / this.scaleY
  }
  
  setupEventListeners() {
    // Add mouse/touch event handlers for interactivity
    this.canvas.addEventListener('click', this.handleClick.bind(this))
    this.canvas.addEventListener('mousemove', this.handleMouseMove.bind(this))
  }
  
  handleClick(event) {
    const rect = this.canvas.getBoundingClientRect()
    const canvasX = event.clientX - rect.left
    const canvasY = event.clientY - rect.top
    
    const x = this.canvasToX(canvasX)
    const y = this.canvasToY(canvasY)
    
    // Emit custom event for parent components
    this.canvas.dispatchEvent(new CustomEvent('graphClick', {
      detail: { x, y, canvasX, canvasY }
    }))
  }
  
  handleMouseMove(event) {
    const rect = this.canvas.getBoundingClientRect()
    const canvasX = event.clientX - rect.left
    const canvasY = event.clientY - rect.top
    
    const x = this.canvasToX(canvasX)
    const y = this.canvasToY(canvasY)
    
    // Emit custom event for coordinate tracking
    this.canvas.dispatchEvent(new CustomEvent('graphMouseMove', {
      detail: { x, y, canvasX, canvasY }
    }))
  }
}
```

## Data Organization

### topics.js
Centralized topic metadata and navigation structure:

```javascript
export const topicMetadata = {
  basics: {
    id: 'basics',
    title: 'Mathematical Basics',
    icon: '📚',
    description: 'Foundational mathematical concepts for programming',
    difficulty: 'beginner',
    prerequisites: [],
    subtopics: [
      {
        id: 'variables-expressions',
        title: 'Variables & Expressions',
        description: 'Mathematical variables and algebraic expressions',
        component: 'VariableExpressionDemo'
      },
      {
        id: 'functions',
        title: 'Functions',
        description: 'Mathematical functions and their properties',
        component: 'FunctionPlotter'
      },
      // Additional subtopics...
    ]
  },
  
  algebra: {
    id: 'algebra',
    title: 'Algebra',
    icon: '🔢',
    description: 'Algebraic concepts and symbolic mathematics',
    difficulty: 'beginner',
    prerequisites: ['basics'],
    subtopics: [
      {
        id: 'quadratics',
        title: 'Quadratic Functions',
        description: 'Parabolas and quadratic equations',
        component: 'QuadraticVisualizer'
      },
      {
        id: 'linear',
        title: 'Linear Equations',
        description: 'Straight lines and systems of equations',
        component: 'LinearSystemSolver'
      },
      // Additional subtopics...
    ]
  },
  
  // Additional topics...
}

export const navigationStructure = [
  'basics',
  'algebra', 
  'statistics',
  'trigonometry',
  'linear-algebra',
  'calculus'
]
```

## Styling Architecture

### CSS Custom Properties (main.css)
```css
:root {
  /* Color Palette */
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
  --error-color: #ef4444;
  --warning-color: #f97316;
  --success-color: #22c55e;
  
  /* Neutral Colors */
  --text-color: #1f2937;
  --text-secondary: #6b7280;
  --bg-color: #f9fafb;
  --bg-secondary: #ffffff;
  --border-color: #e5e7eb;
  --border-color-hover: #d1d5db;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Typography */
  --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-3xl: 1.875rem;
  
  /* Layout */
  --sidebar-width: 280px;
  --header-height: 80px;
  --border-radius: 8px;
  --border-radius-sm: 4px;
  --border-radius-lg: 12px;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  
  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-normal: 0.2s ease;
  --transition-slow: 0.3s ease;
  
  /* Z-index levels */
  --z-dropdown: 1000;
  --z-modal: 1050;
  --z-tooltip: 1100;
}

/* Dark theme support */
@media (prefers-color-scheme: dark) {
  :root {
    --text-color: #f9fafb;
    --text-secondary: #d1d5db;
    --bg-color: #111827;
    --bg-secondary: #1f2937;
    --border-color: #374151;
    --border-color-hover: #4b5563;
  }
}
```

### Component Styling Standards (components.css)
```css
/* Mathematical Widget Styling */
.math-widget {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--transition-normal);
}

.math-widget:hover {
  box-shadow: var(--shadow-lg);
}

.math-widget__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid var(--border-color);
}

.math-widget__title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--text-color);
  margin: 0;
}

.math-widget__controls {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.math-widget__visualization {
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
}

.math-widget__results {
  background: var(--bg-color);
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
}

/* Canvas Styling */
.canvas-container {
  position: relative;
  display: inline-block;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
  background: var(--bg-secondary);
}

.canvas-container canvas {
  display: block;
  max-width: 100%;
  height: auto;
}

.canvas-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

/* Input Controls */
.parameter-slider {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.parameter-slider__label {
  font-weight: 500;
  color: var(--text-color);
  font-size: var(--font-size-sm);
}

.parameter-slider__input {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: var(--border-color);
  outline: none;
  transition: background var(--transition-normal);
}

.parameter-slider__input::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--primary-color);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
}

.parameter-slider__value {
  text-align: center;
  font-family: var(--font-mono);
  font-size: var(--font-size-sm);
  color: var(--text-secondary);
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--bg-color);
  border-radius: var(--border-radius-sm);
}

/* Responsive Design */
@media (max-width: 768px) {
  .math-widget {
    padding: var(--spacing-lg);
  }
  
  .math-widget__controls {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .canvas-container {
    max-width: 100%;
    overflow-x: auto;
  }
}
```

## Build Configuration

### vite.config.js
Optimized Vite configuration for PWA mathematical applications:

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue({
      // Enable custom element support for mathematical notation
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('math-')
        }
      }
    }),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Snake Math - Interactive Mathematics Learning',
        short_name: 'Snake Math',
        description: 'Interactive Mathematics Learning Platform',
        theme_color: '#6366f1',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/snake-math-vue/',
        icons: [
          {
            src: 'favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'documents-cache'
            }
          }
        ]
      }
    })
  ],
  
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@data': fileURLToPath(new URL('./src/data', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
    }
  },
  
  server: {
    port: 5173,
    open: true,
    host: true // Enable network access for testing on mobile devices
  },
  
  build: {
    target: 'es2020',
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
    
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor libraries
          vendor: ['vue'],
          
          // Mathematical utilities
          'math-utils': [
            './src/utils/mathHelpers.js',
            './src/utils/graphing.js',
            './src/utils/formatters.js'
          ],
          
          // Common components
          common: [
            './src/components/common/TopicNavigation.vue',
            './src/components/common/ThemeSwitcher.vue',
            './src/components/common/MathRenderer.vue',
            './src/components/common/CodeFold.vue'
          ],
          
          // Topic components
          topics: [
            './src/components/topics/BasicsContent.vue',
            './src/components/topics/AlgebraContent.vue',
            './src/components/topics/StatisticsContent.vue',
            './src/components/topics/TrigonometryContent.vue',
            './src/components/topics/LinearAlgebraContent.vue',
            './src/components/topics/CalculusContent.vue'
          ],
          
          // Interactive widgets by domain
          'widgets-algebra': [
            './src/components/widgets/algebra/QuadraticVisualizer.vue',
            './src/components/widgets/algebra/LinearSystemSolver.vue',
            './src/components/widgets/algebra/ExponentialCalculator.vue'
          ],
          
          'widgets-statistics': [
            './src/components/widgets/statistics/StatisticsCalculator.vue',
            './src/components/widgets/statistics/ProbabilitySimulator.vue'
          ],
          
          'widgets-trigonometry': [
            './src/components/widgets/trigonometry/UnitCircleExplorer.vue'
          ],
          
          'widgets-linear-algebra': [
            './src/components/widgets/linear-algebra/VectorOperations.vue',
            './src/components/widgets/linear-algebra/MatrixCalculator.vue'
          ],
          
          'widgets-calculus': [
            './src/components/widgets/calculus/LimitsExplorer.vue'
          ]
        }
      }
    },
    
    // Optimize for mathematical applications
    chunkSizeWarningLimit: 600,
    
    // Enable tree shaking for unused mathematical functions
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  
  optimizeDeps: {
    include: [
      'vue',
      'katex' // Pre-bundle KaTeX for faster development
    ]
  },
  
  // GitHub Pages configuration
  base: '/snake-math-vue/',
  
  // Enable mathematical notation in development
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_OPTIONS_API__: true
  }
})
```

## Deployment Pipeline

### GitHub Actions Workflow (.github/workflows/deploy.yml)
```yaml
name: Deploy Snake Math Vue to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

env:
  NODE_VERSION: '20'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Run mathematical accuracy tests
        run: npm run test:math
        
      - name: Run component tests
        run: npm run test:components
        
      - name: Run accessibility tests
        run: npm run test:a11y
        
  build-and-deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: ${{ env.NODE_VERSION }}
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build application
        run: npm run build
        
      - name: Optimize mathematical assets
        run: npm run optimize:math
        
      - name: Generate sitemap
        run: npm run generate:sitemap
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
          cname: snake-math.dev # Optional custom domain
```

This blueprint provides a complete technical foundation for building Snake Math Vue 3 as a maintainable, performant, and educationally effective interactive mathematics platform.