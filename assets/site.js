(() => {
  'use strict';
  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');
  const closeMenu = () => {
    if (!menu || !nav) return;
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    nav.classList.remove('open');
  };
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', open);
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menu.focus();
      }
    });
    document.addEventListener('click', event => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    window.matchMedia('(min-width: 561px)').addEventListener('change', closeMenu);
  }

  const filters = [...document.querySelectorAll('[data-filter]')];
  const cards = [...document.querySelectorAll('.project-card')];
  const count = document.querySelector('#project-count');
  const empty = document.querySelector('.empty-state');
  const setFilter = category => {
    let visible = 0;
    cards.forEach(card => {
      const matches = category === 'All' || card.dataset.category === category;
      card.hidden = !matches;
      if (matches) visible++;
    });
    filters.forEach(button => {
      const selected = button.dataset.filter === category;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    if (count) count.textContent = `${visible} ${visible === 1 ? 'project' : 'projects'}`;
    if (empty) empty.hidden = visible !== 0;
  };
  filters.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter)));
  if (filters.length) setFilter('All');

  const form = document.querySelector('#contact-form');
  if (form) {
    const submit = form.querySelector('button[type="submit"]');
    const status = document.querySelector('#contact-status');
    const endpoint = form.dataset.endpoint || '';
    // Only a form-ID URL belongs here; never put the receiving email in HTML.
    const configured = /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint);
    let sending = false;
    submit.disabled = !configured;
    if (endpoint && !configured) {
      status.textContent = 'The enquiry form is temporarily unavailable. Please use LinkedIn to get in touch.';
      form.removeAttribute('action');
    }
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (!configured || sending || !form.reportValidity()) return;
      sending = true;
      submit.disabled = true;
      form.setAttribute('aria-busy', 'true');
      status.textContent = 'Sending your enquiry…';
      status.dataset.state = 'pending';
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      try {
        const response = await fetch(endpoint, {
          method: 'POST', body: new FormData(form),
          headers: { Accept: 'application/json' }, signal: controller.signal
        });
        if (!response.ok) {
          status.textContent = response.status === 429
            ? 'The form is busy. Your enquiry could not be sent—please try again later or contact me on LinkedIn.'
            : 'Your enquiry could not be sent. Please try again or contact me on LinkedIn.';
          status.dataset.state = 'error';
          return;
        }
        status.textContent = 'Thank you—your enquiry has been submitted. I’ll reply to the email you provided.';
        status.dataset.state = 'success';
        form.reset();
      } catch (error) {
        status.textContent = error.name === 'AbortError'
          ? 'The request timed out, so delivery could not be confirmed. Please try again or contact me on LinkedIn.'
          : 'Delivery could not be confirmed. Check your connection and try again, or contact me on LinkedIn.';
        status.dataset.state = 'error';
      } finally {
        clearTimeout(timeout);
        sending = false;
        submit.disabled = false;
        form.setAttribute('aria-busy', 'false');
      }
    });
  }

  const toc = document.querySelector('#case-toc');
  if (toc) {
    const usedIds = new Set([...document.querySelectorAll('[id]')].map(node => node.id));
    document.querySelectorAll('.case-content h2').forEach((heading, index) => {
      if (!heading.id) {
        let id = heading.textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `section-${index + 1}`;
        const base = id;
        let suffix = 2;
        while (usedIds.has(id)) id = `${base}-${suffix++}`;
        heading.id = id;
      }
      usedIds.add(heading.id);
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      toc.appendChild(link);
    });
  }
})();
