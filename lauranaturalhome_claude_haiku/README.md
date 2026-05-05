# Laura Natural Home — Website

Vanilla JavaScript / HTML / CSS website for interior designer Laura Natural Home.

## Project Structure

```
lauranaturalhome_claude_haiku/
├── index.html           # Main HTML file
├── src/
│   ├── design-tokens.css    # Design system (colors, typography, spacing)
│   ├── styles.css           # Component styles (nav, buttons, sections, etc.)
│   └── app.js               # Router & page components
├── assets/
│   ├── icons/
│   └── images/
└── README.md
```

## Design System

**Colors (Mediterranean palette):**
- Crudo (off-white): Primary surface background
- Terracotta: Brand color
- Oliva (sage): Secondary accent
- Tinta (warm black): Text
- Arena (sand): Neutrals

**Typography:**
- Display: Cormorant Garamond (serif, elegant)
- Body: Inter (sans-serif, readable)

**Layout:**
- Max width: 1280px
- Responsive grid system
- Clamp() for fluid typography

## Running Locally

### Option 1: Python HTTP Server
```bash
cd lauranaturalhome_claude_haiku
python -m http.server 8000
# Open browser: http://localhost:8000
```

### Option 2: Node.js HTTP Server
```bash
cd lauranaturalhome_claude_haiku
npx http-server
```

### Option 3: Live Server (VS Code)
Install "Live Server" extension and right-click `index.html` → "Open with Live Server"

## Routing

Hash-based client-side routing:
- `/` — Home
- `/sobre-mi` — About
- `/servicios` — Services
- `/portafolio` — Portfolio
- `/blog` — Blog
- `/contacto` — Contact

## Pages

### Home
- Hero section with value proposition
- 3 services teaser cards
- Featured projects grid
- Testimonial section

### About
- Story, style, values

### Services
- Overview of 3 services
- Links to detail pages

### Portfolio
- Project grid
- Each project links to detail page

### Blog
- Blog post index

### Contact
- Simple contact form

## Development Notes

- No build process required — just edit and refresh
- CSS uses CSS variables for theming
- JavaScript uses ES6 features
- Mobile-first responsive design
- Page rendering uses template literals

## Next Steps

1. Add project detail pages
2. Add blog post pages
3. Add service detail pages
4. Integrate with backend for forms
5. Add image optimization
6. SEO metadata for each page
