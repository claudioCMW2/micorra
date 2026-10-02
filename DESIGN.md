---
version: alpha
name: Micorra
description: Lenguaje visual del dashboard de Micorra, un gateway MCP local. Parte del análisis de x.ai (lienzo casi negro, la tipografía como jerarquía, pills de contorno, mono para lo técnico) y lo adapta a una herramienta densa de datos, con modo claro, paleta semántica y contraste WCAG 2.2 AA verificado.

colors:
  canvas: "#0a0a0a"
  surface: "#141518"
  surface-raised: "#1a1c20"
  surface-strong: "#23262a"
  ink: "#ffffff"
  body: "#dadbdf"
  muted: "#8f949b"
  hairline: "#212327"
  border-control: "#6b7077"
  primary: "#ffffff"
  on-primary: "#0a0a0a"
  accent: "#ff7a17"
  on-accent: "#0a0a0a"
  focus: "#a0c3ec"
  info: "#a0c3ec"
  success: "#7ed4a6"
  warning: "#f5c451"
  danger: "#ff7b72"

typography:
  display:
    fontFamily: Geist, ui-sans-serif, system-ui, sans-serif
    fontSize: 32px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.6px
  title-lg:
    fontFamily: Geist, ui-sans-serif, system-ui, sans-serif
    fontSize: 24px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -0.4px
  title-md:
    fontFamily: Geist, ui-sans-serif, system-ui, sans-serif
    fontSize: 18px
    fontWeight: 400
    lineHeight: 26px
    letterSpacing: -0.2px
  title-sm:
    fontFamily: Geist, ui-sans-serif, system-ui, sans-serif
    fontSize: 15px
    fontWeight: 500
    lineHeight: 22px
  body-lg:
    fontFamily: Geist, ui-sans-serif, system-ui, sans-serif
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md:
    fontFamily: Geist, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  body-sm:
    fontFamily: Geist, ui-sans-serif, system-ui, sans-serif
    fontSize: 13px
    fontWeight: 400
    lineHeight: 18px
  label:
    fontFamily: Geist, ui-sans-serif, system-ui, sans-serif
    fontSize: 13px
    fontWeight: 500
    lineHeight: 18px
  button:
    fontFamily: Geist, ui-sans-serif, system-ui, sans-serif
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  mono-md:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
  eyebrow:
    fontFamily: Geist Mono, ui-monospace, SFMono-Regular, Menlo, monospace
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 1.2px

rounded:
  none: 0px
  sm: 6px
  md: 8px
  pill: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  2xl: 32px
  3xl: 48px
  4xl: 64px

components:
  page:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
  page-title:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
  eyebrow:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.xl}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  button-danger:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.danger}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "{spacing.sm} {spacing.lg}"
  text-input:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  field-label:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
  field-help:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.body-sm}"
  field-error:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.danger}"
    typography: "{typography.body-sm}"
  table-header:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow}"
    padding: "{spacing.sm} {spacing.lg}"
  table-cell:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    padding: "{spacing.sm} {spacing.lg}"
  table-row-selected:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
  nav-item:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  nav-item-active:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
  badge-neutral:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.body}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  badge-success:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.success}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  badge-warning:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.warning}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  badge-danger:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.danger}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  badge-info:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.info}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.pill}"
    padding: "{spacing.xxs} {spacing.sm}"
  overlay:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.body}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  tooltip:
    backgroundColor: "{colors.surface-strong}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "{spacing.xs} {spacing.sm}"
  divider:
    backgroundColor: "{colors.hairline}"
    height: 1px
  control-border:
    backgroundColor: "{colors.border-control}"
    width: 1px
  nav-indicator:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    width: 2px
  focus-ring:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.focus}"
    width: 2px
  code:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.body}"
    typography: "{typography.mono-md}"
    rounded: "{rounded.sm}"
    padding: "{spacing.sm} {spacing.md}"
---

## Overview

Micorra es una herramienta técnica que alguien abre para entender y controlar qué ven sus clientes
de IA: servers, tools, proyectos, tokens, memoria. El tono es el de un **instrumento**, no el de un
producto que se vende: sobrio, preciso, denso cuando hace falta y sin decoración.

Del análisis de x.ai ([referencia](third_party/xai/README.md)) se toma:
- el lienzo casi negro con superficies apenas más claras y bordes finos en lugar de sombras;
- la tipografía como jerarquía: tamaño y tracking hacen el trabajo, el peso casi no se usa;
- el par sans + mono, con la mono para todo lo que es de máquina;
- las pills de contorno como forma de los botones y una sola acción blanca por vista;
- un único acento cálido (naranja) que aparece poco.

