# Asset Pipeline

This directory contains the build scripts for the asset pipeline that optimizes CSS, images, and other static assets for production.

## Overview

The asset pipeline provides:

1. **CSS Processing** - Minification, autoprefixing, and optimization
2. **Image Optimization** - Multi-format responsive images with AVIF, WebP, and JPEG
3. **Asset Fingerprinting** - Cache-busting hashes for CSS files

## Build Scripts

### `process-css.js`

Processes CSS files using PostCSS with autoprefixer and cssnano.

**Development Mode:**

- Copies CSS files as-is for easier debugging
- Maintains readable formatting

**Production Mode:**

- Minifies CSS with cssnano
- Adds vendor prefixes with autoprefixer
- Reduces file size by ~24% (14KB → 11KB)

**Usage:**

```bash
# Runs automatically during Eleventy build
ELEVENTY_ENV=production npx @11ty/eleventy
```

### `fingerprint-assets.js`

Generates cache-busting versions of CSS files with MD5 hashes.

**Features:**

- Creates hashed copies of CSS files (e.g., `tufte.css` → `tufte.1a669404.css`)
- Keeps original filenames for compatibility
- Generates `asset-manifest.json` for mapping

**Output:**

```json
{
  "tufte.css": "tufte.1a669404.css"
}
```

**Usage:**

```bash
# Runs automatically after production builds
ELEVENTY_ENV=production npx @11ty/eleventy
```

## Performance Impact

### CSS Optimization

- **Before:** 832 lines, ~14KB unminified
- **After:** 1 line, ~11KB minified
- **Savings:** ~24% reduction in file size

### Image Optimization

- **Formats:** AVIF (best compression) → WebP (good compression) → JPEG (fallback)
- **Quality Settings:**
  - AVIF: 80% quality, effort 4
  - WebP: 85% quality
  - JPEG: 85% quality, progressive
- **Responsive Widths:** 400px, 800px, 1280px, original

## Build Process Flow

```
1. eleventy.before event
   └── process-css.js runs
       └── CSS files are processed/copied to _site/css/

2. Eleventy builds site
   └── HTML, Markdown, templates processed
   └── Images processed with eleventy-img
   └── Static files copied

3. Production only: HTML minification
   └── html-minifier-terser transform runs

4. eleventy.after event (production only)
   └── fingerprint-assets.js runs
       └── Creates hashed CSS files
       └── Generates asset-manifest.json
```

## Configuration Files

### `_build/process-css.js`

PostCSS configuration is embedded directly in the build script:

```javascript
// Process with PostCSS
const result = await postcss([autoprefixer, cssnano({ preset: "default" })]).process(css, {
  from: inputPath,
  to: outputPath,
});
```

### `.eleventy.js` Integration

- Registers `eleventy.before` hook for CSS processing
- Registers `eleventy.after` hook for fingerprinting
- Configures eleventy-img with AVIF/WebP/JPEG formats

## Development vs Production

| Feature              | Development | Production |
| -------------------- | ----------- | ---------- |
| CSS Minification     | ✗           | ✓          |
| CSS Autoprefixing    | ✗           | ✓          |
| HTML Minification    | ✗           | ✓          |
| Asset Fingerprinting | ✗           | ✓          |
| Image Optimization   | ✓           | ✓          |

## Incremental Builds

The asset pipeline is designed for incremental builds:

- **CSS Processing:** Only processes changed CSS files
- **Image Processing:** eleventy-img caches processed images
- **Fast Rebuilds:** Development mode skips minification for speed

## Adding New Assets

### Adding CSS Files

1. Add CSS file to `src/css/`
2. File will be automatically processed during build
3. Reference in templates with `/css/filename.css`

### Adding Images

1. Add image to `src/media/` or post directory
2. Use the `{% image %}` shortcode in templates:
   ```liquid
   {% image "path/to/image.jpg", "Alt text", "optional-class" %}
   ```
3. Images will be automatically optimized and made responsive

## Troubleshooting

### CSS not minifying

- Ensure `ELEVENTY_ENV=production` is set
- Check console for PostCSS errors

### Fingerprinted CSS not generated

- Verify production build is running
- Check `_site/css/asset-manifest.json` exists

### Build performance issues

- Use development mode for local work
- Production builds are slower due to minification
- Image processing is cached between builds

## Future Enhancements

Potential improvements:

- JavaScript bundling and minification (when needed)
- Brotli/gzip pre-compression
- Service worker for offline support
- Critical CSS inlining
- PurgeCSS for unused CSS removal
