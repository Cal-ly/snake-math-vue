<template>
  <div class="math-renderer" :class="{ 'display-mode': displayMode }">
    <div ref="mathContainer" v-html="renderedMath"></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import katex from 'katex'
import 'katex/dist/katex.min.css'

const props = defineProps({
  expression: {
    type: String,
    required: true
  },
  displayMode: {
    type: Boolean,
    default: false
  }
})

const mathContainer = ref(null)

const renderedMath = computed(() => {
  try {
    return katex.renderToString(props.expression, {
      displayMode: props.displayMode,
      throwOnError: false
    })
  } catch (error) {
    console.error('KaTeX rendering error:', error)
    return `<span class="math-error">Math Error: ${props.expression}</span>`
  }
})
</script>

<style scoped>
.math-renderer {
  margin: 0.5rem 0;
}

.display-mode {
  text-align: center;
  margin: 1rem 0;
}

.math-error {
  color: #ef4444;
  font-style: italic;
}
</style>