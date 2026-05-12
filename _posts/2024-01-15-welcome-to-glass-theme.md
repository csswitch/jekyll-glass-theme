---
layout: post
title: "Welcome to Glass Theme — A Glassmorphism Jekyll Theme"
date: 2024-01-15
tags: [design, getting-started, glassmorphism]
description: "An intro to Glass Theme — frosted glass UI, animated orbs, configurable accent colors, and zero dependencies."
---

Welcome to **Glass Theme** — a Jekyll theme built around the glassmorphism design aesthetic. Frosted glass cards, ambient animated backgrounds, smooth transitions, and zero JavaScript dependencies (other than a tiny vanilla JS file).

## What is Glassmorphism?

Glassmorphism is a UI trend popularized around 2020–2021. Key characteristics:

- **Frosted glass effect** — elements appear as translucent frosted surfaces
- **Background blur** — `backdrop-filter: blur()` creates the glass illusion
- **Subtle borders** — thin semi-transparent borders enhance the glass edges
- **Depth through layering** — colored orbs/shapes visible through the glass

This theme implements all of these properly in pure CSS.

## Configuring Your Theme

Open `_config.yml` and tweak the `glass:` block:

```yaml
glass:
  background: "aurora"   # aurora | mesh | bokeh | minimal
  accent_hue: 260        # 0-360 hue (260 = purple, 200 = blue, 150 = green)
  orbs: true             # animated background orbs
  blur: 16               # card blur intensity in px
  reading_progress: true # progress bar on posts
```

Changing `accent_hue` shifts the entire color palette — accent colors, tag pills, link highlights, orbs.

## Writing Posts

Posts go in `_posts/` with the filename format: `YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "My Post Title"
date: 2024-01-15
tags: [tag1, tag2]
description: "Short description for SEO"
---

Your content here...
```

## Code Highlighting

Code blocks get syntax highlighting via Rouge and a copy button automatically:

```javascript
const glass = document.querySelector('.glass-card');
glass.style.backdropFilter = 'blur(16px)';
console.log('✨ glassmorphism enabled');
```

```python
def frosted_glass(blur_px: int = 16) -> str:
    return f"backdrop-filter: blur({blur_px}px)"
```

## What's Next?

- Add your posts to `_posts/`
- Edit `about.md` to introduce yourself
- Update `_config.yml` with your site name, author info, and social links
- Optionally link a custom domain in your repo settings

Enjoy the theme! Any questions or issues → [open an issue](https://github.com/csswitch/jekyll-glass-theme/issues).
