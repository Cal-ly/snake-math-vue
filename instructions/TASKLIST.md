# TASKLIST.md

A prioritized list of actionable development tasks. This file is updated manually or through AI prompts. New tasks from prompts or brainstorming should be added here once confirmed.

## Recurrent Tasks

These must be done after each prompt or major change:

* [ ] Update `TASKLOG.md` with summary and rationale
* [ ] Add new long-term rules to `SYSTEM-MEMORY.md` if needed

## In Progress / Next

* [ ] Apply **standard layout pattern** to remaining topic components:
  * `BasicsContent.vue` - Convert to standard layout with appropriate visualizations
  * `StatisticsContent.vue` - Add histogram/distribution graphs with standard layout
  * `TrigonometryContent.vue` - Add unit circle and wave visualizations
  * `CalculusContent.vue` - Add derivative/integral visualizations  
  * `LinearAlgebraContent.vue` - Add vector/matrix visualizations

* [ ] Create **reusable mathematical widgets** to reduce code duplication:
  * `MathCanvas.vue` - Reusable canvas with coordinate system
  * `ParameterSlider.vue` - Mathematical parameter control component
  * `EquationDisplay.vue` - Enhanced MathJaxRenderer wrapper

## Completed ✅

* [x] ~~Research and implement **MathJax** support in the project~~ ✅ COMPLETED (2025-06-26)
* [x] ~~Replace custom `MathRenderer` with MathJax where appropriate~~ ✅ COMPLETED (2025-06-26)  
* [x] ~~Refactor all interactive components into standard content card layout~~ ✅ COMPLETED (2025-06-26)
* [x] ~~Audit and standardize all algebra components for design compliance~~ ✅ COMPLETED (2025-06-26)

## Pending Evaluation

(Tasks here require clarification or confirmation before moving to In Progress)

* [ ] Evaluate lazy loading strategy for math-heavy cards in large topics
* [ ] Create widget abstraction layer for mathematical visualizations
* [ ] Implement practice problem system with interactive feedback

## 🗂 Task Meta

* Tasks are grouped into actionable, evaluative, and recurrent
* Tags or component areas may be added later for filtering (e.g. `#canvas`, `#mathjax`, `#refactor`)
