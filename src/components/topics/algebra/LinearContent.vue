<template>
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
                :expression="`m = \\frac{${point2Y} - ${point1Y}}{${point2X} - ${point1X}} = ${calculatedSlope}`" 
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
</template>

<script setup>
import { ref, computed } from 'vue'
import MathRenderer from '@/components/common/MathRenderer.vue'

const slope = ref(2)
const yIntercept = ref(-1)
const point1X = ref(0)
const point1Y = ref(0)
const point2X = ref(3)
const point2Y = ref(5)
const usePoints = ref(false)

const calculatedSlope = computed(() => {
  if (point2X.value === point1X.value) return 'Undefined (vertical line)'
  const m = (point2Y.value - point1Y.value) / (point2X.value - point1X.value)
  return m.toFixed(2)
})

const pointSlopeForm = computed(() => {
  return `y - ${point1Y.value} = ${calculatedSlope.value}(x - ${point1X.value})`
})

const slopeInterceptForm = computed(() => {
  if (usePoints.value) {
    const m = parseFloat(calculatedSlope.value)
    const b = point1Y.value - m * point1X.value
    return `y = ${m.toFixed(2)}x + ${b.toFixed(2)}`
  }
  return `y = ${slope.value}x + ${yIntercept.value}`
})
</script>

<style scoped>
.btn-check:checked + .btn {
  background-color: var(--bs-primary);
  border-color: var(--bs-primary);
  color: white;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .sticky-top {
    position: relative !important;
    top: auto !important;
  }
}
</style>