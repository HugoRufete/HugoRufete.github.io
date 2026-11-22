/* =========================================
   PORTFOLIO DATA
   =========================================
   Single source of truth for the work grid and the page sections.
   js/main.js turns this into the index, the work cards and the sections.
   Active media lives in projects/<slug>/media/.
   Legacy folders (img/proyectos, video/proyectos) are kept but not referenced.
   See AGENTS.md and docs/ before editing.
   ========================================= */

const PROJECTS = [
  {
    title: 'Showreel',
    kind: 'Reel',
    description: 'A short cut of recent gameplay, systems and XR prototypes.',
    image: 'projects/showreel/media/hero-poster.webp',
    media: 'projects/showreel/media/hero.mp4',
    url: 'projects/showreel/',
    type: 'video'
  },
  {
    title: '601 Street',
    kind: 'Narrative systems',
    description: 'Dialogue, inventory and dice systems for a choice-driven game.',
    image: 'projects/601-street/media/poster.webp',
    media: 'projects/601-street/media/banner.mp4',
    url: 'projects/601-street/',
    type: 'video'
  },
  {
    title: 'Load-In',
    kind: 'Gameplay prototype',
    description: 'Exploration, melee combat and environmental storytelling in Unity.',
    image: 'projects/load-in/media/portada.webp',
    media: 'projects/load-in/media/gameplay.mp4',
    url: 'projects/load-in/',
    type: 'video'
  },
  {
    title: 'Proyecto III',
    kind: 'Visual development',
    description: 'Poster and in-game art exploration for a studio project.',
    image: 'projects/proyecto-iii/media/poster.webp',
    media: 'projects/proyecto-iii/media/poster.webp',
    url: 'projects/proyecto-iii/',
    type: 'image'
  },
  {
    title: 'Face Tracking',
    kind: 'Technical prototype',
    description: 'Real-time facial tracking driving reactive character behaviour.',
    image: 'projects/face-tracking-technical-prototyping/media/poster.webp',
    media: 'projects/face-tracking-technical-prototyping/media/prototype-video.mp4',
    url: 'projects/face-tracking-technical-prototyping/',
    type: 'video'
  },
  {
    title: 'Space Invaders',
    kind: 'Multiplayer',
    description: 'A networked arcade shooter prototype built in Unity.',
    image: 'projects/space-invaders-multiplayer/media/poster.webp',
    media: 'projects/space-invaders-multiplayer/media/space-invaders-gameplay.mp4',
    url: 'projects/space-invaders-multiplayer/',
    type: 'video'
  },
  {
    title: 'Mixed Reality',
    kind: 'XR prototype',
    description: 'Hands-on sorting interaction for mixed reality headsets.',
    image: 'projects/xr-mixed-reality/media/poster.webp',
    media: 'projects/xr-mixed-reality/media/sort-video.mp4',
    url: 'projects/xr-mixed-reality/',
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
    subtitle: 'Roles, teams & training',
    content: `
      <p>I work as a bridge between design and engineering, turning abstract problems into playable, approachable systems.</p>
      <h4>Professional experience</h4>
      <ul class="timeline">
        <li>
          <span class="timeline-role">Valentia Studio</span>
          <span class="timeline-meta">Multiplayer Programmer &amp; Gameplay Designer <em>Jul 2025 to Present</em></span>
        </li>
        <li>
          <span class="timeline-role">FlyKube</span>
          <span class="timeline-meta">Technical Designer &amp; Team Lead <em>Mar 2026 to May 2026</em></span>
        </li>
        <li>
          <span class="timeline-role">Nunsys</span>
          <span class="timeline-meta">Unity / XR Developer <em>Jul 2024 to Aug 2024 · Feb 2025 to May 2025</em></span>
        </li>
      </ul>
      <h4>What that work involves</h4>
      <ul class="detail-list">
        <li>Leading programming teams and coordinating art and development work.</li>
        <li>Building custom Unity tools and gameplay systems for production.</li>
        <li>Working across Unity and Unreal, including an Unreal horror project.</li>
      </ul>
      <h4>Education</h4>
      <ul class="detail-list">
        <li>MUTAV, Universitat Politècnica de València <em>Sep 2026 to Present</em></li>
        <li>Creative Media and Game Technologies, Hogeschool Saxion <em>Sep 2024 to Jan 2025</em></li>
        <li>Diseño y Desarrollo de Videojuegos, Florida Universitaria <em>Sep 2021 to Jul 2025</em></li>
        <li>Introducción al desarrollo con IA, BIG School <em>Sep 2026</em></li>
      </ul>
    `
  },
  {
    id: 'systems',
    label: 'Systems',
    title: 'Systems',
    subtitle: 'Gameplay · architecture · performance',
    content: `
      <p>I build reusable gameplay and engine systems that keep up as a project grows, with performance in mind from the start.</p>
      <div class="tags">
        <span class="tag">C#</span>
        <span class="tag">C++</span>
        <span class="tag">ECS</span>
        <span class="tag">Physics</span>
        <span class="tag">AI / NavMesh</span>
        <span class="tag">Unreal</span>
      </div>
      <h4>Systems I build</h4>
      <ul class="detail-list">
        <li>Data-driven gameplay frameworks</li>
        <li>Inventory, abilities, stats and dice-driven interactions</li>
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
      <p>I design dynamic lighting and effects that hold visual quality without wasting frame time.</p>
      <div class="tags">
        <span class="tag">URP</span>
        <span class="tag">HDRP</span>
        <span class="tag">HLSL</span>
        <span class="tag">Shader Graph</span>
        <span class="tag">GI</span>
        <span class="tag">VFX</span>
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
      <p>I prototype immersive interactions for VR and mixed reality, with clear feedback and comfortable movement.</p>
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
        <li>Interactive museography and immersive demos</li>
      </ul>
    `
  },
  {
    id: 'tools',
    label: 'Tools',
    title: 'Tools',
    subtitle: 'Editor · pipelines · automation',
    content: `
      <p>I write editor tools that remove repetitive work from production and help small teams move faster.</p>
      <div class="tags">
        <span class="tag">Editor scripting</span>
        <span class="tag">Python</span>
        <span class="tag">Workflow automation</span>
        <span class="tag">Repository management</span>
      </div>
      <h4>Tools I write</h4>
      <ul class="detail-list">
        <li>Unity inspectors and custom editor windows</li>
        <li>Asset and build pipelines</li>
        <li>Workflows and repository conventions for small teams</li>
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
        <span class="tag">Unreal Engine</span>
        <span class="tag">Godot</span>
        <span class="tag">C#</span>
        <span class="tag">C++</span>
        <span class="tag">HLSL</span>
        <span class="tag">Python</span>
      </div>
      <h4>Art &amp; 3D</h4>
      <div class="tags">
        <span class="tag">Blender</span>
        <span class="tag">Substance Painter</span>
        <span class="tag">Shader Graph</span>
        <span class="tag">Photoshop</span>
        <span class="tag">Premiere Pro</span>
      </div>
      <h4>Workflow</h4>
      <div class="tags">
        <span class="tag">Git</span>
        <span class="tag">Perforce</span>
        <span class="tag">Jira</span>
        <span class="tag">VS Code</span>
        <span class="tag">Audacity</span>
      </div>
    `
  },
  {
    id: 'contact',
    label: 'Contact',
    title: 'Contact',
    subtitle: 'Open to work &amp; collaborations',
    content: `
      <p>I'm open to technical designer, gameplay and XR roles, and to collaborations on immersive experiences.</p>
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
