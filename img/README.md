# Imágenes — `img/` (legado)

La fuente activa de multimedia es **`projects/<slug>/media/`**. Las imágenes que antes vivían en `img/proyectos/` ya están copiadas en la carpeta de cada proyecto. Este directorio se conserva solo hasta que Hugo verifique la migración y decida borrarlo.

## Dónde poner las imágenes ahora

```
projects/<slug>/
  index.html
  content.md
  media/
    poster.webp
    captura-01.webp
    ...
```

Desde una página de proyecto se referencian de forma relativa:

```html
<img src="media/captura-01.webp" alt="Captura del proyecto" loading="lazy">
```

Desde la homepage (`index.html`):

```html
<img src="projects/601-street/media/poster.webp" alt="601 Street" loading="lazy">
```

## Recomendaciones

- **Formato**: `.webp` o `.jpg` para capturas, `.png` para logos con transparencia, `.webp` animado para micro-loops tipo icono.
- **Peso**: comprimir antes de subir (ideal < 300 KB por captura). GitHub Pages sirve archivos estáticos y el peso afecta directamente a la carga.
- **Nombres**: minúsculas y kebab-case, sin espacios ni acentos: `captura-nivel-01.webp`.
- **`alt`**: texto alternativo descriptivo siempre.
- **Vídeo**: no usar `.gif` para clips de gameplay; usar MP4 en la misma carpeta `media/`. Ver `video/README.md`.
