# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

SEKTAT band website — official site for a Moscow-based hardcore punk/metal band. Built with Astro, Tailwind CSS 4, and TypeScript.

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321

# Build & Preview
npm run build        # Build for production
npm run preview      # Preview production build

# Astro CLI
npm run astro        # Run Astro CLI commands
```

## Architecture

### Tech Stack
- **Framework**: Astro 5 (static site generation)
- **Styling**: Tailwind CSS 4 with custom theme
- **Content**: Astro Content Collections (Markdown)
- **i18n**: Built-in Astro i18n (RU primary, EN secondary)
- **Deploy**: Static hosting (Vercel/Netlify/Cloudflare Pages)

### Directory Structure
```
site/
├── src/
│   ├── content/           # Content Collections
│   │   ├── releases/      # Album/EP markdown files
│   │   └── shows/         # Concert markdown files
│   ├── components/        # Astro components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages
│   └── styles/            # Global CSS
├── public/
│   └── assets/            # Static assets (images, logos)
└── astro.config.mjs       # Astro configuration
```

### Content Collections

**Releases** (`src/content/releases/*.md`):
- Frontmatter: title, releaseDate, type (ep/album/single), cover, bandcampUrl, tracks[], credits{}
- Add new releases by creating markdown files

**Shows** (`src/content/shows/*.md`):
- Frontmatter: date, venue, city, startTime, price, eventUrl, lineup[], isPast
- Set `isPast: true` for archived shows

### Brand Design System

Colors (defined in `src/styles/global.css`):
- `sektat-black`: #0a0a0a (background)
- `sektat-rust`: #b34a1e (accent)
- `sektat-light`: #e5e5e5 (text)

CSS classes:
- `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost` — buttons
- `.container` — max-width wrapper
- `.jitter-hover` — micro-interaction effect
- `.grain-overlay` — noise texture (respects prefers-reduced-motion)

### Adding Content

**New Release:**
1. Add cover image to `public/assets/images/`
2. Create `src/content/releases/[slug].md` with frontmatter
3. Release page auto-generated at `/releases/[slug]`

**New Show:**
1. Create `src/content/shows/[date]-[venue].md`
2. Show appears on `/live` page
3. Set `isPast: true` when show is over

## External Links

- Bandcamp: https://sektat.bandcamp.com
- Apple Music: https://music.apple.com/artist/sektat/1814322842
- Domain: sektat.band (configure in astro.config.mjs)
