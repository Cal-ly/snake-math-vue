# WORKFLOW.md

This document prescribes the systematic workflow for working with the Snake Math Vue project instruction files to ensure consistency, proper task tracking, and comprehensive documentation updates.

## 🎯 Purpose

This workflow ensures that:
- All changes are properly documented and tracked
- Instruction files remain synchronized and accurate
- Task progression follows established patterns
- Knowledge is preserved across sessions
- Future agents can seamlessly continue work

## 📋 Core Workflow Pattern

### **Phase 1: Orientation & Planning**

1. **Read CLAUDE.md** (Required - Entry Point)
   - Review project overview and current state
   - Understand architecture and development guidelines
   - Check file organization and dependencies

2. **Review HANDOFF.md** (Required)
   - Understand current implementation status
   - Check completed features and next priorities
   - Review technical status and build metrics

3. **Check TASKLIST.md** (Required)
   - Identify current "In Progress / Next" tasks
   - Review completed tasks for context
   - Understand task priority order

4. **Consult SYSTEM-MEMORY.md** (When Making Design Decisions)
   - Verify design standards and constraints
   - Check UI standards and technical requirements
   - Ensure compliance with established patterns

5. **Reference DESIGN-PRINCIPLES.md** (When Building Components)
   - Follow component architecture patterns
   - Use established styling and layout standards
   - Apply consistent mathematical visualization patterns

6. **Check CONTENT.md** (When Working with Content)
   - Understand existing implemented content
   - Plan new content following established patterns
   - Reference component locations and purposes

### **Phase 2: Task Execution**

7. **Create TodoWrite Tasks** (When Starting Work)
   - Break down complex tasks into specific actionable items
   - Set proper status (pending → in_progress → completed)
   - Use high/medium/low priority appropriately

8. **Follow AGENT-CONDUCT.md** (Throughout Execution)
   - Maintain proper tone and technical standards
   - Follow decision-making hierarchy
   - Apply required behaviors and avoid unwanted ones

9. **Execute Technical Work**
   - Follow established patterns from DESIGN-PRINCIPLES.md
   - Maintain consistency with SYSTEM-MEMORY.md standards
   - Reference existing implementations in CONTENT.md

### **Phase 3: Documentation & Closure**

10. **Update TASKLOG.md** (Required After All Work)
    - Add new session entry with intent and changes
    - Document each significant change with rationale ("Why")
    - Include technical details and impact assessment
    - Update current status summary

11. **Update Relevant Instruction Files** (As Needed)
    - **CLAUDE.md**: Update current state, build metrics, implemented features
    - **HANDOFF.md**: Update completed features, technical status, next steps
    - **TASKLIST.md**: Mark completed tasks, add new tasks discovered
    - **SYSTEM-MEMORY.md**: Add new persistent rules or update standards
    - **CONTENT.md**: Document new content implementations
    - **DESIGN-PRINCIPLES.md**: Update patterns or add new standards

12. **Verify Consistency** (Before Completion)
    - Ensure all metrics are synchronized across files
    - Check that references are updated (e.g., component names)
    - Verify task completion is reflected across relevant files

## 🔄 Specific Update Triggers

### **When to Update Each File:**

**CLAUDE.md** - Update when:
- Project architecture changes
- Build system or dependencies change
- Core features are implemented
- File organization changes
- Development guidelines need updates

**HANDOFF.md** - Update when:
- Major features are completed
- Build metrics change significantly
- Technical status changes
- Next priorities shift
- New patterns are established

**TASKLIST.md** - Update when:
- Tasks are completed
- New tasks are identified
- Priorities change
- Tasks become blocked or require clarification

**TASKLOG.md** - Update after:
- Every significant work session
- Completing any meaningful changes
- Implementing new features
- Fixing important issues
- Making architectural decisions

**SYSTEM-MEMORY.md** - Update when:
- Design standards change
- New technical constraints emerge
- UI standards are modified
- Component patterns are established
- Persistent rules need updates

**CONTENT.md** - Update when:
- New content components are implemented
- Existing content is significantly modified
- Component locations change
- Dependencies are updated
- Planned content roadmap changes

