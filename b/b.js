/* B · YARDAGE BOOK — the pages are a native horizontal scroller, so the book works
   without this file. This adds the buttons, the keyboard, the counter, and the scorecard
   links that open a page instead of jumping the document. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const track = $('#pages'), pages = $$('.page', track), count = $('#count');
  const cells = $$('.scorecard thead th a[data-n]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = 1;

  function goTo(n, { smooth = true } = {}) {
    n = Math.max(1, Math.min(18, n));
    track.scrollTo({ left: pages[n - 1].offsetLeft, behavior: smooth && !reduced ? 'smooth' : 'instant' });
  }
  let touched = false;
  function mark(n, { hash = true } = {}) {
    if (n === current && touched) return;
    current = n; count.textContent = n;
    cells.forEach((a) => { const th = a.parentElement; if (+a.dataset.n === n) th.setAttribute('aria-current', 'true'); else th.removeAttribute('aria-current'); });
    if (hash && touched) history.replaceState(null, '', '#page-' + n);
  }
  /* which page is open: read it off the scroll position, settled */
  let t;
  const step = () => (pages[1] ? pages[1].offsetLeft - pages[0].offsetLeft : track.clientWidth);
  const sync = () => mark(Math.max(1, Math.min(18, Math.round(track.scrollLeft / step()) + 1)));
  track.addEventListener('scroll', () => { touched = true; clearTimeout(t); t = setTimeout(sync, 90); }, { passive: true });

  $('#prev').addEventListener('click', () => goTo(current - 1));
  $('#next').addEventListener('click', () => goTo(current + 1));
  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(current + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(current - 1); }
  });
  document.addEventListener('click', (e) => {
    const a = e.target.closest('.scorecard a[data-n]');
    if (!a) return;
    e.preventDefault();
    goTo(+a.dataset.n, { smooth: false });
    $('#book').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  });


  /* yardage labels: hold ~13px on screen whatever scale the plate is drawn at */
  function scaleMarks() {
    document.querySelectorAll('svg.line').forEach((svg) => {
      const w = svg.getBoundingClientRect().width; if (!w) return;
      const s = Math.max(1, (svg.viewBox.baseVal.width / w) * 13 / 46);
      svg.style.setProperty('--ls', s.toFixed(3));
    });
  }
  scaleMarks(); addEventListener('resize', scaleMarks); addEventListener('load', scaleMarks);

  const fromHash = /^#page-(\d{1,2})$/.exec(location.hash);
  const start = fromHash ? +fromHash[1] : 1;
  goTo(start, { smooth: false }); mark(start, { hash: false });
})();
