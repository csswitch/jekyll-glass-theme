# Glass Theme — Glassmorphism Jekyll Theme

[![MIT License](https://img.shields.io/badge/license-MIT-purple.svg)](LICENSE)
[![Jekyll](https://img.shields.io/badge/jekyll-4.3-purple.svg)](https://jekyllrb.com)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-compatible-purple.svg)](https://pages.github.com)

> A premium glassmorphism Jekyll theme with animated aurora backgrounds, frosted glass cards, configurable accent colors, and zero dependencies.

**[Live Demo →](https://csswitch.github.io/jekyll-glass-theme)**

---

![Glass Theme Preview](https://csswitch.github.io/jekyll-glass-theme/assets/img/preview.png)

## ✨ Features

- 🔮 **Glassmorphism design** — `backdrop-filter` frosted glass cards
- 🌌 **Animated aurora background** — smooth floating orbs with configurable colors
- 🎨 **One-line color theming** — change `accent_hue` in `_config.yml` to shift entire palette
- 📱 **Fully responsive** — mobile-first, hamburger nav
- ⚡ **No jQuery, no frameworks** — ~4KB vanilla JS
- 🐙 **GitHub Pages compatible** — no unsupported plugins
- ♿ **Accessible** — keyboard navigation, ARIA labels, focus rings, screen reader friendly
- 📖 **Reading progress bar** — smooth gradient bar on post pages
- 📋 **Copy code buttons** — auto-injected on every code block
- 🔍 **Active TOC** — scrollspy highlights current heading
- 🏷️ **Tag system** — tag pills, tag cloud page, per-tag archives
- 📅 **Archive page** — posts grouped by year
- 🔗 **SEO ready** — jekyll-seo-tag, sitemap, RSS feed

## 🚀 Quick Start

```bash
# 1. Use this template on GitHub, then clone your new repo
git clone https://github.com/YOUR_USERNAME/YOUR_BLOG.git
cd YOUR_BLOG

# 2. Install dependencies
bundle install

# 3. Start the dev server
bundle exec jekyll serve --livereload

# 4. Open http://localhost:4000
```

## ⚙️ Configuration

Edit `_config.yml`:

```yaml
title: "My Blog"
description: "A short description of your blog."
url: "https://yourusername.github.io"
baseurl: ""

author:
  name: "Your Name"
  email: "you@example.com"
  github: "yourusername"
  twitter: "yourhandle"

glass:
  background: "aurora"   # aurora | mesh | minimal
  accent_hue: 260        # 0-360 — 260=purple, 220=blue, 160=green, 30=amber
  orbs: true             # animated background orbs
  blur: 16               # card blur in px
  reading_progress: true # reading progress bar on posts
```

### Accent Colors (examples)

| `accent_hue` | Color |
|---|---|
| `260` | Purple (default) |
| `220` | Blue |
| `160` | Green |
| `30` | Amber |
| `340` | Pink |
| `190` | Cyan |

## 📝 Writing Posts

Create files in `_posts/` named `YYYY-MM-DD-title.md`:

```markdown
---
layout: post
title: "Your Post Title"
date: 2024-01-15
tags: [design, css, tutorial]
description: "A short excerpt for SEO and post cards."
---

Your content here...
```

## 📁 Structure

```
jekyll-glass-theme/
├── _config.yml          ← site config + glass settings
├── _layouts/
│   ├── default.html     ← base (nav + footer + orbs)
│   ├── home.html        ← post grid with featured first post
│   ├── post.html        ← single post with TOC + prev/next
│   └── page.html        ← static pages
├── _sass/
│   ├── _variables.scss  ← all tokens (colors, spacing, fonts)
│   ├── _base.scss       ← reset + typography
│   ├── _layout.scss     ← nav, orbs, containers, footer
│   └── _components.scss ← post cards, buttons, TOC, tags
├── assets/
│   ├── css/main.scss    ← SASS entry point
│   └── js/glass.js      ← progress bar, copy buttons, TOC spy
├── _posts/              ← your blog posts
├── index.html           ← home (layout: home)
├── about.md
├── archive.md
└── tags.md
```

## 🌐 Deploying to GitHub Pages

1. Push to a `gh-pages` branch, or
2. Go to repo **Settings → Pages → Source → main branch**

The theme uses only GitHub Pages whitelisted plugins:
- `jekyll-paginate`
- `jekyll-seo-tag`
- `jekyll-sitemap`
- `jekyll-feed`

## 📄 License

MIT © [csswitch](https://github.com/csswitch)

---

Made with 💜 by [csswitch](https://github.com/csswitch) — distinctive Jekyll themes for developers.
