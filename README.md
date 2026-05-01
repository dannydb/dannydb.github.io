# dannydb.github.io

Personal portfolio site built with [Astro](https://astro.build) 5, vanilla JavaScript, and modern SCSS.

## Stack

- **Framework**: Astro 5 (static output)
- **Styling**: SCSS with modern syntax (no `@import`, `calc()`, etc.)
- **JavaScript**: Vanilla ES2020+ (no jQuery, no frameworks)

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview production build
```

## Project structure

```
src/
  pages/
    index.astro         # Main portfolio page
  layouts/
  styles/
    main.scss           # All site styles
  data/
    projects.ts         # Project data
    resume.md           # Resume markdown
  scripts/
    (via public/)
public/
  scripts/
    app.js              # Vanilla JS
  img/                  # Project images
```

## Deployment

Set up a GitHub Actions workflow to build and deploy to GitHub Pages. See `.github/workflows/deploy.yml`.

## Notes

- No build artifacts (`dist/`, `.astro/`) are committed to git
- Projects marked as `archived: true` in `src/data/projects.ts` are hidden from display
- Copyright year is rendered client-side
