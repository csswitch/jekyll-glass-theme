/*!
 * Glass Theme — Interactive JS
 * csswitch.github.io | MIT License
 */

(function () {
  'use strict';

  // ────────────────────────────────────────────────
  // Reading Progress Bar
  // ────────────────────────────────────────────────
  const progressBar = document.querySelector('.reading-progress');
  if (progressBar) {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(pct, 100) + '%';
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // ────────────────────────────────────────────────
  // Copy Code Buttons
  // ────────────────────────────────────────────────
  document.querySelectorAll('pre').forEach(function (pre) {
    const btn = document.createElement('button');
    btn.className = 'copy-btn';
    btn.textContent = 'copy';
    btn.setAttribute('aria-label', 'Copy code to clipboard');

    pre.style.position = 'relative';
    pre.appendChild(btn);

    btn.addEventListener('click', function () {
      const code = pre.querySelector('code');
      const text = code ? code.innerText : pre.innerText;

      navigator.clipboard.writeText(text).then(function () {
        btn.textContent = '✓ copied';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'copy';
          btn.classList.remove('copied');
        }, 2000);
      }).catch(function () {
        // fallback
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.cssText = 'position:fixed;opacity:0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
        btn.textContent = '✓ copied';
        btn.classList.add('copied');
        setTimeout(function () {
          btn.textContent = 'copy';
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  // ────────────────────────────────────────────────
  // Active TOC link on scroll
  // ────────────────────────────────────────────────
  const tocLinks = document.querySelectorAll('.post-toc a[href^="#"]');
  if (tocLinks.length) {
    const headings = Array.from(document.querySelectorAll('.post-body h2, .post-body h3, .post-body h4'));

    function getActiveHeading() {
      const scrollY = window.scrollY + 100;
      let active = headings[0];
      headings.forEach(function (h) {
        if (h.offsetTop <= scrollY) active = h;
      });
      return active;
    }

    function updateTOC() {
      const active = getActiveHeading();
      if (!active) return;
      tocLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + active.id) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', updateTOC, { passive: true });
    updateTOC();
  }

  // ────────────────────────────────────────────────
  // Mobile nav toggle
  // ────────────────────────────────────────────────
  const navToggle = document.querySelector('.glass-nav__toggle');
  const nav = document.querySelector('.glass-nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
      const isOpen = nav.classList.contains('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target)) {
        nav.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ────────────────────────────────────────────────
  // Smooth scroll for anchor links
  // ────────────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const id = this.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.pushState(null, null, '#' + id);
      }
    });
  });

  // ────────────────────────────────────────────────
  // Add heading IDs for TOC links (if not already set)
  // ────────────────────────────────────────────────
  document.querySelectorAll('.post-body h2, .post-body h3, .post-body h4').forEach(function (h) {
    if (!h.id) {
      h.id = h.textContent.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
    }

    // Add anchor link
    const anchor = document.createElement('a');
    anchor.href = '#' + h.id;
    anchor.className = 'heading-anchor';
    anchor.setAttribute('aria-label', 'Link to this section');
    anchor.innerHTML = ' <span aria-hidden="true">#</span>';
    anchor.style.cssText = 'opacity:0;margin-left:0.4em;color:var(--accent,#a78bfa);font-size:0.8em;text-decoration:none;transition:opacity 0.2s';
    h.appendChild(anchor);
    h.addEventListener('mouseenter', function () { anchor.style.opacity = '1'; });
    h.addEventListener('mouseleave', function () { anchor.style.opacity = '0'; });
  });

})();
