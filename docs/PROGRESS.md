# Progreso de la web

Registro cronológico desde el inicio de la colaboración. Las decisiones de diseño y contenido están en `PREFERENCES.md`; el estado detallado de los proyectos, en `PROJECTS.md`.

## Contexto

- Repositorio: `HugoRufete/HugoRufete.github.io`, rama `main`.
- Web estática servida por GitHub Pages desde la raíz de `main`, sin `.github/workflows`.
- URL pública: `https://hugorufete.github.io/`.

## Fase 1 — Explicación y recuperación del deploy

- Se explicó el flujo de publicación: cada `push` a `main` dispara el GitHub Pages GitHub App, que construye y publica el contenido estático sin pasos de build propios.
- Se investigó el despliegue fallido:
  - Run: `28739995295`.
  - Deployment: `5317884720`.
  - Job de deploy: `85220967198`.
  - `build` y `upload artifact` terminaron correctamente; solo falló `deploy` con el mensaje “Deployment failed, try again later”.
  - Los logs expiraron y la API devolvió `403`, por lo que se descartó un problema del código.
- Se reintentó con un commit vacío `f468500` (`chore: retry GitHub Pages deployment`).
- El nuevo deployment `7981124720` se completó correctamente.
- Se verificó que los archivos servidos coincidían con los locales mediante hashes SHA-256 con cache-busting.

## Fase 2 — Rediseño monócromo y work-first

- Se revisó la referencia visual `fydar.dev` (CSS y DOM) y se eligió una dirección editorial monocroma: negro carbón, blanco suave y un único brillo blanco en estados activos.
- Se eliminaron la intro de carga, el cursor personalizado y el canvas de partículas.
- Se sustituyeron Syne + JetBrains Mono por Inter.
- Se generaron posters WebP ligeros a partir de los vídeos existentes con `ffmpeg`.
- Se reescribieron:
  - `index.html`
  - `css/style.css`
  - `js/data.js`
  - `js/main.js`
- Se añadieron:
  - Rejilla de Work con siete tarjetas.
  - Índice lateral sticky con scroll-spy.
  - Control de pausa del showreel.
  - Hover previews de vídeo.
  - Skip link, foco visible y manejo de `prefers-reduced-motion`.
- Verificación: axe-core sin violaciones en escritorio y móvil, sin errores de consola, sin imágenes rotas ni desbordamiento horizontal; teclado y pausa del reel comprobados.
- Commit `ac3e0ef` (`Redesign portfolio with monochrome editorial layout`), push a `main` y verificación byte a byte de los cuatro archivos clave en la URL pública.

## Fase 3 — Workflow, CV y estructura por proyecto (esta fase)

- Se comprobó que el lector nativo de PDFs de este modelo no podía mostrar el PDF adjunto.
- Se instaló la skill oficial `anthropics/skills@pdf` de forma global para OpenCode (`~/.agents/skills/pdf`).
- El CV resultó ser una imagen escaneada sin capa de texto:
  - `pypdf` detectó 1 página y un XObject sin fuentes.
  - `pypdfium2` renderizó la página a 1787×2527 px.
  - OCR con `tesseract.js` (`spa+eng`), confianza del 93 %.
- Se crearon los documentos de workflow:
  - `AGENTS.md` — reglas duras y lectura obligatoria.
  - `docs/PREFERENCES.md` — preferencias canónicas.
  - `docs/PROGRESS.md` — este archivo.
  - `docs/CV_PROFILE.md` — análisis del CV.
  - `docs/PROJECTS.md` — contrato y estado de las páginas de proyecto.
  - `docs/WORKFLOW.md` — procedimiento y verificación.
- Se añadió `cv-references/` a `.gitignore` para que el CV con datos personales nunca se publique.
- Se migraron todos los recursos activos a `projects/<slug>/media/`, copiando desde `img/proyectos/`, `video/proyectos/` y `video/hero.mp4`:
  - `showreel` — 3 archivos.
  - `601-street` — 14 archivos.
  - `load-in` — 10 archivos.
  - `proyecto-iii` — 2 archivos.
  - `face-tracking-technical-prototyping` — 2 archivos.
  - `space-invaders-multiplayer` — 2 archivos.
  - `xr-mixed-reality` — 2 archivos.
- `video/proyectos/` y `img/proyectos/` se conservan tal cual, pero ya no son fuente de referencia.
- Se actualizaron los textos de la web con el positioning de “Experiencias Inmersivas” y los datos reales del CV:
  - Nunsys dividido en sus dos periodos reales.
  - Trabajo con Unreal en Valentia Studio.
  - Formación académica añadida a Experience.
  - Unreal, Godot, VFX y automatización añadidos al perfil técnico.
- Se crearon siete páginas de proyecto con galería multimedia y navegación entre proyectos.
- Se añadió `favicon.svg` para eliminar el 404 de `/favicon.ico`.
- Se actualizaron `img/README.md` y `video/README.md` para que dejen de enseñar las rutas heredadas.
- Durante la verificación se detectó y corrigió un error de rutas relativas en las páginas de proyecto (`../` → `../../` para CSS, homepage y favicon).
- Verificación completada:
  - `node --check` en `js/data.js` y `js/main.js`: correcto.
  - `git diff --check`: correcto.
  - Comprobación de 156 referencias/rutas: 0 errores.
  - QA en navegador sobre HTTP: homepage escritorio y móvil + 7 páginas de proyecto, sin errores de consola, imágenes rotas ni desbordamiento de página.
  - Todos los vídeos alcanzaron `readyState 4`; los `ERR_ABORTED` restantes son cancelaciones de peticiones parciales del servidor local de pruebas, no fallos de carga.
  - axe-core (WCAG 2.0/2.1 A y AA): 0 violaciones en homepage escritorio/móvil y en las 7 páginas de proyecto.
- Pendiente: el usuario debe aportar las indicaciones concretas de texto, orden y contenido de cada página de proyecto. Hasta entonces las páginas usan información factual y neutral extraída del CV y de los nombres de archivo.

## Estado actual

- Commit de esta fase: ver `git log` (último commit de esta sesión antes del push).
- Publicación: el push a `main` dispara el deploy de GitHub Pages. El resultado se verifica en la URL pública tras el push.
