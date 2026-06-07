/* =========================================
   SECTION DATA
   ========================================= */
const SECTIONS = [
  {
    id: 'proyectos',
    label: 'Proyectos',
    icon: '⬡',
    color: '#00e5ff',
    border: 'rgba(0,229,255,0.35)',
    bg: 'rgba(0,229,255,0.05)',
    size: 90,
    angle: 0,
    radius: 210,
    title: 'Proyectos',
    subtitle: 'Unity · C# · Game Systems',
    content: `
      <p>Colección de proyectos técnicos centrados en el desarrollo de videojuegos: desde mecánicas de juego complejas hasta sistemas de simulación y optimización.</p>
      <div>
        <span class="tag" style="color:#00e5ff;border-color:rgba(0,229,255,0.3)">Unity 6</span>
        <span class="tag" style="color:#00e5ff;border-color:rgba(0,229,255,0.3)">C#</span>
        <span class="tag" style="color:#00e5ff;border-color:rgba(0,229,255,0.3)">Physics</span>
        <span class="tag" style="color:#00e5ff;border-color:rgba(0,229,255,0.3)">AI / NavMesh</span>
        <span class="tag" style="color:#00e5ff;border-color:rgba(0,229,255,0.3)">ECS</span>
      </div>
      <p>→ Desarrollo de mecánicas de juego<br>→ Sistemas de combate y física<br>→ Generación procedural de contenido<br>→ Optimización de rendimiento (LOD, GPU Instancing, Culling)</p>
      <p style="color:#546e8a">Los proyectos se irán añadiendo aquí con capturas, vídeos y descripción técnica detallada.</p>
    `
  },
  {
    id: 'animacion',
    label: 'Animación',
    icon: '◈',
    color: '#a78bfa',
    border: 'rgba(167,139,250,0.35)',
    bg: 'rgba(167,139,250,0.05)',
    size: 84,
    angle: 60,
    radius: 225,
    title: 'Animación Procedural',
    subtitle: 'IK · Blend Trees · Motion',
    content: `
      <p>Técnicas avanzadas de animación procedural e integración con sistemas de juego en tiempo real, enfocadas en naturalidad y eficiencia.</p>
      <div>
        <span class="tag" style="color:#a78bfa;border-color:rgba(167,139,250,0.3)">Inverse Kinematics</span>
        <span class="tag" style="color:#a78bfa;border-color:rgba(167,139,250,0.3)">Blend Trees</span>
        <span class="tag" style="color:#a78bfa;border-color:rgba(167,139,250,0.3)">Rigging</span>
        <span class="tag" style="color:#a78bfa;border-color:rgba(167,139,250,0.3)">Motion Matching</span>
      </div>
      <p>→ IK de extremidades en tiempo real<br>→ Blend trees dinámicos por estado de juego<br>→ Animación procedural de personajes<br>→ Sistemas de ragdoll e impacto físico</p>
    `
  },
  {
    id: 'iluminacion',
    label: 'Iluminación',
    icon: '◉',
    color: '#f59e0b',
    border: 'rgba(245,158,11,0.35)',
    bg: 'rgba(245,158,11,0.05)',
    size: 86,
    angle: 120,
    radius: 215,
    title: 'Iluminación Dinámica',
    subtitle: 'Rendering · Shaders · Optimización',
    content: `
      <p>Sistemas de iluminación dinámica diseñados para rendimiento real en múltiples plataformas, equilibrando calidad visual y coste computacional.</p>
      <h4>// pipelines</h4>
      <div>
        <span class="tag" style="color:#f59e0b;border-color:rgba(245,158,11,0.3)">URP</span>
        <span class="tag" style="color:#f59e0b;border-color:rgba(245,158,11,0.3)">HDRP</span>
        <span class="tag" style="color:#f59e0b;border-color:rgba(245,158,11,0.3)">HLSL</span>
        <span class="tag" style="color:#f59e0b;border-color:rgba(245,158,11,0.3)">Shader Graph</span>
        <span class="tag" style="color:#f59e0b;border-color:rgba(245,158,11,0.3)">GI</span>
      </div>
      <h4>// especialidades</h4>
      <p>→ Global Illumination bakeada y en tiempo real<br>→ Shaders custom para efectos especiales<br>→ Técnicas de culling, LOD y batching<br>→ Post-processing y color grading</p>
    `
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: '◎',
    color: '#34d399',
    border: 'rgba(52,211,153,0.35)',
    bg: 'rgba(52,211,153,0.05)',
    size: 82,
    angle: 180,
    radius: 210,
    title: 'Stack Técnico',
    subtitle: 'Herramientas · Lenguajes · Flujo',
    content: `
      <p>Conjunto de tecnologías y herramientas utilizadas a lo largo de proyectos de desarrollo de videojuegos profesionales y personales.</p>
      <h4>// motor y lenguajes</h4>
      <div>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">Unity</span>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">C#</span>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">HLSL</span>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">Python</span>
      </div>
      <h4>// arte y 3D</h4>
      <div>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">Blender</span>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">Substance Painter</span>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">Shader Graph</span>
      </div>
      <h4>// flujo de trabajo</h4>
      <div>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">Git</span>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">Plastic SCM</span>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">Jira</span>
        <span class="tag" style="color:#34d399;border-color:rgba(52,211,153,0.3)">VS Code</span>
      </div>
    `
  },
  {
    id: 'diseno',
    label: 'Diseño',
    icon: '⬟',
    color: '#f472b6',
    border: 'rgba(244,114,182,0.35)',
    bg: 'rgba(244,114,182,0.05)',
    size: 84,
    angle: 240,
    radius: 220,
    title: 'Proceso de Diseño',
    subtitle: 'Concepto · Prototipado · Arte',
    content: `
      <p>Metodología y proceso creativo desde la ideación hasta la materialización de conceptos de juego, integrando diseño técnico y artístico.</p>
      <h4>// proceso</h4>
      <p>→ Ideación y sketching de mecánicas<br>→ Prototipado rápido en Unity<br>→ Documentación GDD<br>→ Playtesting e iteración</p>
      <h4>// diseño de concepto</h4>
      <p>→ Escenas y environments<br>→ Concept art de personajes<br>→ UI/UX para videojuegos<br>→ Narrativa visual y mood boards</p>
      <h4>// próximamente</h4>
      <p style="color:#546e8a">Galería de conceptos, sketches y procesos de creación.</p>
    `
  },
  {
    id: 'experiencia',
    label: 'Experiencia',
    icon: '◇',
    color: '#818cf8',
    border: 'rgba(129,140,248,0.35)',
    bg: 'rgba(129,140,248,0.05)',
    size: 80,
    angle: 300,
    radius: 212,
    title: 'Experiencia',
    subtitle: 'Trayectoria · Formación',
    content: `
      <p>Trayectoria profesional y formación en desarrollo de videojuegos y programación técnica.</p>
      <h4>// experiencia profesional</h4>
      <p style="color:#546e8a">Añade aquí tus posiciones, empresas y proyectos profesionales.</p>
      <h4>// formación</h4>
      <p style="color:#546e8a">Añade aquí tu formación académica y cursos relevantes.</p>
      <h4>// contacto</h4>
      <a class="panel-link" href="mailto:tu@email.com">
        <span class="link-icon">✉</span> tu@email.com
      </a>
      <a class="panel-link" href="https://github.com/HugoRufete" target="_blank">
        <span class="link-icon">⌥</span> github.com/HugoRufete
      </a>
      <a class="panel-link" href="https://linkedin.com/in/hugorufete" target="_blank">
        <span class="link-icon">◈</span> linkedin.com/in/hugorufete
      </a>
    `
  },
];

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

setTimeout(() => {
  const overlay = document.getElementById('intro-overlay');
  overlay.classList.add('hidden');
  app.classList.add('visible');
  setTimeout(animateNodes, 400);
  setTimeout(floatNodes,   1200);
}, 2800);
