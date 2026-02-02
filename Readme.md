# Personal Website

Personal website using [11ty](https://11ty.dev) and [Cloudflare Pages](https://pages.cloudflare.com). I've tagged previous versions of the website as [releases](https://github.com/benkutil/benkutil.github.io/releases).

## Setup

### Environment variables

- `ELEVENTY_ENV` is either `production` or `preview`. Defaults to not set.
- Node version is set to `20` via `.nvmrc` file for compatibility with 11ty and dependencies.

## Build Commands

### Development

```bash
npm start
# Starts local dev server with live reload at http://localhost:8080
# CSS is copied as-is (not minified) for easier debugging
```

### Production Build

```bash
npm run build:prod
# Builds optimized production site with:
# - Minified CSS (PostCSS + cssnano)
# - Autoprefixed CSS for browser compatibility
# - Minified HTML
# - Optimized images (AVIF, WebP, JPEG)
# - Cache-busting asset fingerprints
```

## Asset Pipeline

This site uses an automated asset pipeline for optimal performance:

### CSS Processing

- **PostCSS** with autoprefixer and cssnano
- **Development:** Readable CSS for debugging
- **Production:** Minified CSS (~78% smaller)

### Image Optimization

- **Multi-format:** AVIF → WebP → JPEG fallback
- **Responsive:** 400px, 800px, 1280px widths + original
- **Quality optimized:** AVIF 80%, WebP 85%, JPEG 85%
- **Progressive JPEG** for faster perceived loading

### Asset Fingerprinting

- **Cache-busting:** MD5 hashes in filenames (e.g., `tufte.1a669404.css`)
- **Asset manifest:** JSON mapping for reference
- **Production only:** Maintains clean development workflow

See [`_build/Readme.md`](./_build/Readme.md) for detailed documentation.

## Performance

The asset pipeline delivers significant improvements:

- **CSS:** 745 lines → 1 line, ~78% file size reduction
- **Images:** Modern AVIF format with WebP/JPEG fallbacks
- **Caching:** Fingerprinted assets for efficient browser caching
