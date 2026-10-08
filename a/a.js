/* A · MEMBER CARD — the page is complete without this file; it adds the card turn,
   hole selection without page jumps, and the skyline's entrance. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  document.documentElement.classList.add('js');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* menu */
  const menu = $('#menu'), nav = $('#nav');
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', (e) => { if (e.target.tagName === 'A') { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); } });

  /* the card turns over */
  const card = $('#card');
  card.classList.add('enter');
  requestAnimationFrame(() => requestAnimationFrame(() => card.classList.remove('enter')));
  card.addEventListener('click', () => {
    const on = card.classList.toggle('flipped');
    card.setAttribute('aria-pressed', String(on));
  });

  /* holes: tags, prev/next and arrow keys select; the hash follows without jumping */
  const holes = $$('.hole'), tags = $$('.tag');
  tags.forEach((t, i) => t.style.setProperty('--i', i % 9));
  let current = 0;
  function show(n, { scroll = false, hash = true } = {}) {
    n = ((n - 1 + 18) % 18) + 1;
    current = n;
    holes.forEach((h) => h.classList.toggle('active', +h.dataset.n === n));
    tags.forEach((t) => { if (+t.dataset.n === n) t.setAttribute('aria-current', 'true'); else t.removeAttribute('aria-current'); });
    if (hash) history.replaceState(null, '', '#hole-' + n);
    requestAnimationFrame(() => window.scaleMarks && window.scaleMarks());
    if (scroll && matchMedia('(max-width: 900px)').matches) {
      $('#holes').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    }
  }
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-n]');
    if (!a) return;
    e.preventDefault();
    show(+a.dataset.n, { scroll: a.classList.contains('tag') });
    if (!a.classList.contains('tag')) { const t = tags[current - 1]; t && t.focus({ preventScroll: true }); }
  });
  $('#course').addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); show(current + 1); tags[current - 1].focus({ preventScroll: true }); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); show(current - 1); tags[current - 1].focus({ preventScroll: true }); }
  });
  const fromHash = /^#hole-(\d{1,2})$/.exec(location.hash);
  show(fromHash ? +fromHash[1] : 13, { hash: false });


  /* yardage labels: hold ~13px on screen whatever scale the plate is drawn at */
  function scaleMarks() {
    document.querySelectorAll('svg.line').forEach((svg) => {
      const w = svg.getBoundingClientRect().width; if (!w) return;
      const s = Math.max(1, (svg.viewBox.baseVal.width / w) * 13 / 46);
      svg.style.setProperty('--ls', s.toFixed(3));
    });
  }
  window.scaleMarks = scaleMarks; scaleMarks(); addEventListener('resize', scaleMarks); addEventListener('load', scaleMarks);

  /* the skyline rises once, when it comes into view */
  const sky = $('#skyline');
  if (reduced || !('IntersectionObserver' in window)) sky.classList.add('in');
  else new IntersectionObserver((es, io) => { if (es.some((x) => x.isIntersecting)) { sky.classList.add('in'); io.disconnect(); } }, { rootMargin: '0px 0px -15% 0px' }).observe(sky);
})();
