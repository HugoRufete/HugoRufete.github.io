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
window.addEventListener('resize', () => {
  resizeCanvas();
  computeScale();
  relayoutNodes();
  updateLines();
});
resizeCanvas();

function initParticles() {
  particles = [];
  const count = Math.floor((canvas.width * canvas.height) / 14000);
  for (let i = 0; i < count; i++) {
    particles.push({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - .5) * 0.25,
      vy: (Math.random() - .5) * 0.25,
      r:  Math.random() * 1.2 + .4,
      a:  Math.random() * 0.35 + 0.08,
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
   NODE SYSTEM
   ========================================= */
const app     = document.getElementById('app');
const svgEl   = document.getElementById('connectors');
const panel   = document.getElementById('panel');
const nodeEls = {};
const lineEls = {};

/* Factor de escala responsive: a escala 1 la constelación ocupa ~620px.
   En pantallas más pequeñas se reduce proporcionalmente para que quepa
   sin que los nodos se salgan ni se solapen (la proporción se mantiene). */
let SCALE = 1;
function computeScale() {
  const minDim = Math.min(window.innerWidth, window.innerHeight);
  SCALE = Math.min(1, minDim / 620);
}
computeScale();

function polarToXY(angleDeg, radius) {
  const rad = (angleDeg - 90) * Math.PI / 180;
  return { x: Math.cos(rad) * radius, y: Math.sin(rad) * radius };
}

function getCenter() {
  const r = app.getBoundingClientRect();
  return { x: r.width / 2, y: r.height / 2 };
}

function createNodes() {
  SECTIONS.forEach(s => {
    const el = document.createElement('div');
    el.className = 'section-node';
    el.id = 'node-' + s.id;
    const size = s.size * SCALE;
    const pos = polarToXY(s.angle, s.radius * SCALE);
    el.style.cssText = `
      width:${size}px; height:${size}px;
      left: calc(50% + ${pos.x}px - ${size/2}px);
      top:  calc(50% + ${pos.y}px - ${size/2}px);
      color: ${s.color};
      border-color: ${s.border};
      background: ${s.bg};
    `;
    el.innerHTML = `
      <div class="sn-icon">${s.icon}</div>
      <div class="sn-label">${s.label}</div>
    `;
    el.addEventListener('click', () => openPanel(s));
    app.appendChild(el);
    nodeEls[s.id] = el;

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('stroke', s.color);
    line.setAttribute('stroke-width', '0.5');
    line.setAttribute('stroke-dasharray', '4 7');
    line.setAttribute('opacity', '0');
    svgEl.appendChild(line);
    lineEls[s.id] = line;
  });
}

function updateLines() {
  const r  = app.getBoundingClientRect();
  const cx = r.width  / 2;
  const cy = r.height / 2;
  SECTIONS.forEach(s => {
    const pos = polarToXY(s.angle, s.radius * SCALE);
    const line = lineEls[s.id];
    line.setAttribute('x1', cx);
    line.setAttribute('y1', cy);
    line.setAttribute('x2', cx + pos.x);
    line.setAttribute('y2', cy + pos.y);
  });
}

/* Recoloca y redimensiona los nodos tras un cambio de tamaño de ventana. */
function relayoutNodes() {
  SECTIONS.forEach(s => {
    const el = nodeEls[s.id];
    if (!el) return;
    const size = s.size * SCALE;
    const pos = polarToXY(s.angle, s.radius * SCALE);
    el.style.width  = size + 'px';
    el.style.height = size + 'px';
    el.style.left = `calc(50% + ${pos.x}px - ${size/2}px)`;
    el.style.top  = `calc(50% + ${pos.y}px - ${size/2}px)`;
  });
}

function animateNodes() {
  SECTIONS.forEach((s, i) => {
    setTimeout(() => {
      const el = nodeEls[s.id];
      el.style.opacity = '1';
      el.style.transform = 'scale(1)';
      const line = lineEls[s.id];
      setTimeout(() => {
        line.style.transition = 'opacity .6s ease';
        line.setAttribute('opacity', '0.35');
      }, 200);
    }, 500 + i * 130);
  });
}

/* =========================================
   FLOAT ANIMATION
   ========================================= */
const floatOffsets = SECTIONS.map((_, i) => ({
  phase: i * 1.1,
  speed: 0.55 + Math.random() * 0.3,
  amp:   5 + Math.random() * 3,
}));

function floatNodes() {
  const t = Date.now() / 1000;
  SECTIONS.forEach((s, i) => {
    const el = nodeEls[s.id];
    if (el.style.opacity !== '1') return;
    const f = floatOffsets[i];
    const dy = Math.sin(t * f.speed + f.phase) * f.amp * SCALE;
    const size = s.size * SCALE;
    const pos = polarToXY(s.angle, s.radius * SCALE);
    el.style.left = `calc(50% + ${pos.x}px - ${size/2}px)`;
    el.style.top  = `calc(50% + ${pos.y + dy}px - ${size/2}px)`;
  });
  updateLines();
  requestAnimationFrame(floatNodes);
}

/* =========================================
   PANEL
   ========================================= */
function openPanel(s) {
  document.getElementById('panel-title').textContent    = s.title;
  document.getElementById('panel-subtitle').textContent = s.subtitle;
  document.getElementById('panel-content').innerHTML    = s.content;
  panel.classList.add('open');
}
document.getElementById('panel-close').addEventListener('click', () => {
  panel.classList.remove('open');
});

/* =========================================
   INTRO SEQUENCE
   ========================================= */
createNodes();
updateLines();

/* Al terminar la intro se oculta la pantalla de carga y queda a la vista el
   hero (primera pantalla). Los nodos están más abajo, bajo la línea de
   flotación, y se revelan al hacer scroll hasta su sección. */
setTimeout(() => {
  document.getElementById('intro-overlay').classList.add('hidden');
}, 2800);

/* =========================================
   SCROLL REVEAL — los nodos aparecen al entrar en viewport
   ========================================= */
let nodesRevealed = false;
function revealNodes() {
  if (nodesRevealed) return;
  nodesRevealed = true;
  app.classList.add('visible');
  animateNodes();
  setTimeout(floatNodes, 800);
}

const appObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) revealNodes();
  });
}, { threshold: 0.3 });
appObserver.observe(app);
