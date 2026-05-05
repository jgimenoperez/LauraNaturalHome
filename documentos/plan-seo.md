# Plan SEO - Laura Natural Home

**Cliente**: Laura Natural Home — Diseñadora de interiores Valencia
**Stack**: Next.js 15 + Tailwind + Prismic
**Idioma**: Español único
**Objetivo**: Generar contactos y leads (local Valencia + nacional/internacional)

---

## 1. Estructura de URLs

URLs limpias, sin extensión, en español, con guiones. Jerarquía plana (max 2 niveles).

```
https://lauranaturalhome.com/
├── /                                    → Inicio
├── /sobre-mi                            → Sobre Laura
├── /servicios                           → Hub servicios
│   ├── /servicios/decoracion-interiores → Servicio principal
│   ├── /servicios/home-staging          → Servicio Home Staging
│   └── /servicios/asesorias             → Asesorías online/presencial
├── /portafolio                          → Galería proyectos
│   └── /portafolio/[slug]               → Proyecto individual
├── /blog                                → Listado posts
│   └── /blog/[slug]                     → Post individual
└── /contacto                            → Form contacto + reserva consulta
```

**Páginas técnicas**:
- `/sitemap.xml` (auto-generado)
- `/robots.txt`
- `/aviso-legal`
- `/politica-privacidad`
- `/politica-cookies`

**Reglas URLs**:
- Slugs sin acentos ni ñ (`decoracion`, no `decoración`)
- Minúsculas siempre
- Guion medio `-` como separador
- Sin trailing slash (`/blog/post`, no `/blog/post/`)
- Redirects 301: variantes con `/` final → sin `/`

---

## 2. Keywords por Página

### Página: Inicio (`/`)

- **Primary KW**: `decoración de interiores Valencia`
- **Secondary**: `diseñadora de interiores Valencia`, `decoradora Valencia`
- **Long tail**: `diseño de interiores residencial Valencia`
- **Intent**: Comercial/transaccional

### Página: Sobre mí (`/sobre-mi`)

- **Primary**: `Laura Natural Home`
- **Secondary**: `interiorista Valencia`, `decoradora Valencia experiencia`
- **Intent**: Branded + informacional

### Página: Servicios (`/servicios`)

- **Primary**: `servicios de decoración Valencia`
- **Secondary**: `interiorismo Valencia precios`, `presupuesto decoración Valencia`
- **Intent**: Comercial

### Página: Decoración Interiores (`/servicios/decoracion-interiores`)

- **Primary**: `decoración mediterránea en Valencia`
- **Secondary**: `decoración interiores casas Valencia`, `interiorismo residencial Valencia`
- **Long tail**: `proyectos de decoración mediterránea Valencia`
- **Intent**: Transaccional

### Página: Home Staging (`/servicios/home-staging`)

- **Primary**: `Home Staging Valencia`
- **Secondary**: `Home Staging viviendas alquiler Valencia`, `puesta en escena pisos Valencia`
- **Long tail**: `Home Staging para vender piso rápido Valencia`
- **Intent**: Transaccional

### Página: Asesorías (`/servicios/asesorias`)

- **Primary**: `asesorías de decoración Valencia`
- **Secondary**: `consultoría decoración online`, `asesoría interiorismo a distancia`
- **Long tail**: `consulta decoración online España`
- **Intent**: Transaccional

### Página: Portafolio (`/portafolio`)

- **Primary**: `proyectos de decoración mediterránea Valencia`
- **Secondary**: `portfolio interiorismo Valencia`, `casos de éxito decoración`

### Páginas Proyecto (`/portafolio/[slug]`)

- KW dinámica según proyecto, ej:
  - `/portafolio/estudio-fotografico-valencia` → `diseño estudio fotográfico Valencia`
  - `/portafolio/casa-pueblo-valencia` → `decoración casa rural Valencia`
  - `/portafolio/vivienda-alquiler-valencia` → `Home Staging vivienda alquiler Valencia`

### Página: Blog (`/blog`)

