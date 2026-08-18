/* ─── Hamburger / Nav ─────────────────────────────────────────── */
const hamburger   = document.querySelector('.hamburger');
const navMenu     = document.querySelector('.nav-menu');
const navOverlay  = document.querySelector('.nav-overlay');

function openMenu() {
    hamburger.classList.add('open');
    navMenu.classList.add('open');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeMenu() {
    hamburger.classList.remove('open');
    navMenu.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

hamburger?.addEventListener('click', () =>
    hamburger.classList.contains('open') ? closeMenu() : openMenu()
);
navOverlay?.addEventListener('click', closeMenu);
document.querySelector('.nav-close')?.addEventListener('click', closeMenu);

navMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
        e.preventDefault();
        closeMenu();
        const target = document.querySelector(href);
        if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 50);
    } else {
        closeMenu();
    }
}));

/* ─── Accordion ───────────────────────────────────────────────── */
document.querySelectorAll('.module-header').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.module-item');
        const body = item.querySelector('.module-body');
        const isOpen = item.classList.contains('open');

        if (isOpen) {
            item.classList.remove('open');
            body.hidden = true;
            btn.setAttribute('aria-expanded', 'false');
        } else {
            item.classList.add('open');
            body.hidden = false;
            btn.setAttribute('aria-expanded', 'true');
        }
    });
});
