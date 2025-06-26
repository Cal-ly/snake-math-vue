# Snake Math Vue - Design Principles & Style Guide

This document defines the design principles, component patterns, and styling standards for the Snake Math Vue project to ensure consistency across all 40+ subtopics.

## 🎨 Visual Design System

### Color Palette
- **Primary**: `#10b981` (Emerald Green) - Snake Math brand color
- **Secondary**: `#6b7280` (Gray-500) - Subtle accents
- **Success**: `#22c55e` (Green-500) - Positive feedback
- **Warning**: `#f59e0b` (Amber-500) - Caution states
- **Danger**: `#ef4444` (Red-500) - Error states
- **Light**: `#f9fafb` (Gray-50) - Background elements
- **Dark**: `#111827` (Gray-900) - Dark theme base

### Typography
- **Primary Font**: `Inter` - Clean, modern sans-serif
- **Monospace Font**: `JetBrains Mono` - Code and mathematical expressions
- **Math Rendering**: `MathJax 3` - Comprehensive LaTeX mathematical notation
- **Icon System**: `FontAwesome Free` - Consistent iconography

### Spacing System (Bootstrap-based)
- **Scale**: 0.25rem increments (4px, 8px, 16px, 24px, 32px, 48px, 64px)
- **Container**: `container-fluid` for full-width responsive layout
- **Gutters**: Bootstrap's gutter system (g-3, g-4 for standard spacing)

## 🏗️ Component Architecture Patterns

### Modular Topic Structure
**Every topic should follow this file organization:**
```
src/components/topics/[topic]/
├── [Topic]Content.vue          # Main topic component (coordinator)
├── [Subtopic1]Content.vue      # Individual subtopic component
├── [Subtopic2]Content.vue      # Individual subtopic component
└── [SubtopicN]Content.vue      # Individual subtopic component
```

**Example Implementation:**
```vue
<!-- AlgebraContent.vue (Main Topic Component) -->
<script setup>
import QuadraticsContent from './algebra/QuadraticsContent.vue'
import LinearContent from './algebra/LinearContent.vue'
// ... other imports

const subtopicComponents = {
  quadratics: QuadraticsContent,
  linear: LinearContent
  // ... other mappings
}
</script>
```

### Standard Subtopic Component Structure

**Every subtopic component must include:**

1. **Introduction Card** with concept explanation and mathematical form
2. **Interactive Explorer Card** with standardized internal layout following SYSTEM-MEMORY.md:
   - **Generated Equation Section** - Current function with real-time updates
   - **Graph Visualization Section** - Canvas elements for mathematical illustrations
   - **Controls Section** - Parameters, analysis, and step-by-step solutions

**Template Pattern (Standard Layout):**
```vue
<template>
  <!-- Introduction Card -->
  <div class="card mb-4">
    <div class="card-header bg-primary text-white">
      <h2 class="h4 mb-0">
        <i class="fas fa-[icon] me-2"></i>[Subtopic Title]
      </h2>
    </div>
    <div class="card-body">
      <p class="lead">[Concept explanation with programming analogies]</p>
      <div class="alert alert-info" role="alert">
        <strong>[Key Concept]:</strong> [Brief description]
      </div>
      <div class="text-center mb-3">
        <MathRenderer 
          expression="[mathematical formula]" 
          :display-mode="true" 
        />
      </div>
      <p>[Parameter explanations]</p>
    </div>
  </div>

  <!-- Interactive Controls Card -->
  <div class="card mb-4">
    <div class="card-header">
      <h3 class="h5 mb-0">
        <i class="fas fa-sliders-h me-2"></i>Interactive Controls
      </h3>
    </div>
    <div class="card-body">
      <!-- Form controls for parameters -->
      <!-- Current equation display -->
    </div>
  </div>

  <!-- Visual Illustration Card -->
  <div class="card mb-4">
    <div class="card-header">
      <h3 class="h5 mb-0">
        <i class="fas fa-chart-area me-2"></i>Interactive Visualization
      </h3>
    </div>
    <div class="card-body">
      <div class="text-center">
        <canvas 
          ref="graphCanvas" 
          width="600" 
          height="400" 
          class="rounded" 
          style="max-width: 100%; height: auto; background-color: #f8f9fa; border: 1px solid #dee2e6;"
        ></canvas>
      </div>
      <p class="text-muted text-center mt-2 small">[Canvas description]</p>
    </div>
  </div>

  <!-- Analysis & Results Card -->
  <div class="card mb-4">
    <div class="card-header">
      <h3 class="h5 mb-0">
        <i class="fas fa-calculator me-2"></i>Mathematical Analysis
      </h3>
    </div>
    <div class="card-body">
      <!-- Properties, calculations, step-by-step solutions -->
    </div>
  </div>
</template>
```