- **Primary**: `blog decoración interiores`
- Strategy: long-tail informacional para captar tráfico top-funnel

### Página: Contacto (`/contacto`)

- **Primary**: `contactar decoradora Valencia`
- **Secondary**: `presupuesto decoración Valencia`, `reserva consulta interiorismo`

---

## 3. Meta Tags por Página

Patrón: `[KW principal] | [propuesta valor] | Laura Natural Home`
Title: max 60 caracteres. Description: 150-160 caracteres.

### Inicio
```
<title>Decoración de Interiores en Valencia | Laura Natural Home</title>
<meta name="description" content="Diseñadora de interiores en Valencia con 6 años de experiencia. Decoración mediterránea, Home Staging y asesorías personalizadas. Solicita presupuesto.">
```

### Sobre mí
```
<title>Sobre mí | Laura — Interiorista en Valencia</title>
<meta name="description" content="Conoce a Laura, diseñadora de interiores en Valencia especializada en estilo mediterráneo. Acompañamiento personalizado en cada proyecto.">
```

### Servicios
```
<title>Servicios de Decoración e Interiorismo en Valencia</title>
<meta name="description" content="Decoración de interiores, Home Staging y asesorías en Valencia. Proyectos residenciales con atención al detalle y calidad. Consulta sin compromiso.">
```

### Decoración Interiores
```
<title>Decoración Mediterránea en Valencia | Proyectos Residenciales</title>
<meta name="description" content="Diseño de interiores con estilo mediterráneo en Valencia. Proyectos llave en mano para casas y apartamentos. Más de 90 proyectos completados.">
```

### Home Staging
```
<title>Home Staging en Valencia | Vende o Alquila Más Rápido</title>
<meta name="description" content="Servicio de Home Staging en Valencia. Mejora la presentación de tu vivienda para venderla o alquilarla en menos tiempo y al mejor precio.">
```

### Asesorías
```
<title>Asesorías de Decoración en Valencia y Online</title>
<meta name="description" content="Asesorías de decoración personalizadas en Valencia o por consultoría online. Soluciones a medida para tu hogar sin proyecto completo.">
```

### Portafolio
```
<title>Portafolio | Proyectos de Decoración en Valencia</title>
<meta name="description" content="Más de 90 proyectos de decoración e interiorismo en Valencia. Estudios fotográficos, viviendas residenciales y Home Staging.">
```

### Contacto
```
<title>Contacto | Reserva tu Consulta de Decoración</title>
<meta name="description" content="Solicita presupuesto o reserva una consulta con Laura Natural Home. Decoración de interiores en Valencia y asesorías online.">
```

---

## 4. Schema.org (Datos Estructurados)

JSON-LD inyectado en `<head>` por página.

### Global (todas las páginas)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://lauranaturalhome.com/#business",
  "name": "Laura Natural Home",
  "image": "https://lauranaturalhome.com/og-image.jpg",
  "url": "https://lauranaturalhome.com",
  "telephone": "+34 XXX XXX XXX",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Valencia",
    "addressRegion": "Valencia",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "39.4699",
    "longitude": "-0.3763"
  },
  "areaServed": ["Valencia", "España"],
  "priceRange": "€€-€€€",
  "sameAs": [
    "https://www.instagram.com/[handle]"
  ]
}
```

### Servicios

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Decoración de interiores",
  "provider": { "@id": "https://lauranaturalhome.com/#business" },
  "areaServed": "Valencia",
  "description": "..."
}
```

### Proyectos portafolio

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "[Nombre proyecto]",
  "creator": { "@id": "https://lauranaturalhome.com/#business" },
  "image": [...],
  "description": "..."
}
```

### Blog posts

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "...",
  "author": { "@type": "Person", "name": "Laura" },
  "datePublished": "...",
  "image": "..."
}
```

### Breadcrumbs (todas las páginas internas)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```

---

## 5. Internal Linking

