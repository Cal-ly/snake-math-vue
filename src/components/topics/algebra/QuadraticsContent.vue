<template>
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
              :expression="`f(x) = ${a}x^2 + ${b}x + ${c}`" 
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
              :expression="`x = \\frac{-(${b}) \\pm \\sqrt{(${b})^2 - 4(${a})(${c})}}{2(${a})}`" 
              :display-mode="true" 
            />
            <MathRenderer 
              :expression="`x = \\frac{${-b} \\pm \\sqrt{${discriminant.toFixed(2)}}}{${2*a}}`" 
              :display-mode="true" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MathRenderer from '@/components/common/MathRenderer.vue'

const a = ref(1)
const b = ref(-5)
const c = ref(6)
const showSolution = ref(false)

const discriminant = computed(() => {
  return b.value * b.value - 4 * a.value * c.value
})

const vertex = computed(() => {
  const x = -b.value / (2 * a.value)
  const y = a.value * x * x + b.value * x + c.value
  return { x: x.toFixed(2), y: y.toFixed(2) }
})

const solutions = computed(() => {
  if (discriminant.value < 0) return 'No real solutions'
  if (discriminant.value === 0) {
    const x = -b.value / (2 * a.value)
    return `x = ${x.toFixed(2)}`
  }
  const x1 = (-b.value + Math.sqrt(discriminant.value)) / (2 * a.value)
  const x2 = (-b.value - Math.sqrt(discriminant.value)) / (2 * a.value)
  return `x = ${x1.toFixed(2)} or x = ${x2.toFixed(2)}`
})
</script>

<style scoped>
/* Responsive adjustments */
@media (max-width: 767px) {
  .sticky-top {
    position: relative !important;
    top: auto !important;
  }
}
</style>