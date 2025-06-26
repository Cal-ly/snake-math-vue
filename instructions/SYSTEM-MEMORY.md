# SYSTEM-MEMORY.md

Long-term facts, definitions, and conventions that should be remembered across sessions. Agents should use this as a source of truth before proposing structural or functional changes.

## Terminology

* **Topic**: A broad area of mathematics (e.g., Algebra, Calculus, Statistics).
* **Subtopic**: A specific concept or component under a topic (e.g., Quadratic Functions under Algebra).
* **Canvas**: The main content panel showing interactive visualizations.
* **Card**: A single visual block that combines text, equations, sliders, graphs, or other interactive elements.
* **Instruction Files**: Markdown-based documents used to guide, control, and log the behavior of agentic systems.

## UI & Design Standards

* Default theme: Responsive light/dark mode.
* Primary UI Color: `#10b981` (emerald)
* Background: `#ffffff` (light) / `#0f172a` (dark)
* Grid Color: `#dee2e6`
* Max Content Width: `1400px`
* Font: System UI stack
* Header Icons: FontAwesome (solid)
* Math Rendering: Use **MathJax 3** for all mathematical expressions (KaTeX removed for performance).


## Project Behavior Rules

* All updates that follow a prompt should:

  * Be logged to `TASKLOG.md`
  * Update `TASKLIST.md` if new tasks arise
* Visual content cards should always be structured:

  * Generated equation
  * Graph or visualization
  * Controls (sliders, toggles, buttons)
* Non-interactive math content must use static **MathJax** rendering
* Every markdown content page must be renderable in a Vue SPA (Single Page Application)
* Component filenames follow the format: `ConceptNameContent.vue`


## Technical Constraints

* Project is client-side only (runs fully in browser)
* Application is built in Vue 3 + Vite
* Deployed via GitHub Pages
* No runtime back-end, all data must be bundled or fetched from static assets
* Interactivity must degrade gracefully on mobile and older browsers


## Memory Principles

Agents must consult this file when:

* Proposing architectural changes
* Rendering new interactive elements
* Refactoring design or layout decisions
* Clarifying concept structure or file naming

If anything in this file becomes outdated, it must be changed explicitly and logged in `TASKLOG.md`.






# SYSTEM-MEMORY.md

Long-term facts, definitions, and conventions that should be remembered across sessions. Agents should use this as a source of truth before proposing structural or functional changes.

---

## ✅ Terminology

* **Topic**: A broad area of mathematics (e.g., Algebra, Calculus, Statistics).
* **Subtopic**: A specific concept or component under a topic (e.g., Quadratic Functions under Algebra).
* **Canvas**: The main content panel showing interactive visualizations.
* **Card**: A single visual block that combines text, equations, sliders, graphs, or other interactive elements.
* **Instruction Files**: Markdown-based documents used to guide, control, and log the behavior of agentic systems.

---

## 🎨 UI & Design Standards

* Default theme: Responsive light/dark mode.
* Primary UI Color: `#10b981` (emerald)
* Background: `#ffffff` (light) / `#0f172a` (dark)
* Grid Color: `#dee2e6`
* Max Content Width: `1400px`
* Font: System UI stack
* Header Icons: FontAwesome (solid)
* Math Rendering: Use **MathJax 3** for all mathematical expressions (KaTeX removed for performance).

---

## 🔁 Project Behavior Rules

* All updates that follow a prompt should:

  * Be logged to `TASKLOG.md`
  * Update `TASKLIST.md` if new tasks arise
* Visual content cards should always be structured:

  * Generated equation
  * Graph or visualization
  * Controls (sliders, toggles, buttons)
* Non-interactive math content must use static **MathJax** rendering
* Every markdown content page must be renderable in a Vue SPA (Single Page Application)
* Component filenames follow the format: `ConceptNameContent.vue`

---

## 🔐 Technical Constraints

* Project is client-side only (runs fully in browser)
* Application is built in Vue 3 + Vite
* Deployed via GitHub Pages
* No runtime back-end, all data must be bundled or fetched from static assets
* Interactivity must degrade gracefully on mobile and older browsers

---

## 🧠 Memory Principles

Agents must consult this file when:

* Proposing architectural changes
* Rendering new interactive elements
* Refactoring design or layout decisions
* Clarifying concept structure or file naming

If anything in this file becomes outdated, it must be changed explicitly and logged in `TASKLOG.md`.

---