### Topic Selection Card Layout
**For main topic components with subtopic selection (compact 50% size):**
```vue
<template>
  <div class="container-fluid py-4">
    <header class="text-center mb-5">
      <h1 class="display-4 text-primary mb-3">
        <i class="fas fa-[icon] me-3"></i>[Topic Title]
      </h1>
      <p class="lead text-muted">
        [Topic Description]
      </p>
    </header>
    
    <!-- Subtopic cards in 4-column grid -->
    <div class="row justify-content-center mb-5">
      <div class="col-12" style="max-width: 1400px; margin: auto;">
        <div class="row g-3">
          <div 
            v-for="subtopic in subtopics" 
            :key="subtopic.id"
            class="col-lg-3 col-md-6 col-sm-6 col-12"
          >
            <div class="card h-100 subtopic-card">
              <div class="card-body text-center py-2">
                <div class="mb-1">
                  <i :class="subtopic.icon" class="text-primary" style="font-size: 1rem;"></i>
                </div>
                <h6 class="card-title mb-1" style="font-size: 0.875rem;">{{ subtopic.title }}</h6>
                <p class="card-text text-muted" style="font-size: 0.75rem;">{{ subtopic.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Selected subtopic content -->
    <div class="content-section" style="max-width: 1400px; margin: auto;">
      <component :is="currentSubtopicComponent" />
    </div>
  </div>
</template>
```

### Canvas Visualization Standards

**Canvas Implementation Pattern:**
```vue
<script setup>
import { ref, computed, onMounted, watch, nextTick } from 'vue'

const graphCanvas = ref(null)
const parameter1 = ref(1)
const parameter2 = ref(2)

const drawGraph = () => {
  if (!graphCanvas.value) return
  
  const canvas = graphCanvas.value
  const ctx = canvas.getContext('2d')
  const width = canvas.width
  const height = canvas.height
  
  // Clear canvas with light grey background (theme-agnostic)
  ctx.fillStyle = '#f8f9fa'
  ctx.fillRect(0, 0, width, height)
  
  // Set up coordinate system
  const xMin = -10, xMax = 10
  const yMin = -10, yMax = 10
  const xScale = width / (xMax - xMin)
  const yScale = height / (yMax - yMin)
  
  // Helper functions
  const toCanvasX = (x) => (x - xMin) * xScale
  const toCanvasY = (y) => height - (y - yMin) * yScale
  
  // Draw grid, axes, and mathematical function
  // ... implementation details
}

onMounted(() => {
  nextTick(() => {
    drawGraph()
  })
})

// Watch for parameter changes and redraw
watch([parameter1, parameter2], () => {
  nextTick(() => {
    drawGraph()
  })
})
</script>

<style scoped>
/* Canvas responsiveness */
canvas {
  max-width: 100%;
  height: auto;
}

@media (max-width: 767px) {
  canvas {
    width: 100%;
    height: 300px;
  }
}
</style>
```

