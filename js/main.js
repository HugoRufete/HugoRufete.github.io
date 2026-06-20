/* =========================================
   SECTION DATA
   =========================================
   El array SECTIONS (contenido del portfolio) vive en js/data.js,
   que se carga ANTES que este archivo en index.html.
   ========================================= */

/* =========================================
   CURSOR
   ========================================= */
const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
(function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animateCursor);
})();

/* =========================================
   PARTICLE BACKGROUND
   ========================================= */
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function initParticles() {
  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 16000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - .5) * 0.22,
      vy: (Math.random() - .5) * 0.22,
      r:  Math.random() * 1.2 + .4,
      a:  Math.random() * 0.30 + 0.06,
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = canvas.width;
    if (p.x > canvas.width) p.x = 0;
    if (p.y < 0) p.y = canvas.height;
    if (p.y > canvas.height) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0,229,255,${p.a})`;
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
initParticles();
drawParticles();

/* =========================================
   RENDER — TOC (sidebar) + secciones (contenido)
   Construye la web a partir de SECTIONS (única fuente de verdad).
   ========================================= */
const tocEl      = document.querySelector('.toc');
const sectionsEl = document.getElementById('sections');

SECTIONS.forEach(s => {
  /* Índice lateral */
  const li = document.createElement('li');
  const a  = document.createElement('a');
  a.href = '#' + s.id;
  a.textContent = s.label;
  a.style.setProperty('--sc-item', s.color);
  a.dataset.target = s.id;
  li.appendChild(a);
  tocEl.appendChild(li);

  /* Sección de contenido */
  const section = document.createElement('section');
  section.className = 'section';
  section.id = s.id;
  section.style.setProperty('--sc', s.color);
  section.innerHTML = `
    <header class="article-heading">
      <span class="hash" aria-hidden="true">#</span>
      <h2>${s.title}</h2>
    </header>
    <p class="section-sub">${s.subtitle}</p>
    <div class="card">${s.content}</div>
  `;
  sectionsEl.appendChild(section);
});

/* =========================================
   CARD GLOW — el borde luminoso sigue al ratón
   ========================================= */
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('pointermove', e => {
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    card.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
});

/* =========================================
   SCROLL-SPY — resalta la sección activa en el TOC
   ========================================= */
const tocLinks = {};
tocEl.querySelectorAll('a').forEach(a => { tocLinks[a.dataset.target] = a; });

const spy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      Object.values(tocLinks).forEach(a => a.classList.remove('active'));
      const link = tocLinks[entry.target.id];
      if (link) link.classList.add('active');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

document.querySelectorAll('.section').forEach(sec => spy.observe(sec));

/* =========================================
   INTRO SEQUENCE
   ========================================= */
setTimeout(() => {
  document.getElementById('intro-overlay').classList.add('hidden');
}, 2400);
