<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card mb-4">
        <div class="card-header bg-primary text-white">
          <h2 class="h4 mb-0"><i class="fas fa-chart-area me-2"></i>Exponential Functions</h2>
        </div>
        <div class="card-body">
          <p class="lead">Exponentials are the "compound interest" of mathematics—small changes create massive effects over time. In programming, think of them as recursive functions that grow or shrink at accelerating rates.</p>
          
          <div class="alert alert-info" role="alert">
            <strong>General Form:</strong> Perfect for modeling growth and decay
          </div>
          <MathRenderer 
            expression="f(x) = a \\cdot b^x" 
            :display-mode="true" 
          />
          <p>Where <code>a > 0</code> (initial value) and <code>b > 0, b ≠ 1</code> (growth/decay factor).</p>
        </div>
      </div>
      
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="h5 mb-0"><i class="fas fa-sliders-h me-2"></i>Interactive Explorer</h3>
        </div>
        <div class="card-body">
          <div class="row g-3 mb-4">
            <div class="col-md-6">
              <label class="form-label">Initial Value (a): <span class="badge bg-primary">{{ a }}</span></label>
              <input type="range" class="form-range" v-model.number="a" min="0.1" max="10" step="0.1">
              <small class="text-muted">Starting amount (y-intercept)</small>
            </div>
            <div class="col-md-6">
              <label class="form-label">Base (b): <span class="badge bg-primary">{{ b }}</span></label>
              <input type="range" class="form-range" v-model.number="b" min="0.1" max="3" step="0.1">
              <small class="text-muted">Growth factor (b > 1: growth, b < 1: decay)</small>
            </div>
          </div>
          
          <div class="current-equation text-center p-3 bg-light rounded mb-3">
            <MathRenderer 
              :expression="`f(x) = ${a} \\\\cdot ${b}^x`" 
              :display-mode="true" 
            />
          </div>
          
          <div class="alert" :class="growthType.class" role="alert">
            <strong>{{ growthType.label }}:</strong> {{ growthType.description }}
          </div>
        </div>
      </div>
      
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="h5 mb-0"><i class="fas fa-code me-2"></i>Programming Applications</h3>
        </div>
        <div class="card-body">
          <div class="row g-3">
            <div class="col-md-6">
              <h6><i class="fas fa-server me-2"></i>Server Load</h6>
              <p class="small">If each user invites 2 friends:</p>
              <MathRenderer expression="users(day) = 1 \\cdot 2^{day}" />
            </div>
            <div class="col-md-6">
              <h6><i class="fas fa-memory me-2"></i>Cache Decay</h6>
              <p class="small">Memory cleanup over time:</p>
              <MathRenderer expression="memory(t) = 100 \\cdot 0.9^t" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="col-lg-4">
      <div class="card sticky-top" style="top: 2rem;">
        <div class="card-header">
          <h3 class="h6 mb-0"><i class="fas fa-calculator me-2"></i>Function Values</h3>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th>x</th>
                  <th>f(x)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="x in sampleXValues" :key="x">
                  <td>{{ x }}</td>
                  <td>{{ calculateFunctionValue(x) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="mt-3">
            <h6>Key Properties:</h6>
            <ul class="small mb-0">
              <li><strong>Domain:</strong> All real numbers</li>
              <li><strong>Range:</strong> (0, ∞)</li>
              <li><strong>Y-intercept:</strong> {{ a }}</li>
              <li><strong>Horizontal asymptote:</strong> y = 0</li>
              <li><strong>Rate:</strong> {{ ((b - 1) * 100).toFixed(1) }}% per unit</li>
            </ul>
          </div>
          
          <div class="mt-3">
            <h6>Logarithmic Inverse:</h6>
            <MathRenderer 
              :expression="`\\\\log_${b}(y) = x`" 
              :display-mode="false" 
            />
            <small class="text-muted">Useful for finding when f(x) = specific value</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import MathRenderer from '@/components/common/MathRenderer.vue'

const a = ref(2)
const b = ref(1.5)

const sampleXValues = [0, 1, 2, 3, 4, 5]

const growthType = computed(() => {
  if (b.value > 1) {
    return {
      label: 'Exponential Growth',
      description: 'Function increases rapidly as x increases',
      class: 'alert-success'
    }
  } else if (b.value < 1) {
    return {
      label: 'Exponential Decay', 
      description: 'Function decreases rapidly as x increases',
      class: 'alert-warning'
    }
  } else {
    return {
      label: 'Constant Function',
      description: 'Function remains constant (not exponential)',
      class: 'alert-info'
    }
  }
})

const calculateFunctionValue = (x) => {
  const result = a.value * Math.pow(b.value, x)
  return result.toFixed(2)
}
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