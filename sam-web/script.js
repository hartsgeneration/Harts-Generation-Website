/* =========================================================
   HARTS GENERATION — script.js
   Content lives in the DATA blocks below. Edit these arrays
   to add projects, gear, certs, etc. — no HTML surgery needed.
   ========================================================= */

/* ---------------- DATA: SERVICES ---------------- */
const SERVICES = [
  { icon: 'foh', img: 'assets/service-live.jpg',      title: 'Live Sound Engineering', desc: 'Front-of-house mixes that translate the artist\'s intent to every seat in the room.' },
  { icon: 'rec', img: 'assets/service-recording.jpg', title: 'Multitrack Recording', desc: 'Capture every input, release-ready, so a great night can live on long after load-out.' },
  { icon: 'mon', img: 'assets/service-monitor.jpg',   title: 'Monitor Engineering', desc: 'Confident performers, clean IEM mixes, zero feedback — the show starts on stage.' },
  { icon: 'rf',  img: 'assets/service-rf.jpg',        title: 'RF Engineering', desc: 'Wireless mic & IEM coordination with a clean, interference-free spectrum plan.' },
  { icon: 'con', title: 'Sound Consultancy', desc: 'System design, room tuning and spec advice for venues, install and one-offs.' },
  { icon: 'prd', title: 'Audio Production Mgmt', desc: 'The whole audio package handled — crew, kit, logistics and vendor wrangling.' },
];

/* ---------------- DATA: PORTFOLIO ---------------- */
const PROJECTS = [
  { cat: 'concert',   img: 'assets/proj-arena.jpg',      tag: 'Concert',   title: 'Midnight Echo — Arena Tour', meta: '2025 · The Dome', role: 'FOH + RF', desc: '18-date arena run. 96-channel desk, full RF coordination for 24 wireless channels.' },
  { cat: 'festival',  img: 'assets/proj-festival.jpg',   tag: 'Festival',  title: 'Riverside Sound Festival',   meta: '2024 · Main Stage', role: 'Systems + FOH', desc: 'Two-day, four-stage festival. Line-array design and rolling changeovers.' },
  { cat: 'church',    img: 'assets/proj-church.jpg',     tag: 'Church',    title: 'Grace City — Easter Services', meta: '2025 · Auditorium', role: 'FOH + Broadcast', desc: 'Multi-service weekend mixed for room and livestream simultaneously.' },
  { cat: 'corporate', img: 'assets/proj-corporate.jpg',  tag: 'Corporate', title: 'Nova Tech Product Launch',    meta: '2024 · Convention Ctr', role: 'Audio Lead', desc: 'Keynote, panels and after-party. Comms, playback and a spotless PA.' },
  { cat: 'concert',   img: 'assets/proj-acoustic.jpg',   tag: 'Concert',   title: 'Sable — Acoustic Sessions',   meta: '2025 · The Chapel', role: 'FOH + Record', desc: 'Intimate live recording released as a live EP six weeks later.' },
  { cat: 'church',    img: 'assets/proj-conference.jpg', tag: 'Church',    title: 'Cornerstone Conference',      meta: '2024 · Grand Hall', role: 'Systems', desc: '3,000-seat conference. Full PA design, monitors and RF for 30+ mics.' },
];

/* ---------------- DATA: CLIENTS ---------------- */
const CLIENTS = [
  { img: 'assets/dof-logo.png',      name: 'DOF' },
  { img: 'assets/brand-hob.jpg',     name: 'House of Bass' },
  { img: 'assets/brand-trinity.jpg', name: 'Trinity Records East Africa' },
  { img: 'assets/brand-prophesy.png',name: 'Prophesy Again Conference' },
  { img: 'assets/brand-karura.jpg',  name: 'Karura Voices' },
  { img: 'assets/brand-joyseema.jpg',name: 'Joy Seema' },
  { img: 'assets/brand-nairobi.jpg', name: 'Nairobi Central SDA Church' },
  { img: 'assets/brand-stb.jpg',     name: 'The Stillbridge Band' },
];

