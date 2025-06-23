<template>
  <div class="algebra-content">
    <header class="topic-header">
      <h1>🔢 Algebra</h1>
      <p class="topic-description">
        Master algebraic concepts from basic equations to advanced functions
      </p>
    </header>
    
    <div class="subtopic-grid">
      <div 
        v-for="subtopic in subtopics" 
        :key="subtopic.id"
        class="subtopic-card"
        @click="selectSubtopic(subtopic.id)"
        :class="{ active: activeSubtopic === subtopic.id }"
      >
        <div class="subtopic-icon">{{ subtopic.icon }}</div>
        <h3>{{ subtopic.title }}</h3>
        <p>{{ subtopic.description }}</p>
      </div>
    </div>
    
    <div class="subtopic-content">
      <component 
        :is="currentSubtopicComponent" 
        v-if="activeSubtopic"
        :key="activeSubtopic"
      />
      <div v-else class="select-prompt">
        <p>👆 Select a topic above to begin learning</p>
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
    icon: '📈'
  },
  {
    id: 'linear',
    title: 'Linear Equations',
    description: 'Master straight lines and systems',
    icon: '📏'
  },
  {
    id: 'exponentials',
    title: 'Exponentials & Logs',
    description: 'Growth, decay, and logarithms',
    icon: '📊'
  },
  {
    id: 'summation',
    title: 'Summation Notation',
    description: 'Sum sequences with sigma notation',
    icon: 'Σ'
  }
]

// Simple content components for each subtopic
const QuadraticsContent = {
  components: { MathRenderer },
  template: `
    <div class="content-section">
      <h2>Quadratic Functions</h2>
      <p>A quadratic function has the standard form:</p>
      <MathRenderer 
        expression="f(x) = ax^2 + bx + c" 
        :display-mode="true" 
      />
      <p>Where a ≠ 0, and the graph forms a parabola.</p>
      
      <div class="key-concepts">
        <h3>Key Properties</h3>
        <ul>
          <li><strong>Vertex:</strong> The highest or lowest point of the parabola</li>
          <li><strong>Axis of symmetry:</strong> Vertical line through the vertex</li>
          <li><strong>Discriminant:</strong> <MathRenderer expression="b^2 - 4ac" /> determines number of roots</li>
        </ul>
      </div>
      
      <div class="example-section">
        <h3>Example: Solving x² - 5x + 6 = 0</h3>
        <p>Using the quadratic formula:</p>
        <MathRenderer 
          expression="x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}" 
          :display-mode="true" 
        />
        <p>With a = 1, b = -5, c = 6:</p>
        <MathRenderer 
          expression="x = \\frac{5 \\pm \\sqrt{25 - 24}}{2} = \\frac{5 \\pm 1}{2}" 
          :display-mode="true" 
        />
        <p>Solutions: x = 3 or x = 2</p>
      </div>
    </div>
  `
}

const LinearContent = {
  components: { MathRenderer },
  template: `
    <div class="content-section">
      <h2>Linear Equations</h2>
      <p>Linear equations form straight lines with the slope-intercept form:</p>
      <MathRenderer 
        expression="y = mx + b" 
        :display-mode="true" 
      />
      <p>Where m is the slope and b is the y-intercept.</p>
      
      <div class="key-concepts">
        <h3>Key Concepts</h3>
        <ul>
          <li><strong>Slope (m):</strong> Rate of change, rise over run</li>
          <li><strong>Y-intercept (b):</strong> Where line crosses y-axis</li>
          <li><strong>Point-slope form:</strong> <MathRenderer expression="y - y_1 = m(x - x_1)" /></li>
        </ul>
      </div>
      
      <div class="example-section">
        <h3>Example: Line through (2, 3) with slope 2</h3>
        <p>Using point-slope form:</p>
        <MathRenderer 
          expression="y - 3 = 2(x - 2)" 
          :display-mode="true" 
        />
        <p>Simplifying:</p>
        <MathRenderer 
          expression="y = 2x - 1" 
          :display-mode="true" 
        />
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
.algebra-content {
  max-width: 1000px;
  margin: 0 auto;
}

.topic-header {
  text-align: center;
  margin-bottom: 3rem;
}

.topic-header h1 {
  color: var(--primary-color);
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.topic-description {
  font-size: 1.2rem;
  color: #6b7280;
}

.subtopic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.subtopic-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  border: 2px solid transparent;
}

.subtopic-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.subtopic-card.active {
  border-color: var(--primary-color);
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
}

.subtopic-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.subtopic-card h3 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.subtopic-card p {
  color: #6b7280;
  font-size: 0.9rem;
}

.subtopic-content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-height: 400px;
}

.select-prompt {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #6b7280;
  font-size: 1.2rem;
}

.content-section h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.content-section p {
  margin-bottom: 1rem;
  line-height: 1.7;
}

.key-concepts {
  background: var(--bg-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.key-concepts h3 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.key-concepts ul {
  margin-left: 1.5rem;
}

.key-concepts li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.example-section {
  background: #f0f9ff;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 2rem;
  border-left: 4px solid var(--primary-color);
}

.example-section h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

.example-section p {
  margin-bottom: 0.8rem;
}
</style>