Y se cambia, porque un sitio de marketing y un dashboard no resuelven lo mismo:

| x.ai | Micorra | Por qué |
|---|---|---|
| Solo oscuro | Oscuro por defecto **y modo claro** | Preferencia y necesidad del usuario; `forced-colors` |
| Display de 96 px | Máximo 32 px; título de página 24 px | Un dashboard se escanea; el espacio es para datos |
| Peso 400 en todo | 400 para títulos y texto, 500 para labels, botones y títulos de card | Las tablas y los formularios necesitan un segundo nivel |
| Universal Sans (propietaria) | **Geist** + **Geist Mono** (SIL OFL) | Licencia libre; la mono ya es la de la referencia |
| `mute #7d8187` | `muted #8f949b` | El original no llega a 4.5:1 sobre sus propias cards |
| Bordes de 1.1–2.1:1 | `border-control` ≥ 3:1 para todo lo interactivo | WCAG 1.4.11: el borde de un input tiene que verse |
| Sin paleta semántica | `success`, `warning`, `danger`, `info` | Salud de servers, cuarentena, riesgo de tools |
| Violeta `#7c3aed` | Eliminado | No llega a 4.5:1 y es el acento más genérico de las UIs hechas con IA |
| Pills en todo lo interactivo | Pills en botones y badges; 6 px en campos; 8 px en paneles | Un input o una celda en pill desperdicia espacio y se lee como botón |

## Colors

- **Superficies, de atrás hacia adelante:** `canvas` (página) → `surface` (paneles, encabezado de
  tabla) → `surface-raised` (campos, popovers, menús, badges) → `surface-strong` (selección, ítem
  activo, tooltip). Cada nivel es apenas más claro; la separación la hace el borde, no la sombra.
- **Texto:** `ink` para títulos y valores importantes, `body` para el texto corriente, `muted` para
  metadatos y ayuda. `muted` nunca para algo que haya que leer para decidir.
- **Bordes:** `hairline` solo para estructura (divisores, contorno de paneles). Todo lo que se
  puede tocar (campos, botones secundarios, checkboxes) usa `border-control`, que llega a 3:1. El
  formato no tiene sub-token de borde: `divider` y `control-border` los exponen como líneas de
  1 px, y quién lleva cuál va acá: `panel`, `table-cell` y `overlay` llevan
  `hairline`; `text-input` y `button-secondary`, `border-control`; `button-danger`, `danger`.
- **Acción:** `primary` (blanco) es la acción principal, **una por vista**.
- **Acento:** `accent` (naranja) marca *dónde estás* —el indicador del ítem activo de navegación— y
  como mucho un dato destacado por vista. Nunca comunica estado: para eso está la paleta semántica.
- **Estado:** `success` (conectado, sano), `warning` (degradado, cambio pendiente de aprobar),
  `danger` (caído, cuarentena, riesgo alto, acción destructiva), `info` (neutral informativo). El
  color **nunca va solo**: siempre con ícono y texto.
- **Foco:** anillo de 2 px en `focus` (componente `focus-ring`: su `textColor` es el color del
  anillo) con 2 px de separación, como `outline` real (nunca un
  box-shadow: desaparece en `forced-colors`).

### Modo claro

El formato DESIGN.md todavía no tiene modos: los valores de arriba son el tema oscuro (el de
siempre) y estos son el claro, con los mismos nombres. Todos verificados con el mismo contraste.

| Token | Claro | | Token | Claro |
|---|---|---|---|---|
| `canvas` | `#fafaf7` | | `primary` | `#0a0a0a` |
| `surface` | `#ffffff` | | `on-primary` | `#ffffff` |
| `surface-raised` | `#f2f2ee` | | `accent` | `#b84a00` |
| `surface-strong` | `#e6e6e1` | | `on-accent` | `#ffffff` |
| `ink` | `#0a0a0a` | | `focus` / `info` | `#2f5f9e` |
| `body` | `#2b2d31` | | `success` | `#1f7a4d` |
| `muted` | `#5f636a` | | `warning` | `#8a5a00` |
| `hairline` | `#e3e3de` | | `danger` | `#c0362c` |
| `border-control` | `#7b8088` | | | |

## Typography

- **Geist** para la interfaz y **Geist Mono** para todo lo que es de máquina: nombres de tools y
  servers, IDs, hashes, puertos, rutas, conteos de tokens, código. Ver un nombre en mono ya dice
  "esto es literal, se puede copiar". Las dos se sirven desde el propio daemon
  (`@fontsource-variable/geist` y `@fontsource-variable/geist-mono`, OFL-1.1), sin CDN: el
  dashboard tiene que andar sin internet.
