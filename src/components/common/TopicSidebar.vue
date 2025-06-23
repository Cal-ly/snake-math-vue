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
  width: var(--sidebar-width);
  background: white;
  border-right: 1px solid var(--border-color);
  padding: 2rem 0;
}

.topic-nav h2 {
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--text-color);
  font-size: 1.2rem;
}

.topic-list {
  list-style: none;
}

.topic-item {
  margin-bottom: 0.5rem;
}

.topic-button {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--text-color);
}

.topic-button:hover {
  background: var(--bg-color);
}

.topic-button.active {
  background: var(--primary-color);
  color: white;
}

.topic-icon {
  font-size: 1.2rem;
}

.topic-title {
  font-weight: 500;
}

@media (max-width: 768px) {
  .topic-sidebar {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    padding: 1rem 0;
  }
  
  .topic-list {
    display: flex;
    overflow-x: auto;
    gap: 0.5rem;
    padding: 0 1rem;
  }
  
  .topic-item {
    margin-bottom: 0;
    flex-shrink: 0;
  }
  
  .topic-button {
    white-space: nowrap;
    border-radius: 20px;
    padding: 0.75rem 1rem;
  }
}
</style>