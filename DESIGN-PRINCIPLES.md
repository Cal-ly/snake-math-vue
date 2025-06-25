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
- **Math Rendering**: `KaTeX` - Mathematical notation
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

1. **Header Section** with FontAwesome icon and title
2. **Interactive Controls Section** with Bootstrap form components
3. **Live Analysis/Results Section** with real-time calculations
4. **Educational Content** with programming analogies
5. **Mobile-responsive layout** with sticky sidebars on desktop

**Template Pattern:**
```vue
<template>
  <div class="row">
    <!-- Main Content (col-lg-8) -->
    <div class="col-lg-8">
      <div class="card mb-4">
        <div class="card-header bg-primary text-white">
          <h2 class="h4 mb-0">
            <i class="fas fa-[icon] me-2"></i>[Topic Title]
          </h2>
        </div>
        <div class="card-body">
          <!-- Educational content with programming analogies -->
        </div>
      </div>
      
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="h5 mb-0">
            <i class="fas fa-sliders-h me-2"></i>Interactive Controls
          </h3>
        </div>
        <div class="card-body">
          <!-- Interactive form controls -->
        </div>
      </div>
    </div>
    
    <!-- Sidebar (col-lg-4) -->
    <div class="col-lg-4">
      <div class="card sticky-top" style="top: 2rem;">
        <!-- Live analysis and results -->
      </div>
    </div>
  </div>
</template>
```

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
- **Breakpoints**: Follow Bootstrap's standard breakpoints
  - `xs`: < 576px (default)
  - `sm`: ≥ 576px
  - `md`: ≥ 768px  
  - `lg`: ≥ 992px
  - `xl`: ≥ 1200px
  - `xxl`: ≥ 1400px

### Layout Patterns
- **Desktop**: Two-column layout (main content + sticky sidebar)
- **Tablet**: Single column with sidebar below main content
- **Mobile**: Full-width single column, remove sticky positioning

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
- **CSS Bundle**: Keep under 400KB (currently ~375KB)
- **JS Bundle**: Keep under 400KB (currently ~362KB)
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
- [ ] Use Bootstrap card-based layout
- [ ] Include FontAwesome icons consistently
- [ ] Add interactive controls with proper labeling
- [ ] Implement real-time mathematical calculations
- [ ] Include programming analogies in content
- [ ] Add responsive design with mobile considerations
- [ ] Ensure accessibility standards compliance
- [ ] Test across light/dark themes
- [ ] Verify performance impact on build

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