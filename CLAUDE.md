# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proyecto

**Laura's Natural Home** - Portfolio web para diseñadora de interiores en Valencia.

**Estado**: Definición técnica completada. Pendiente setup inicial.

## Stack Técnico

- **Framework**: Next.js 15 (App Router)
- **Estilos**: Tailwind CSS 4
- **CMS**: Prismic (Laura edita contenido autónomamente)
- **Idioma**: Español únicamente (sin i18n)
- **Hosting**: Vercel (recomendado)
- **Email/Newsletter**: Resend (a confirmar)

**NO se incluye**: E-commerce, multi-idioma.

## Información del Negocio

- **Nombre**: Laura Natural Home
- **Ubicación**: Valencia (alcance nacional/internacional, consultoría online)
- **Experiencia**: 6 años
- **Servicios**: Decoración de interiores, Home Staging, Asesorías
- **Tipo proyecto**: Residencial (casas y apartamentos)
- **Público**: 35-55 años, particular + empresa, poder adquisitivo medio-alto
- **Proyectos completados**: ~90
- **Redes sociales**: Instagram

## Estructura de Páginas

1. **Inicio** - Hero + servicios destacados + portfolio destacado + CTA
2. **Sobre mí** - Historia, estilo, valores (contenido pendiente Laura)
3. **Servicios** - Decoración interiores, Home Staging, Asesorías
4. **Portafolio** - Galería proyectos (90+)
5. **Blog** - Gestionado vía Prismic
6. **Contacto** - Formulario contacto + cotización + reserva consulta

## Funcionalidades

- Formulario contacto
- Solicitud cotización/presupuesto
- Reserva consulta
- Blog (Prismic)
- Newsletter
- Galería portafolio con filtros
- Instagram embed
- Testimonios clientes

## SEO

**Keywords objetivo**:
- Decoración de interiores en Valencia
- Decoración mediterránea en Valencia
- Home Staging en Valencia
- Asesorías de decoración en Valencia
- Proyectos de decoración mediterránea en Valencia

**Objetivo principal**: Generar contactos y leads.

## Branding

**Estado**: Pendiente. Se definirá más adelante.
- Logo: por definir
- Paleta colores: por definir
- Tipografía: por definir
- Tono de marca: por definir

## Documentos del Proyecto

- **`documentos/Cuestionario-SEO-Contenidos-LauraDesign.docx`** - Cuestionario inicial (completado)
- **`documentos/cuestionario.json`** - Respuestas estructuradas del cliente

## Información de Contacto

**Cliente/Propietario**: Laura (diseñadora de interiores)
**Agencia**: NaranjaIT (naranjait.es)
**Email contacto**: naranjait@naranjait.es

## Gaps Pendientes

Información que falta del cliente:
- `sobre_mi`: historia profesional, inspiración, estilo de diseño, valores
- Branding completo (logo, colores, tipografía)
- Contenidos textuales de cada página
- Imágenes del portafolio (90 proyectos)

## Próximos Pasos

1. Inicializar Next.js 15 + Tailwind + TypeScript
2. Configurar Prismic (slices: hero, servicios, portfolio_item, blog_post, testimonio)
3. Implementar layouts y páginas base con contenido placeholder
4. Setup formularios (contacto, cotización, reserva)
5. SEO: metadata, sitemap, robots.txt, schema.org
6. Esperar branding + contenidos definitivos
7. Refinar diseño con branding aplicado
8. Deploy Vercel

## Cómo Usar este Archivo

A medida que se definan aspectos del proyecto:
- Actualiza con decisiones arquitectónicas
- Documenta comandos de build, lint, test cuando existan
- Registra estructura de directorios y convenciones
- Añade guías sobre setup local y flujo de desarrollo
