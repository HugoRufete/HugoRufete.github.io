# AGENTS.md — Reglas de trabajo del repositorio

Este repositorio es la web estática de Hugo Rufete. Antes de realizar cualquier cambio, lee estos archivos:

- `docs/PREFERENCES.md` — preferencias canónicas de diseño, contenido y enfoque profesional.
- `docs/PROGRESS.md` — historial de work realizado desde el inicio de la colaboración.
- `docs/CV_PROFILE.md` — perfil profesional extraído de `cv-references/`.
- `docs/PROJECTS.md` — contrato de las páginas de proyecto y estado de cada una.
- `docs/WORKFLOW.md` — procedimiento de trabajo y verificación.

## Reglas duras

1. **Conflicto = pausa.** Si una instrucción nueva contradice una preferencia registrada, detén la tarea y pregunta explícitamente antes de continuar. No asumas que la instrucción nueva la anula.
2. **El trabajo se ve primero.** La navegación y el contenido priorizan `Work` por delante del resto de apartados.
3. **Web estática.** No se añaden frameworks, `package.json` ni dependencias de ejecución al repositorio. Las herramientas de verificación se instalan fuera del repo.
4. **`cv-references/` es local.** Contiene el CV original con datos personales. Nunca se publica ni se referencia desde la web.
5. **La fuente de multimedia es `projects/<slug>/media/`.** `video/proyectos/` se conserva como legado, pero ningún archivo activo debe apuntar a él.
6. **Cada tarjeta de Work abre su propia página** en `projects/<slug>/index.html`.
7. **Verificar y registrar.** Después de cada cambio sustancial, ejecuta las comprobaciones de `docs/WORKFLOW.md` y actualiza `docs/PROGRESS.md`.

Si una regla queda obsoleta por decisión explícita del usuario, modifícala en `docs/PREFERENCES.md` con fecha y motivo, en lugar de ignorarla.

`CLAUDE.md` es un archivo local ignorado con notas antiguas de diseño. Este `AGENTS.md` y `docs/` tienen prioridad sobre él.
