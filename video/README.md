# Vídeo — `video/` (legado)

La fuente activa de multimedia es **`projects/<slug>/media/`**. Los clips que antes vivían en `video/proyectos/` y el hero en `video/hero.mp4` ya están copiados en la carpeta de cada proyecto. Este directorio se conserva solo hasta que Hugo verifique la migración y decida borrarlo.

## Dónde poner los vídeos ahora

```
projects/<slug>/
  index.html
  content.md
  media/
    gameplay.mp4
    poster.webp
    ...
```

Desde una página de proyecto:

```html
<video controls loop muted playsinline preload="metadata" poster="media/poster.webp">
  <source src="media/gameplay.mp4" type="video/mp4">
</video>
```

Desde la homepage (`index.html`):

```html
<video autoplay muted loop playsinline preload="metadata" poster="projects/showreel/media/hero-poster.webp">
  <source src="projects/showreel/media/hero.mp4" type="video/mp4">
</video>
```

## Recomendaciones

- Usar **MP4 H.264**, universal. WebM (VP9) es opcional como fuente adicional más ligera.
- Sin pista de audio en loops de fondo; `autoplay` obliga a `muted`.
- Peso objetivo: 2-6 MB el reel; 1-4 MB los clips de proyecto.
- Duración: bucle corto de ~6-12 s, 720p u 1080p.
- Nombres en minúsculas y kebab-case, sin acentos ni espacios.
- No usar `.gif` para gameplay: un clip pesa 10-50× más. Para micro-loops de icono, prefiere `.webp` animado.

## Recetas ffmpeg útiles

```bash
# Comprimir a MP4 ligero y sin audio
ffmpeg -i original.mp4 -an -vcodec libx264 -crf 28 -preset slow -vf "scale=-2:1080" projects/<slug>/media/clip.mp4

# Generar versión WebM opcional
ffmpeg -i projects/<slug>/media/clip.mp4 -an -c:v libvpx-vp9 -crf 34 -b:v 0 projects/<slug>/media/clip.webm

# Extraer el poster (primer fotograma)
ffmpeg -i projects/<slug>/media/clip.mp4 -vframes 1 -q:v 2 projects/<slug>/media/poster.webp
```
