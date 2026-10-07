/* B · YARDAGE BOOK — the pages are a native horizontal scroller, so the book works
   without this file. This adds the buttons, the keyboard, the counter, and the scorecard
   links that open a page instead of jumping the document. */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const track = $('#pages'), pages = $$('.page', track), count = $('#count');
  const rows = $$('.scorecard tbody tr');
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
    rows.forEach((r) => { const a = $('a', r); if (!a) return; if (+a.dataset.n === n) r.setAttribute('aria-current', 'true'); else r.removeAttribute('aria-current'); });
    if (hash && touched) history.replaceState(null, '', '#page-' + n);
  }
  /* which page is open: read it off the scroll position, settled */
  let t;
  const sync = () => mark(Math.max(1, Math.min(18, Math.round(track.scrollLeft / track.clientWidth) + 1)));
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

  const fromHash = /^#page-(\d{1,2})$/.exec(location.hash);
  const start = fromHash ? +fromHash[1] : 1;
  goTo(start, { smooth: false }); mark(start, { hash: false });
})();
