<template>
  <div id="app" class="app-container">
    <header class="app-header">
      <div class="header-content">
        <div class="header-title">
          <h1>🐍 Snake Math</h1>
          <p>Interactive Mathematics Learning Platform</p>
        </div>
        <div class="header-controls">
          <ThemeSwitcher />
        </div>
      </div>
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
import ThemeSwitcher from '@/components/common/ThemeSwitcher.vue'
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

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
}

.app-header {
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-primary);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-responsive-md) var(--spacing-responsive-lg);
  max-width: var(--container-2xl);
  margin: 0 auto;
  gap: var(--spacing-responsive-md);
  flex-wrap: wrap;
}

.header-title {
  flex: 1;
  min-width: 250px;
}

.header-title h1 {
  color: var(--primary-color);
  margin-bottom: var(--spacing-responsive-xs);
  font-size: var(--font-size-responsive-2xl);
  font-weight: 600;
  line-height: 1.2;
}

.header-title p {
  color: var(--text-secondary);
  margin: 0;
  font-size: var(--font-size-responsive-base);
  line-height: 1.4;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: var(--spacing-responsive-sm);
  flex-shrink: 0;
}

.app-content {
  display: flex;
  flex: 1;
  min-height: calc(100vh - var(--header-height-desktop));
  max-width: var(--container-2xl);
  margin: 0 auto;
  width: 100%;
}

.main-content {
  flex: 1;
  padding: var(--spacing-responsive-lg);
  overflow-y: auto;
  background-color: var(--bg-primary);
}

/* Tablet responsive */
@media (max-width: 1023px) and (min-width: 768px) {
  .app-content {
    min-height: calc(100vh - var(--header-height-tablet));
  }
  
  .main-content {
    padding: var(--spacing-responsive-md);
  }
}

/* Mobile responsive */
@media (max-width: 767px) {
  .header-content {
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-responsive-sm);
    gap: var(--spacing-responsive-sm);
  }
  
  .header-title {
    min-width: auto;
    text-align: center;
  }
  
  .header-title h1 {
    font-size: var(--font-size-responsive-xl);
  }
  
  .header-title p {
    font-size: var(--font-size-responsive-sm);
  }
  
  .app-content {
    flex-direction: column;
    min-height: calc(100vh - var(--header-height-mobile));
  }
  
  .main-content {
    padding: var(--spacing-responsive-sm);
  }
}

/* Extra small mobile */
@media (max-width: 475px) {
  .header-content {
    padding: var(--spacing-responsive-xs);
  }
  
  .header-title h1 {
    font-size: var(--font-size-responsive-lg);
  }
  
  .header-title p {
    font-size: var(--font-size-responsive-xs);
  }
  
  .main-content {
    padding: var(--spacing-responsive-xs);
  }
}

/* Large desktop optimization */
@media (min-width: 1536px) {
  .header-content {
    padding: var(--spacing-responsive-lg) var(--spacing-responsive-xl);
  }
  
  .main-content {
    padding: var(--spacing-responsive-xl);
  }
}
</style>