---
layout: page
title: "Tags"
description: "Browse posts by tag."
permalink: /tags/
---

<!-- Tag cloud -->
<div class="tag-cloud">
  <div class="tags-list">
    {% assign all_tags = site.posts | map: "tags" | join: "," | split: "," | sort | uniq %}
    {% for tag in all_tags %}
    {% assign tag_count = site.posts | where_exp: "post", "post.tags contains tag" | size %}
    <a href="#{{ tag | slugify }}" class="tag-pill" style="font-size: {{ tag_count | times: 0.1 | plus: 0.75 }}rem">
      {{ tag }} <small style="opacity:0.6">({{ tag_count }})</small>
    </a>
    {% endfor %}
  </div>
</div>

<!-- Posts by tag -->
{% for tag in all_tags %}
{% assign tagged_posts = site.posts | where_exp: "post", "post.tags contains tag" %}
{% if tagged_posts.size > 0 %}
<section id="{{ tag | slugify }}" style="margin-bottom: 3rem">
  <h2 class="section-title">
    {{ tag }}
    <span class="section-title__count">{{ tagged_posts.size }}</span>
  </h2>
  <ul style="list-style:none;padding:0">
    {% for post in tagged_posts %}
    <li style="display:flex;gap:1rem;align-items:baseline;padding:0.75rem 0;border-bottom:1px solid rgba(255,255,255,0.05)">
      <time style="font-family:var(--font-mono,'monospace');font-size:0.75rem;color:rgba(255,255,255,0.3);min-width:80px" datetime="{{ post.date | date_to_xmlschema }}">
        {{ post.date | date: "%b %-d, %Y" }}
      </time>
      <a href="{{ post.url | relative_url }}" style="color:rgba(255,255,255,0.65);font-size:0.9rem;transition:color 0.2s" onmouseover="this.style.color='#c4b5fd'" onmouseout="this.style.color='rgba(255,255,255,0.65)'">{{ post.title }}</a>
    </li>
    {% endfor %}
  </ul>
</section>
{% endif %}
{% endfor %}