**DESIGN-PRINCIPLES.md** - Update when:
- New component patterns are established
- Styling standards are modified
- Template patterns change
- Implementation checklists need updates
- Canvas or visualization patterns evolve

## 📝 Documentation Standards

### **TASKLOG.md Entry Format:**
```markdown
## Session: YYYY-MM-DD (Session Purpose)

### Task: [Brief Task Description]

**Intent**: [Why this work was needed and what problem it solves]

**Changes Made**:

[Number]. **[Change Title]** - [Brief description]
    - [Action]: [Specific technical change made]
    - [Impact]: [What this affects or enables]
    - Why: [Rationale for this specific approach]
    - Result: [Outcome and current state]

**Summary of [Session Purpose]**:
- ✅ [Completed item 1]
- ✅ [Completed item 2]
- ✅ [Completed item N]

**Current Status**: [Overall project state after changes]
```

### **Task Naming Conventions:**
- **Feature Implementation**: "Implement [Feature Name]"
- **Bug Fixes**: "Fix [Issue Description]"
- **Refactoring**: "Refactor [Component/System] for [Purpose]"
- **Design Changes**: "Standardize [Component] design"
- **Performance**: "Optimize [System] performance"

### **Priority Guidelines:**
- **High**: Critical for core functionality or blocking other work
- **Medium**: Important improvements or planned features
- **Low**: Nice-to-have enhancements or optimizations

## 🚨 Critical Rules

### **Always Required:**
1. **Update TASKLOG.md** after any meaningful work
2. **Mark TodoWrite tasks as completed** immediately upon finishing
3. **Verify instruction file consistency** before ending session
4. **Follow SYSTEM-MEMORY.md standards** for all design decisions

### **Never Skip:**
1. Reading CLAUDE.md at the start of new work
2. Documenting the "why" behind changes in TASKLOG.md
3. Updating build metrics when they change
4. Marking completed tasks in TASKLIST.md

### **Warning Triggers:**
- If TASKLOG.md hasn't been updated in current session → Update required
- If TodoWrite shows completed tasks not marked → Mark as completed
- If instruction files reference outdated information → Update needed
- If new patterns are used without documentation → Document in DESIGN-PRINCIPLES.md

## 🔍 Quality Checks

### **Before Ending Any Session:**
- [ ] TASKLOG.md updated with session summary
- [ ] TodoWrite tasks properly marked as completed
- [ ] Relevant instruction files updated
- [ ] Build metrics synchronized across files
- [ ] Component references updated (if applicable)
- [ ] Next priorities clearly identified in TASKLIST.md

### **When Creating New Components:**
- [ ] Follows DESIGN-PRINCIPLES.md patterns
- [ ] Complies with SYSTEM-MEMORY.md standards
- [ ] Added to CONTENT.md documentation
- [ ] Implementation logged in TASKLOG.md

### **When Making Architectural Changes:**
- [ ] CLAUDE.md updated with new architecture
- [ ] HANDOFF.md reflects new technical status
- [ ] SYSTEM-MEMORY.md updated if standards change
- [ ] Impact documented in TASKLOG.md

## 🎯 Success Metrics

A successful workflow session should result in:
- ✅ Clear documentation of all work performed
- ✅ Synchronized instruction files with current project state
- ✅ Proper task tracking and completion marking
- ✅ Future agents can understand and continue the work
- ✅ Established patterns are followed and maintained

## 📚 Quick Reference

**Start Every Session**: CLAUDE.md → HANDOFF.md → TASKLIST.md
**During Work**: Follow DESIGN-PRINCIPLES.md + SYSTEM-MEMORY.md standards
**End Every Session**: Update TASKLOG.md + relevant instruction files + TodoWrite completion

**Emergency Recovery**: If unsure about project state, read instruction files in this order:
1. CLAUDE.md (overview)
2. TASKLOG.md (recent history)
3. HANDOFF.md (current status)
4. TASKLIST.md (next steps)

---

**Document Purpose**: Ensure systematic, consistent, and comprehensive workflow execution
**Last Updated**: 2025-06-26
**Compliance**: All agents must follow this workflow for project consistency