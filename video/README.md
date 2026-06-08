# Carpeta de vídeo — `video/`

Vídeos de fondo de la web. Servidos directamente por GitHub Pages (archivos normales, **no Git LFS** — Pages no sirve LFS correctamente).

## Archivos esperados

```
video/
├── hero.mp4    ← vídeo de fondo del hero (OBLIGATORIO, formato base universal)
└── hero.webm   ← versión más ligera (OPCIONAL, fallback automático)
```

El **poster** (primer fotograma que se ve mientras carga) va en `img/ui/hero-poster.jpg`.

## Especificaciones recomendadas

- **Formato**: MP4 con códec **H.264** (universal). Opcionalmente WebM (VP9) como fuente extra más ligera.
- **Sin pista de audio** (un fondo no suena y ahorra peso).
- **Peso objetivo**: 2-6 MB. GitHub avisa a los 50 MB y bloquea archivos >100 MB.
- **Duración**: bucle corto de ~6-12 s.
- **Resolución**: 1080p o 720p basta para un fondo.
- **Reproducción**: el `<video>` va con `autoplay muted loop playsinline` (autoplay solo funciona si está `muted`).

## Recetas ffmpeg útiles

```bash
# Comprimir a MP4 ligero y SIN audio
ffmpeg -i original.mp4 -an -vcodec libx264 -crf 28 -preset slow -vf "scale=-2:1080" video/hero.mp4

# Generar versión WebM (más ligera)
ffmpeg -i video/hero.mp4 -an -c:v libvpx-vp9 -crf 34 -b:v 0 video/hero.webm

# Extraer el poster (primer fotograma) como imagen
ffmpeg -i video/hero.mp4 -vframes 1 -q:v 2 img/ui/hero-poster.jpg
```

> Si `hero.mp4` queda > ~8 MB, sube el `-crf` (p. ej. 30-32) para comprimir más, o baja a 720p (`scale=-2:720`).
