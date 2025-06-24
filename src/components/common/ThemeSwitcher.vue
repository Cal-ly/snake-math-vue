<template>
  <div class="theme-switcher">
    <button
      @click="toggleTheme"
      :aria-label="themeLabel"
      class="theme-button"
      :class="{ 'theme-button--dark': isDark }"
    >
      <span class="theme-icon" :class="themeIconClass">
        {{ themeIcon }}
      </span>
      <span class="theme-text">{{ themeText }}</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

// Theme state
const isDark = ref(false)

// Computed properties for UI
const themeIcon = computed(() => isDark.value ? '🌙' : '🌞')
const themeText = computed(() => isDark.value ? 'Dark' : 'Light')
const themeLabel = computed(() => 
  `Switch to ${isDark.value ? 'light' : 'dark'} theme`
)
const themeIconClass = computed(() => ({
  'theme-icon--sun': !isDark.value,
  'theme-icon--moon': isDark.value
}))

// Theme persistence key
const THEME_STORAGE_KEY = 'snake-math-theme'

// Get stored theme preference
const getStoredTheme = () => {
  if (typeof window === 'undefined') return null
  
  try {
    return localStorage.getItem(THEME_STORAGE_KEY)
  } catch (error) {
    console.warn('Failed to read theme from localStorage:', error)
    return null
  }
}

// Store theme preference
const storeTheme = (theme) => {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch (error) {
    console.warn('Failed to store theme in localStorage:', error)
  }
}

// Get system theme preference
const getSystemTheme = () => {
  if (typeof window === 'undefined') return 'light'
  
  return window.matchMedia('(prefers-color-scheme: dark)').matches 
    ? 'dark' 
    : 'light'
}

// Apply theme to document
const applyTheme = (theme) => {
  if (typeof document === 'undefined') return
  
  // Add transition class to prevent flash
  document.documentElement.classList.add('theme-transitioning')
  
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
  
  // Remove transition class after a brief delay
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transitioning')
  }, 50)
  
  // Update state
  isDark.value = theme === 'dark'
}

// Initialize theme
const initializeTheme = () => {
  // Priority: stored preference > system preference > default (light)
  const storedTheme = getStoredTheme()
  const systemTheme = getSystemTheme()
  const initialTheme = storedTheme || systemTheme
  
  applyTheme(initialTheme)
}

// Toggle theme
const toggleTheme = () => {
  const newTheme = isDark.value ? 'light' : 'dark'
  applyTheme(newTheme)
  storeTheme(newTheme)
  
  // Emit event for other components that might need to know
  window.dispatchEvent(new CustomEvent('themeChange', {
    detail: { theme: newTheme, isDark: newTheme === 'dark' }
  }))
}

// Listen for system theme changes
const setupSystemThemeListener = () => {
  if (typeof window === 'undefined') return
  
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  
  const handleSystemThemeChange = (e) => {
    // Only apply system theme if no stored preference exists
    const storedTheme = getStoredTheme()
    if (!storedTheme) {
      const systemTheme = e.matches ? 'dark' : 'light'
      applyTheme(systemTheme)
    }
  }
  
  // Modern browsers
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleSystemThemeChange)
  } else {
    // Fallback for older browsers
    mediaQuery.addListener(handleSystemThemeChange)
  }
  
  // Return cleanup function
  return () => {
    if (mediaQuery.removeEventListener) {
      mediaQuery.removeEventListener('change', handleSystemThemeChange)
    } else {
      mediaQuery.removeListener(handleSystemThemeChange)
    }
  }
}

// Lifecycle hooks
onMounted(() => {
  initializeTheme()
  const cleanup = setupSystemThemeListener()
  
  // Cleanup on unmount
  return cleanup
})

// Watch for theme changes and emit events
watch(isDark, (newValue) => {
  // Emit Vue event for parent components
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('snake-math:theme-change', {
      detail: { 
        theme: newValue ? 'dark' : 'light',
        isDark: newValue 
      }
    }))
  }
})

// Expose methods for programmatic control
const setTheme = (theme) => {
  if (!['light', 'dark'].includes(theme)) {
    console.warn('Invalid theme:', theme)
    return
  }
  
  applyTheme(theme)
  storeTheme(theme)
}

const getCurrentTheme = () => {
  return isDark.value ? 'dark' : 'light'
}

// Make methods available to parent components
defineExpose({
  setTheme,
  getCurrentTheme,
  toggleTheme,
  isDark: computed(() => isDark.value)
})
</script>

<style scoped>
.theme-switcher {
  display: flex;
  align-items: center;
}

.theme-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  color: var(--text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  font-weight: 500;
  min-height: 40px;
  position: relative;
  overflow: hidden;
}

.theme-button:hover {
  background: var(--bg-interactive);
  border-color: var(--border-interactive);
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.theme-button:focus {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

.theme-button:active {
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.theme-button--dark {
  background: var(--bg-tertiary);
}

.theme-icon {
  font-size: 1.125rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.theme-icon--sun {
  animation: rotate-sun 0.5s ease;
}

.theme-icon--moon {
  animation: rotate-moon 0.5s ease;
}

.theme-text {
  font-size: 0.875rem;
  white-space: nowrap;
}

/* Animations */
@keyframes rotate-sun {
  from {
    transform: rotate(-90deg) scale(0.8);
    opacity: 0;
  }
  to {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
}

@keyframes rotate-moon {
  from {
    transform: rotate(90deg) scale(0.8);
    opacity: 0;
  }
  to {
    transform: rotate(0deg) scale(1);
    opacity: 1;
  }
}

/* Hover effects */
.theme-button:hover .theme-icon {
  transform: scale(1.1);
}

/* Focus ring animation */
.theme-button:focus-visible {
  animation: focus-pulse 0.3s ease;
}

@keyframes focus-pulse {
  0% {
    box-shadow: 0 0 0 0 var(--primary-color);
  }
  100% {
    box-shadow: 0 0 0 4px transparent;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .theme-button {
    border-width: 2px;
    border-color: currentColor;
  }
  
  .theme-button:hover {
    background: var(--primary-color);
    color: var(--text-inverse);
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .theme-button,
  .theme-icon {
    transition: none;
  }
  
  .theme-icon--sun,
  .theme-icon--moon {
    animation: none;
  }
  
  .theme-button:hover .theme-icon {
    transform: none;
  }
}

/* Mobile optimizations */
@media (max-width: 768px) {
  .theme-button {
    padding: 0.75rem;
    border-radius: 12px;
    min-height: 44px; /* iOS touch target minimum */
  }
  
  .theme-text {
    display: none; /* Hide text on mobile, show icon only */
  }
  
  .theme-icon {
    width: 24px;
    height: 24px;
    font-size: 1.25rem;
  }
}

/* Print styles */
@media print {
  .theme-switcher {
    display: none;
  }
}
</style>