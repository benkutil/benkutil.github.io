# Contributing to benkutil.github.io

Thank you for your interest in contributing! This document provides guidelines for developing and contributing to this personal website.

## Engineering Principles

### Simplicity First
- Write simple, readable code over clever solutions
- Avoid unnecessary abstractions
- Keep configuration minimal
- Prefer boring, proven technologies

### Smallest Possible Change
- Make minimal changes to achieve the goal
- Each PR should address one specific issue
- Avoid refactoring unrelated code
- Keep commits focused and atomic

### Avoiding Complexity
- Don't add features "just in case"
- Minimize dependencies
- Question whether new dependencies are truly necessary
- Keep the build process simple

## Development Setup

### Prerequisites
- Node.js version 20 (specified in `.nvmrc`)
- npm (comes with Node.js)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/benkutil/benkutil.github.io.git
   cd benkutil.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.sample .env
   # Edit .env with your values if needed
   ```

4. **Start development server**
   ```bash
   npm start
   ```
   The site will be available at `http://localhost:8080` with hot-reload enabled.

5. **Build for production**
   ```bash
   npm run build:prod
   ```

## Eleventy (11ty) Development Best Practices

### Understanding the Project Structure
- `src/` - Source files for the website
  - `_includes/` - Reusable templates and layouts
  - `_data/` - Global data files
- `.eleventy.js` - Main Eleventy configuration
- `_config/` - Additional configuration files (filters, shortcodes)

### Working with Eleventy

#### Templates and Layouts
- Use existing layouts when possible
- Keep templates simple and focused
- Avoid complex logic in templates

#### Data Files
- Place global data in `src/_data/`
- Use JavaScript or JSON for data files
- Keep data structure flat when possible

#### Filters and Shortcodes
- Add custom filters in `_config/filters.js`
- Add custom shortcodes in `_config/shortcode.js`
- Document any new filters or shortcodes

#### Images
- Use the `image` shortcode for responsive images
- Images are automatically optimized during build
- Place source images in appropriate directories

### Testing Your Changes

1. **Local Testing**
   - Always test with `npm start` before submitting
   - Check multiple pages to ensure no regressions
   - Test in production mode with `npm run build:prod`

2. **Build Verification**
   - Ensure the build completes without errors
   - Check that generated files look correct
   - Verify no broken links or missing assets

## Making Contributions

### Before You Start
1. Check existing issues to avoid duplicates
2. Open an issue to discuss significant changes
3. Keep changes focused on a single concern

### Pull Request Process

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow the engineering principles above
   - Keep changes minimal and focused
   - Write clear commit messages

3. **Test thoroughly**
   - Run `npm start` and verify changes locally
   - Run `npm run build:prod` to ensure production build works
   - Check for any console errors or warnings

4. **Submit your PR**
   - Use the PR template
   - Reference related issues
   - Provide clear description of changes
   - Include screenshots for visual changes

5. **Address feedback**
   - Respond to review comments
   - Make requested changes promptly
   - Keep the PR scope focused

### Commit Messages
- Use clear, descriptive commit messages
- Start with a verb in present tense (e.g., "Add", "Fix", "Update")
- Keep first line under 72 characters
- Add details in the body if needed

Example:
```
Add RSS feed for blog posts

- Configured eleventy-plugin-rss
- Created feed template
- Added feed link to layout
```

## Code Style

### General Guidelines
- Use consistent indentation (spaces as per existing code)
- Keep lines reasonably short
- Remove trailing whitespace
- End files with a newline

### JavaScript
- Use ES6+ features appropriately
- Prefer `const` over `let`, avoid `var`
- Use template literals for string interpolation
- Keep functions small and focused

### CSS
- Follow existing CSS organization
- Avoid inline styles
- Use meaningful class names
- Keep specificity low

### Markdown
- Use proper heading hierarchy
- Include alt text for images
- Keep lines reasonably short for readability

## Dependencies

### Adding Dependencies
- Question whether the dependency is truly necessary
- Check bundle size impact
- Verify the package is actively maintained
- Prefer packages with minimal dependencies
- Document why the dependency is needed

### Updating Dependencies
- Test thoroughly after updates
- Update one dependency at a time when possible
- Check for breaking changes in release notes

## Questions or Issues?

If you have questions or run into problems:
1. Check existing issues and documentation
2. Open a new issue with details about your question
3. Be patient and respectful in all interactions

Thank you for contributing! 🎉
