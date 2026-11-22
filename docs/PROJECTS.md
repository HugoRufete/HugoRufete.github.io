# Proyectos y páginas de Work

Contrato único para el apartado Work. Aquí se registran las instrucciones globales y las específicas de cada proyecto, incluso si llegan en momentos distintos.

## Reglas globales

1. Cada tarjeta de Work abre `projects/<slug>/index.html` en la misma pestaña.
2. Cada proyecto tiene su carpeta con:
   - `index.html` — página pública.
   - `content.md` — notas internas, texto pendiente de aprobación e indicaciones del usuario.
   - `media/` — vídeos, imágenes y cualquier otro recurso del proyecto.
3. La fuente activa de multimedia es `projects/<slug>/media/`.
4. `img/proyectos/`, `video/proyectos/` y `video/hero.mp4` se conservan como legado, pero ningún archivo activo debe apuntar a ellos. El usuario los borrará tras verificar la migración.
5. El orden de la rejilla de Work es el orden de `PROJECTS` en `js/data.js`.
6. Las páginas comparten los tokens de `docs/PREFERENCES.md` y usan `css/project.css` además de `css/style.css`.
7. Hasta que el usuario indique lo contrario, el texto de las páginas es factual y neutral: no se inventan créditos, clientes ni resultados.

## Plantilla de `content.md`

```md
# <Título del proyecto>

## Instrucciones del usuario
- (Pendiente de indicaciones específicas.)

## Texto publicado
- Lede:
- Notas:

## Multimedia
- Orden deseado:
- Captions deseadas:
- Recursos a destacar:

## Estado
- [ ] Texto aprobado por Hugo
- [ ] Orden multimedia aprobado
- [ ] Revisión final en navegador
```

## Estado actual

| # | Slug | Página | Archivos multimedia | Texto específico |
|---|---|---|---:|---|
| 01 | `showreel` | `projects/showreel/index.html` | 3 | Pendiente |
| 02 | `601-street` | `projects/601-street/index.html` | 14 | Pendiente |
| 03 | `load-in` | `projects/load-in/index.html` | 10 | Pendiente |
| 04 | `proyecto-iii` | `projects/proyecto-iii/index.html` | 2 | Pendiente |
| 05 | `face-tracking-technical-prototyping` | `projects/face-tracking-technical-prototyping/index.html` | 2 | Pendiente |
| 06 | `space-invaders-multiplayer` | `projects/space-invaders-multiplayer/index.html` | 2 | Pendiente |
| 07 | `xr-mixed-reality` | `projects/xr-mixed-reality/index.html` | 2 | Pendiente |

## Detalle por proyecto

### 01 — Showreel

- Tipo: reel.
- Recursos: `hero.mp4`, `hero-poster.webp`, `hero-poster.png`.
- Uso actual: vídeo del masthead y tarjeta inicial de Work.
- Indicaciones recibidas: ninguna todavía.

### 02 — 601 Street

- Tipo: narrative systems.
- Vídeos: `banner.mp4`, `caja-fuerte.mp4`, `dialogue-example.mp4`, `dice.mp4`, `girl-sitting.mp4`, `note-interaction.mp4`.
- Imágenes: `poster.webp`, `bar-interior.webp`, `comisaria-interior.webp`, `mapa-exterior-01.webp` … `mapa-exterior-05.webp`.
- Indicaciones recibidas: ninguna todavía.

### 03 — Load-In

- Tipo: gameplay prototype.
- Vídeos: `gameplay.mp4`.
- Imágenes: `banner.webp`, `bosque-blanco.webp`, `bosque-morado.png`, `cementerio.webp`, `hacha.png`, `logo.png`, `mapa.png`, `portada.webp`, `shop.png`.
- Indicaciones recibidas: ninguna todavía.

### 04 — Proyecto III

- Tipo: visual development.
- Imágenes: `poster.webp`, `garden-studio-pegatinas-01.webp`.
- Sin vídeo.
- Indicaciones recibidas: ninguna todavía.

### 05 — Face Tracking — Technical Prototyping

- Tipo: technical prototype.
- Vídeos: `prototype-video.mp4`.
- Imágenes: `poster.webp`.
- Indicaciones recibidas: ninguna todavía.

### 06 — Space Invaders — Multiplayer

- Tipo: multiplayer.
- Vídeos: `space-invaders-gameplay.mp4`.
- Imágenes: `poster.webp`.
- Indicaciones recibidas: ninguna todavía.

### 07 — XR — Mixed Reality

- Tipo: XR prototype.
- Vídeos: `sort-video.mp4`.
- Imágenes: `poster.webp`.
- Indicaciones recibidas: ninguna todavía.

## Instrucciones globales recibidas del usuario

- El portfolio debe presentar a Hugo como una persona técnica que crea Experiencias Inmersivas, combinando perfil técnico y conocimiento suficiente para crear aplicaciones amigables con el usuario.
- Cada proyecto personal tendrá su página separada, que se abrirá al pulsar el proyecto.
- Se crea una carpeta por proyecto con todos los objetos multimedia, el texto y el resto de elementos que lo formen.
- Los archivos de `video/proyectos/` dejan de ser la fuente de referencia. La carpeta se conserva temporalmente; Hugo la borrará una vez verificado el resultado.
