<template>
  <div class="container-fluid py-4">
    <header class="text-center mb-5">
      <h1 class="display-4 text-primary mb-3">
        <i class="fas fa-calculator me-3"></i>Algebra
      </h1>
      <p class="lead text-muted">
        Master algebraic concepts from basic equations to advanced functions
      </p>
    </header>
    
    <div class="row g-4 mb-5">
      <div 
        v-for="subtopic in subtopics" 
        :key="subtopic.id"
        class="col-lg-3 col-md-6"
      >
        <div 
          class="card h-100 subtopic-card"
          :class="{ 'border-primary': activeSubtopic === subtopic.id }"
          @click="selectSubtopic(subtopic.id)"
          role="button"
          tabindex="0"
          @keyup.enter="selectSubtopic(subtopic.id)"
        >
          <div class="card-body text-center">
            <div class="mb-3">
              <i :class="subtopic.icon" class="text-primary" style="font-size: 2.5rem;"></i>
            </div>
            <h5 class="card-title">{{ subtopic.title }}</h5>
            <p class="card-text text-muted">{{ subtopic.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="content-section">
      <component 
        :is="currentSubtopicComponent" 
        v-if="activeSubtopic"
        :key="activeSubtopic"
      />
      <div v-else class="text-center py-5">
        <div class="mb-4">
          <i class="fas fa-hand-point-up text-primary" style="font-size: 3rem;"></i>
        </div>
        <h3 class="h4 mb-3">Select a topic above to begin learning</h3>
        <p class="text-muted">Choose from quadratics, linear equations, exponentials, or summation notation</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MathRenderer from '@/components/common/MathRenderer.vue'

const activeSubtopic = ref(null)

const subtopics = [
  {
    id: 'quadratics',
    title: 'Quadratic Functions',
    description: 'Explore parabolas and quadratic equations',
    icon: 'fas fa-chart-line'
  },
  {
    id: 'linear',
    title: 'Linear Equations',
    description: 'Master straight lines and systems',
    icon: 'fas fa-ruler'
  },
  {
    id: 'exponentials',
    title: 'Exponentials & Logs',
    description: 'Growth, decay, and logarithms',
    icon: 'fas fa-chart-area'
  },
  {
    id: 'summation',
    title: 'Summation Notation',
    description: 'Sum sequences with sigma notation',
    icon: 'fas fa-sigma'
  }
]

// Enhanced content components with Bootstrap styling and interactive elements
const QuadraticsContent = {
  components: { MathRenderer },
  data() {
    return {
      a: 1,
      b: -5,
      c: 6,
      showSolution: false
    }
  },
  computed: {
    discriminant() {
      return this.b * this.b - 4 * this.a * this.c
    },
    vertex() {
      const x = -this.b / (2 * this.a)
      const y = this.a * x * x + this.b * x + this.c
      return { x: x.toFixed(2), y: y.toFixed(2) }
    },
    solutions() {
      if (this.discriminant < 0) return 'No real solutions'
      if (this.discriminant === 0) {
        const x = -this.b / (2 * this.a)
        return `x = ${x.toFixed(2)}`
      }
      const x1 = (-this.b + Math.sqrt(this.discriminant)) / (2 * this.a)
      const x2 = (-this.b - Math.sqrt(this.discriminant)) / (2 * this.a)
      return `x = ${x1.toFixed(2)} or x = ${x2.toFixed(2)}`
    }
  },
  template: `
    <div class="row">
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2 class="h4 mb-0"><i class="fas fa-chart-line me-2"></i>Quadratic Functions</h2>
          </div>
          <div class="card-body">
            <p class="lead">Think of quadratics as the "for loops with nested loops" of mathematics—they create those characteristic curved patterns you see everywhere in programming, from algorithm complexity to graphics rendering.</p>
            
            <div class="alert alert-info" role="alert">
              <strong>Standard Form:</strong> Like defining a function signature in code
            </div>
            <MathRenderer 
              expression="f(x) = ax^2 + bx + c" 
              :display-mode="true" 
            />
            <p>Where <code>a ≠ 0</code> (otherwise it's just linear!), and the graph forms a parabola.</p>
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-header">
            <h3 class="h5 mb-0"><i class="fas fa-cogs me-2"></i>Interactive Exploration</h3>
          </div>
          <div class="card-body">
            <div class="row g-3 mb-4">
              <div class="col-md-4">
                <label class="form-label">Coefficient a: <span class="badge bg-primary">{{ a }}</span></label>
                <input type="range" class="form-range" v-model.number="a" min="-3" max="3" step="0.1">
                <small class="text-muted">Controls parabola direction and width</small>
              </div>
              <div class="col-md-4">
                <label class="form-label">Coefficient b: <span class="badge bg-primary">{{ b }}</span></label>
                <input type="range" class="form-range" v-model.number="b" min="-10" max="10" step="0.5">
                <small class="text-muted">Shifts the parabola horizontally</small>
              </div>
              <div class="col-md-4">
                <label class="form-label">Coefficient c: <span class="badge bg-primary">{{ c }}</span></label>
                <input type="range" class="form-range" v-model.number="c" min="-10" max="10" step="0.5">
                <small class="text-muted">Y-intercept (where parabola crosses y-axis)</small>
              </div>
            </div>
            
            <div class="current-equation text-center p-3 bg-light rounded mb-3">
              <MathRenderer 
                :expression="\`f(x) = \${a}x^2 + \${b}x + \${c}\`" 
                :display-mode="true" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card sticky-top" style="top: 2rem;">
          <div class="card-header">
            <h3 class="h6 mb-0"><i class="fas fa-calculator me-2"></i>Live Analysis</h3>
          </div>
          <div class="card-body">
            <div class="mb-3">
              <strong>Vertex:</strong> ({{ vertex.x }}, {{ vertex.y }})
              <br><small class="text-muted">Peak/valley of the parabola</small>
            </div>
            
            <div class="mb-3">
              <strong>Discriminant:</strong> 
              <span class="badge" :class="discriminant >= 0 ? 'bg-success' : 'bg-danger'">
                {{ discriminant.toFixed(2) }}
              </span>
              <br><small class="text-muted">{{ discriminant >= 0 ? 'Has real solutions' : 'No real solutions' }}</small>
            </div>
            
            <div class="mb-3">
              <strong>Solutions:</strong> {{ solutions }}
            </div>
            
            <button 
              class="btn btn-outline-primary btn-sm w-100" 
              @click="showSolution = !showSolution"
            >
              <i class="fas" :class="showSolution ? 'fa-eye-slash' : 'fa-eye'"></i>
              {{ showSolution ? 'Hide' : 'Show' }} Quadratic Formula Steps
            </button>
            
            <div v-if="showSolution" class="mt-3 p-3 border rounded bg-light">
              <h6>Step-by-step solution:</h6>
              <MathRenderer 
                expression="x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" 
                :display-mode="true" 
              />
              <p class="small mb-2">Substituting values:</p>
              <MathRenderer 
                :expression="\`x = \\frac{-(\${b}) \\pm \\sqrt{(\${b})^2 - 4(\${a})(\${c})}}{2(\${a})}\`" 
                :display-mode="true" 
              />
              <MathRenderer 
                :expression="\`x = \\frac{\${-b} \\pm \\sqrt{\${discriminant.toFixed(2)}}}{\${2*a}}\`" 
                :display-mode="true" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

const LinearContent = {
  components: { MathRenderer },
  data() {
    return {
      slope: 2,
      yIntercept: -1,
      point1X: 0,
      point1Y: 0,
      point2X: 3,
      point2Y: 5,
      usePoints: false
    }
  },
  computed: {
    calculatedSlope() {
      if (this.point2X === this.point1X) return 'Undefined (vertical line)'
      const m = (this.point2Y - this.point1Y) / (this.point2X - this.point1X)
      return m.toFixed(2)
    },
    pointSlopeForm() {
      return `y - ${this.point1Y} = ${this.calculatedSlope}(x - ${this.point1X})`
    },
    slopeInterceptForm() {
      if (this.usePoints) {
        const m = parseFloat(this.calculatedSlope)
        const b = this.point1Y - m * this.point1X
        return `y = ${m.toFixed(2)}x + ${b.toFixed(2)}`
      }
      return `y = ${this.slope}x + ${this.yIntercept}`
    }
  },
  template: `
    <div class="row">
      <div class="col-lg-8">
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h2 class="h4 mb-0"><i class="fas fa-ruler me-2"></i>Linear Equations</h2>
          </div>
          <div class="card-body">
            <p class="lead">Linear equations are like the simplest algorithms—they take input <code>x</code>, apply a constant rate of change (slope), and produce predictable output. Think of them as <code>f(x) = rate * x + startingValue</code>.</p>
            
            <div class="alert alert-info" role="alert">
              <strong>Slope-Intercept Form:</strong> The most programmer-friendly format
            </div>
            <MathRenderer 
              expression="y = mx + b" 
              :display-mode="true" 
            />
            <p>Where <code>m</code> is the slope (rate of change) and <code>b</code> is the y-intercept (starting value).</p>
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-header">
            <h3 class="h5 mb-0"><i class="fas fa-sliders-h me-2"></i>Method Selection</h3>
          </div>
          <div class="card-body">
            <div class="btn-group w-100 mb-4" role="group">
              <input type="radio" class="btn-check" :value="false" v-model="usePoints" id="slope-intercept">
              <label class="btn btn-outline-primary" for="slope-intercept">
                <i class="fas fa-chart-line me-2"></i>Slope & Y-Intercept
              </label>
              
              <input type="radio" class="btn-check" :value="true" v-model="usePoints" id="two-points">
              <label class="btn btn-outline-primary" for="two-points">
                <i class="fas fa-map-pin me-2"></i>Two Points
              </label>
            </div>
            
            <div v-if="!usePoints" class="row g-3">
              <div class="col-md-6">
                <label class="form-label">Slope (m): <span class="badge bg-primary">{{ slope }}</span></label>
                <input type="range" class="form-range" v-model.number="slope" min="-5" max="5" step="0.1">
                <small class="text-muted">Rise over run - how steep the line is</small>
              </div>
              <div class="col-md-6">
                <label class="form-label">Y-Intercept (b): <span class="badge bg-primary">{{ yIntercept }}</span></label>
                <input type="range" class="form-range" v-model.number="yIntercept" min="-10" max="10" step="0.5">
                <small class="text-muted">Where line crosses the y-axis</small>
              </div>
            </div>
            
            <div v-else class="row g-3">
              <div class="col-md-6">
                <h6>Point 1</h6>
                <div class="row">
                  <div class="col-6">
                    <label class="form-label">X1: <span class="badge bg-secondary">{{ point1X }}</span></label>
                    <input type="range" class="form-range" v-model.number="point1X" min="-10" max="10" step="0.5">
                  </div>
                  <div class="col-6">
                    <label class="form-label">Y1: <span class="badge bg-secondary">{{ point1Y }}</span></label>
                    <input type="range" class="form-range" v-model.number="point1Y" min="-10" max="10" step="0.5">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <h6>Point 2</h6>
                <div class="row">
                  <div class="col-6">
                    <label class="form-label">X2: <span class="badge bg-secondary">{{ point2X }}</span></label>
                    <input type="range" class="form-range" v-model.number="point2X" min="-10" max="10" step="0.5">
                  </div>
                  <div class="col-6">
                    <label class="form-label">Y2: <span class="badge bg-secondary">{{ point2Y }}</span></label>
                    <input type="range" class="form-range" v-model.number="point2Y" min="-10" max="10" step="0.5">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-lg-4">
        <div class="card sticky-top" style="top: 2rem;">
          <div class="card-header">
            <h3 class="h6 mb-0"><i class="fas fa-function me-2"></i>Generated Equation</h3>
          </div>
          <div class="card-body">
            <div class="text-center p-3 bg-light rounded mb-3">
              <MathRenderer 
                :expression="slopeInterceptForm" 
                :display-mode="true" 
              />
            </div>
            
            <div v-if="usePoints">
              <h6>Step-by-step calculation:</h6>
              <div class="small mb-2">
                <strong>1. Calculate slope:</strong>
                <MathRenderer 
                  expression="m = \\frac{y_2 - y_1}{x_2 - x_1}" 
                  :display-mode="false" 
                />
              </div>
              <div class="small mb-2">
                <MathRenderer 
                  :expression="\`m = \\frac{\${point2Y} - \${point1Y}}{\${point2X} - \${point1X}} = \${calculatedSlope}\`" 
                  :display-mode="false" 
                />
              </div>
              
              <div class="small mb-2">
                <strong>2. Use point-slope form:</strong>
                <MathRenderer 
                  :expression="pointSlopeForm" 
                  :display-mode="false" 
                />
              </div>
            </div>
            
            <div class="mt-3">
              <h6>Key Properties:</h6>
              <ul class="small mb-0">
                <li><strong>Slope:</strong> {{ usePoints ? calculatedSlope : slope }} (rate of change)</li>
                <li><strong>Y-intercept:</strong> Where line crosses y-axis</li>
                <li><strong>Domain:</strong> All real numbers</li>
                <li><strong>Range:</strong> All real numbers</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
}

const ExponentialsContent = {
  components: { MathRenderer },
  template: `
    <div class="content-section">
      <h2>Exponential Functions</h2>
      <p>Exponential functions have the form:</p>
      <MathRenderer 
        expression="f(x) = a \\cdot b^x" 
        :display-mode="true" 
      />
      <p>Where a > 0 and b > 0, b ≠ 1.</p>
      
      <div class="key-concepts">
        <h3>Key Properties</h3>
        <ul>
          <li><strong>Base > 1:</strong> Exponential growth</li>
          <li><strong>0 < Base < 1:</strong> Exponential decay</li>
          <li><strong>Logarithms:</strong> Inverse of exponentials</li>
          <li><strong>Natural log:</strong> <MathRenderer expression="\\ln(x) = \\log_e(x)" /></li>
        </ul>
      </div>
      
      <div class="example-section">
        <h3>Example: Compound Interest</h3>
        <p>Formula for compound interest:</p>
        <MathRenderer 
          expression="A = P(1 + r)^t" 
          :display-mode="true" 
        />
        <p>Where P is principal, r is rate, t is time</p>
      </div>
    </div>
  `
}

const SummationContent = {
  components: { MathRenderer },
  template: `
    <div class="content-section">
      <h2>Summation Notation</h2>
      <p>Summation (sigma) notation compactly represents sums:</p>
      <MathRenderer 
        expression="\\sum_{i=1}^{n} a_i = a_1 + a_2 + \\cdots + a_n" 
        :display-mode="true" 
      />
      <p>This represents the sum from i=1 to n of terms a_i.</p>
      
      <div class="key-concepts">
        <h3>Common Summation Formulas</h3>
        <ul>
          <li><strong>Sum of first n integers:</strong> <MathRenderer expression="\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}" /></li>
          <li><strong>Sum of squares:</strong> <MathRenderer expression="\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}" /></li>
          <li><strong>Geometric series:</strong> <MathRenderer expression="\\sum_{i=0}^{n} r^i = \\frac{1-r^{n+1}}{1-r}" /></li>
        </ul>
      </div>
      
      <div class="example-section">
        <h3>Example: Sum 1 + 2 + 3 + ... + 100</h3>
        <MathRenderer 
          expression="\\sum_{i=1}^{100} i = \\frac{100 \\cdot 101}{2} = 5050" 
          :display-mode="true" 
        />
      </div>
    </div>
  `
}

const subtopicComponents = {
  quadratics: QuadraticsContent,
  linear: LinearContent,
  exponentials: ExponentialsContent,
  summation: SummationContent
}

const currentSubtopicComponent = computed(() => {
  return subtopicComponents[activeSubtopic.value]
})

const selectSubtopic = (subtopicId) => {
  activeSubtopic.value = subtopicId
}
</script>

<style scoped>
/* Bootstrap-based styling with minimal custom overrides */
.subtopic-card {
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.subtopic-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.subtopic-card.border-primary {
  border-color: var(--bs-primary) !important;
  background-color: rgba(var(--bs-primary-rgb), 0.05);
}

/* Interactive elements enhancement */
.form-range:focus {
  box-shadow: 0 0 0 0.2rem rgba(var(--bs-primary-rgb), 0.25);
}

.btn-check:checked + .btn {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  color: white;
}

/* Ensure math rendering looks good */
.katex {
  font-size: 1.1em;
}

.katex-display {
  margin: 1rem 0;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .sticky-top {
    position: relative !important;
    top: auto !important;
  }
  
  .display-4 {
    font-size: 2rem;
  }
}
</style>