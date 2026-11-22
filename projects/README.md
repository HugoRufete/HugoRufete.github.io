# Projects

Cada carpeta de este directorio es una página de Work autocontenida:

```
projects/<slug>/
  index.html   Página pública
  content.md   Notas internas e instrucciones pendientes
  media/       Vídeos, imágenes y recursos del proyecto
```

La fuente activa de multimedia es `projects/<slug>/media/`. Las carpetas antiguas `img/proyectos/`, `video/proyectos/` y `video/hero.mp4` se conservan solo como legado hasta que Hugo confirme la migración; ningún archivo activo debe apuntar a ellas.

Para añadir un proyecto:

1. Crear `projects/<slug>/media/` y copiar los recursos.
2. Generar `index.html` siguiendo la plantilla de una página existente.
3. Crear `content.md` con las instrucciones recibidas.
4. Añadir una entrada en `js/data.js` con `url`, `image`, `media` y `type`.
5. Registrar el proyecto en `docs/PROJECTS.md` y actualizar `docs/PROGRESS.md`.
