/* ── CUSTOM CURSOR ── */
const cursor = document.getElementById('cursor');
if (cursor) {
  let mx = -100, my = -100;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 10}px, ${my - 10}px)`;
  });
  document.addEventListener('mousedown', () => cursor.classList.add('clicking'));
  document.addEventListener('mouseup',   () => cursor.classList.remove('clicking'));

  const hoverTargets = 'a, button, [role="button"], .project-card, .skill-chip, input, textarea, .detail-link, .contact-link';
  document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
  });
}

/* ── MOBILE NAV ── */
const toggle = document.getElementById('menuToggle');
const nav    = document.getElementById('mainNav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

/* ── PROJECT DETAIL TOGGLE ── */
document.querySelectorAll('.details-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.closest('.project-card').querySelector('.extra-details');
    if (!details) return;
    details.classList.toggle('open');
    btn.textContent = details.classList.contains('open') ? 'Hide Details' : 'View Details';
  });
});

/* ── CONTACT FORM ── */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sent ✓';
    btn.style.background = '#2ECC71';
    btn.style.boxShadow = '0 0 28px rgba(46,204,113,.45)';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      btn.style.boxShadow = '';
      form.reset();
    }, 3000);
  });
}