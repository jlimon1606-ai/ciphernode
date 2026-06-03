document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.cn-mobile-menu-btn');
  const panel = document.querySelector('.cn-mobile-menu-panel');
  const closeBtn = document.querySelector('.cn-mobile-menu-close');

  function openMenu() {
    if (!panel || !btn) return;
    panel.classList.add('open');
    document.body.classList.add('cn-menu-open');
    btn.setAttribute('aria-expanded', 'true');
    panel.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    if (!panel || !btn) return;
    panel.classList.remove('open');
    document.body.classList.remove('cn-menu-open');
    btn.setAttribute('aria-expanded', 'false');
    panel.setAttribute('aria-hidden', 'true');
  }

  btn?.addEventListener('click', function () {
    if (panel?.classList.contains('open')) closeMenu();
    else openMenu();
  });

  closeBtn?.addEventListener('click', closeMenu);

  panel?.addEventListener('click', function (event) {
    if (event.target === panel) closeMenu();
  });

  panel?.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) closeMenu();
  });

  window.addEventListener('orientationchange', function () {
    setTimeout(closeMenu, 150);
  });

  window.addEventListener('pageshow', closeMenu);
});
