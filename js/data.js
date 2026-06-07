/* =========================================
   SECTION DATA — contenido del portfolio
   =========================================
   Este archivo contiene SOLO datos (textos, colores, metadatos) de las
   secciones del portfolio. La lógica de render vive en js/main.js.

   Para editar el contenido de una sección, modifica su propiedad `content`
   (acepta HTML inline). Para añadir una sección nueva, añade un objeto al
   array respetando el color asignado en CLAUDE.md.

   El contenido LARGO de cada proyecto concreto va en su propia página:
   proyectos/nombre-proyecto/index.html  (no aquí).
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
