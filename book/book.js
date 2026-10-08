/* The Links at Norman — BOOK
   Day → time on the sun → players → pay. Inventory here is a deterministic demo seeded by the
   date so the sheet looks like a real Saturday; sunrise and sunset are computed for the club. */
(function () {
  'use strict';

  // The club. 3927 24th Ave SE, Norman OK.
  var LAT = 35.196, LON = -97.405;
  var FIRST_TEE_MIN = 7 * 60;            // fallback only; the real first tee follows sunrise
  var INTERVAL = 10;                      // minutes between tee times
  var LAST_TEE_BEFORE_SUNSET = 120;        // last tee two hours before sunset (a twilight nine)
  var DAYS = 14;

  // Demo rates. Sample figures: the club does not publish green fees.
  function rate(d, m) {
    var we = d.getDay() === 0 || d.getDay() === 6;
    if (m < 11 * 60) return we ? 46 : 38;        // morning
    if (m < 14 * 60) return we ? 42 : 34;        // midday
    if (m < 16 * 60) return we ? 36 : 30;        // afternoon
    return we ? 28 : 24;                         // twilight
  }
  var PAY_NOW_OFF = 4; // per player

  // ---------- solar times (NOAA simplified; good to a minute or two) ----------
  function sunTimes(d) {
    var rad = Math.PI / 180;
    var start = Date.UTC(d.getFullYear(), 0, 0);
    var doy = Math.floor((Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) - start) / 864e5);
    var g = (360 / 365.25) * (doy - 1 + 0.5) * rad;
    var eqt = 229.18 * (0.000075 + 0.001868 * Math.cos(g) - 0.032077 * Math.sin(g) - 0.014615 * Math.cos(2 * g) - 0.040849 * Math.sin(2 * g));
    var decl = 0.006918 - 0.399912 * Math.cos(g) + 0.070257 * Math.sin(g) - 0.006758 * Math.cos(2 * g) + 0.000907 * Math.sin(2 * g) - 0.002697 * Math.cos(3 * g) + 0.00148 * Math.sin(3 * g);
    var ha = Math.acos(Math.cos(90.833 * rad) / (Math.cos(LAT * rad) * Math.cos(decl)) - Math.tan(LAT * rad) * Math.tan(decl)) / rad;
    var noonUTC = 720 - 4 * LON - eqt;            // minutes UTC
    var riseUTC = noonUTC - 4 * ha, setUTC = noonUTC + 4 * ha;
    var tz = -new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12).getTimezoneOffset(); // local offset in minutes
    return { rise: Math.round(riseUTC + tz), set: Math.round(setUTC + tz) };
  }

  // ---------- deterministic demo inventory ----------
  function seed(d) { return d.getFullYear() * 372 + d.getMonth() * 31 + d.getDate(); }
  function rng(s) { return function () { s = (s * 9301 + 49297) % 233280; return s / 233280; }; }
  function inventory(d, firstTee, lastTee) {
    var r = rng(seed(d)), we = d.getDay() === 0 || d.getDay() === 6, list = [];
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var isToday = d.getTime() === today.getTime();
    var nowMin = new Date().getHours() * 60 + new Date().getMinutes();
    for (var m = firstTee; m <= lastTee; m += INTERVAL) {
      var p;                                         // probability the slot is already full
      if (m < 9 * 60) p = we ? 0.86 : 0.55;
      else if (m < 12 * 60) p = we ? 0.7 : 0.42;
      else if (m < 15 * 60) p = we ? 0.4 : 0.3;
      else p = 0.22;
      var full = r() < p;
      var left = full ? 0 : (r() < 0.25 ? 1 + Math.floor(r() * 3) : 4);
      if (isToday && m < nowMin + 40) { full = true; left = 0; }
      list.push({ m: m, full: full, left: left, rate: rate(d, m) });
    }
    return list;
  }

  // ---------- helpers ----------
  var $ = function (id) { return document.getElementById(id); };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  function hm(m) { var h = Math.floor(m / 60), mm = m % 60, h12 = ((h + 11) % 12) + 1; return { t: h12 + ':' + pad(mm), ap: h < 12 ? 'am' : 'pm' }; }
  function hmStr(m) { var x = hm(m); return x.t + ' ' + x.ap; }
  var DOW = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var DOWS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var MONS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  function longDay(d) { return DOW[d.getDay()] + ' ' + d.getDate() + ' ' + MON[d.getMonth()]; }
  function money(n) { return '$' + n; }

  // ---------- state ----------
  var state = { day: null, slot: null, players: 4, how: 'now', sun: null, inv: [] };

  // ---------- days rail ----------
  var daysEl = $('days');
  var today = new Date(); today.setHours(0, 0, 0, 0);
  for (var i = 0; i < DAYS; i++) {
    var d = new Date(today.getTime() + i * 864e5);
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'day' + ((d.getDay() === 0 || d.getDay() === 6) ? ' is-weekend' : '');
    b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false'); b.dataset.i = i;
    b.setAttribute('aria-label', longDay(d));
    b.innerHTML = '<small>' + (i === 0 ? 'Today' : DOWS[d.getDay()]) + '</small><b>' + d.getDate() + '</b><i>' + MONS[d.getMonth()] + '</i>';
    daysEl.appendChild(b);
  }
  daysEl.addEventListener('click', function (e) {
    var b = e.target.closest('.day'); if (!b) return;
    pickDay(new Date(today.getTime() + (+b.dataset.i) * 864e5), b);
  });

  function pickDay(d, btn) {
    state.day = d; state.slot = null;
    Array.prototype.forEach.call(daysEl.children, function (c) { c.setAttribute('aria-checked', c === btn ? 'true' : 'false'); });
    if (btn) daysEl.scrollTo({ left: btn.offsetLeft - (daysEl.clientWidth - btn.offsetWidth) / 2, behavior: 'smooth' });
    state.sun = sunTimes(d);
    var firstTee = Math.ceil(state.sun.rise / INTERVAL) * INTERVAL;   // first group goes off at sunrise
    var lastTee = Math.floor((state.sun.set - LAST_TEE_BEFORE_SUNSET) / INTERVAL) * INTERVAL;
    state.inv = inventory(d, firstTee, lastTee);
    $('pick-day').textContent = longDay(d);
    drawSun();
    // start on the first time with a whole foursome open, like the starter would offer
    var first = null;
    for (var q = 0; q < state.inv.length; q++) { if (!state.inv[q].full && state.inv[q].left === 4) { first = q; break; } }
    if (first === null) for (q = 0; q < state.inv.length; q++) { if (!state.inv[q].full) { first = q; break; } }
    if (first !== null) selectSlot(first, false);
    render();
  }

  // ---------- the sun ----------
  function drawSun() {
    var rise = state.sun.rise, set = state.sun.set;
    var x0 = rise - 40, x1 = set + 40;                     // strip spans first light to last light
    var pct = function (m) { return ((m - x0) / (x1 - x0) * 100).toFixed(3) + '%'; };
    var sky = $('sky');
    sky.style.background = 'linear-gradient(90deg, #022B4D 0%, #2A4A6E ' + pct(rise - 25) + ', #C98E5A ' + pct(rise) + ', #4F93C6 ' + pct(rise + 70) + ', #5FA3D1 50%, #4A8EC2 ' + pct(set - 100) + ', #C9803F ' + pct(set - 8) + ', #022B4D 100%)';
    var track = $('track'); track.innerHTML = '';
    var max = 0; state.inv.forEach(function (s) { if (s.left > max) max = s.left; });
    state.inv.forEach(function (s, idx) {
      var t = document.createElement('button');
      t.type = 'button'; t.className = 'tee' + (s.full ? ' is-full' : '');
      t.setAttribute('role', 'radio'); t.setAttribute('aria-checked', 'false'); t.dataset.i = idx;
      t.style.left = pct(s.m);
      t.style.setProperty('--h', s.full ? '12px' : (s.left === 4 ? '34px' : '22px') );
      var h = hm(s.m);
      t.setAttribute('aria-label', h.t + ' ' + h.ap + (s.full ? ', full' : ', ' + (s.left === 4 ? 'open' : s.left + ' seat' + (s.left > 1 ? 's' : '') + ' left') + ', ' + money(s.rate)));
      if (s.full) t.setAttribute('aria-disabled', 'true');
      track.appendChild(t);
    });
    var axis = $('axis'); axis.innerHTML = '';
    var marks = [
      { m: rise, l: 'Sunrise ' + hm(rise).t, c: 'light at-start' },
      { m: 12 * 60, l: 'Noon' },
      { m: set - 180, l: 'Twilight', c: 'mid' },
      { m: set, l: 'Sunset ' + hm(set).t, c: 'light at-end' }
    ];
    marks.forEach(function (k) { var s = document.createElement('span'); s.textContent = k.l; s.className = k.c || ''; s.style.left = pct(k.m); axis.appendChild(s); });
    var open = state.inv.filter(function (s) { return !s.full; }).length;
    $('sun-note').innerHTML = '<b>' + open + ' tee times open</b> between ' + hmStr(state.inv[0].m) + ' and ' + hmStr(state.inv[state.inv.length - 1].m) + '. Taller marks have a whole foursome open. The sun is real: ' + hm(rise).t + ' to ' + hm(set).t + ' in Norman that day.';
  }

  function selectSlot(i, animate) {
    var s = state.inv[i], track = $('track');
    state.slot = s;
    Array.prototype.forEach.call(track.children, function (c, j) { c.setAttribute('aria-checked', j === i ? 'true' : 'false'); });
    if (state.players > s.left) setPlayers(s.left); else setPlayers(state.players);
    if (animate) swapNumeral(s); else { var h = hm(s.m); $('pick-time').textContent = h.t; $('pick-ampm').textContent = h.ap; }
  }
  $('track').addEventListener('click', function (e) {
    var t = e.target.closest('.tee'); if (!t) return;
    var s = state.inv[+t.dataset.i];
    if (s.full) { $('pick-meta').innerHTML = '<b>' + hmStr(s.m) + '</b> is full. Try the next mark.'; return; }
    selectSlot(+t.dataset.i, true);
    render();
  });
  // keyboard: arrows move along the sun
  $('track').addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    var cur = document.activeElement; if (!cur || !cur.classList.contains('tee')) return;
    var i = +cur.dataset.i, dir = e.key === 'ArrowRight' ? 1 : -1;
    for (var j = i + dir; j >= 0 && j < state.inv.length; j += dir) { if (!state.inv[j].full) { this.children[j].focus(); this.children[j].click(); break; } }
    e.preventDefault();
  });

  function swapNumeral(s) {
    var n = $('pick-time'), h = hm(s.m);
    n.classList.add('is-swapping');
    setTimeout(function () { n.textContent = h.t; $('pick-ampm').textContent = h.ap; n.classList.remove('is-swapping'); }, 120);
  }

  // ---------- players ----------
  var partyEl = $('party');
  partyEl.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; setPlayers(+b.dataset.n); render(); });
  function setPlayers(n) {
    state.players = n;
    Array.prototype.forEach.call(partyEl.children, function (b) {
      var ok = !state.slot || +b.dataset.n <= state.slot.left;
      b.disabled = !ok; b.style.opacity = ok ? '' : '.35';
      b.setAttribute('aria-checked', +b.dataset.n === n ? 'true' : 'false');
    });
    $('fill-wrap').hidden = !(n < 4);
  }

  // ---------- pay ----------
  var payForm = $('pay');
  payForm.addEventListener('change', function (e) { if (e.target.name === 'how') { state.how = e.target.value; render(); } });

  function render() {
    var s = state.slot, n = state.players;
    $('c-day').textContent = state.day ? longDay(state.day) : '—';
    $('c-time').textContent = s ? hmStr(s.m) : '—';
    $('c-players').textContent = n;
    var btn = $('pay-btn');
    if (!s) {
      $('c-rate').textContent = '—'; $('c-total').textContent = '—'; $('now-total').textContent = '—'; $('shop-total').textContent = '—';
      $('pick-meta').textContent = state.day ? 'Choose a time on the sun below.' : 'Choose a day.';
      btn.disabled = true; btn.textContent = 'Choose a time first'; return;
    }
    var full = s.rate * n, now = (s.rate - PAY_NOW_OFF) * n;
    $('c-rate').textContent = money(s.rate) + ' a player, cart included';
    $('now-total').textContent = money(now); $('shop-total').textContent = money(full);
    $('save-note').textContent = 'Save ' + money(PAY_NOW_OFF) + ' a player';
    var total = state.how === 'now' ? now : full;
    $('c-total').textContent = money(total);
    $('pick-meta').innerHTML = '<b>' + money(s.rate) + '</b> a player with cart · ' + (s.left === 4 ? 'the whole time is yours' : s.left + ' seat' + (s.left > 1 ? 's' : '') + ' left in this group');
    btn.disabled = false;
    btn.textContent = state.how === 'now' ? 'Pay ' + money(total) + ' and book' : 'Book, pay at the pro shop';
  }

  payForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!state.slot) return;
    var ok = true;
    ['name', 'phone'].forEach(function (id) { var el = $(id); var bad = !el.value.trim() || (id === 'phone' && el.value.replace(/\D/g, '').length < 10); el.classList.toggle('is-bad', bad); if (bad) ok = false; });
    if (!ok) { ($('name').classList.contains('is-bad') ? $('name') : $('phone')).focus(); return; }
    confirm();
  });

  function confirm() {
    var s = state.slot, d = state.day, h = hm(s.m), n = state.players;
    $('d-time').textContent = h.t; $('d-ampm').textContent = h.ap;
    $('d-day').textContent = longDay(d);
    var total = (state.how === 'now' ? (s.rate - PAY_NOW_OFF) : s.rate) * n;
    $('d-line').textContent = n + ' player' + (n > 1 ? 's' : '') + ', carts included. ' + (state.how === 'now' ? money(total) + ' paid. ' : money(total) + ' due at the pro shop. ') + 'Confirmation texted to ' + $('phone').value.trim() + '.';
    // calendar file
    var st = new Date(d.getFullYear(), d.getMonth(), d.getDate(), Math.floor(s.m / 60), s.m % 60);
    var en = new Date(st.getTime() + 4.5 * 36e5);
    var f = function (x) { return x.getFullYear() + pad(x.getMonth() + 1) + pad(x.getDate()) + 'T' + pad(x.getHours()) + pad(x.getMinutes()) + '00'; };
    var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//The Links at Norman//Tee time//EN', 'BEGIN:VEVENT', 'DTSTART:' + f(st), 'DTEND:' + f(en), 'SUMMARY:Tee time · The Links at Norman', 'LOCATION:3927 24th Ave SE, Norman OK 73071', 'DESCRIPTION:' + n + ' players, carts included. Check in at the pro shop ten minutes before.', 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    $('d-cal').href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);
    // mark the seats taken in the demo inventory
    s.left -= n; if (s.left <= 0) { s.full = true; s.left = 0; }
    $('done').hidden = false;
    $('done').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  $('d-again').addEventListener('click', function () {
    $('done').hidden = true; state.slot = null;
    drawSun(); $('pick-time').textContent = '—'; $('pick-ampm').textContent = ''; render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---------- start on the first weekend day, like a golfer would ----------
  var startIdx = 0;
  for (var k = 0; k < DAYS; k++) { var dd = new Date(today.getTime() + k * 864e5); if (dd.getDay() === 6) { startIdx = k; break; } }
  pickDay(new Date(today.getTime() + startIdx * 864e5), daysEl.children[startIdx]);
  setPlayers(4);
})();
