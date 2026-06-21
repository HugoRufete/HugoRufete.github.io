# Carpeta de vídeo — `video/`

Todo el **media animado** de la web: el vídeo de fondo del hero y los clips/loops de gameplay de cada proyecto. Servidos directamente por GitHub Pages (archivos normales, **no Git LFS** — Pages no sirve LFS correctamente).

> **Regla**: cualquier cosa que se mueva (vídeo, loop de gameplay) va aquí. En `img/` solo van imágenes estáticas (capturas, covers, logos, iconos). Ver `img/README.md`.

## Estructura

```
video/
├── hero.mp4              ← vídeo de fondo del hero (OBLIGATORIO, formato base universal)
├── hero.webm            ← versión más ligera del hero (OPCIONAL, fallback automático)
└── proyectos/
    └── nombre-proyecto/  ← clips y loops de gameplay de cada proyecto
        ├── gameplay-01.mp4
        ├── gameplay-01.webm   ← (opcional, fallback más ligero)
        └── ...
```

El **poster** del hero (primer fotograma que se ve mientras carga) va en `img/ui/hero-poster.jpg`.

## Media animada: usa vídeo, NO `.gif`

Para clips de gameplay **no uses `.gif`**: un GIF de unos segundos pesa fácilmente 5-20 MB y mata la velocidad de carga. Usa siempre vídeo en bucle, que pesa 10-50× menos:

```html
<video autoplay muted loop playsinline poster="../../img/proyectos/mi-juego/cover.jpg">
  <source src="../../video/proyectos/mi-juego/gameplay-01.webm" type="video/webm">
  <source src="../../video/proyectos/mi-juego/gameplay-01.mp4" type="video/mp4">
</video>
```

- Reserva el `.gif` solo para cosas diminutas (un spinner, un icono animado de pocos KB). Si necesitas un loop tipo icono, prefiere **`.webp` animado** (mucho más ligero que GIF).
- Las rutas son **relativas** al HTML que las usa: desde `index.html` → `video/proyectos/...`; desde una página de proyecto (`proyectos/nombre/index.html`) → `../../video/proyectos/...`.

## Especificaciones recomendadas

- **Formato**: MP4 con códec **H.264** (universal). Opcionalmente WebM (VP9) como fuente extra más ligera.
- **Sin pista de audio** (un fondo no suena y ahorra peso). Si un clip de proyecto necesita audio, déjalo pero recuerda que `autoplay` obliga a `muted`.
- **Peso objetivo**: 2-6 MB el hero; **1-4 MB** los clips de proyecto. GitHub avisa a los 50 MB y bloquea archivos >100 MB.
- **Duración**: bucle corto de ~6-12 s.
- **Resolución**: 1080p o 720p basta.
- **Nombres**: minúsculas y kebab-case, sin acentos ni espacios: `gameplay-01.mp4`, no `Gameplay 01.MP4`.
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
