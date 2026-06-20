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

   NOTA: los `id` se mantienen en español porque son identificadores internos
   (se usan para generar IDs de nodo como `node-proyectos`), no texto visible.
   ========================================= */
const SECTIONS = [
  {
    id: 'proyectos',
    label: 'Projects',
    icon: '⬡',
    color: '#A4292E',
    border: 'rgba(0,229,255,0.35)',
    bg: 'rgba(0,229,255,0.05)',
    size: 90,
    angle: 0,
    radius: 210,
    title: 'Projects',
    subtitle: 'Unity · C# · Game Systems',
    content: `
      <p>A collection of technical projects focused on game development: from complex gameplay mechanics to simulation and optimization systems.</p>
      <div>
        <span class="tag">Unity 6</span>
        <span class="tag">C#</span>
        <span class="tag">Physics</span>
        <span class="tag">AI / NavMesh</span>
        <span class="tag">ECS</span>
      </div>
      <p>→ Gameplay mechanics development<br>→ Combat and physics systems<br>→ Procedural content generation<br>→ Performance optimization (LOD, GPU Instancing, Culling)</p>
      <p style="color:#546e8a">Projects will be added here with screenshots, videos and detailed technical descriptions.</p>
    `
  },
  {
    id: 'animacion',
    label: 'Animation',
    icon: '◈',
    color: '#A4292E',
    border: 'rgba(167,139,250,0.35)',
    bg: 'rgba(167,139,250,0.05)',
    size: 84,
    angle: 60,
    radius: 225,
    title: 'Procedural Animation',
    subtitle: 'IK · Blend Trees · Motion',
    content: `
      <p>Advanced procedural animation techniques and integration with real-time game systems, focused on naturalness and efficiency.</p>
      <div>
        <span class="tag">Inverse Kinematics</span>
        <span class="tag">Blend Trees</span>
        <span class="tag">Rigging</span>
        <span class="tag">Motion Matching</span>
      </div>
      <p>→ Real-time limb IK<br>→ Dynamic blend trees driven by game state<br>→ Procedural character animation<br>→ Ragdoll and physical impact systems</p>
    `
  },
  {
    id: 'iluminacion',
    label: 'Lighting',
    icon: '◉',
    color: '#A4292E',
    border: 'rgba(245,158,11,0.35)',
    bg: 'rgba(245,158,11,0.05)',
    size: 86,
    angle: 120,
    radius: 215,
    title: 'Dynamic Lighting',
    subtitle: 'Rendering · Shaders · Optimization',
    content: `
      <p>Dynamic lighting systems designed for real performance across multiple platforms, balancing visual quality and computational cost.</p>
      <h4>pipelines</h4>
      <div>
        <span class="tag">URP</span>
        <span class="tag">HDRP</span>
        <span class="tag">HLSL</span>
        <span class="tag">Shader Graph</span>
        <span class="tag">GI</span>
      </div>
      <h4>specialties</h4>
      <p>→ Baked and real-time Global Illumination<br>→ Custom shaders for special effects<br>→ Culling, LOD and batching techniques<br>→ Post-processing and color grading</p>
    `
  },
  {
    id: 'skills',
    label: 'Skills',
    icon: '◎',
    color: '#A4292E',
    border: 'rgba(52,211,153,0.35)',
    bg: 'rgba(52,211,153,0.05)',
    size: 82,
    angle: 180,
    radius: 210,
    title: 'Technical Stack',
    subtitle: 'Tools · Languages · Workflow',
    content: `
      <p>A set of technologies and tools used across professional and personal game development projects.</p>
      <h4>engine & languages</h4>
      <div>
        <span class="tag">Unity</span>
        <span class="tag">C#</span>
        <span class="tag">HLSL</span>
        <span class="tag">Python</span>
      </div>
      <h4>art & 3D</h4>
      <div>
        <span class="tag">Blender</span>
        <span class="tag">Substance Painter</span>
        <span class="tag">Shader Graph</span>
      </div>
      <h4>workflow</h4>
      <div>
        <span class="tag">Git</span>
        <span class="tag">Plastic SCM</span>
        <span class="tag">Jira</span>
        <span class="tag">VS Code</span>
      </div>
    `
  },
  {
    id: 'diseno',
    label: 'Design',
    icon: '⬟',
    color: '#A4292E',
    border: 'rgba(244,114,182,0.35)',
    bg: 'rgba(244,114,182,0.05)',
    size: 84,
    angle: 240,
    radius: 220,
    title: 'Design Process',
    subtitle: 'Concept · Prototyping · Art',
    content: `
      <p>Methodology and creative process from ideation to the realization of game concepts, integrating technical and artistic design.</p>
      <h4>process</h4>
      <p>→ Mechanics ideation and sketching<br>→ Rapid prototyping in Unity<br>→ GDD documentation<br>→ Playtesting and iteration</p>
      <h4>concept design</h4>
      <p>→ Scenes and environments<br>→ Character concept art<br>→ UI/UX for games<br>→ Visual narrative and mood boards</p>
      <h4>coming soon</h4>
      <p style="color:#546e8a">Gallery of concepts, sketches and creation processes.</p>
    `
  },
  {
    id: 'experiencia',
    label: 'Experience',
    icon: '◇',
    color: '#A4292E',
    border: 'rgba(129,140,248,0.35)',
    bg: 'rgba(129,140,248,0.05)',
    size: 80,
    angle: 300,
    radius: 212,
    title: 'Experience',
    subtitle: 'Career · Education',
    content: `
      <p>Professional career and education in game development and technical programming.</p>
      <h4>professional experience</h4>
      <p style="color:#546e8a">Add your positions, companies and professional projects here.</p>
      <h4>education</h4>
      <p style="color:#546e8a">Add your academic background and relevant courses here.</p>
      <h4>contact</h4>
      <a class="panel-link" href="mailto:hugorufete@gmail.com">
        <span class="link-icon">✉</span> hugorufete@gmail.com
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
