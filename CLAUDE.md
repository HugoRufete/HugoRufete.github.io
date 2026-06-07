# CLAUDE.md — Instrucciones para Claude Code

Este archivo le dice a Claude Code cómo ayudarte con este proyecto.
Cuando abras Claude Code en VS Code dentro de esta carpeta, leerá este archivo automáticamente como contexto.

---

## Sobre el proyecto

Portfolio web personal de **Hugo Rufete**, Game Developer y Technical Artist.
URL pública: `https://hugorufete.github.io`
Repositorio: `https://github.com/HugoRufete/HugoRufete.github.io`

Es una web estática desplegada en **GitHub Pages**. No hay framework de build, no hay Node, no hay bundler.
Todo es HTML, CSS y JavaScript vanilla en archivos directos.

---

## Estructura del proyecto

```
HugoRufete.github.io/
├── index.html          ← Página principal (solo HTML; enlaza css/ y js/)
├── CLAUDE.md           ← Este archivo
├── css/
│   └── style.css       ← Todos los estilos (fuente única de verdad del diseño)
├── js/
│   └── main.js         ← Toda la lógica (nodos, partículas, panel, cursor, escala)
├── img/
│   ├── README.md       ← Guía de cómo añadir/referenciar imágenes
│   ├── ui/             ← Iconos, logos, fondos de la interfaz general
│   └── proyectos/      ← Capturas y media por proyecto
└── proyectos/
    └── nombre-proyecto/
        └── index.html  ← Página de detalle de cada proyecto
```

---

## Stack técnico

- **HTML5 / CSS3 / JavaScript ES6+** — sin frameworks
- **Fuentes**: Syne (Google Fonts) + JetBrains Mono (Google Fonts)
- **Despliegue**: GitHub Pages (rama `main`, carpeta raíz `/`)
- **Sin dependencias npm**, sin build step, sin TypeScript

---

## Identidad visual — reglas de diseño

Mantén siempre esta paleta y estilo. No cambies la estética sin que Hugo lo pida explícitamente.

### Paleta de colores
```css
--bg:        #06080f   /* fondo principal oscuro */
--surface:   #0d1220   /* superficies de panel */
--accent:    #00e5ff   /* cyan principal — color dominante */
--accent2:   #7c3aed   /* violeta */
--accent3:   #f59e0b   /* ámbar */
--text:      #e8eaf6   /* texto principal */
--muted:     #546e8a   /* texto secundario */
--muted2:    #334155   /* bordes y separadores */
```

### Colores por sección
Cada sección del portfolio tiene su color fijo. No los cambies:
- Proyectos → `#00e5ff` (cyan)
- Animación procedural → `#a78bfa` (violeta claro)
- Iluminación → `#f59e0b` (ámbar)
- Skills → `#34d399` (verde esmeralda)
- Diseño → `#f472b6` (rosa)
- Experiencia → `#818cf8` (índigo)

### Tipografía
- Títulos y UI: `Syne` — peso 400, 700, 800
- Código, etiquetas, HUD: `JetBrains Mono` — peso 300, 400, 500
- No usar Arial, Roboto, Inter ni fuentes del sistema

### Estética general
- Tema oscuro siempre (no hay modo claro)
- Partículas de fondo animadas en canvas
- Nodos circulares flotantes con conectores SVG
- Panel lateral deslizante para contenido de cada sección
- Cursor personalizado con anillo de seguimiento suave
- Pantalla de carga (intro overlay) antes de mostrar la web

---

## Convenciones de código

### HTML
- Usa comentarios de sección en mayúsculas: `<!-- NOMBRE SECCIÓN -->`
- IDs en kebab-case: `panel-close`, `hud-name`, `bg-canvas`
- Clases BEM simplificado: `section-node`, `sn-icon`, `sn-label`

### CSS
- Variables CSS en `:root` para todos los colores y fuentes
- Propiedades en orden: position → display → size → spacing → visual → animation
- Animaciones con `@keyframes` nombradas en camelCase: `fadeUp`, `pulseRing`, `barFill`
- No usar `!important` salvo para overrides de hover en nodos

### JavaScript
- Constantes en SCREAMING_SNAKE_CASE: `SECTIONS`
- Variables de DOM en camelCase: `nodeEls`, `lineEls`, `svgEl`
- Funciones nombradas con verbo: `createNodes()`, `animateNodes()`, `openPanel()`
- Separar en bloques comentados con `/= NOMBRE =/`
- No usar jQuery, no usar librerías externas salvo Google Fonts

---

## Responsive — adaptación a móviles y resoluciones

La web **debe verse bien en cualquier dispositivo** (móvil, tablet, desktop). Todo el responsive es **nativo**: media queries de CSS + un factor de escala en JS. **No se usan librerías** (Bootstrap, Tailwind, etc.) — no aplican a un layout de nodos posicionados por coordenadas y romperían la regla de "vanilla puro".

### Principio: el diseño se ESCALA, no cambia de layout
En todos los tamaños se mantiene la misma constelación de nodos; en pantallas pequeñas se reduce proporcionalmente. No hay un layout alternativo (lista/menú) en móvil. Si algún día se quiere eso, Hugo debe pedirlo explícitamente.

