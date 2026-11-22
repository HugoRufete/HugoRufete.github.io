# Preferencias canónicas

Fuente de verdad para decisiones de diseño, contenido y enfoque. Si una instrucción nueva entra en conflicto con este documento, preguntar antes de actuar.

## 1. Enfoque profesional del repositorio

- El portfolio presenta a Hugo como **una persona técnica que crea Experiencias Inmersivas**.
- El perfil combinado es **Technical Designer + Game/XR Developer**: suficiente criterio técnico para implementar y suficiente sensibilidad de diseño para crear aplicaciones amigables con el usuario.
- El rol que se quiere proyectar es **puente entre diseño y programación**, con soluciones técnicas a problemas abstractos.
- Tecnologías principales: Unity, Unreal Engine, Godot, C#, HLSL, Python y herramientas de editor/automatización.
- Idioma de la web: inglés. Los documentos internos pueden estar en español.

## 2. Estética de la página — línea a seguir

| Elemento | Valor |
|---|---|
| Fondo principal | `#0b0b0c` |
| Superficie elevada / panel | `#151517` |
| Bordes y separadores | `#29292c` |
| Texto principal | `#ededeb` (blanco suave, no blanco puro) |
| Texto secundario | `#b9b9b6` |
| Texto terciario / meta | `#85858a` |
| Tipografía | `Inter` (404/500/600/700), con `font-variant-numeric: tabular-nums` para números |
| Radios | `2px`, esquinas casi vivas |
| Brillo | Solo en hover, foco, estado activo y frase destacada: `rgba(255,255,255,.18–.28)` |
| Layout | Split editorial: índice lateral sticky + columna de contenido, `max-width: 1200px` |
| Movimiento | Hover previews de vídeo, transiciones de transform/opacity, respeto total a `prefers-reduced-motion` |

### Se conserva

- Cabecera fina con marca, navegación Work/Experience/Contact y enlaces externos.
- Índice lateral numerado con scroll-spy.
- Secciones numeradas con `h2` en sentence case.
- Tarjetas de Work con miniatura, número, disciplina, título y descripción corta.
- Control de pausa del showreel.
- Accesibilidad: skip link, foco visible, `aria-current`, semántica y contraste AA.

### Se descarta explícitamente

- El rojo Pantone anterior (`#A4292E`) y cualquier acento de color.
- Intro de carga, cursor personalizado y partículas de fondo.
- Syne y JetBrains Mono como tipografías de la web.
- All-caps masivo y etiquetas tipo HUD.
- Radios grandes, glow en todo el texto y estética "neón/arcade".

## 3. Prioridad de información

1. **Work** — rejilla de proyectos y páginas de proyecto. Es lo primero que se ve tras el masthead.
2. **Experiencia y credibilidad** — roles reales del CV, con énfasis en Technical Designer y XR.
3. **Profundidad técnica** — Systems, Lighting & rendering, XR & prototypes, Tools.
4. **Toolkit** — lista de tecnologías, agrupada por función.
5. **Contacto** — siempre accesible desde cabecera, índice, sección final y footer.

## 4. Contenido de cada apartado

| Apartado | Contenido previsto | Fuente |
|---|---|---|
| Masthead | Positioning como creador de Experiencias Inmersivas, CTA a Work y contacto | `docs/CV_PROFILE.md` |
| Work | Tarjetas con miniatura, disciplina, título y descripción corta. Cada tarjeta enlaza a una página propia | `docs/PROJECTS.md` |
| Experience | Roles reales, fechas y responsabilidades. Incluye formación académica | `cv-references/` (local) |
| Systems | Gameplay y arquitectura: C#, ECS, physics, AI/NavMesh, optimización | CV + preferencias |
| Lighting & rendering | URP/HDRP, HLSL, Shader Graph, GI, composición de luz | CV + preferencias |
| XR & prototypes | OpenXR, Quest, AR Foundation, prototipos inmersivos | CV + preferencias |
| Tools | Editor scripting, Python, automatización, gestión de repositorio | CV + preferencias |
| Toolkit | Unity, Unreal, Godot, C#, HLSL, Python, Blender, Git/Perforce, etc. | CV |
| Contact | Email, GitHub y LinkedIn | CV + web actual |

## 5. Páginas de proyecto

- Cada proyecto personal tiene **su propia página**, que se abre al pulsar su tarjeta en Work.
- Cada proyecto tiene **una carpeta** con:
  - `index.html` — página pública.
  - `content.md` — notas internas y texto pendiente de aprobación.
  - `media/` — todos los vídeos, imágenes y recursos multimedia de ese proyecto.
- `video/proyectos/` se mantiene temporalmente, pero **ya no es fuente de referencia**. El usuario lo borrará tras verificar la migración.
- Las indicaciones específicas de cada proyecto, aunque lleguen una a una, se registran en `docs/PROJECTS.md` bajo ese proyecto.

## 6. Regla de conflicto

Si una instrucción nueva contradice cualquiera de las secciones anteriores:

1. Detener la tarea en curso.
2. Citar la preferencia concreta y explicar el conflicto.
3. Preguntar al usuario si desea sustituirla o mantenerla.
4. Solo continuar con la respuesta.
5. Si se sustituye, actualizar este documento con fecha y motivo de la decisión.