/* ---------------- DATA: GALLERY (spans keep the mosaic alive) ---------------- */
const GALLERY = [
  { span: 'wide', img: 'assets/gal-mainstage.jpg', label: 'Main stage' }, { span: '', img: 'assets/gal-console.jpg', label: 'At the console' },
  { span: 'tall', img: 'assets/gal-wash.jpg', label: 'Stage wash' }, { span: '', img: 'assets/gal-backline.jpg', label: 'Backline' },
  { span: '', img: 'assets/gal-drums.jpg', label: 'Load-in' }, { span: 'wide', img: 'assets/gal-crowd.jpg', label: 'Full house' },
  { span: '', img: 'assets/gal-soundcheck.jpg', label: 'Soundcheck' }, { span: '', img: 'assets/gal-records.jpg', label: 'In the mix' },
];

/* ---------------- DATA: CERTIFICATIONS ---------------- */
const CERTS = [
  { icon: '🎚️', title: 'Digital Console Certified', body: 'Advanced operation & offline show-building.', year: '2024', link: true },
  { icon: '📡', title: 'RF Coordination', body: 'Professional wireless systems & spectrum planning.', year: '2023', link: true },
  { icon: '🔊', title: 'Line Array Systems', body: 'System design, rigging safety & prediction software.', year: '2023', link: false },
  { icon: '🎧', title: 'Dante Level 2', body: 'Networked audio design & troubleshooting.', year: '2022', link: true },
];

/* ---------------- DATA: GEAR ---------------- */
const GEAR = [
  { cat: 'mixers',  icon: '🎛️', name: 'Digital Mixing Console', specs: 'Behringer Wing or Allen & Heath SQ-6 · up to 48 inputs · full show recall', rate: 'Enquire for rate' },
  { cat: 'speakers',icon: '🔊', name: 'Line Array System', specs: '12-box hang per side · subs · full processing & amps', rate: 'Enquire for rate' },
  { cat: 'mics',    icon: '🎤', name: 'Vocal Mic Package', specs: 'Shure SLXD4 digital wireless · handheld capsules · rock-solid UHF', rate: 'Enquire for rate' },
  { cat: 'rf',      icon: '📡', name: 'Wireless Mic × 8', specs: 'Digital UHF · coordinated · antenna distro included', rate: 'Enquire for rate' },
  { cat: 'rf',      icon: '🎧', name: 'In-Ear Monitor System', specs: 'Debra Audio wireless IEM · KZ AM16 in-ears · antenna combiner', rate: 'Enquire for rate' },
  { cat: 'speakers',icon: '📻', name: 'Powered Wedges × 6', specs: '12" coaxial stage monitors · flexible mixes', rate: 'From $20 / day' },
];

/* ---------------- DATA: TESTIMONIALS ---------------- */
const TESTIMONIALS = [
  { text: 'Best FOH engineer we\'ve toured with. The mix was consistent night after night and the audience felt every drop.', name: 'Sable', role: 'Recording Artist', initials: 'S' },
  { text: 'Our livestream audio has never sounded this good. Calm, prepared, and completely on top of the RF.', name: 'P. Adeyemi', role: 'Grace City Media', initials: 'PA' },
  { text: 'They ran our entire product launch audio without a single hiccup. Total professionals from load-in to strike.', name: 'M. Chen', role: 'Nova Tech Events', initials: 'MC' },
];