**Canvas Features to Include:**
- **Theme-Agnostic Background**: Always use light grey (`#f8f9fa`) background, regardless of theme
- **Grid System**: Medium grey (`#dee2e6`) grid lines for reference
- **Coordinate Axes**: Dark grey (`#495057`) for x and y axes (theme-independent)
- **Function Plotting**: Primary color (#10b981) for main functions
- **Key Points**: Highlighted vertices, intercepts, or special points
- **Interactive Updates**: Real-time redraw when parameters change
- **Responsive Design**: Proper scaling on mobile devices
- **Legend**: Theme-agnostic text (`#495057`) with color-coded elements
- **Special Features**: Asymptotes (dashed lines), special mathematical properties

**Canvas Styling Requirements:**
```vue
<canvas 
  ref="graphCanvas" 
  width="600" 
  height="400" 
  class="rounded" 
  style="max-width: 100%; height: auto; background-color: #f8f9fa; border: 1px solid #dee2e6;"
></canvas>
```

**Canvas Color Palette (Theme-Agnostic):**
- **Background**: `#f8f9fa` (Bootstrap gray-100)
- **Grid Lines**: `#dee2e6` (Bootstrap gray-300)
- **Axes**: `#495057` (Bootstrap gray-600)
- **Text/Legend**: `#495057` (Bootstrap gray-600)
- **Primary Function**: `#10b981` (Snake Math green)
- **Accent Points**: `#dc2626` (red), `#2563eb` (blue)
- **Asymptotes/Special Lines**: `#6b7280` (Bootstrap gray-500) with dashed pattern

### Function-Specific Canvas Patterns

**Exponential Functions (`f(x) = a·b^x`):**
```javascript
// Coordinate system for exponentials
const xMin = -3, xMax = 5
const yMin = -2, yMax = 20

// Special features to implement:
// 1. Horizontal asymptote at y = 0 (dashed line)
ctx.strokeStyle = '#6b7280'
ctx.setLineDash([5, 5])
ctx.beginPath()
ctx.moveTo(0, toCanvasY(0))
ctx.lineTo(width, toCanvasY(0))
ctx.stroke()
ctx.setLineDash([]) // Reset

// 2. Y-intercept highlighting (when x = 0, y = a)
// 3. Key integer points for visual reference
// 4. Smooth curve plotting with appropriate step size (0.1)
```

**Quadratic Functions (`f(x) = ax² + bx + c`):**
- Highlight vertex point (maximum/minimum)
- Mark x-intercepts (solutions) when they exist
- Show discriminant-based visual feedback

**Linear Functions (`y = mx + b`):**
- Highlight y-intercept and slope visualization
- Support two-point method with interactive point selection
- Show step-by-step slope calculation

## 🎛️ Interactive Component Standards

### Form Controls
- **Range Sliders**: Use `form-range` class with value badges
- **Select Dropdowns**: Use `form-select` with clear labeling
- **Radio Groups**: Use `btn-group` with `btn-check` pattern
- **Buttons**: Use appropriate Bootstrap button variants

**Example Pattern:**
```vue
<div class="col-md-6">
  <label class="form-label">
    Parameter: <span class="badge bg-primary">{{ value }}</span>
  </label>
  <input 
    type="range" 
    class="form-range" 
    v-model.number="value" 
    min="0" 
    max="10" 
    step="0.1"
  >
  <small class="text-muted">Description of what this controls</small>
</div>
```

### Mathematical Display
- **Inline Math**: Use `MathRenderer` component with `:display-mode="false"`
- **Block Math**: Use `MathRenderer` component with `:display-mode="true"`
- **Live Equations**: Use template literals for dynamic expressions
- **Step-by-step**: Use collapsible sections with `btn-outline-primary`

**Example Pattern:**
```vue
<div class="text-center p-3 bg-light rounded mb-3">
  <MathRenderer 
    :expression="`f(x) = ${a}x^2 + ${b}x + ${c}`" 
    :display-mode="true" 
  />
</div>
```

### Programming Analogies
**Every mathematical concept should include:**
- Code-like explanations in `<code>` tags
- Algorithmic thinking connections
- Real-world programming applications
- Performance/complexity analogies where relevant

**Example Pattern:**
```vue
<p class="lead">
  Linear equations are like the simplest algorithms—they take input 
  <code>x</code>, apply a constant rate of change (slope), and produce 
  predictable output. Think of them as <code>f(x) = rate * x + startingValue</code>.
</p>
```

## 📱 Responsive Design Standards

### Breakpoint Strategy
- **Mobile-first**: Design for small screens, enhance for larger
- **Max Width**: 1400px for all content areas on widescreen displays
- **Breakpoints**: Follow Bootstrap's standard breakpoints
  - `xs`: < 576px (default)
  - `sm`: ≥ 576px
  - `md`: ≥ 768px  
  - `lg`: ≥ 992px
  - `xl`: ≥ 1200px
  - `xxl`: ≥ 1400px

### Layout Patterns
- **Desktop**: Two-column layout (main content + sticky sidebar) within 1400px container
- **Tablet**: Single column with sidebar below main content
- **Mobile**: Full-width single column, remove sticky positioning
- **Topic Cards**: 4-column grid on desktop (lg+), 2-column on tablet (md+), single column on mobile

**Required Responsive CSS:**
```scss
// Always include this for sticky sidebars
@media (max-width: 767px) {
  .sticky-top {
    position: relative !important;
    top: auto !important;
  }
}
```

### Touch-Friendly Controls
- **Minimum touch target**: 44px × 44px (iOS requirement)
- **Slider controls**: Large enough for finger interaction
- **Button spacing**: Adequate spacing between interactive elements
- **Font sizes**: Readable without zooming on mobile devices

## 🎯 Accessibility Standards

### Required Accessibility Features
- **ARIA labels**: Descriptive labels for screen readers
- **Keyboard navigation**: All interactive elements keyboard accessible
- **Focus management**: Visible focus indicators
- **Color contrast**: WCAG AA compliance for text contrast
- **Alternative text**: Meaningful descriptions for mathematical content

**Example Patterns:**
```vue
<!-- Keyboard accessible cards -->
<div 
  class="card h-100"
  role="button"
  tabindex="0"
  @click="selectTopic"
  @keyup.enter="selectTopic"
  :aria-label="`Select ${topic.title} topic`"
>

<!-- Screen reader friendly sliders -->
<input 
  type="range"
  class="form-range"
  :aria-label="`Adjust ${parameter} value`"
  :aria-describedby="`${parameter}-description`"
>
<small :id="`${parameter}-description`" class="text-muted">
  Controls the mathematical parameter
</small>
```

## 🏷️ FontAwesome Icon Standards

### Topic-Specific Icons
- **Algebra**: `fas fa-calculator`
- **Statistics**: `fas fa-chart-bar`
- **Trigonometry**: `fas fa-drafting-compass`
- **Linear Algebra**: `fas fa-vector-square`
- **Calculus**: `fas fa-infinity`
- **Basics**: `fas fa-book`

### UI Element Icons
- **Interactive Controls**: `fas fa-sliders-h`
- **Mathematical Functions**: `fas fa-function`
- **Live Analysis**: `fas fa-calculator`
- **Programming Examples**: `fas fa-code`
- **Step-by-step**: `fas fa-eye` / `fas fa-eye-slash`
- **Menu Toggle**: `fas fa-bars` / `fas fa-times`

### Icon Usage Pattern
```vue
<h2 class="h4 mb-0">
  <i class="fas fa-[icon] me-2"></i>[Title]
</h2>
```

## 🎨 Theme System

### Light Theme (Default)
- **Background**: White/light gray backgrounds
- **Text**: Dark text on light backgrounds
- **Cards**: Light backgrounds with subtle borders

### Dark Theme
- **Background**: Dark gray/black backgrounds  
- **Text**: Light text on dark backgrounds
- **Cards**: Dark backgrounds with light borders
- **Auto-detection**: Respects system preference
- **Manual override**: Theme switcher in header

### Bootstrap Theme Integration
```scss
// Custom theme variables in bootstrap-custom.scss
$primary: #10b981;    // Snake Math green
$dark: #111827;       // Dark theme background
$light: #f9fafb;      // Light theme background

// Dark theme overrides
[data-bs-theme="dark"] {
  .bg-light {
    background-color: #{darken($dark, 3%)} !important;
  }
}
```

## 📊 Performance Standards

### Component Loading
- **Lazy loading**: Subtopic components loaded on demand
- **Code splitting**: Automatic with Vite bundler
- **Bundle size**: Monitor and optimize for performance
- **Caching**: PWA caching for offline capability

### Mathematical Calculations
- **Real-time updates**: Smooth performance with reactive calculations
- **Debouncing**: For expensive calculations with user input
- **Precision**: Appropriate decimal places for display
- **Error handling**: Graceful handling of invalid inputs

### Build Targets
- **CSS Bundle**: Keep under 400KB (currently ~373KB)
- **JS Bundle**: Keep under 400KB (currently ~365KB)
- **Load Time**: First contentful paint under 2 seconds
- **Interactive**: Time to interactive under 3 seconds

## 🔧 Development Workflow

### File Naming Conventions
- **Topic Components**: `[Topic]Content.vue` (PascalCase)
- **Subtopic Components**: `[Subtopic]Content.vue` (PascalCase)
- **Widget Components**: `[Widget]Widget.vue` or `[Widget]Component.vue`
- **Utility Functions**: `kebab-case.js`

### Code Style Standards
- **Vue 3 Composition API**: Use `<script setup>` syntax
- **TypeScript**: Optional but recommended for complex components
- **ESLint**: Follow project ESLint configuration
- **Prettier**: Consistent code formatting

### Testing Strategy
- **Unit Tests**: Test mathematical calculations and logic
- **Component Tests**: Test user interactions and state changes
- **Integration Tests**: Test component integration
- **Accessibility Tests**: Automated accessibility checking

## 🚀 Implementation Checklist

**For each new subtopic component:**

- [ ] Follow modular file structure pattern
- [ ] Use standard layout pattern (Introduction Card + Interactive Explorer Card) with 1400px max width
- [ ] Include FontAwesome icons consistently in card headers
- [ ] Add interactive controls with proper labeling and real-time updates
- [ ] Implement canvas visualization with mathematical graphs/diagrams
- [ ] Include programming analogies in introduction content
- [ ] Add responsive design with mobile considerations (canvas scaling)
- [ ] Ensure accessibility standards compliance (ARIA labels, keyboard navigation)
- [ ] Test across light/dark themes
- [ ] Verify canvas performance and smooth parameter updates
- [ ] Verify overall performance impact on build

**Quality Assurance:**
- [ ] Mathematical accuracy verified
- [ ] Mobile responsiveness tested
- [ ] Accessibility standards met
- [ ] Code follows established patterns
- [ ] Build size impact assessed
- [ ] Performance benchmarks met

---

**Last Updated**: 2025-06-25  
**Applies To**: All Snake Math Vue subtopic components  
**Compliance**: Required for all new component development