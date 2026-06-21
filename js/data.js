/* =========================================
   SECTION DATA — contenido del portfolio
   =========================================
   Solo datos (textos, color y metadatos) de cada apartado.
   La lógica de render (TOC + secciones + scroll-spy) vive en js/main.js.

   Para editar un apartado, modifica su propiedad `content` (acepta HTML inline).
   Para añadir uno nuevo, agrega un objeto con: id, label, color, title, subtitle, content.
   El contenido LARGO de cada proyecto va en su propia página: proyectos/<nombre>/index.html
   ========================================= */
const SECTIONS = [
  {
    id: 'experience',
    label: 'Experience',
    color: '#A4292E',
    title: 'Experience',
    subtitle: 'Career · Education',
    content: `
      <p>Professional career and education in game development and technical programming.</p>
      <h4>professional experience</h4>
      <p>Add your positions, companies and professional projects here.</p>
      <h4>education</h4>
      <p>Add your academic background and relevant courses here.</p>
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
  {
    id: 'games',
    label: 'Games',
    color: '#A4292E',
    title: 'Games',
    subtitle: 'Shipped Titles · Game Projects',
    content: `
      <p>Games and playable projects I have worked on, from commercial titles to personal prototypes.</p>
      <div>
        <span class="tag">Unity</span>
        <span class="tag">Gameplay</span>
        <span class="tag">Prototyping</span>
      </div>
      <p>→ Game mechanics and combat systems<br>→ Prototyping and game jams<br>→ Released and in-development titles</p>
      <p>Projects will be added here with screenshots, videos and links.</p>
    `
  },
  {
    id: 'systems',
    label: 'Systems',
    color: '#A4292E',
    title: 'Systems',
    subtitle: 'Gameplay · Engine · Architecture',
    content: `
      <p>Reusable gameplay and engine systems built for performance and flexibility.</p>
      <div>
        <span class="tag">C#</span>
        <span class="tag">ECS</span>
        <span class="tag">Physics</span>
        <span class="tag">AI / NavMesh</span>
      </div>
      <p>→ Data-driven gameplay frameworks<br>→ Inventory, abilities and stats systems<br>→ Performance optimization (LOD, GPU Instancing, Culling)</p>
    `
  },
  {
    id: 'lighting',
    label: 'Lighting',
    color: '#A4292E',
    title: 'Lighting',
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
    id: 'tools',
    label: 'Tools',
    color: '#A4292E',
    title: 'Tools',
    subtitle: 'Editor Tools · Pipelines · Automation',
    content: `
      <p>Custom tools and pipelines that speed up production and empower the team.</p>
      <div>
        <span class="tag">Editor Scripting</span>
        <span class="tag">Python</span>
        <span class="tag">Automation</span>
      </div>
      <p>→ Unity editor extensions and inspectors<br>→ Asset and build pipelines<br>→ Workflow automation</p>
    `
  },
  {
    id: 'technologies',
    label: 'Technologies',
    color: '#A4292E',
    title: 'Technologies',
    subtitle: 'Engines · Languages · Software',
    content: `
      <p>A set of technologies and tools used across professional and personal projects.</p>
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
    id: 'xr-projects',
    label: 'XR Projects',
    color: '#A4292E',
    title: 'XR Projects',
    subtitle: 'VR · AR · Immersive',
    content: `
      <p>Virtual and augmented reality projects focused on immersive, interactive experiences.</p>
      <div>
        <span class="tag">XR</span>
        <span class="tag">OpenXR</span>
        <span class="tag">Quest</span>
        <span class="tag">AR Foundation</span>
      </div>
      <p>→ VR interaction and locomotion<br>→ AR prototypes<br>→ Immersive demos and experiments</p>
    `
  },
];
