<template>
  <aside class="topic-sidebar">
    <nav class="topic-nav">
      <h2>Topics</h2>
      <ul class="topic-list">
        <li 
          v-for="topic in topics" 
          :key="topic.id"
          class="topic-item"
        >
          <button 
            @click="$emit('topic-change', topic.id)"
            :class="['topic-button', { active: activeTopic === topic.id }]"
          >
            <span class="topic-icon">{{ topic.icon }}</span>
            <span class="topic-title">{{ topic.title }}</span>
          </button>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup>
defineProps({
  topics: {
    type: Array,
    required: true
  },
  activeTopic: {
    type: String,
    required: true
  }
})

defineEmits(['topic-change'])
</script>

<style scoped>
.topic-sidebar {
  width: var(--sidebar-width-desktop);
  background: var(--bg-secondary);
  border-right: 1px solid var(--border-primary);
  padding: var(--spacing-responsive-lg) 0;
  min-height: 100%;
  flex-shrink: 0;
}

.topic-nav h2 {
  padding: 0 var(--spacing-responsive-md);
  margin-bottom: var(--spacing-responsive-lg);
  color: var(--text-primary);
  font-size: var(--font-size-responsive-lg);
  font-weight: 600;
}

.topic-list {
  list-style: none;
}

.topic-item {
  margin-bottom: var(--spacing-responsive-xs);
}

.topic-button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-responsive-sm);
  padding: var(--spacing-responsive-sm) var(--spacing-responsive-md);
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-primary);
  font-size: var(--font-size-responsive-sm);
  border-radius: 0;
  position: relative;
  min-height: var(--touch-target-min);
}

.topic-button:hover {
  background: var(--bg-interactive);
  color: var(--primary-color);
}

.topic-button:focus {
  outline: 2px solid var(--border-focus);
  outline-offset: -2px;
  border-radius: 4px;
}

.topic-button.active {
  background: var(--primary-color);
  color: var(--text-inverse);
  font-weight: 500;
}

.topic-button.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--accent-color);
}

.topic-icon {
  font-size: var(--font-size-responsive-lg);
  min-width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.topic-title {
  font-weight: 500;
  flex: 1;
  line-height: 1.3;
}

/* Tablet responsive */
@media (max-width: 1023px) and (min-width: 768px) {
  .topic-sidebar {
    width: var(--sidebar-width-tablet);
  }
  
  .topic-nav h2 {
    font-size: var(--font-size-responsive-base);
    padding: 0 var(--spacing-responsive-sm);
    margin-bottom: var(--spacing-responsive-md);
  }
  
  .topic-button {
    padding: var(--spacing-responsive-xs) var(--spacing-responsive-sm);
    gap: var(--spacing-responsive-xs);
  }
  
  .topic-title {
    font-size: var(--font-size-responsive-xs);
  }
  
  .topic-icon {
    font-size: var(--font-size-responsive-base);
    min-width: 20px;
  }
}

/* Mobile responsive */
@media (max-width: 767px) {
  .topic-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border-primary);
    padding: var(--spacing-responsive-sm) 0;
    min-height: auto;
  }
  
  .topic-nav h2 {
    padding: 0 var(--spacing-responsive-sm);
    margin-bottom: var(--spacing-responsive-sm);
    font-size: var(--font-size-responsive-base);
    text-align: center;
  }
  
  .topic-list {
    display: flex;
    overflow-x: auto;
    gap: var(--spacing-responsive-xs);
    padding: 0 var(--spacing-responsive-sm);
    scrollbar-width: thin;
    scrollbar-color: var(--border-primary) transparent;
  }
  
  .topic-list::-webkit-scrollbar {
    height: 6px;
  }
  
  .topic-list::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .topic-list::-webkit-scrollbar-thumb {
    background: var(--border-primary);
    border-radius: 3px;
  }
  
  .topic-item {
    margin-bottom: 0;
    flex-shrink: 0;
  }
  
  .topic-button {
    white-space: nowrap;
    border-radius: 20px;
    padding: var(--spacing-responsive-xs) var(--spacing-responsive-sm);
    min-width: auto;
    gap: var(--spacing-responsive-xs);
    min-height: var(--touch-target-comfortable);
  }
  
  .topic-button.active::before {
    display: none;
  }
  
  .topic-title {
    font-size: var(--font-size-responsive-xs);
  }
  
  .topic-icon {
    font-size: var(--font-size-responsive-sm);
    min-width: 18px;
  }
}

/* Extra small mobile */
@media (max-width: 475px) {
  .topic-nav h2 {
    font-size: var(--font-size-responsive-sm);
  }
  
  .topic-button {
    padding: var(--spacing-responsive-xs);
    border-radius: 16px;
  }
  
  .topic-title {
    display: none; /* Show icons only on very small screens */
  }
  
  .topic-icon {
    font-size: var(--font-size-responsive-lg);
    min-width: 24px;
  }
}

/* Large desktop */
@media (min-width: 1280px) {
  .topic-button {
    padding: var(--spacing-responsive-md) var(--spacing-responsive-lg);
    gap: var(--spacing-responsive-md);
  }
  
  .topic-title {
    font-size: var(--font-size-responsive-base);
  }
  
  .topic-icon {
    font-size: var(--font-size-responsive-xl);
    min-width: 28px;
  }
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .topic-button {
    border: 1px solid transparent;
  }
  
  .topic-button:hover,
  .topic-button:focus {
    border-color: currentColor;
  }
  
  .topic-button.active {
    border-color: var(--text-inverse);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .topic-button {
    transition: none;
  }
}

/* Print styles */
@media print {
  .topic-sidebar {
    display: none;
  }
}
</style>