/* ---------------- DATA: FAQ ---------------- */
const FAQS = [
  { q: 'How far in advance should I book?', a: 'For weekends and festival season, 4–6 weeks is ideal. That said, always reach out — we keep some capacity for short-notice gigs and can often point you to a trusted colleague if we\'re booked.' },
  { q: 'Do you travel for events?', a: 'Yes. We\'re based centrally but regularly travel nationwide. Travel and accommodation for out-of-area events are added to the quote up front — no surprises.' },
  { q: 'How does booking and deposit work?', a: 'A signed confirmation plus a deposit (typically 30%) secures your date. The balance is due close to the event. Everything is laid out clearly in your quote.' },
  { q: 'Can I hire gear without an engineer?', a: 'Absolutely — most items are available as dry hire. For complex systems (line arrays, large RF setups) we\'ll recommend a crewed option to keep things running smoothly.' },
  { q: 'Will you record the show?', a: 'We can multitrack any event for a live release, archive or virtual soundcheck. Just flag it when you enquire so we can bring the right interface and storage.' },
];

/* =========================================================
   SVG ICONS (inline, currentColor)
   ========================================================= */
const ICONS = {
  foh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 14v3M9 10v7M14 7v10M19 12v5" stroke-linecap="round"/></svg>',
  rec: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>',
  mon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 9h4l5-4v14l-5-4H4z" stroke-linejoin="round"/><path d="M17 8a5 5 0 010 8" stroke-linecap="round"/></svg>',
  rf:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 12v8M9 20h6" stroke-linecap="round"/><path d="M8 8a5.5 5.5 0 018 0M5.5 5.5a9 9 0 0113 0" stroke-linecap="round"/><circle cx="12" cy="11" r="1.4" fill="currentColor" stroke="none"/></svg>',
  con: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2"/></svg>',
  prd: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3M7 9h2M11 9h2M15 9h2M7 13h6" stroke-linecap="round"/></svg>',
};

/* =========================================================
   RENDER
   ========================================================= */
const $ = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

// Services
$('#servicesGrid').innerHTML = SERVICES.map((s, i) => `
  <article class="svc-card ${s.img ? 'svc-card--photo' : ''} reveal" style="--d:${i * 0.06}s">
    ${s.img ? `<div class="svc-card__media"><img src="${s.img}" alt="${s.title}" loading="lazy"></div>` : ''}
    <div class="svc-card__inner">
      <span class="svc-card__num">0${i + 1}</span>
      <div class="svc-card__ico">${ICONS[s.icon]}</div>
      <h3>${s.title}</h3>
      <p>${s.desc}</p>
      <a href="#contact" class="svc-card__link" data-service="${s.title}">Request this service →</a>
    </div>
  </article>`).join('');

// Portfolio
$('#portfolioGrid').innerHTML = PROJECTS.map((p, i) => `
  <article class="proj reveal" data-cat="${p.cat}" data-img="${p.img}" data-lb="${p.title}|${p.desc}" style="--d:${(i % 3) * 0.08}s">
    <div class="proj__bg" style="background-image:url('${p.img}')"></div>
    <div class="proj__overlay">
      <span class="proj__tag">${p.tag}</span>
      <span class="proj__meta">${p.role} · ${p.meta}</span>
      <h3>${p.title}</h3>
      <p class="proj__desc">${p.desc}</p>
    </div>
  </article>`).join('');

// Clients
$('#logoWall').innerHTML = CLIENTS.map(c => {
  if (typeof c === 'object' && c.img) {
    return `<div class="logos__tile logos__tile--img"><img src="${c.img}" alt="${c.name}" loading="lazy"></div>`;
  }
  const html = c.includes('◆') ? c.replace('◆', '<b>◆</b>') : c;
  return `<div class="logos__tile">${html}</div>`;
}).join('');

// Gallery
$('#galleryGrid').innerHTML = GALLERY.map((g, i) => `
  <div class="gtile ${g.span ? 'gtile--' + g.span : ''}" data-img="${g.img}" data-lb="${g.label}|Event photography">
    <div class="gtile__bg" style="background-image:url('${g.img}')"></div>
  </div>`).join('');

