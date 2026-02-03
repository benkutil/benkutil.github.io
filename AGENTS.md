# AGENTS.md

Guidance for AI agents and human contributors working on this 11ty-based personal website.

## Project Structure

- `src/` - Content (markdown, templates, posts)
- `_config/` - Modular Eleventy configuration
- `_site/` - Build output (not committed)
- `.eleventy.js` - Main config

## Development

```bash
npm start              # Local dev server with live reload
npm run build:prod     # Production build
```

**Environment:** Node 20 (`.nvmrc`), optional `ELEVENTY_ENV` and `WEBMENTIONS_TOKEN`

## Git Workflow

### Conventional Commits

Follow [Conventional Commits](https://www.conventionalcommits.org/) format: `<type>: <description>`

**Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Examples: `feat: add dark mode`, `docs: update Readme.md`

### Atomic Commits

- One logical change per commit
- Independently revertible
- Avoid mixing unrelated changes

## Coding Standards

**Do:**

- Use modular config (`_config/` pattern)
- Leverage existing 11ty plugins
- Maintain semantic HTML
- Follow established patterns

**Don't:**

- Commit build artifacts (`_site/`)
- Hardcode environment values
- Break existing content
- Add unjustified dependencies

## Collaboration

**Quality Over Quantity:**

- Prefer thorough, well-tested changes over rapid iterations
- Self-review before committing
- Align with project goals

**Communication:**

- Explain **why**, not just **what** in commit messages
- Document non-obvious decisions
- Update docs when behavior changes

## Agentic Development

**For AI Agents:**

- Understand context first - review existing files
- Make minimal, necessary changes only
- Test locally with `npm start`
- Respect established conventions
- Validate builds succeed

**Agent Diary Keeping:**

All agents must maintain a session diary:

1. **Create a diary entry** at the start of each work session in `src/diary/YYYY-MM-DD-brief-description.md`
2. **Log key actions** throughout the session, including:
   - What changes were made
   - Why specific approaches were chosen
   - What outcomes were being sought
3. **Reflect on learnings** before ending the session:
   - What worked well
   - What challenges were encountered
   - What insights were gained
4. **Cross-reference posts** when helping write content - link the diary entry to related posts

**Diary Entry Format:**

```yaml
---
title: "Brief Session Description"
description: "What was accomplished in this session"
date: YYYY-MM-DD
tags:
  - diary
  - relevant-topic-tags
relatedPosts: # Optional - link to posts worked on
  - /posts/post-slug/
---

## Session Goals
What I set out to accomplish...

## Key Actions
- Action 1: Why and what outcome...
- Action 2: Why and what outcome...

## Reflections
What I learned during this session...
```

**Pre-Commit Checklist:**

1. Site builds without errors
2. Content renders correctly
3. No broken links/assets
4. Conventional commit format followed
5. Diary entry created and completed (for agents)

## Compound Engineering

**Session Evaluation:**

At the end of each session, agents should evaluate their work and propose improvements:

1. **AGENTS.md Improvements:** Review if new patterns or conventions emerged that should be documented
2. **New Agent Needs:** Identify if specialized agents in `.github/agents/` would improve efficiency (e.g., testing-agent, docs-agent, security-agent)
3. **Skill Gaps:** Suggest specific skills for `.github/skills/` that would benefit future work (e.g., 11ty-optimization, markdown-linting, accessibility-checks)

**Evaluation Questions:**

- What repetitive tasks could be automated by a specialized agent?
- What knowledge would benefit future agents working on this codebase?
- What conventions or patterns should be added to AGENTS.md?
- What tools or workflows could be standardized in skills files?

---

_Keep this document updated as the project evolves._