**Hub-and-spoke**:
- Inicio → enlaza a 3 servicios + portfolio destacado + último post blog
- `/servicios` → enlaza a cada servicio individual
- Servicio individual → enlaza a proyectos relacionados del portafolio
- Proyecto portafolio → enlaza al servicio aplicado + 2-3 proyectos similares
- Blog post → enlaza a servicio relacionado + CTA contacto

**Anchor text**: KW exacta o variación natural (no "click aquí").

**Footer global**: links a todas las páginas principales + redes + legal.

---

## 6. Open Graph / Twitter Cards

Cada página define:
```html
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://lauranaturalhome.com/og/[page].jpg">
<meta property="og:type" content="website|article">
<meta property="og:locale" content="es_ES">
<meta name="twitter:card" content="summary_large_image">
```

OG images: 1200x630px, generadas por página vía Next.js `opengraph-image.tsx`.

---

## 7. Sitemap & Robots

**`sitemap.xml`** (Next.js auto via `app/sitemap.ts`):
- Páginas estáticas: priority 1.0 (Inicio), 0.8 (Servicios), 0.6 (resto)
- Proyectos portafolio: priority 0.7, fetched de Prismic
- Blog posts: priority 0.6, fetched de Prismic
- `lastmod` dinámico desde Prismic `last_publication_date`

**`robots.txt`**:
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/

Sitemap: https://lauranaturalhome.com/sitemap.xml
```

---

## 8. Performance & Core Web Vitals

Targets:
- **LCP** < 2.5s
- **CLS** < 0.1
- **INP** < 200ms

Acciones:
- Imágenes via `next/image` con `priority` en above-fold
- Formato AVIF/WebP automático
- Lazy load galería portafolio
- Fonts: `next/font` con `display: swap`
- Prismic: ISR (`revalidate: 60`) para edits Laura
- CSS crítico inline (Tailwind purge)
- Preload hero image en Inicio

---

## 9. Tracking & Analytics

- **Google Search Console**: alta + verificación
- **Google Analytics 4**: GTM o `next/third-parties`
- **Microsoft Clarity** (opcional): heatmaps + grabaciones
- **Eventos**: form_submit (contacto, cotización, reserva), instagram_click, whatsapp_click

---

## 10. Estrategia de Contenido (Blog)

**Pillar pages** (alto volumen, comercial):
- Decoración mediterránea Valencia
- Home Staging Valencia

**Cluster posts** (long-tail, informacional):
- "Cómo decorar un salón mediterráneo: guía paso a paso"
- "Home Staging vs reforma: ¿cuál elegir?"
- "10 ideas de decoración para casas pequeñas en Valencia"
- "Materiales típicos del estilo mediterráneo"
- "Errores comunes al decorar tu primera vivienda"
- "Tendencias decoración 2026"

Cadencia recomendada: 2 posts/mes mínimo.

---

## 11. SEO Local (Valencia)

- **Google Business Profile**: alta + verificación
- NAP consistente (Name, Address, Phone) en web + GBP + directorios
- Reviews Google integradas en web
- Páginas barrios Valencia (futuro): `/decoracion-interiores/ruzafa`, etc. (si volumen búsqueda lo justifica)

---

## 12. Checklist Pre-Lanzamiento SEO

- [ ] Title + meta description únicos por página
- [ ] H1 único por página, KW principal en H1
- [ ] Schema.org validado (Google Rich Results Test)
- [ ] Sitemap.xml generado y enviado a Search Console
- [ ] Robots.txt correcto
- [ ] OG images generadas
- [ ] Imágenes con `alt` descriptivo + KW natural
- [ ] URLs canónicas (`<link rel="canonical">`)
- [ ] HTTPS + redirect 301 desde HTTP
- [ ] WWW vs non-WWW: elegir uno + 301
- [ ] 404 personalizada
- [ ] Velocidad: Lighthouse ≥ 90 en mobile
- [ ] Mobile-friendly test pasado
- [ ] Search Console: alta + sitemap enviado
- [ ] GA4 instalado y testeado
- [ ] GBP creado y verificado
