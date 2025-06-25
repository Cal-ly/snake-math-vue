<template>
  <div class="row">
    <div class="col-lg-8">
      <div class="card mb-4">
        <div class="card-header bg-primary text-white">
          <h2 class="h4 mb-0"><i class="fas fa-sigma me-2"></i>Summation Notation</h2>
        </div>
        <div class="card-body">
          <p class="lead">Summation notation is the mathematical equivalent of a <code>for</code> loop—it's a compact way to express "add up all these values from i=start to i=end". Perfect for algorithm analysis!</p>
          
          <div class="alert alert-info" role="alert">
            <strong>Sigma Notation:</strong> Mathematical for-loop syntax
          </div>
          <MathRenderer 
            expression="\\sum_{i=1}^{n} a_i = a_1 + a_2 + \\cdots + a_n" 
            :display-mode="true" 
          />
          <p>This represents the sum from <code>i=1</code> to <code>n</code> of terms <code>a_i</code>.</p>
        </div>
      </div>
      
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="h5 mb-0"><i class="fas fa-sliders-h me-2"></i>Interactive Summation</h3>
        </div>
        <div class="card-body">
          <div class="row g-3 mb-4">
            <div class="col-md-4">
              <label class="form-label">Start (lower limit): <span class="badge bg-primary">{{ startIndex }}</span></label>
              <input type="range" class="form-range" v-model.number="startIndex" min="1" max="10" step="1">
            </div>
            <div class="col-md-4">
              <label class="form-label">End (upper limit): <span class="badge bg-primary">{{ endIndex }}</span></label>
              <input type="range" class="form-range" v-model.number="endIndex" :min="startIndex" max="20" step="1">
            </div>
            <div class="col-md-4">
              <label class="form-label">Function type:</label>
              <select class="form-select" v-model="functionType">
                <option value="identity">i (identity)</option>
                <option value="square">i² (squares)</option>
                <option value="cube">i³ (cubes)</option>
                <option value="even">2i (even numbers)</option>
                <option value="geometric">2^i (powers of 2)</option>
              </select>
            </div>
          </div>
          
          <div class="current-summation text-center p-3 bg-light rounded mb-3">
            <MathRenderer 
              :expression="summationExpression" 
              :display-mode="true" 
            />
          </div>
          
          <div class="alert alert-success" role="alert">
            <strong>Result:</strong> {{ calculatedSum }}
            <span v-if="hasFormula" class="ms-3">
              <strong>Formula:</strong> {{ formulaResult }}
            </span>
          </div>
        </div>
      </div>
      
      <div class="card mb-4">
        <div class="card-header">
          <h3 class="h5 mb-0"><i class="fas fa-code me-2"></i>Programming Equivalent</h3>
        </div>
        <div class="card-body">
          <pre class="bg-dark text-light p-3 rounded"><code>{{ codeEquivalent }}</code></pre>
          <p class="small text-muted mt-2">This summation translates directly to a for-loop in any programming language.</p>
        </div>
      </div>
    </div>
    
    <div class="col-lg-4">
      <div class="card sticky-top" style="top: 2rem;">
        <div class="card-header">
          <h3 class="h6 mb-0"><i class="fas fa-list-ol me-2"></i>Term Breakdown</h3>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-sm">
              <thead>
                <tr>
                  <th>i</th>
                  <th>{{ functionLabel }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in termRange" :key="i">
                  <td>{{ i }}</td>
                  <td>{{ calculateTerm(i) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div class="mt-3">
            <h6>Sum: {{ terms.join(' + ') }} = {{ calculatedSum }}</h6>
          </div>
          
          <div class="mt-3">
            <h6>Common Formulas:</h6>
            <ul class="small mb-0">
              <li><MathRenderer expression="\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}" /></li>
              <li><MathRenderer expression="\\sum_{i=1}^{n} i^2 = \\frac{n(n+1)(2n+1)}{6}" /></li>
              <li><MathRenderer expression="\\sum_{i=0}^{n} r^i = \\frac{1-r^{n+1}}{1-r}" /></li>
            </ul>
          </div>
          
          <div class="mt-3">
            <h6>Algorithm Analysis:</h6>
            <p class="small">Summations appear in:</p>
            <ul class="small mb-0">
              <li>Time complexity calculations</li>
              <li>Loop analysis</li>
              <li>Average case scenarios</li>
              <li>Data structure operations</li>
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

const startIndex = ref(1)
const endIndex = ref(5)
const functionType = ref('identity')

const functionConfig = {
  identity: { label: 'i', expr: 'i', calc: (i) => i },
  square: { label: 'i²', expr: 'i^2', calc: (i) => i * i },
  cube: { label: 'i³', expr: 'i^3', calc: (i) => i * i * i },
  even: { label: '2i', expr: '2i', calc: (i) => 2 * i },
  geometric: { label: '2^i', expr: '2^i', calc: (i) => Math.pow(2, i) }
}

const summationExpression = computed(() => {
  const config = functionConfig[functionType.value]
  return `\\sum_{i=${startIndex.value}}^{${endIndex.value}} ${config.expr}`
})

const functionLabel = computed(() => {
  return functionConfig[functionType.value].label
})

const termRange = computed(() => {
  const range = []
  for (let i = startIndex.value; i <= endIndex.value; i++) {
    range.push(i)
  }
  return range
})

const calculateTerm = (i) => {
  return functionConfig[functionType.value].calc(i)
}

const terms = computed(() => {
  return termRange.value.map(i => calculateTerm(i))
})

const calculatedSum = computed(() => {
  return terms.value.reduce((sum, term) => sum + term, 0)
})

const hasFormula = computed(() => {
  return functionType.value === 'identity' || functionType.value === 'square'
})

const formulaResult = computed(() => {
  const n = endIndex.value
  const start = startIndex.value
  
  if (functionType.value === 'identity' && start === 1) {
    return `${n}(${n}+1)/2 = ${n * (n + 1) / 2}`
  } else if (functionType.value === 'square' && start === 1) {
    return `${n}(${n}+1)(${2*n}+1)/6 = ${n * (n + 1) * (2*n + 1) / 6}`
  }
  return ''
})

const codeEquivalent = computed(() => {
  const config = functionConfig[functionType.value]
  return `let sum = 0;
for (let i = ${startIndex.value}; i <= ${endIndex.value}; i++) {
    sum += ${config.label.replace('i', 'i')};
}
// sum = ${calculatedSum.value}`
})
</script>

<style scoped>
pre code {
  font-size: 0.875rem;
  line-height: 1.4;
}

/* Responsive adjustments */
@media (max-width: 767px) {
  .sticky-top {
    position: relative !important;
    top: auto !important;
  }
}
</style>