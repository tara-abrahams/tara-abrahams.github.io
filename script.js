/* ============================================================
   TARA R. ABRAHAMS — Portfolio Site
   script.js
   ============================================================ */

(function () {
  'use strict';


  /* ----------------------------------------------------------
     1. THEME TOGGLE (light / dark)
     ---------------------------------------------------------- */
  const html = document.documentElement;
  const themeBtn = document.querySelector('[data-theme-toggle]');

  // Detect system preference on first load
  let currentTheme = html.getAttribute('data-theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    if (themeBtn) {
      if (theme === 'dark') {
        themeBtn.setAttribute('aria-label', 'Switch to light mode');
        themeBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>`;
      } else {
        themeBtn.setAttribute('aria-label', 'Switch to dark mode');
        themeBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>`;
      }
    }
  }

  applyTheme(currentTheme);

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }


  /* ----------------------------------------------------------
     2. STICKY HEADER — add shadow on scroll
     ---------------------------------------------------------- */
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }


  /* ----------------------------------------------------------
     3. MOBILE HAMBURGER MENU
     ---------------------------------------------------------- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
      });
    });
  }


  /* ----------------------------------------------------------
     4. SELECTED WORK — inline expand/collapse
     ---------------------------------------------------------- */
  const workItems = document.querySelectorAll('.work-item');

  workItems.forEach(function (item) {
    const header = item.querySelector('.work-item-header');
    const expandBtn = item.querySelector('.work-expand-btn');

    function toggle() {
      const isOpen = item.classList.toggle('open');
      item.setAttribute('aria-expanded', isOpen);
      if (expandBtn) {
        expandBtn.setAttribute('aria-expanded', isOpen);
        expandBtn.setAttribute('aria-label', isOpen ? 'Collapse story' : 'Expand story');
      }
      if (header) {
        header.setAttribute('aria-expanded', isOpen);
      }
    }

    if (header) {
      // Click on header row (excluding the button itself to avoid double-fire)
      header.addEventListener('click', function (e) {
        if (e.target.closest('.work-expand-btn')) return;
        toggle();
      });

      // Keyboard: Enter / Space activates the header row
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    }

    if (expandBtn) {
      expandBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        toggle();
      });
    }
  });


  /* ----------------------------------------------------------
     5. FADE-IN ON SCROLL (Intersection Observer)
     ---------------------------------------------------------- */
  const fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeEls.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all immediately
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }


  /* ----------------------------------------------------------
     6. ACTIVE NAV LINK — highlight current section
     ---------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.site-nav a, .mobile-nav a');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px' });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }


  /* ----------------------------------------------------------
     7. FOOTER YEAR — auto-update copyright year
     ---------------------------------------------------------- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