// Certs
$('#certsGrid').innerHTML = CERTS.map((c, i) => `
  <article class="cert reveal" style="--d:${(i % 4) * 0.06}s">
    <div class="cert__badge">${c.icon}</div>
    <h4>${c.title}</h4>
    <p class="cert__body">${c.body}</p>
    <span class="cert__year">ISSUED ${c.year}</span>
    ${c.link ? '<br><a class="cert__link" href="#">✓ Verify credential</a>' : ''}
  </article>`).join('');

// Gear
$('#gearGrid').innerHTML = GEAR.map((g, i) => `
  <article class="gear-card reveal" data-cat="${g.cat}" style="--d:${(i % 3) * 0.06}s">
    <div class="gear-card__img">
      <span class="gear-card__cat">${g.cat}</span>
      <span class="gear-card__icon">${g.icon}</span>
    </div>
    <div class="gear-card__body">
      <h4>${g.name}</h4>
      <p class="gear-card__specs">${g.specs}</p>
      <div class="gear-card__foot">
        <span class="gear-card__rate">${g.rate}</span>
        <a href="#contact" class="btn btn--primary" data-gear="${g.name}">Enquire</a>
      </div>
    </div>
  </article>`).join('');

// Testimonials
$('#testimonialsGrid').innerHTML = TESTIMONIALS.map((t, i) => `
  <article class="quote reveal" style="--d:${(i % 3) * 0.08}s">
    <div class="quote__stars">★★★★★</div>
    <div class="quote__mark">"</div>
    <p>${t.text}</p>
    <div class="quote__who">
      <span class="quote__av">${t.initials}</span>
      <div><div class="quote__name">${t.name}</div><div class="quote__role">${t.role}</div></div>
    </div>
  </article>`).join('');

// FAQ
$('#faqList').innerHTML = FAQS.map(f => `
  <div class="faq-item reveal">
    <button class="faq-q" aria-expanded="false">${f.q}<span class="faq-q__ico">+</span></button>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>`).join('');

// Deterministic "photo" backgrounds so tiles look art-directed until real images drop in
function projBg(seed) {
  const hues = [
    'linear-gradient(135deg,#2a0b0f,#0a0a0b 70%)',
    'radial-gradient(120% 100% at 20% 10%,#3a0d13,#0c0c0d 65%)',
    'linear-gradient(160deg,#1a1a1e,#0a0a0b 75%)',
    'radial-gradient(120% 120% at 80% 0%,#48101a,#0b0b0c 60%)',
    'linear-gradient(200deg,#241016,#0a0a0b 70%)',
    'radial-gradient(100% 100% at 50% 100%,#330c12,#0a0a0b 65%)',
  ];
  return hues[seed % hues.length];
}

/* =========================================================
   INTERACTIONS
   ========================================================= */

// Preloader
window.addEventListener('load', () => {
  setTimeout(() => $('#preloader').classList.add('is-done'), 500);
});
// Fallback if load is slow
setTimeout(() => $('#preloader')?.classList.add('is-done'), 2500);

// Year
$('#year').textContent = '2026';

// Nav scroll state + progress bar
const nav = $('#nav');
const progress = $('#scrollProgress');
function onScroll() {
  const y = window.scrollY;
  nav.classList.toggle('is-stuck', y > 20);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav
const navToggle = $('#navToggle');
const navLinks = $('#navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', open);
  document.body.classList.toggle('no-scroll', open);
});
$$('#navLinks a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('is-open');
  navToggle.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('no-scroll');
}));

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach(el => io.observe(el));

// Animated stat counters
const counters = $$('.stat__num');
const cio = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = +el.dataset.count;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 45));
    const tick = () => {
      cur = Math.min(target, cur + step);
      el.firstChild ? el.firstChild.nodeValue = cur : el.textContent = cur;
      if (cur < target) requestAnimationFrame(tick);
    };
    tick();
    cio.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => cio.observe(c));

