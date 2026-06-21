# Carpeta de imágenes — `img/`

Aquí van todas las imágenes **estáticas** de la web (capturas, thumbnails, covers, logos, iconos).

> **Media animado** (vídeos, loops/clips de gameplay) **NO va aquí**: va en `video/` (ver `video/README.md`). Para gameplay usa vídeo en bucle, no `.gif` (un GIF pesa 10-50× más). Reserva el `.gif` para cosas diminutas; si necesitas un icono animado ligero, usa **`.webp` animado**.

## Estructura

```
img/
├── ui/                 ← iconos, logos, fondos de la interfaz general
└── proyectos/
    └── nombre-proyecto/   ← capturas y media de cada proyecto
        ├── cover.jpg
        ├── screenshot-01.jpg
        └── ...
```

## Cómo referenciar una imagen

Las rutas son **relativas** al archivo HTML que la usa.

### Desde `index.html` (raíz del proyecto)
```html
<img src="img/ui/logo.png" alt="Logo">
<img src="img/proyectos/mi-juego/cover.jpg" alt="Portada">
```

O dentro del array `SECTIONS` en `js/main.js` (el contenido acepta HTML):
```javascript
content: `
  <img src="img/proyectos/mi-juego/cover.jpg" alt="Mi Juego" style="width:100%;border-radius:8px">
`
```

### Desde una página de proyecto (`proyectos/nombre/index.html`)
Hay que subir dos niveles con `../../`:
```html
<img src="../../img/proyectos/mi-juego/cover.jpg" alt="Portada">
```

## Recomendaciones

- **Formato**: `.webp` o `.jpg` para fotos/capturas, `.png` para logos con transparencia, `.svg` para iconos, `.webp` animado para micro-loops tipo icono. Para clips de gameplay usa vídeo en `video/`, no `.gif`.
- **Peso**: comprime las imágenes antes de subirlas (ideal < 300 KB por captura). GitHub Pages sirve archivos estáticos, así que el peso afecta directamente a la velocidad de carga.
- **Nombres**: en minúsculas y kebab-case, sin espacios ni acentos: `captura-nivel-01.jpg`, no `Captura Nivel 01.JPG`.
- **`alt`**: pon siempre texto alternativo descriptivo (accesibilidad y SEO).
