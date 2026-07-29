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

## Bugs corregidos durante el rediseño

1. **CSP bloqueaba Google Fonts**: index.html CSP (`style-src 'self' 'unsafe-inline'`) impedía @import en globals.css. Sitio renderizaba en fallback system fonts. Solucionado: allowlist fonts.googleapis.com + fonts.gstatic.com.
2. **Projects.css `.btn` duplicado**: Bloque unscoped con `border: 1px solid transparent` sobreescribía `.btn-secondary` site-wide, haciendo borders invisibles. Removido.
3. **Security headers en `<meta>` ignorados**: `X-Frame-Options` y CSP `frame-ancestors` en meta tags son ignorados por Chrome. Movidos a vercel.json `headers` (HTTP reales); meta CSP kept como fallback dev-server sin esos directives.
4. **Footer email y rol desactualizados**: `luis.garcia.dev@email.com` → `garciadiazluis23@gmail.com`; "Junior Full Stack Developer" → "Data Engineer & Backend Developer".
5. **About image sin optimizar**: 1024×1024 PNG 1.58MB mostrado a ~400px. Resized/recompressed a 800px JPEG 57KB (96% reducción). Page weight ~1.9MB → ~380KB.
6. **CV links rotos**: Filename había cambiado mid-session. URLs actualizadas al path correcto.
