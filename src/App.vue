<template>
  <div id="app" class="app-container">
    <header class="app-header">
      <h1>🐍 Snake Math</h1>
      <p>Interactive Mathematics Learning Platform</p>
    </header>
    
    <div class="app-content">
      <TopicSidebar 
        :topics="mathTopics"
        :active-topic="activeTopic"
        @topic-change="handleTopicChange"
      />
      
      <main class="main-content">
        <component 
          :is="currentTopicComponent" 
          :key="activeTopic"
        />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TopicSidebar from '@/components/common/TopicSidebar.vue'
import BasicsContent from '@/components/topics/BasicsContent.vue'
import AlgebraContent from '@/components/topics/AlgebraContent.vue'
import StatisticsContent from '@/components/topics/StatisticsContent.vue'
import TrigonometryContent from '@/components/topics/TrigonometryContent.vue'
import LinearAlgebraContent from '@/components/topics/LinearAlgebraContent.vue'
import CalculusContent from '@/components/topics/CalculusContent.vue'

const activeTopic = ref('basics')

const mathTopics = [
  { id: 'basics', title: 'Basics', icon: '📚' },
  { id: 'algebra', title: 'Algebra', icon: '🔢' },
  { id: 'statistics', title: 'Statistics', icon: '📊' },
  { id: 'trigonometry', title: 'Trigonometry', icon: '📐' },
  { id: 'linear-algebra', title: 'Linear Algebra', icon: '🔺' },
  { id: 'calculus', title: 'Calculus', icon: '∫' }
]

const topicComponents = {
  basics: BasicsContent,
  algebra: AlgebraContent,
  statistics: StatisticsContent,
  trigonometry: TrigonometryContent,
  'linear-algebra': LinearAlgebraContent,
  calculus: CalculusContent
}

const currentTopicComponent = computed(() => {
  return topicComponents[activeTopic.value] || BasicsContent
})

const handleTopicChange = (topicId) => {
  activeTopic.value = topicId
}
</script>

<style>
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --accent-color: #f59e0b;
  --text-color: #1f2937;
  --bg-color: #f9fafb;
  --border-color: #e5e7eb;
  --sidebar-width: 280px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: var(--text-color);
  background-color: var(--bg-color);
}

.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: white;
  padding: 1.5rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;
}

.app-header h1 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.app-content {
  display: flex;
  flex: 1;
  min-height: calc(100vh - 100px);
}

.main-content {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .app-content {
    flex-direction: column;
  }
  
  .main-content {
    padding: 1rem;
  }
}
</style>