// Generic filter setup (portfolio + gear)
function setupFilter(filtersSel, itemSel) {
  const wrap = $(filtersSel);
  if (!wrap) return;
  wrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    $$('.filter', wrap).forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    const f = btn.dataset.filter;
    $$(itemSel).forEach(item => {
      const show = f === 'all' || item.dataset.cat === f;
      item.classList.toggle('is-hidden', !show);
    });
  });
}
// Portfolio uses .is-hidden via display:none — add class rule alias
setupFilter('#portfolioFilters', '#portfolioGrid .proj');
setupFilter('#gearFilters', '#gearGrid .gear-card');

// Add is-hidden behaviour to .proj (styles handle .gear-card + .proj.is-hidden)
const styleFix = document.createElement('style');
styleFix.textContent = '.proj.is-hidden{display:none}';
document.head.appendChild(styleFix);

// FAQ accordion
$('#faqList').addEventListener('click', (e) => {
  const q = e.target.closest('.faq-q');
  if (!q) return;
  const item = q.parentElement;
  const a = $('.faq-a', item);
  const open = item.classList.toggle('is-open');
  q.setAttribute('aria-expanded', open);
  a.style.maxHeight = open ? a.scrollHeight + 'px' : '0';
});

// Pre-fill contact form from service/gear links
document.addEventListener('click', (e) => {
  const svc = e.target.closest('[data-service]');
  const gear = e.target.closest('[data-gear]');
  if (svc) {
    const sel = $('#service');
    [...sel.options].forEach(o => { if (o.text === svc.dataset.service) sel.value = o.value; });
    $('#message').value = `I'd like to request: ${svc.dataset.service}.\n`;
  }
  if (gear) {
    $('#type').value = 'Gear hire only';
    $('#message').value = `I'd like to enquire about hiring: ${gear.dataset.gear}.\n`;
  }
});

// Contact form (front-end demo — wire to your backend / Formspree / Netlify Forms)
$('#bookingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const note = $('#formNote');
  const form = e.target;
  if (!form.name.value.trim() || !form.email.value.trim()) {
    note.textContent = 'Please add your name and email so we can reply.';
    note.classList.remove('is-ok');
    return;
  }
  note.textContent = '✓ Thanks! Your enquiry is ready — connect this form to your inbox to receive it.';
  note.classList.add('is-ok');
  form.reset();
});

/* ---------------- Lightbox ---------------- */
const lightbox = $('#lightbox');
const lbStage = $('#lightboxStage');
let lbItems = [], lbIndex = 0;

function collectLb() { lbItems = $$('[data-lb]'); }
function openLb(el) {
  collectLb();
  lbIndex = lbItems.indexOf(el);
  renderLb();
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}
function renderLb() {
  const el = lbItems[lbIndex];
  const [title, sub] = (el.dataset.lb || 'Media|').split('|');
  const img = el.dataset.img;
  if (img) {
    lbStage.style.background = `#0c0c0d url('${img}') center/cover no-repeat`;
    lbStage.innerHTML = `<figcaption class="lb-cap"><h3>${title}</h3><p>${sub || ''}</p></figcaption>`;
  } else {
    lbStage.style.background = projBg(lbIndex + 1);
    lbStage.innerHTML = `<div class="lb-inner"><h3>${title}</h3><p>${sub || 'Add your photo/video here'}</p></div>`;
  }
}
function closeLb() {
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}
function stepLb(d) { lbIndex = (lbIndex + d + lbItems.length) % lbItems.length; renderLb(); }

document.addEventListener('click', (e) => {
  const t = e.target.closest('.gtile, .proj');
  if (t && t.dataset.lb) openLb(t);
});
$('#lightboxClose').addEventListener('click', closeLb);
$('#lightboxPrev').addEventListener('click', () => stepLb(-1));
$('#lightboxNext').addEventListener('click', () => stepLb(1));
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('is-open')) return;
  if (e.key === 'Escape') closeLb();
  if (e.key === 'ArrowLeft') stepLb(-1);
  if (e.key === 'ArrowRight') stepLb(1);
});