### Cómo funciona el escalado (en `js/main.js`)
- Existe un factor global `SCALE` calculado en `computeScale()`: `Math.min(1, minDim / 620)`, donde `minDim` es la dimensión más pequeña de la ventana.
- **En desktop `SCALE` vale 1 → la web se ve idéntica al diseño original.** Nunca rompas esto: cualquier cambio en los nodos debe seguir multiplicando `s.radius` y `s.size` por `SCALE`.
- El radio, el tamaño de los nodos y la amplitud de flotación se multiplican por `SCALE` en `createNodes()`, `updateLines()`, `floatNodes()` y `relayoutNodes()`.
- Al redimensionar la ventana se recalcula (`resize` → `computeScale()` + `relayoutNodes()` + `updateLines()`).

### Breakpoints CSS (en `css/style.css`, al final del archivo)
- **`≤ 768px`** (tablet/móvil grande): panel = `min(420px, 90vw)`, HUD pegado a los bordes, se oculta `#hud-hint`, nodo central y etiquetas más pequeños.
- **`≤ 480px`** (móvil estrecho): panel a pantalla completa (`100vw`).
- **`(hover: none), (pointer: coarse)`** (táctil): se oculta el cursor personalizado (`#cursor`, `#cursor-ring`) y se restaura el cursor del sistema.

### Reglas al desarrollar cualquier cosa nueva
- **Siempre** dejar el `<meta name="viewport" content="width=device-width, initial-scale=1.0">` en el `<head>` (ya está en `index.html`).
- Para tamaños de layout que deben adaptarse, usar unidades relativas: `clamp()`, `min()`, `max()`, `vw`, `vh` — no hardcodear `px` fijos en anchos de contenedores.
- Todo efecto `:hover` necesita tener sentido sin ratón o un fallback para táctil (en móvil no hay hover).
- Cualquier elemento nuevo posicionado con JS por coordenadas debe multiplicar sus medidas por `SCALE`.
- **Probar siempre en móvil antes de subir**: DevTools (F12) → `Ctrl+Shift+M` (device toolbar) → comprobar al menos iPhone SE (375px), iPad (768px) y desktop.

---

## Cómo añadir un nuevo proyecto

1. Crea la carpeta `proyectos/nombre-del-proyecto/`
2. Dentro crea `index.html` con la plantilla de página de proyecto
3. Añade imágenes en `img/proyectos/nombre-del-proyecto/`
4. En `index.html` principal, actualiza el contenido HTML del panel correspondiente en el array `SECTIONS`

### Plantilla mínima de página de proyecto
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Nombre Proyecto — Hugo Rufete</title>
  <link rel="stylesheet" href="../../css/project.css">
</head>
<body>
  <nav><!-- volver al portfolio --></nav>
  <main>
    <h1>Nombre del Proyecto</h1>
    <!-- contenido -->
  </main>
</body>
</html>
```

---

## Cómo actualizar contenido existente

Para cambiar el texto de una sección del portfolio, busca en `index.html` el array `SECTIONS` y modifica la propiedad `content` del objeto correspondiente. El contenido acepta HTML inline.

```javascript
// Ejemplo: actualizar sección de experiencia
{
  id: 'experiencia',
  // ...
  content: `
    <h4>// experiencia</h4>
    <p>→ Empresa X — Rol — 2023/2024</p>
    <p>→ Empresa Y — Rol — 2022/2023</p>
  `
}
```

---

## Flujo de trabajo Git

```bash
# Ver qué has cambiado
git status

# Añadir todos los cambios
git add .

# Commit con mensaje descriptivo
git commit -m "feat: añadir proyecto X con capturas"

# Publicar en GitHub Pages
git push origin main
```

GitHub Pages tarda entre 30 segundos y 2 minutos en reflejar los cambios.

### Convención de mensajes de commit
- `feat:` nueva funcionalidad o sección
- `fix:` corrección de bug visual o de código
- `content:` actualización de contenido (textos, imágenes)
- `style:` cambios de diseño sin tocar funcionalidad
- `refactor:` reorganización de código sin cambios visuales

---

## Qué NO hacer

- No instalar npm ni crear `package.json` — es una web estática pura
- No cambiar las fuentes (Syne + JetBrains Mono son parte de la identidad)
- No usar fondo claro ni cambiar el tema oscuro
- No cambiar los colores asignados a cada sección
- No añadir frameworks (React, Vue, etc.) sin que Hugo lo decida explícitamente
- No usar `alert()`, `console.log()` en producción
- No hardcodear URLs absolutas excepto las de GitHub y LinkedIn de Hugo
- No romper el responsive: en desktop `SCALE` debe seguir valiendo 1, y todo nodo posicionado por JS debe multiplicar sus medidas por `SCALE`
- No añadir librerías de responsive (Bootstrap, Tailwind, etc.) — el responsive es nativo (media queries + escala JS)

---

## Contacto y redes (datos reales a actualizar)

Cuando Hugo proporcione sus datos reales, actualizar en `index.html`:
- Email: buscar `tu@email.com` y reemplazar
- LinkedIn: buscar `linkedin.com/in/hugorufete` y reemplazar con URL real
- Cualquier otra red social que quiera añadir al HUD inferior

---

*Este archivo es contexto para Claude Code. Actualízalo cuando el proyecto evolucione.*
