# How To: Publishing Content

This guide explains how to publish posts and notes on this 11ty-based personal website.

## Content Types

The site supports two types of content:

- **Posts** - Longer-form content, essays, and in-depth articles
- **Notes** - Short thoughts, quick observations, and brief updates

Both content types are organized in separate directories and use distinct URL patterns.

## Directory Structure

```
src/
├── posts/          # Long-form posts
│   ├── posts.json  # Collection configuration
│   └── *.md        # Post files
└── notes/          # Short notes
    ├── notes.json  # Collection configuration
    └── *.md        # Note files
```

## Publishing a Post

### 1. Create a new file in `src/posts/`

Name your file with a date prefix for organization (e.g., `YYYY-MM-DD-title.md`):

```bash
src/posts/2026-02-03-my-new-post.md
```

### 2. Add front matter

Every post needs YAML front matter at the top:

```yaml
---
title: "Your Post Title"
description: "Brief description of your post (optional)"
layout: layouts/content.njk
tags:
  - posts
  - additional-tag # Optional: add other tags
---
```

### 3. Write your content

Add your content below the front matter using Markdown:

```markdown
---
title: "My Thoughts on Technology"
description: "Exploring the intersection of tech and society"
layout: layouts/content.njk
tags:
  - posts
  - technology
---

This is the beginning of my post...

## Section Heading

More content here.
```

### 4. Preview locally

```bash
npm start
```

Your post will be available at: `http://localhost:8080/posts/my-new-post/`

### 5. Build for production

```bash
npm run build:prod
```

## Publishing a Note

### 1. Create a new file in `src/notes/`

Name your file with a date prefix (e.g., `YYYY-MM-DD-title.md`):

```bash
src/notes/2026-02-03-quick-thought.md
```

### 2. Add front matter

Notes use simpler front matter:

```yaml
---
title: "Quick Thought Title"
layout: layouts/content.njk
tags: notes
---
```

### 3. Write your content

Keep it brief and focused:

```markdown
---
title: "Observations on remote work"
layout: layouts/content.njk
tags: notes
---

Short observation or thought here. Notes are typically 1-3 paragraphs.
```

### 4. Preview and build

Same as posts:

```bash
npm start                # Preview
npm run build:prod      # Build
```

Your note will be available at: `http://localhost:8080/notes/quick-thought/`

## Permalink Patterns

The site automatically generates clean URLs:

- **Posts**: `/posts/{slug}/` (e.g., `/posts/my-new-post/`)
- **Notes**: `/notes/{slug}/` (e.g., `/notes/quick-thought/`)

The `{slug}` is derived from your filename, removing the date prefix:

- File: `2026-02-03-my-new-post.md`
- URL: `/posts/my-new-post/`

## Collections Configuration

Both directories contain a JSON file that sets default values:

**`src/posts/posts.json`:**

```json
{
  "tags": "posts",
  "permalink": "/posts/{{ page.fileSlug }}/"
}
```

**`src/notes/notes.json`:**

```json
{
  "tags": "notes",
  "permalink": "/notes/{{ page.fileSlug }}/"
}
```

These files ensure all content in each directory:

- Gets added to the correct collection (`posts` or `notes`)
- Uses the correct URL pattern

## RSS Feeds

Both content types have dedicated RSS feeds:

- Posts feed: `/feeds/posts.xml`
- Notes feed: `/feeds/notes.xml`
- Combined feed: `/feed.xml`

## Front Matter Reference

### Required Fields

- `title`: The title of your post or note
- `layout`: Always use `layouts/content.njk`
- `tags`: Include the collection tag (`posts` or `notes`)

### Optional Fields

- `description`: Short description (used in meta tags)
- `date`: Publication date (defaults to file creation date)
- Additional tags for categorization

### Example: Full Post Front Matter

```yaml
---
title: "Building Better Systems"
description: "Lessons learned from a decade in tech"
layout: layouts/content.njk
date: 2026-02-03
tags:
  - posts
  - technology
  - systems-thinking
---
```

### Example: Simple Note Front Matter

```yaml
---
title: "Quick observation"
layout: layouts/content.njk
tags: notes
---
```

## Best Practices

### File Naming

- Use lowercase letters
- Use hyphens (not underscores or spaces)
- Include date prefix: `YYYY-MM-DD-title.md`
- Keep filenames descriptive but concise

Examples:

- ✅ `2026-02-03-building-better-systems.md`
- ✅ `2026-02-03-quick-thought.md`
- ❌ `my_post.md`
- ❌ `Post About Technology.md`

### Content Guidelines

**Posts should:**

- Be well-structured with clear sections
- Include links to support claims
- Use first-person perspective ("I")
- Follow the site's writing style guide (see `.github/agents/writing-agent.md`)

**Notes should:**

- Be concise (1-3 paragraphs typically)
- Focus on a single observation or thought
- Still maintain quality and clarity

### Testing

Before committing:

1. **Build locally**: `npm run build:prod`
2. **Check for errors**: Ensure no build failures
3. **Preview content**: Verify formatting and links
4. **Run tests**: `npm test` (includes linting and build)

## Deployment

The site deploys automatically when changes are pushed to the main branch. To publish:

1. Test locally
2. Commit changes with conventional commit format:
   - `feat: add post about [topic]`
   - `feat: add note about [topic]`
3. Push to your branch or main

## Troubleshooting

### Content not appearing

- Check that front matter is valid YAML
- Ensure the `tags` field includes `posts` or `notes`
- Verify the file is in the correct directory (`src/posts/` or `src/notes/`)

### Wrong URL generated

- The URL is based on `page.fileSlug`, which strips the date prefix
- File `2026-02-03-my-post.md` → URL `/posts/my-post/`
- To change the URL, rename the file

### Build errors

- Validate YAML front matter syntax
- Check for unclosed code blocks or malformed Markdown
- Run `npm run build:prod` to see detailed error messages

## Further Reading

- [AGENTS.md](../../AGENTS.md) - Project conventions and agent guidelines
- [Writing Agent](../../.github/agents/writing-agent.md) - Content style guide
- [Eleventy Documentation](https://www.11ty.dev/docs/) - 11ty reference

---

_Last updated: 2026-02-03_
