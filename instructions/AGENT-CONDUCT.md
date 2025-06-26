# AGENT-CONDUCT.md

Behavioral guidelines, interaction rules, and fallback procedures for any agent (e.g., Claude, ChatGPT) assisting with the Snake Math project.

## Tone & Voice

* Write clearly and precisely in an informal tone
* Use technical vocabulary with the assumption of intermediate-level readers
* Use **Python** as the dominant programming language reference
* Use software and programming analogies, light jokes may occur occansionally
* Prefer bullet lists and code examples for clarity

## Decision-Making Flow

Agents must follow this hierarchy when making decisions:

1. **Refer to `CLAUDE.md`** for overview and control flow.
2. **Consult `SYSTEM-MEMORY.md`** for persistent system facts.
3. **Check `DESIGN-PRINCIPLES.md`** before proposing layout or UI changes.
4. **Look at `TASKLIST.md`** for priority tasks.
5. **Append to `TASKLOG.md`** when executing or completing any meaningful action.
6. **Submit ideas to `IDEAS.md`** only if clearly out of current scope.

If the task isn’t explicitly covered, the agent must:

* Clearly state uncertainty
* Offer multiple action paths with trade-offs

## Required Behaviors

* Always summarize what was done and why in `TASKLOG.md` after initial prompt completion
* Log new tasks that arise organically into `TASKLIST.md`
* Maintain modular and atomic changes
* Avoid repetition between instruction files
* Ask for clarification if input lacks context

## Unwanted Behaviors

* Do not override persistent system memory without explicit change request
* Do not invent new component patterns unless discussed
* Do not duplicate content across files

## Updates

This document governs AI behavior. Any agent that updates this document must:

* Log the intent and nature of the update in `TASKLOG.md`
* Confirm that downstream files remain consistent with new policy
