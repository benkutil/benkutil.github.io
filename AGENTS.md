# AGENTS.md

Guidance for AI agents and human contributors working on this 11ty-based personal website.

## Project Structure

- `src/` - Content (markdown, templates, posts, notes)
  - `src/posts/` - Long-form posts and essays
  - `src/notes/` - Short notes and thoughts
- `_config/` - Modular Eleventy configuration
- `_site/` - Build output (not committed)
- `.eleventy.js` - Main config
- `docs/` - Documentation and guides

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
- Organize content in appropriate collections (`posts` vs `notes`)

**Don't:**

- Commit build artifacts (`_site/`)
- Hardcode environment values
- Break existing content
- Add unjustified dependencies
- Mix posts and notes in the same directory

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

**Pre-Commit Checklist:**

1. Site builds without errors
2. Content renders correctly
3. No broken links/assets
4. Conventional commit format followed

## Specialized Agents

The project includes specialized agents for specific tasks:

- **Writing Agent** (`.github/agents/writing-agent.md`) - Content creation and editing following the site's writing style
- **Content Collections Agent** (`.github/agents/content-collections-agent.md`) - Managing posts and notes collections, directory structure, and permalinks

When working on tasks related to these domains, consult the appropriate agent documentation.

## Content Management

### Publishing Content

See [Publishing Content Guide](docs/how-to/publishing-content.md) for detailed instructions on creating posts and notes.

**Quick Reference:**

- **Posts**: Long-form content in `src/posts/`, URL pattern `/posts/{slug}/`
- **Notes**: Short thoughts in `src/notes/`, URL pattern `/notes/{slug}/`
- Both use directory data files (`posts.json`, `notes.json`) for default configuration
- Filenames use date prefix: `YYYY-MM-DD-title.md`
- Permalinks are clean, without date prefixes

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
