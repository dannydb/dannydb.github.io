/* app.js – vanilla ES2020+ (no jQuery, Modernizr, Underscore, director) */

// Deployment environment
const deploymentTarget = window.location.hostname === 'localhost' ? 'development' : 'production';

// Throttle utility
function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

// ---- Lazy loading via IntersectionObserver ----

function initLazyLoad() {
  const posters = document.querySelectorAll('.project-poster[style*="background-image"]');
  if (!('IntersectionObserver' in window)) return; // already loaded via style attr

  // Move background-image to a data attribute so we can lazy-load
  posters.forEach((el) => {
    const style = el.getAttribute('style') || '';
    const match = style.match(/background-image:\s*url\(['"]?([^'"]+)['"]?\)/);
    if (match) {
      el.dataset.bg = match[1];
      el.style.backgroundImage = 'none';
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (el.dataset.bg) {
            el.style.backgroundImage = `url('${el.dataset.bg}')`;
            delete el.dataset.bg;
          }
          observer.unobserve(el);
        }
      });
    },
    { rootMargin: '200px 0px' }
  );

  posters.forEach((el) => observer.observe(el));
}

// ---- Scroll depth tracking ----

const scrollMarks = { 25: false, 50: false, 75: false, 100: false };

function trackScrollDepth() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (docHeight <= 0) return;
  const pct = Math.round((scrollTop / docHeight) * 100);

  [25, 50, 75, 100].forEach((mark) => {
    if (!scrollMarks[mark] && pct >= mark) {
      scrollMarks[mark] = true;
      ga('send', 'event', 'Scroll Depth', 'scroll', `${mark}%`);
    }
  });
}

window.addEventListener('scroll', throttle(trackScrollDepth, 500), { passive: true });

// ---- Google Analytics ----

/* global ga */
window['GoogleAnalyticsObject'] = 'ga';
window['ga'] = window['ga'] || function (...args) {
  (window['ga'].q = window['ga'].q || []).push(args);
};
window['ga'].l = Date.now();
(function () {
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.google-analytics.com/analytics.js';
  document.head.appendChild(script);
})();

ga('create', 'UA-146179-4', 'auto');
ga('send', 'pageview');

// ---- Init ----

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  initLazyLoad();
});
