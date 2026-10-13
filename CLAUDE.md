## Decisiones de diseño

### 2026-07-28 — Redesño integral (Header, Hero, About, Skills, Projects, Contact)
- **Paleta:** Dark navy (#060B18) + cyan (#06B6D4) / indigo (#6366F1) — sin cambios.
- **Tipografía:** Inter (body) + Plus Jakarta Sans (headings) + JetBrains Mono (data/labels) — sin cambios.
- **Layout:** Header (nav flotante pill con labels + scroll-spy) • Hero (two-column + tags flotantes) • About (editorial lead two-col + timeline simplificada) • Skills (stack table con tiers, no fake percentages) • Projects (monospace category tags, sin stock photos) • Contact (restyled, EmailJS logic idéntico).
- **Signature element:** Eyebrow (línea + label monospace) + lead pattern (heading izquierda + párrafo derecha alineado a baseline).
- **Por qué:** Portfolio sentía "muy básico y muy sobrecargado" vs refs (juanma-dev: editorial, gradientes; kripto: dark hacker). Paleta/fonts ya fit identidad data engineer — se eliminaron patterns genéricos (avatar neon, progress bars arcoíris, fotos Unsplash, nav icon-only) y se estructuró con coherencia editorial + tiers de skills honestos.

### 2026-07-29 — Sistema de color (grafito + ámbar + slate-teal)

- **Paleta:** Grafito (#0B0C0E dark, #FAF8F3 light) + ámbar (#D9A441 dark, #A9721E light) + slate-teal (#4F7A72). **Reemplaza a:** 2026-07-28 (navy+cyan+indigo).
- **Tipografía:** Space Grotesk en headings (reemplazo de Plus Jakarta Sans); Inter (body) + JetBrains Mono (data) sin cambios.
- **Efectos visuales:** Eliminados gradient-mesh, gradient-text con clip, glow shadows. Añadido: dot-grid subtle de fondo, color plano en hero name, outline offset en portrait. Favicon: grafito + gradiente ámbar LG.
- **Tokens:** Botones primarios: texto blanco → oscuro (#0B0C0E) para AA sobre ámbar. Variables.css mantiene nombres, solo valores cambiados.
- **Por qué:** Navy+cyan+indigo con glow es patrón más repetido en portfolios de IA. Usuario sintió "demasiado de IA" específicamente por combo color (layout ya validado en 28). Referencias (juanma-dev light cálido, kripto negro+cyan neón) no usan esa combinación.

### 2026-07-29 — Copy de About

- **Heading:** "Del soporte técnico a los pipelines de datos." → "De datos crudos a decisiones de negocio." (ES) / "From raw data to business decisions." (EN). Cambio en src/data/translations.js.
- **Body copy:** 4 párrafos → 2. Eliminados: párrafo sobre puesto actual (redundante con tarjeta "Detalles Profesionales" + timeline) y párrafo sobre stack técnico (redundante con sección Skills). Mantienen: lead de identidad + párrafo de motivación/formación actual.
- **Por qué:** Usuario vio que el heading anterior centraba la identidad en soporte técnico (puesto que no quiere destacar). Además, el cuerpo tenía duplicación innecesaria de info ya mostrada en otro sitio de la misma página — no fue "recorte por recorte" sino eliminación de ruido informativo.

### 2026-07-29 — Ritmo visual entre secciones

- **Layout:** About, Skills, Projects, Contact compartían fondo plano sin separación → agregados fondos alternativos (var(--bg-secondary) en Skills y Contact vs base) + borde superior 1px (var(--border)) en Skills y Contact. About y Projects mantienen fondo base (visible grid de puntos).
- **Animaciones:** Añadido hook compartido src/hooks/useScrollReveal.js (fade + rise ~20px al entrar en viewport). Aplicado en eyebrow+heading de las 4 secciones y migrado timeline de About. Respeta prefers-reduced-motion.
- **Por qué:** Usuario sintió "scroll infinito" → presentadas 3 opciones; eligió (a) marcar transiciones sin bloquear scroll. Scroll-snap real (opción b) habría exigido recortar About (mucho más alta que viewport) con riesgos en accesibilidad. Solución: visual separation sin friction.

### 2026-10-13 — Rediseño "papel de impresora de datos" (reemplaza todo lo anterior)

- **Concepto:** el oficio de data engineer (datos sucios → tablas limpias) como lenguaje visual. Vernáculo: papel continuo green-bar de los listados de mainframe.
- **Paleta:** papel #F3F5EE, banda #E3ECDD, tinta #17201B, verde libro mayor #2E6B4C (estructura, estado, niveles) y azul bolígrafo #2C46C9 (acciones y enlaces). Modo oscuro equivalente (#0F1411, #6FBF92, #93A5FF). Tema inicial = preferencia del sistema, persistido en localStorage `portfolio-theme`, aplicado en index.html antes del primer pintado. **Reemplaza a:** grafito + ámbar + slate-teal (07-29).
- **Tipografía:** Archivo (variable con eje `wdth`; 125% expandida para nombre y titulares) + IBM Plex Mono solo en datos reales (registro crudo, años, stack). Fuera Inter, Space Grotesk y JetBrains Mono.
- **Estructura:** Hero (nombre gigante + registro CSV sucio que se tacha y sale limpio fila a fila: la única animación de la página) • Perfil (foto + 2 párrafos) • Experiencia (sección propia, filas con periodo/rol/detalle) • Stack (matriz categoría × nivel; el peso tipográfico codifica el dominio) • Proyectos (tabla en hoja de papel continuo con bandas y perforaciones) • Contacto (email grande + copiar, formulario EmailJS con la lógica intacta).
- **Eliminado a propósito:** eyebrows en mayúsculas, stats 2+/10+/15+, avatar cartoon, tarjetas "Lo que me caracteriza", tarjeta "Detalles profesionales" (duplicaba el registro del hero), timeline horizontal, hook useScrollReveal (fade-up por sección = patrón genérico).
- **Datos:** proyectos y experiencia viven en translations.js (antes las descripciones de proyectos solo estaban en español). Enlaces compartidos en src/data/links.js, iconos en src/components/icons.jsx.
- **Por qué:** el usuario quería más originalidad y dio libertad total. El diseño anterior seguía leyéndose como plantilla de portfolio dev (fondo oscuro + acento único + eyebrows mono). El nuevo nace del tema (datos), no de una estética genérica.

## Bugs corregidos durante el rediseño

1. **CSP bloqueaba Google Fonts**: index.html CSP (`style-src 'self' 'unsafe-inline'`) impedía @import en globals.css. Sitio renderizaba en fallback system fonts. Solucionado: allowlist fonts.googleapis.com + fonts.gstatic.com.
2. **Projects.css `.btn` duplicado**: Bloque unscoped con `border: 1px solid transparent` sobreescribía `.btn-secondary` site-wide, haciendo borders invisibles. Removido.
3. **Security headers en `<meta>` ignorados**: `X-Frame-Options` y CSP `frame-ancestors` en meta tags son ignorados por Chrome. Movidos a vercel.json `headers` (HTTP reales); meta CSP kept como fallback dev-server sin esos directives.
4. **Footer email y rol desactualizados**: `luis.garcia.dev@email.com` → `garciadiazluis23@gmail.com`; "Junior Full Stack Developer" → "Data Engineer & Backend Developer".
5. **About image sin optimizar**: 1024×1024 PNG 1.58MB mostrado a ~400px. Resized/recompressed a 800px JPEG 57KB (96% reducción). Page weight ~1.9MB → ~380KB.
6. **CV links rotos**: Filename había cambiado mid-session. URLs actualizadas al path correcto.
