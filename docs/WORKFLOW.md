# Workflow de trabajo

## Antes de empezar

1. Leer `AGENTS.md` y los documentos enlazados.
2. Comprobar si la instrucción entra en conflicto con `docs/PREFERENCES.md`. Si es así, parar y preguntar.
3. Identificar si la tarea afecta a contenido del CV (`docs/CV_PROFILE.md`) o a proyectos (`docs/PROJECTS.md`).

## Durante la tarea

- Mantener el orden de prioridad: Work → Experience → capacidades técnicas → Toolkit → Contacto.
- Reutilizar los tokens de diseño de `docs/PREFERENCES.md`. No crear acentos nuevos sin aprobación.
- Toda multimedia activa debe vivir en `projects/<slug>/media/`. No referenciar `video/proyectos/`.
- Si el usuario da instrucciones específicas para un proyecto, registrarlas en `docs/PROJECTS.md` bajo ese proyecto, de forma individual.
- Si una decisión cambia una preferencia, actualizar `docs/PREFERENCES.md` con fecha y motivo.

## Después de la tarea

1. Verificación mínima:
   - `git diff --check`.
   - Cargar la homepage y una página de proyecto en navegador sin errores de consola ni recursos rotos.
   - Comprobar que todas las tarjetas de Work enlazan con su página.
   - Comprobar que no queden referencias activas a `img/proyectos/` ni `video/proyectos/`.
   - Comprobar responsive en escritorio y móvil.
   - Si se publica, confirmar que los archivos sirvidos coinciden con los locales.
2. Actualizar `docs/PROGRESS.md` con fecha, cambio, commit y resultado.
3. Confirmar al usuario qué se ha aplicado y qué queda pendiente.

## Publicación

La web se publica al hacer push a `main` mediante GitHub Pages (Deploy from a branch, rama `main`, raíz). No hay workflows en `.github/workflows`. Si el deploy falla de forma transitoria, se reintenta con un commit vacío y se verifica el contenido servido.

## Herramientas fuera del repo

Las herramientas de OCR, auditoría o navegador se instalan en una carpeta temporal del sistema, nunca en el repositorio. La web sigue siendo HTML/CSS/JavaScript vanilla.
