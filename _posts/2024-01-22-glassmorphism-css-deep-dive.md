---
layout: post
title: "Glassmorphism CSS Deep Dive — How backdrop-filter Works"
date: 2024-01-22
tags: [css, glassmorphism, frontend, tutorial]
description: "A technical deep-dive into CSS backdrop-filter, browser support, fallbacks, and performance considerations."
---

`backdrop-filter` is the CSS property that makes glassmorphism possible. Let's dig into how it actually works, where it's supported, and how to write fallbacks properly.

## How backdrop-filter Works

`backdrop-filter` applies a filter effect to the area **behind** an element, rather than to the element itself. The key is that it filters what's rendered *below* the element in the stacking context.

```css
.glass-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(16px) saturate(1.5);
  -webkit-backdrop-filter: blur(16px) saturate(1.5);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
}
```

Three things are working together here:

1. **Semi-transparent background** — lets the element behind show through
2. **backdrop-filter blur** — blurs what's behind the element
3. **Subtle border** — catches the light, gives the glass edge definition

## Browser Support

As of 2024, `backdrop-filter` has **~96% global browser support**:

| Browser | Support |
|---------|---------|
| Chrome 76+ | ✅ Full |
| Firefox 103+ | ✅ Full |
| Safari 9+ | ✅ `-webkit-` prefix |
| Edge 79+ | ✅ Full |

Always include the `-webkit-` prefixed version for Safari.

## Performance Considerations

`backdrop-filter` is GPU-accelerated but still expensive. Best practices:

```css
/* Add will-change to hint the browser */
.glass-card {
  will-change: transform;
  backdrop-filter: blur(16px);
}

/* Limit the number of blurred elements visible at once */
/* Each backdrop-filter creates a stacking context */
```

**Don't** apply `backdrop-filter` to hundreds of elements — it gets expensive fast. Apply it to cards, navs, and modals only.

## The Fallback Pattern

For browsers without support (rare in 2024, but good practice):

```css
.glass-card {
  background: rgba(20, 20, 40, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

@supports not (backdrop-filter: blur(1px)) {
  .glass-card {
    /* Solid fallback for older browsers */
    background: rgba(20, 20, 40, 0.95);
  }
}
```

## Creating the Aurora Orb Background

The animated orbs in this theme use a simple CSS keyframe animation:

```css
.orb {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: hsl(260, 70%, 55%);
  filter: blur(80px);   /* <-- NOT backdrop-filter, just regular blur */
  opacity: 0.45;
  animation: float 22s ease-in-out infinite alternate;
}

@keyframes float {
  from { transform: translate(0, 0) scale(1); }
  to   { transform: translate(40px, 30px) scale(1.08); }
}
```

The orbs are the background layer. The glass cards then sit above them and blur through with `backdrop-filter`.

## Wrapping Up

Glassmorphism with `backdrop-filter` is now fully production-ready:
- Wide browser support (96%+)
- GPU accelerated
- Pure CSS — no JS needed

The key to making it look good: generous blur (12–20px), very subtle transparent backgrounds (5–12% opacity), and thin semi-transparent borders.
