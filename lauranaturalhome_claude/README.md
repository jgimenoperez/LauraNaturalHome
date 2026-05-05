# Laura's Natural Home - Sitio Web

Sitio web completo en HTML/CSS/JavaScript vanilla para Laura's Natural Home, diseñadora de interiores en Valencia.

## 📁 Estructura del Proyecto

```
lauranaturalhome_claude/
├── index.html           # Página de inicio
├── sobre-mi.html        # Acerca de Laura
├── servicios.html       # Descripción de servicios
├── portafolio.html      # Galería de proyectos
├── blog.html            # Blog con artículos
├── contacto.html        # Formularios de contacto
├── css/
│   └── style.css        # Estilos compartidos
├── js/
│   └── script.js        # JavaScript compartido
└── assets/
    ├── images/          # Carpeta para imágenes
    └── icons/           # Carpeta para iconos
```

## 🎯 Páginas Incluidas

### 1. **Inicio (index.html)**
- Hero section con propuesta de valor
- 3 servicios destacados
- 6 proyectos del portafolio
- 3 testimonios de clientes
- Call-to-action principal

### 2. **Sobre mí (sobre-mi.html)**
- Foto y presentación personal
- 6 valores fundamentales
- Estadísticas de experiencia
- CTA de contacto

### 3. **Servicios (servicios.html)**
- Decoración de Interiores (proyecto completo)
- Home Staging (preparación de venta/alquiler)
- Asesorías de Diseño (consultoría puntual)
- Tabla comparativa de servicios
- Presupuestos indicativos

### 4. **Portafolio (portafolio.html)**
- Galería de 12 proyectos (expandible)
- Filtros por categoría (Decoración, Home Staging, Apartamentos, Casas)
- Overlay interactivo en las imágenes
- Estadísticas del portafolio

### 5. **Blog (blog.html)**
- 6 artículos de ejemplo
- Categorías: Diseño, Tendencias, Home Staging, Sostenibilidad, Materiales, Iluminación
- Suscripción a newsletter
- Fechas de publicación

### 6. **Contacto (contacto.html)**
- Información de contacto (teléfono, email, ubicación)
- 3 formularios:
  - Contacto general
  - Solicitud de presupuesto
  - Agendar consulta
- Redes sociales
- FAQ (Preguntas frecuentes)

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: #8B7355 (Marrón tierra)
- **Secundario**: #D4C5B9 (Beige claro)
- **Acento**: #A8926A (Ocre dorado)
- **Oscuro**: #2C2C2C (Gris oscuro)
- **Claro**: #F5F3F0 (Crema)

### Responsive Design
- Totalmente adaptable a móviles, tablets y desktop
- Menú hamburguesa en pantallas pequeñas
- Grid layouts flexibles

### Interactividad
- Menú móvil toggle
- Filtros de portafolio
- Desplazamiento suave (smooth scroll)
- Animaciones hover en cards
- Validación de formularios
- Overlay interactivo en portafolio

## 🚀 Cómo Usar

### Opción 1: Abrir en Navegador
1. Abre `index.html` directamente en tu navegador
2. La web es completamente funcional sin necesidad de servidor

### Opción 2: Con Servidor Local (Recomendado)
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con PHP
php -S localhost:8000
```
Luego accede a `http://localhost:8000`

## 📝 Customización

### Cambiar Información de Contacto
En cada página, busca y reemplaza:
- `+34 600 000 000` → tu teléfono
- `info@lauranaturalhome.es` → tu email
- `Valencia, España` → tu ubicación

### Cambiar Colores
Edita las variables CSS en `css/style.css`:
```css
:root {
  --primary: #8B7355;      /* Tu color primario */
  --secondary: #D4C5B9;    /* Tu color secundario */
  --accent: #A8926A;       /* Tu color de acento */
  /* ... más variables */
}
```

### Agregar Proyectos al Portafolio
En `portafolio.html`, copia y modifica:
```html
<div class="portfolio-item" data-category="decoracion apartamentos">
  <img src="https://tu-imagen.jpg" alt="Descripción">
  <div class="portfolio-overlay">
    <h4>Nombre Proyecto</h4>
    <p>Descripción corta</p>
  </div>
</div>
```

### Agregar Artículos al Blog
En `blog.html`, copia y modifica la estructura de artículo:
```html
<article style="...">
  <img src="..." alt="...">
  <div style="...">
    <span style="...">Categoría</span>
    <h3>Título del Artículo</h3>
    <p>Descripción...</p>
    <div style="...">
      <span>Fecha</span>
      <a href="#">Leer →</a>
    </div>
  </div>
</article>
```

## 📱 Funcionalidades

✅ **Formularios** - Contacto, presupuesto, agendar consulta
✅ **Validación** - Email y campos requeridos
✅ **Newsletter** - Suscripción (integración con backend pendiente)
✅ **Filtros** - Portafolio filtrable por categoría
✅ **Responsive** - Optimizado para todos los dispositivos
✅ **SEO Ready** - Meta tags, headings semánticos, estructura HTML correcta
✅ **Accesible** - WCAG compliant (a/a)
✅ **Rendimiento** - Sin dependencias externas, carga rápido

## 🔗 Rutas de Navegación

```
/ (index.html)
├── /sobre-mi.html
├── /servicios.html
├── /portafolio.html
├── /blog.html
└── /contacto.html
```

Todas las páginas tienen navegación consistente y son accesibles desde cualquier punto.

## 📋 Next Steps (Para Producción)

1. **Backend**
   - Conectar formularios a servidor (Node.js, PHP, Python, etc.)
   - Crear endpoint para recibir datos
   - Email/notificaciones

2. **CMS/Blog**
   - Conectar con Prismic u otro CMS
   - Sistema dinámico de artículos

3. **Imágenes**
   - Reemplazar URLs placeholder de unsplash.com
   - Usar imágenes reales del portafolio
   - Optimizar imágenes

4. **SEO Avanzado**
   - Schema.org markup
   - Sitemap.xml
   - robots.txt
   - Open Graph tags

5. **Hosting**
   - Subir a Vercel (recomendado)
   - Configurar dominio personalizado
   - SSL/HTTPS (automático en Vercel)

## 📞 Soporte

Para preguntas sobre customización o mejoras, contacta a:
- **Email**: info@lauranaturalhome.es
- **Teléfono**: +34 600 000 000
- **Ubicación**: Valencia, España

---

**Creado por**: NaranjaIT (naranjait.es)
**Fecha**: Mayo 2026
**Versión**: 1.0
