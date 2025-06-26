# CONTENT.md

This file provides an overview of the project's educational content. It is divided into two parts:

1. **Existing Content Overview** – Maps the actual folder/file structure and describes implemented components, topics, and visualizations.
2. **Planned Content Roadmap** – A flexible section for outlining topics/subtopics/components to be implemented, with suggested naming, structure, and intent.

---

## Existing Content Overview

> This section is meant for agents to quickly locate concepts, components, and visualizations based on the current file structure.

### Algebra

**QuadraticsContent.vue**

* **Location**: `src/components/topics/algebra/QuadraticsContent.vue`
* **Purpose**: Visualizes quadratic functions with interactive parameter control and real-time graphing
* **Features**: Interactive sliders for `a`, `b`, `c` coefficients. Canvas-based parabola visualization with vertex highlighting, discriminant analysis, and step-by-step quadratic formula solutions
* **Layout**: Vertical stacked cards (Introduction → Controls → Graph → Analysis)
* **Dependencies**: Uses `MathJaxRenderer` component with MathJax 3

**LinearContent.vue**

* **Location**: `src/components/topics/algebra/LinearContent.vue`
* **Purpose**: Interactive linear equation exploration with dual input methods
* **Features**: Slope-intercept method and two-point method. Real-time line graphing with y-intercept and point highlighting. Step-by-step slope calculation display
* **Layout**: Vertical stacked cards with method selection toggle
* **Dependencies**: Uses `MathJaxRenderer` component with MathJax 3

**ExponentialsContent.vue**

* **Location**: `src/components/topics/algebra/ExponentialsContent.vue`
* **Purpose**: Exponential function visualization showing growth/decay patterns
* **Features**: Interactive controls for base `a` and exponent `b`. Canvas visualization with horizontal asymptote, key integer points, and growth/decay classification
* **Layout**: Vertical stacked cards with programming application examples
* **Dependencies**: Uses `MathJaxRenderer` component with MathJax 3

**SummationContent.vue**

* **Location**: `src/components/topics/algebra/SummationContent.vue`
* **Purpose**: Sigma notation explorer connecting mathematical summation to programming loops
* **Features**: Interactive range controls, function type selection (identity, square, cube, etc.), step-by-step breakdown, and programming code equivalent generation
* **Layout**: Vertical stacked cards with programming analogies
* **Dependencies**: Uses `MathJaxRenderer` component with MathJax 3

### Common Components

**MathJaxRenderer.vue**

* **Location**: `src/components/common/MathJaxRenderer.vue`
* **Purpose**: MathJax 3-based mathematical expression rendering with comprehensive LaTeX support
* **Note**: Replaced KaTeX for better compatibility and 52% bundle size reduction

**TopicNavigation.vue**

* **Location**: `src/components/common/TopicNavigation.vue`
* **Purpose**: Responsive header navigation with Bootstrap and FontAwesome integration

**ThemeSwitcher.vue**

* **Location**: `src/components/common/ThemeSwitcher.vue`
* **Purpose**: Light/dark theme toggle using Bootstrap data-bs-theme system

---

## Planned Content Roadmap

> This section is intended for **quick edits** and **collaborative outlining** of upcoming content. Each entry should have: topic, subtopic/component name, proposed path, intent, and visual or educational goal.

### Trigonometry

**Component**: `UnitCircleContent.vue`

* **Path**: `src/components/topics/trigonometry/UnitCircleContent.vue`
* **Intent**: Interactive unit circle with angle manipulation and trig function visualization
* **Interaction**: Draggable angle point, real-time sin/cos/tan values, degree/radian toggle
* **Notes**: Should follow standard layout pattern (equation → graph → controls) with canvas visualization

**Component**: `TrigWavesContent.vue`

* **Path**: `src/components/topics/trigonometry/TrigWavesContent.vue`
* **Intent**: Visualize sine, cosine, and tangent wave functions with parameter control
* **Interaction**: Amplitude, frequency, and phase shift sliders with real-time wave plotting
* **Notes**: Canvas-based with theme-agnostic styling following established patterns

### Statistics

**Component**: `HistogramContent.vue`

* **Path**: `src/components/topics/statistics/HistogramContent.vue`
* **Intent**: Interactive histogram creation with dataset manipulation
* **Interaction**: Data point entry, bin size control, distribution overlay options
* **Notes**: Canvas visualization with statistical calculation display

### Calculus

**Component**: `DerivativeExplorer.vue`

* **Path**: `src/components/calculus/DerivativeExplorer.vue`
* **Intent**: Show the concept of derivative as slope of tangent
* **Interaction**: Graph with movable point, tangent line overlay, symbolic vs numerical toggle
* **Notes**: May require canvas abstraction or fallback to precomputed data

### Functions

**Component**: `LinearTransformationContent.vue`

* **Path**: `src/components/functions/LinearTransformationContent.vue`
* **Intent**: Link function representation to matrix transformation (2D)
* **Interaction**: Drag basis vectors, observe image transformation

---

> To add new ideas, copy the following template:

```markdown
**Component**: `ComponentName.vue`
- **Path**: `src/components/topic/ComponentName.vue`
- **Intent**: Describe what it teaches or shows
- **Interaction**: Sliders, toggles, buttons, etc
- **Notes**: Optional – e.g., links to existing tasks, depends on data, etc
```
