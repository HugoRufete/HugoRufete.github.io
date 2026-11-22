/* =========================================
   PORTFOLIO DATA
   =========================================
   Single source of truth for the work grid and the page sections.
   js/main.js turns this into the index, the work cards and the sections.
   Media lives in img/ and video/. Keep descriptions short and factual.
   ========================================= */

const PROJECTS = [
  {
    title: 'Showreel',
    kind: 'Reel',
    description: 'A short cut of recent gameplay, systems and prototypes.',
    image: 'img/ui/hero-poster.webp',
    media: 'video/hero.mp4',
    type: 'video'
  },
  {
    title: '601 Street',
    kind: 'Narrative systems',
    description: 'Dialogue, inventory and dice systems for a choice-driven game.',
    image: 'img/proyectos/601-street/poster.webp',
    media: 'video/proyectos/601-street/dialogue-example.mp4',
    type: 'video'
  },
  {
    title: 'Load-In',
    kind: 'Gameplay prototype',
    description: 'Exploration, melee combat and environmental storytelling in Unity.',
    image: 'img/proyectos/load-in/portada.webp',
    media: 'video/proyectos/load-in/gameplay.mp4',
    type: 'video'
  },
  {
    title: 'Proyecto III',
    kind: 'Visual development',
    description: 'Poster and in-game art exploration for a studio project.',
    image: 'img/proyectos/proyecto-iii/poster.webp',
    media: 'img/proyectos/proyecto-iii/poster.webp',
    type: 'image'
  },
  {
    title: 'Face Tracking',
    kind: 'Technical prototype',
    description: 'Real-time facial tracking driving reactive character behaviour.',
    image: 'img/proyectos/face-tracking-technical-prototyping/poster.webp',
    media: 'video/proyectos/face-tracking-technical-prototyping/prototype-video.mp4',
    type: 'video'
  },
  {
    title: 'Space Invaders',
    kind: 'Multiplayer',
    description: 'A networked arcade shooter prototype built in Unity.',
    image: 'img/proyectos/space-invaders-multiplayer/poster.webp',
    media: 'video/proyectos/space-invaders-multiplayer/space-invaders-gameplay.mp4',
    type: 'video'
  },
  {
    title: 'Mixed Reality',
    kind: 'XR prototype',
    description: 'Hands-on sorting interaction for mixed reality headsets.',
    image: 'img/proyectos/xr-mixed-reality/poster.webp',
    media: 'video/proyectos/xr-mixed-reality/sort-video.mp4',
    type: 'video'
  }
];

