/* =======================================================
   Leandro Mendonça · Portfólio DEV
   JS: Navbar · Menu Mobile · Smooth Scroll · Ano Atual
   ======================================================= */

(function () {
  'use strict';

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  document.addEventListener('DOMContentLoaded', function () {
    initNavbarScroll();
    initMobileMenu();
    initSmoothScrollAnchors();
    initYearAtual();
    initCloseMenuOnAnchorClick();
  });

  // 1. Navbar ganha borda + blur mais forte ao rolar
  function initNavbarScroll() {
    const nav = $('#navbar');
    if (!nav) return;

    const onScroll = () => {
      if (window.scrollY > 24) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 2. Menu mobile toggle
  function initMobileMenu() {
    const toggle = $('#navToggle');
    const menu   = $('#navMenu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const aberto = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      toggle.textContent = aberto ? '✕' : '☰';
    });
  }

  // 3. Fecha menu mobile ao clicar em âncora
  function initCloseMenuOnAnchorClick() {
    const toggle = $('#navToggle');
    const menu   = $('#navMenu');
    if (!toggle || !menu) return;

    $$('#navMenu a[href^="#"]').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });
  }

  // 4. Smooth scroll para âncoras (compatibilidade total + navbar fixa)
  function initSmoothScrollAnchors() {
    const OFFSET = 84; // altura da navbar fixa

    $$('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || href === '#' || href.length <= 1) return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - OFFSET;
        window.scrollTo({ top, behavior: 'smooth', left: 0 });
      });
    });
  }

  // 5. Ano atual no footer (automático)
  function initYearAtual() {
    const el = $('#yearAtual');
    if (el) el.textContent = String(new Date().getFullYear());
  }
})();