- **Tres niveles por pantalla:** `title-lg` (uno por página) → `title-md` (secciones) →
  `title-sm` (cards y grupos). Si aparece un cuarto nivel, sobra una sección.
- `body-md` (14 px) es el texto por defecto de la interfaz: tablas, controles, listas. `body-lg`
  (16 px) para texto que se lee de corrido: descripciones, ayuda larga, documentación. Nada por
  debajo de 12 px.
- `eyebrow` (mono, mayúsculas, tracking positivo) para la etiqueta sobre un título de sección y
  para los encabezados de tabla.
- Nunca 600 ni 700. Si algo necesita más énfasis, sube de tamaño o de color (`body` → `ink`).
- Números en tablas con cifras tabulares (`font-variant-numeric: tabular-nums`).

## Layout

- Base de 4 px; los espacios salen solo de `spacing`.
- Cerca = relacionado: dentro de un grupo `sm`–`md`; entre grupos `xl`; entre secciones `2xl`–`3xl`.
- Estructura de página: barra lateral de navegación + contenido con `page-title`, descripción en
  `muted` debajo, y la acción principal a la derecha del título.
- Densidad de tablas: fila de 40 px por defecto, 32 px en modo compacto. Encabezado fijo al
  desplazarse.
- Ancho de lectura máximo de 72 caracteres para texto de corrido; las tablas usan todo el ancho.
- Breakpoints: < 768 px una columna y navegación en drawer; ≥ 768 px barra lateral; ≥ 1280 px
  paneles de detalle al costado de la lista.
- Áreas táctiles de 44 × 44 px como mínimo en pantallas táctiles, aunque el control se vea más chico.

## Elevation & Depth

| Nivel | Tratamiento | Uso |
|---|---|---|
| 0 | Sin borde ni sombra | Página |
| 1 | `hairline` | Paneles, tablas, divisores |
| 2 | `surface-raised` + `hairline` + sombra `0 8px 24px rgb(0 0 0 / 0.45)` | Popover, menú, diálogo, toast |

La sombra existe **solo** en el nivel 2: sin ella, un menú abierto sobre una tabla oscura se pierde.

## Shapes

- `pill` para botones, badges y controles segmentados.
- `sm` (6 px) para campos, checkboxes, ítems de navegación y tooltips.
- `md` (8 px) para paneles, cards, popovers y diálogos.
- `none` para bandas a todo el ancho y para tablas dentro de un panel.

## Components

- **Botones:** `button-primary` una vez por vista; `button-secondary` para el resto;
  `button-danger` solo para acciones destructivas, siempre con confirmación. Íconos de lucide a
  1.5 px de trazo, del mismo color que el texto.
- **Campos:** label arriba (nunca solo placeholder), ayuda debajo en `muted`, error en `danger` con
  ícono, que reemplaza a la ayuda.
- **Tablas:** encabezado `eyebrow` sobre `surface`; filas separadas por `hairline`; fila
  seleccionada en `surface-strong`; acciones de fila visibles al foco y al hover, no solo al hover.
- **Estado:** badge con ícono + texto (`● Conectado`, `▲ Cuarentena`), nunca un punto de color solo.
- **Estados vacíos:** qué iría acá, por qué está vacío y la acción para llenarlo, en `body-lg`.
- **Carga:** skeletons con la forma del contenido en tablas y paneles; spinner solo dentro de un
  botón que está trabajando.
- **Movimiento:** 120–200 ms, `ease-out` al entrar y `ease-in` al salir; sin movimiento con
  `prefers-reduced-motion: reduce`. Nada se anima para decorar.

## Do's and Don'ts

### Do
- Tratar el tema oscuro como el principal y probar cada pantalla también en claro y en
  `forced-colors`.
- Dejar que el tamaño, el tracking y el color hagan la jerarquía.
- Poner en mono todo valor que el usuario pueda copiar o buscar.
- Mostrar números reales con su unidad (`1.240 tokens`, `38 ms`), alineados a la derecha.

### Don't
- Gradientes, glassmorphism, sombras en paneles o fondos de color en secciones enteras.
- Violeta como acento, o cualquier color de acento que no sea `accent`.
- Bold (600/700) o mayúsculas en texto que no sea `eyebrow`.
- Emojis como íconos, ilustraciones decorativas en vistas de datos, o un estado comunicado solo
  por color.
- Valores sueltos de color, espacio, radio o tipografía: todo sale de estos tokens.