const SECTIONS = [
  {
    id: 'work',
    label: 'Work',
    title: 'Selected work',
    subtitle: 'Games · prototypes · technical work',
    layout: 'work'
  },
  {
    id: 'experience',
    label: 'Experience',
    title: 'Experience',
    subtitle: 'Roles & teams',
    content: `
      <h4>Professional experience</h4>
      <ul class="timeline">
        <li>
          <span class="timeline-role">Valentia Studio</span>
          <span class="timeline-meta">Multiplayer Programmer &amp; Gameplay Designer <em>Jul 2025 to Now</em></span>
        </li>
        <li>
          <span class="timeline-role">FlyKube</span>
          <span class="timeline-meta">Technical Designer &amp; Team Lead <em>Mar 2026 to May 2026</em></span>
        </li>
        <li>
          <span class="timeline-role">Nunsys</span>
          <span class="timeline-meta">Unity Developer &amp; XR/VR Developer <em>Jul 2024 to May 2025</em></span>
        </li>
      </ul>
    `
  },
  {
    id: 'systems',
    label: 'Systems',
    title: 'Systems',
    subtitle: 'Gameplay · architecture · performance',
    content: `
      <p>I build reusable gameplay and engine systems that keep up as a project grows.</p>
      <div class="tags">
        <span class="tag">C#</span>
        <span class="tag">ECS</span>
        <span class="tag">Physics</span>
        <span class="tag">AI / NavMesh</span>
      </div>
      <h4>Systems I build</h4>
      <ul class="detail-list">
        <li>Data-driven gameplay frameworks</li>
        <li>Inventory, abilities and stats</li>
        <li>LOD, GPU instancing and culling for stable frame times</li>
      </ul>
    `
  },
  {
    id: 'lighting',
    label: 'Lighting',
    title: 'Lighting & rendering',
    subtitle: 'Pipelines · shaders · optimisation',
    content: `
      <p>I design dynamic lighting that holds visual quality without wasting frame time.</p>
      <div class="tags">
        <span class="tag">URP</span>
        <span class="tag">HDRP</span>
        <span class="tag">HLSL</span>
        <span class="tag">Shader Graph</span>
        <span class="tag">GI</span>
      </div>
      <h4>Rendering work</h4>
      <ul class="detail-list">
        <li>Baked and real-time global illumination</li>
        <li>Custom shaders for effects and materials</li>
        <li>Post-processing and colour grading</li>
      </ul>
    `
  },
  {
    id: 'xr',
    label: 'XR',
    title: 'XR & prototypes',
    subtitle: 'VR · AR · interaction',
    content: `
      <p>I prototype immersive interactions for VR and AR, with clear feedback and comfortable movement.</p>
      <div class="tags">
        <span class="tag">XR</span>
        <span class="tag">OpenXR</span>
        <span class="tag">Quest</span>
        <span class="tag">AR Foundation</span>
      </div>
      <h4>Work in this area</h4>
      <ul class="detail-list">
        <li>VR interaction and locomotion</li>
        <li>Mixed reality object manipulation</li>
        <li>Immersive demos and technical experiments</li>
      </ul>
    `
  },
  {
    id: 'tools',
    label: 'Tools',
    title: 'Tools',
    subtitle: 'Editor · pipelines · automation',
    content: `
      <p>I write editor tools that remove repetitive work from production.</p>
      <div class="tags">
        <span class="tag">Editor scripting</span>
        <span class="tag">Python</span>
        <span class="tag">Automation</span>
      </div>
      <h4>Tools I write</h4>
      <ul class="detail-list">
        <li>Unity inspectors and custom editor windows</li>
        <li>Asset and build pipelines</li>
        <li>Workflow automation for small teams</li>
      </ul>
    `
  },
  {
    id: 'technologies',
    label: 'Toolkit',
    title: 'Toolkit',
    subtitle: 'Engines · languages · software',
    content: `
      <p>The tools I reach for most often, grouped by the job they do.</p>
      <h4>Engine &amp; languages</h4>
      <div class="tags">
        <span class="tag">Unity</span>
        <span class="tag">C#</span>
        <span class="tag">HLSL</span>
        <span class="tag">Python</span>
      </div>
      <h4>Art &amp; 3D</h4>
      <div class="tags">
        <span class="tag">Blender</span>
        <span class="tag">Substance Painter</span>
        <span class="tag">Shader Graph</span>
      </div>
      <h4>Workflow</h4>
      <div class="tags">
        <span class="tag">Git</span>
        <span class="tag">Plastic SCM</span>
        <span class="tag">Jira</span>
        <span class="tag">VS Code</span>
      </div>
    `
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Contact',
    subtitle: 'Open to work &amp; collaborations',
    content: `
      <p>I'm open to gameplay, engine and technical artist roles, and to interesting collaborations.</p>
      <div class="contact-list">
        <a class="panel-link" href="mailto:hugorufete@gmail.com">
          <span>Email</span><strong>hugorufete@gmail.com</strong><span aria-hidden="true">↗</span>
        </a>
        <a class="panel-link" href="https://github.com/HugoRufete" target="_blank" rel="noopener noreferrer">
          <span>GitHub</span><strong>github.com/HugoRufete</strong><span aria-hidden="true">↗</span>
        </a>
        <a class="panel-link" href="https://linkedin.com/in/hugorufete" target="_blank" rel="noopener noreferrer">
          <span>LinkedIn</span><strong>linkedin.com/in/hugorufete</strong><span aria-hidden="true">↗</span>
        </a>
      </div>
    `
  }
];
