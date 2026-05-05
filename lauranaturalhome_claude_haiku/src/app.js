/* ==========================================================================
   Laura Natural Home — SPA Router + All Pages
   Vanilla JS, no frameworks
   ========================================================================== */

// ========== DATA ==========

const PROJECTS = [
  {
    slug: "casa-en-un-pueblo",
    title: "Casa en un pueblo",
    place: "Sagunto, Valencia",
    year: "2024",
    category: "Decoración",
    cover: "cream",
    cover_ratio: "16/9",
    summary: "Reforma integral de una casa de pueblo del siglo pasado — donde lo nuevo respira sin tapar lo que ya estaba.",
    description: [
      "La familia compró la casa con la intención de pasar los veranos lejos del ruido. Estaba en pie, pero llevaba dos décadas sin habitarse: la viga maestra había bajado, los azulejos hidráulicos del recibidor se conservaban casi intactos, y el patio interior — tapado por una cubierta de uralita — había desaparecido del plano.",
      "La conversación duró meses. Antes de mover una sola tabique, dibujamos planos a mano de cómo se vivía la casa cien años atrás, y de cómo querían vivirla ahora. La planta resultante mantiene el recorrido original — recibidor, sala, patio, cocina —, pero abre una pieza nueva: un estudio de luz al fondo, donde antes estaba el corral.",
      "La paleta — crudo, terracota, oliva — viene de los propios materiales de la casa. La cal de las paredes, la teja vieja, el roble del techo. No añadimos color; lo desenterramos."
    ],
    specs: [["Tipología","Casa de pueblo"],["Superficie","180 m²"],["Año","2024"],["Servicios","Decoración integral"],["Duración","9 meses"],["Fotografía","Albert M."]],
    quote: "Volvimos a sentir la casa como cuando éramos pequeños — pero ahora con una cocina que funciona.",
    quote_attr: "Cliente · Sagunto",
    lookbook: ["cream","oliva","arena","terracotta","tinta","cream","oliva","arena"],
    next: "estudio-fotografico"
  },
  {
    slug: "estudio-fotografico",
    title: "Estudio fotográfico",
    place: "Ruzafa, Valencia",
    year: "2023",
    category: "Home Staging",
    cover: "oliva",
    cover_ratio: "16/9",
    summary: "Un piso bajo de Ruzafa, vacío y oscuro, transformado en estudio fotográfico cálido en cuatro semanas — sin obra.",
    description: [
      "El encargo era contundente: convertir un piso de 65 metros en un espacio donde se pudiera fotografiar moda y producto, sin tocar ladrillo. Cuatro semanas, presupuesto ajustado.",
      "Trabajé con lo que había — paredes blancas, suelo de barro, una luz norte preciosa — y añadí lo justo: muebles de paso, dos sofás de lino crudo, telones tintados a mano, una mesa de trabajo larga.",
      "El resultado se alquila por horas y se reserva tres semanas por adelantado."
    ],
    specs: [["Tipología","Espacio comercial"],["Superficie","65 m²"],["Año","2023"],["Servicios","Home Staging"],["Duración","4 semanas"],["Fotografía","Estudio propio"]],
    quote: "El espacio cuenta solo. Los clientes entran y se quedan.",
    quote_attr: "Cliente · Ruzafa",
    lookbook: ["oliva","cream","arena","tinta","terracotta","oliva","cream","arena"],
    next: "apartamento-patacona"
  },
  {
    slug: "apartamento-patacona",
    title: "Apartamento Patacona",
    place: "Patacona, Valencia",
    year: "2024",
    category: "Home Staging",
    cover: "arena",
    cover_ratio: "16/9",
    summary: "Vivienda de alquiler vacacional con vistas al mar — pensada para fotografiarse bien y para vivirse mejor.",
    description: [
      "Un apartamento heredado en primera línea de la Patacona. Los propietarios querían sacarle rentabilidad sin convertirlo en otro alquiler genérico de azulejos blancos.",
      "Mantuvimos la estructura — dos habitaciones, salón, terraza — y trabajamos con materiales que envejecen bien: encimera de microcemento, lino, ratán, cerámica esmaltada hecha en un taller de Manises.",
      "La ocupación primer año subió un 38%. Los huéspedes repiten."
    ],
    specs: [["Tipología","Vivienda alquiler"],["Superficie","78 m²"],["Año","2024"],["Servicios","Home Staging"],["Duración","8 semanas"],["Fotografía","Albert M."]],
    quote: "La diferencia es que aquí la gente quiere quedarse.",
    quote_attr: "Propietaria · Patacona",
    lookbook: ["arena","cream","oliva","terracotta","tinta","arena","cream","oliva"],
    next: "casa-de-campo"
  },
  {
    slug: "casa-de-campo",
    title: "Casa de campo",
    place: "L'Eliana",
    year: "2023",
    category: "Decoración",
    cover: "terracotta",
    cover_ratio: "16/9",
    summary: "Una casa familiar a las afueras, abierta al jardín — con un porche que se vive más que el salón.",
    description: [
      "La casa tenía buenos huesos pero mala conversación entre estancias. Reorganizamos la planta para que la cocina, el salón y el porche se sintieran como un mismo espacio cuando hace calor.",
      "Materiales locales — barro de Buñol, madera de pino del país, cal apagada — y mucha pausa en cada decisión."
    ],
    specs: [["Tipología","Casa unifamiliar"],["Superficie","210 m²"],["Año","2023"],["Servicios","Decoración integral"],["Duración","11 meses"],["Fotografía","Albert M."]],
    quote: "En verano comemos siempre fuera. La casa lo facilita.",
    quote_attr: "Cliente · L'Eliana",
    lookbook: ["terracotta","oliva","cream","arena","tinta","terracotta","oliva","cream"],
    next: "loft-ruzafa"
  },
  {
    slug: "loft-ruzafa",
    title: "Loft en Ruzafa",
    place: "Valencia centro",
    year: "2025",
    category: "Decoración",
    cover: "cream",
    cover_ratio: "16/9",
    summary: "Loft de 90 m² con techos altos — un único espacio donde dormir, cocinar y trabajar, sin que se pisen.",
    description: [
      "Un cliente que vive solo, trabaja desde casa, recibe a menudo. Un único espacio que tenía que hacer de todo sin saturarse.",
      "Resolvimos las zonas con cambios de pavimento, una librería pasante a media altura, y un cabecero textil que separa sin tabicar."
    ],
    specs: [["Tipología","Loft"],["Superficie","90 m²"],["Año","2025"],["Servicios","Decoración"],["Duración","6 meses"],["Fotografía","Estudio propio"]],
    quote: "Nunca había vivido tan a gusto en un sólo ambiente.",
    quote_attr: "Cliente · Ruzafa",
    lookbook: ["cream","tinta","oliva","arena","terracotta","cream","tinta","oliva"],
    next: "salon-mediterraneo"
  },
  {
    slug: "salon-mediterraneo",
    title: "Salón en mediterráneo",
    place: "Online · Mallorca",
    year: "2024",
    category: "Asesoría",
    cover: "tinta",
    cover_ratio: "16/9",
    summary: "Asesoría online: cliente con casa en Mallorca, salón en piedra natural y techos abovedados, sin saber por dónde empezar.",
    description: [
      "Una sola sesión de 90 minutos, dos rondas de email después. La cliente avanzó por su cuenta — yo le di la paleta, la lista de proveedores, dos moodboards de referencia y un plano de mobiliario.",
      "Esta es la modalidad de trabajo que más ha crecido en los últimos dos años."
    ],
    specs: [["Tipología","Salón en vivienda"],["Modalidad","Online"],["Año","2024"],["Servicios","Asesoría 1:1"],["Duración","90 min + email"],["Fotografía","Cliente"]],
    quote: "Pagué una sesión y avancé seis meses.",
    quote_attr: "Cliente · Mallorca",
    lookbook: ["tinta","cream","terracotta","oliva","arena","tinta","cream","terracotta"],
    next: "casa-en-un-pueblo"
  }
];

const POSTS = [
  { slug:"luz-mediterranea-en-valencia", title:"La luz mediterránea, y por qué cambia todo lo que pongas debajo", excerpt:"Antes de hablar de paredes, muebles o textiles, hay que hablar de la luz. En Valencia es alta, dorada, larga — y cualquier color cambia con ella.", date:"12 marzo 2026", read:"6 min", category:"Diseño", tone:"cream" },
  { slug:"como-elegir-textiles-naturales", title:"Cómo elijo textiles naturales para una casa que se vive todos los días", excerpt:"Lino, algodón crudo, lana virgen — y por qué estoy dejando de usar mezclas con sintético, incluso cuando los clientes lo piden.", date:"28 febrero 2026", read:"8 min", category:"Materiales", tone:"oliva" },
  { slug:"home-staging-vs-decoracion", title:"Home Staging y decoración no son lo mismo. Te cuento la diferencia.", excerpt:"Una pregunta que me hacen cada semana. La respuesta no es técnica — es de intención. Y cambia el presupuesto.", date:"14 febrero 2026", read:"5 min", category:"Servicios", tone:"arena" },
  { slug:"paleta-terracota-y-oliva", title:"Terracota y oliva: la paleta que sigue funcionando después de seis años", excerpt:"La empecé a usar casi por casualidad. Hoy es la base de la mitad de los proyectos del estudio.", date:"31 enero 2026", read:"7 min", category:"Color", tone:"terracotta" },
  { slug:"ceramica-de-manises", title:"Cerámica de Manises: tres talleres que han cambiado mi forma de trabajar", excerpt:"Llevo dos años yendo cada mes. Lo que aprendí allí no se enseña en las escuelas de interiorismo.", date:"20 enero 2026", read:"10 min", category:"Oficio", tone:"tinta" },
  { slug:"errores-en-iluminacion", title:"Cinco errores comunes en iluminación residencial", excerpt:"Y cómo resolverlos sin reformar — porque la luz mala estropea cualquier proyecto, por bonito que sea.", date:"8 enero 2026", read:"9 min", category:"Iluminación", tone:"oliva" },
  { slug:"casa-mediterranea-cuatro-claves", title:"Cuatro claves para que una casa se sienta mediterránea (sin ser una postal)", excerpt:"No son los azulejos azules ni los cántaros. Son cosas más sutiles, y mucho más importantes.", date:"20 diciembre 2025", read:"6 min", category:"Estilo", tone:"cream" }
];

const POST_BODY = [
  { type:"p", t:"Empecemos por algo que parece obvio pero que la mayoría de proyectos olvida: ningún espacio funciona si la luz no funciona. Y la luz no es solo cuántas lámparas pones, ni siquiera de qué color son los watts." },
  { type:"p", t:"La luz tiene tres dimensiones que conviene separar. La primera es la natural — la que entra por las ventanas y cambia cada hora. La segunda es la general — la que enciendes al llegar a casa para no tropezarte. La tercera, y a la que casi nadie atiende, es la atmosférica: la que se enciende a las nueve de la noche, cuando el día se acaba y empiezas a habitar la casa de verdad." },
  { type:"h2", t:"Tres dimensiones, tres soluciones distintas" },
  { type:"p", t:"Para la luz natural, lo importante no es maximizarla — eso ya lo hace el sol — sino filtrarla. Una cortina de lino crudo, una contraventana de madera, incluso una persiana enrollable bien colocada cambian la temperatura del espacio sin que te des cuenta." },
  { type:"blockquote", t:"La luz buena no se ve. Se siente. Cuando entras en una habitación y respiras hondo sin saber por qué, casi siempre es porque la luz está bien resuelta." },
  { type:"p", t:"Para la luz general te bastan dos puntos por estancia, bien colocados, con una temperatura entre 2700 y 3000 K. Más fríos cansan; más cálidos amarillean los textiles." },
  { type:"h2", t:"El error más común" },
  { type:"p", t:"Concentrar toda la luz en el techo. Es lo que se ve en las viviendas de obra nueva: un downlight cada metro y medio, y al encenderlos todos parece un despacho. No tiene atmósfera." },
  { type:"p", t:"La solución es banal y cara a la vez: lámparas de pie, de mesa, apliques en la pared a 1,80 m de altura. Tres puntos bajos por estancia. Encendidos los tres a la vez se ilumina el espacio sin necesidad de tocar nada en el techo." },
  { type:"h3", t:"Si solo te quedas con una idea" },
  { type:"list", items:["Mide la luz natural antes de elegir el color de las paredes — un crudo cambia mucho según oriente.","Pon dos puntos de luz general por estancia. No uno, no cuatro.","Pon tres puntos de luz baja, distintos, y con regulador.","Y, sobre todo, prueba la luz a las nueve de la noche, no al mediodía."] },
  { type:"p", t:"La luz buena no necesita ser cara. Necesita estar pensada — y eso, lamentablemente, no se compra hecho." }
];

const SERVICES_DATA = [
  { slug:"decoracion-interiores", num:"01", title:"Decoración de interiores", summary:"Proyecto integral, desde el primer plano hasta el último textil. Diseñamos tu casa juntos, paso a paso.", price:"Desde 2.400 €", tone:"terracotta", duration:"3 a 12 meses", modality:"Presencial · Valencia y nacional", ideal:"Vivienda completa o reforma" },
  { slug:"home-staging", num:"02", title:"Home Staging", summary:"Preparo tu vivienda para que enamore desde la primera visita. Trabajo con lo que ya tienes y añado lo justo.", price:"Desde 850 €", tone:"oliva", duration:"2 a 6 semanas", modality:"Presencial · Valencia", ideal:"Venta o alquiler" },
  { slug:"asesorias", num:"03", title:"Asesorías", summary:"Una sesión enfocada para resolver dudas concretas — color, distribución, materiales o una pieza clave.", price:"Desde 180 €", tone:"arena", duration:"90 min + email", modality:"Online o presencial", ideal:"Ya tienes claras las decisiones" }
];

const SERVICE_DETAIL = {
  "decoracion-interiores": {
    eyebrow:"Servicio principal", title:"Decoración de interiores",
    lead:"Un proyecto integral, desde el primer plano hasta el último textil. Diseñamos tu casa contigo, paso a paso, con propuestas de distribución, materiales, mobiliario y todo lo necesario para vivirla.",
    tone:"terracotta", duration:"3 – 12 meses", modality:"Presencial · Valencia + nacional", from:"Desde 2.400 €",
    process:[
      {t:"Conversación inicial",d:"Una sesión sin compromiso para escuchar tu proyecto. Te explico cómo trabajo."},
      {t:"Levantamiento y plano",d:"Mido la casa, fotografío, dibujo el estado actual y propongo distribución."},
      {t:"Moodboard y 3D",d:"Dirección de estilo, materiales, paleta y render 3D de los espacios clave."},
      {t:"Compra y obra",d:"Acompaño en cada decisión. Coordino con artesanos y proveedores hasta el último día."}
    ],
    includes_left:["Visita técnica y levantamiento","Plano de distribución","Moodboard de dirección de estilo","Paleta de color y materiales","Selección de mobiliario y textil"],
    includes_right:["Render 3D de espacios clave","Listado de proveedores","Acompañamiento en compras","Visitas de obra (Valencia)","Estilismo final y entrega"],
    not_included:"Honorarios de obra civil y costes de mobiliario.",
    faqs:[
      ["¿Trabajas también fuera de Valencia?","Sí. Tengo proyectos activos en Mallorca, Madrid y Andalucía. Para fuera de la provincia ajustamos las visitas presenciales y trabajamos online entre ellas."],
      ["¿Qué pasa si ya tengo arquitecto?","Encantada. Coordino con el equipo técnico y me ocupo de la capa de interiorismo, materiales y mobiliario. Es lo habitual en obra nueva."],
      ["¿Cuánto cuesta un proyecto entero?","Depende de la superficie y del alcance, pero el rango habitual está entre 2.400 € y 12.000 € de honorarios. La inversión en mobiliario y obra es aparte."],
      ["¿Cuándo cobras?","Hago dos pagos: el primero al firmar el encargo, el segundo a la entrega de planos y moodboard final."]
    ]
  },
  "home-staging": {
    eyebrow:"Servicio Home Staging", title:"Home Staging",
    lead:"Preparo tu vivienda para que enamore desde la primera visita. Trabajo con lo que ya tienes, añado lo justo, y cuento la historia que tu casa merece — para vender o alquilar antes y mejor.",
    tone:"oliva", duration:"2 – 6 semanas", modality:"Presencial · Valencia", from:"Desde 850 €",
    process:[
      {t:"Diagnóstico in situ",d:"Visito la vivienda, identifico fortalezas y trabas, propongo un plan de mejoras."},
      {t:"Plan de bajo coste",d:"Lista priorizada de cambios — pintura, mobiliario, textil, iluminación. Sin obra."},
      {t:"Ejecución",d:"Coordino la pintura y compras puntuales. Estilismo y montaje del espacio."},
      {t:"Reportaje",d:"Sesión de fotos profesional incluida, lista para portales y redes."}
    ],
    includes_left:["Diagnóstico inicial in situ","Plan de mejoras priorizado","Coordinación con pintor","Compras puntuales (textil, plantas, accesorios)"],
    includes_right:["Estilismo y montaje","Reportaje fotográfico profesional","Asistencia para portales inmobiliarios","Plan de mantenimiento durante visitas"],
    not_included:"Reformas estructurales o cambios de pavimento.",
    faqs:[
      ["¿Para qué tipo de viviendas funciona mejor?","Para viviendas de hasta 150 m², en Valencia capital y alrededores. He trabajado tanto pisos pequeños para alquiler como casas familiares para venta."],
      ["¿Necesito vaciar la casa antes?","No siempre. En muchos casos trabajamos con tu mobiliario actual. Si hay piezas que no funcionan, las retiramos a guardamuebles."],
      ["¿Cuánto se vende mejor con Home Staging?","Mi media histórica: -42% de tiempo en mercado. La inversión se recupera siempre."],
      ["¿Incluye fotografía?","Sí. El reportaje profesional está dentro de la tarifa."]
    ]
  },
  "asesorias": {
    eyebrow:"Asesorías online o presencial", title:"Asesorías",
    lead:"Una sesión enfocada para resolver dudas concretas: paleta de color, distribución, materiales, una pieza clave. Ideal si quieres avanzar tú con criterio — sin contratar un proyecto entero.",
    tone:"arena", duration:"90 min · sesión 1:1", modality:"Online · o presencial en Valencia", from:"Desde 180 €",
    process:[
      {t:"Briefing previo",d:"Cuestionario corto + fotos y planos. Llego preparada a la sesión."},
      {t:"Sesión 1:1",d:"90 minutos por videollamada o en tu casa. Resolvemos lo que necesites."},
      {t:"Resumen escrito",d:"En 48h te envío un PDF con recomendaciones, paleta, proveedores y referencias."},
      {t:"Email de seguimiento",d:"Una ronda de dudas por email durante el mes siguiente."}
    ],
    includes_left:["Cuestionario y revisión previa","Sesión 1:1 de 90 minutos","Recomendaciones por escrito (PDF)"],
    includes_right:["Lista de proveedores y artesanos","Paleta de color (si aplica)","Una ronda de email de seguimiento"],
    not_included:"Renders 3D, planos y acompañamiento en obra.",
    faqs:[
      ["¿Y si necesito más después?","Lo habitual. Puedes ampliar a un proyecto integral y descontamos la asesoría del presupuesto."],
      ["¿Sirve para una sola habitación?","Es justo para lo que mejor funciona. Pintura, sofá, dormitorio infantil, distribución de un salón."],
      ["¿Funciona si vivo fuera de España?","Sí. La mitad de las asesorías son a distancia."],
      ["¿Cuándo recibo el resumen?","En 48 horas hábiles tras la sesión."]
    ]
  }
};

// ========== STATE ==========
const state = {
  portfolioFilter: "Todos",
  contactTab: "mensaje",
  calYear: new Date().getFullYear(),
  calMonth: new Date().getMonth(),
  selectedDay: null,
  selectedSlot: null
};

// ========== ROUTER ==========
function parseHash() {
  const h = (window.location.hash || "#/").replace(/^#/, "");
  return h.split("/").filter(Boolean);
}

function navigate(path) {
  if (window.location.hash !== "#" + path) {
    window.location.hash = "#" + path;
  } else {
    window.scrollTo(0, 0);
  }
}
window.navigate = navigate;

// ========== ATOMS ==========
const PHOTO_PALETTES = {
  terracotta: ["#B07355","#D8A883","#EFD0BF"],
  oliva:      ["#7E7E5A","#B0B698","#DBD8C4"],
  arena:      ["#A99477","#CAB89A","#ECE3D2"],
  tinta:      ["#3A2D22","#574437","#8A7A63"],
  cream:      ["#C9B79B","#E5D9C2","#F6F0E6"]
};

function photo(tone, ratio, extraStyle) {
  const [a,b,c] = PHOTO_PALETTES[tone] || PHOTO_PALETTES.terracotta;
  const ar = ratio ? `aspect-ratio:${ratio};` : "";
  return `
    <div class="lnh-photo" style="${ar}${extraStyle||""}">
      <div class="lnh-photo-img" style="background:linear-gradient(135deg,${a} 0%,${b} 55%,${c} 100%);"></div>
      <div class="lnh-photo-grain"></div>
    </div>`;
}

function eyebrow(text, light) {
  return `<span class="lnh-eyebrow${light?" lnh-eyebrow--light":""}">${text}</span>`;
}

function divider() {
  return `<div class="lnh-divider" aria-hidden>
    <svg viewBox="0 0 240 60" width="200" height="50" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round">
      <path d="M10 30 C 60 30, 110 30, 230 30"/>
      <ellipse cx="50" cy="22" rx="10" ry="3.5" transform="rotate(-22 50 22)"/>
      <ellipse cx="70" cy="38" rx="10" ry="3.5" transform="rotate(22 70 38)"/>
      <ellipse cx="92" cy="22" rx="11" ry="3.5" transform="rotate(-22 92 22)"/>
      <ellipse cx="114" cy="38" rx="11" ry="3.5" transform="rotate(22 114 38)"/>
      <ellipse cx="138" cy="22" rx="11" ry="3.5" transform="rotate(-22 138 22)"/>
      <ellipse cx="160" cy="38" rx="10" ry="3.5" transform="rotate(22 160 38)"/>
      <ellipse cx="180" cy="22" rx="9" ry="3" transform="rotate(-22 180 22)"/>
    </svg>
  </div>`;
}

function crumbs(items) {
  return `<div class="lnh-crumbs">
    ${items.map((it, i) => `
      ${i>0?'<span class="sep">/</span>':""}
      ${it.href
        ? `<a onclick="navigate('${it.href}')">${it.label}</a>`
        : `<span class="current">${it.label}</span>`}
    `).join("")}
  </div>`;
}

function btn(text, variant, onclick, type) {
  return `<button type="${type||"button"}" class="lnh-btn lnh-btn--${variant||"primary"}" ${onclick?`onclick="${onclick}"`:""}>${text}</button>`;
}

// ========== CHROME ==========
function renderNav() {
  const parts = parseHash();
  const links = [
    { id:"/", label:"Inicio", active: parts.length===0 },
    { id:"/sobre-mi", label:"Sobre mí", active: parts[0]==="sobre-mi" },
    { id:"/servicios", label:"Servicios", active: parts[0]==="servicios" },
    { id:"/portafolio", label:"Portafolio", active: parts[0]==="portafolio" },
    { id:"/blog", label:"Blog", active: parts[0]==="blog" },
    { id:"/contacto", label:"Contacto", active: parts[0]==="contacto" },
  ];
  return `
    <header class="lnh-nav">
      <a class="lnh-brand" onclick="navigate('/')">Laura <em>Natural</em> Home</a>
      <nav class="lnh-nav-links">
        ${links.map(l=>`<a class="lnh-nav-link${l.active?" is-active":""}" onclick="navigate('${l.id}')">${l.label}</a>`).join("")}
      </nav>
      <button class="lnh-btn lnh-btn--primary lnh-btn--sm" onclick="navigate('/contacto')">Cuéntame tu proyecto</button>
    </header>`;
}

function renderFooter() {
  return `
    <footer class="lnh-footer">
      <div class="lnh-footer-inner">
        <div>
          <div class="lnh-footer-brand">Laura Natural Home</div>
          <p class="lnh-footer-tag">Diseño de interiores con alma mediterránea. Valencia y a nivel nacional.</p>
        </div>
        <div class="lnh-footer-cols">
          <div>
            ${eyebrow("Estudio", true)}
            <a onclick="navigate('/sobre-mi')">Sobre mí</a>
            <a onclick="navigate('/servicios')">Servicios</a>
            <a onclick="navigate('/portafolio')">Portafolio</a>
            <a onclick="navigate('/blog')">Blog</a>
          </div>
          <div>
            ${eyebrow("Contacto", true)}
            <a>hola@lauranaturalhome.com</a>
            <a>Valencia, España</a>
            <a>Instagram · @lauranaturalhome</a>
          </div>
        </div>
      </div>
      <div class="lnh-footer-bottom">
        <span>© 2026 Laura Natural Home · Todos los derechos reservados</span>
        <span>Una carta breve, una vez al mes.</span>
      </div>
    </footer>`;
}

// ========== PAGES ==========

function renderHome() {
  const posts3 = POSTS.slice(0,3);
  return `
    <main class="lnh-page">
      <!-- HERO VIEWPORT — fullscreen Mediterranean video -->
      <section class="lnh-hero-viewport">

        <!-- Video (autoplay muted loop) — place file at assets/videos/hero-mediterraneo.mp4 -->
        <video
          class="lnh-hero-video"
          autoplay muted loop playsinline
          poster=""
          oncanplay="this.classList.add('is-loaded')"
          onerror="this.style.display='none'">
          <source src="assets/videos/hero-mediterraneo.mp4" type="video/mp4">
          <source src="assets/videos/hero-mediterraneo.webm" type="video/webm">
        </video>

        <!-- CSS gradient fallback (shows when no video file) -->
        <div class="lnh-hero-bg-fallback"></div>

        <!-- Overlay layers -->
        <div class="lnh-hero-overlay-vignette"></div>
        <div class="lnh-hero-overlay-bottom"></div>
        <div class="lnh-hero-overlay-grain"></div>

        <!-- Content -->
        <div class="lnh-hero-content">
          <span class="lnh-hero-eyebrow">Estudio de interiorismo &nbsp;·&nbsp; Valencia</span>

          <div class="lnh-hero-rule"></div>

          <h1 class="lnh-hero-headline">
            <span class="line"><span class="line-inner">Diseño de interiores</span></span>
            <span class="line"><span class="line-inner">con alma mediterránea</span></span>
          </h1>

          <p class="lnh-hero-lead">
            Acompaño cada proyecto desde la primera idea hasta el último detalle,<br>
            para que tu hogar se sienta como tuyo.
          </p>

          <div class="lnh-hero-cta-group">
            <button class="lnh-hero-cta" onclick="navigate('/contacto')">
              Cuéntame tu proyecto
            </button>
            <button class="lnh-hero-cta lnh-hero-cta--ghost" onclick="navigate('/portafolio')">
              Ver portafolio
            </button>
          </div>
        </div>

        <!-- Scroll indicator -->
        <div class="lnh-hero-scroll">
          <span class="lnh-hero-scroll-label">Descubre</span>
          <div class="lnh-hero-scroll-track">
            <div class="lnh-hero-scroll-dot"></div>
          </div>
        </div>

      </section>

      <!-- HERO META STRIP -->
      <div style="background:var(--bg-soft);border-bottom:1px solid var(--border);">
        <div class="lnh-hero-meta" style="max-width:var(--container-max);margin:0 auto;padding:28px clamp(20px,4vw,48px);">
          <div><strong>+90</strong><span>Proyectos</span></div>
          <div><strong>6 años</strong><span>De estudio</span></div>
          <div><strong>Valencia</strong><span>+ a nivel nacional</span></div>
        </div>
      </div>

      <!-- SERVICES TEASER -->
      <section class="lnh-section lnh-section--soft">
        <div class="lnh-section-head" style="max-width:var(--container-max);margin-left:auto;margin-right:auto;">
          ${eyebrow("Servicios")}
          <h2>Tres formas de trabajar juntos.</h2>
        </div>
        <div class="lnh-services">
          ${SERVICES_DATA.map(s=>`
            <article class="lnh-service">
              <span class="lnh-service-num">${s.num}</span>
              <h3>${s.title}</h3>
              <p>${s.summary}</p>
              <a class="lnh-link" onclick="navigate('/servicios/${s.slug}')">Ver servicio →</a>
            </article>
          `).join("")}
        </div>
      </section>

      ${divider()}

      <!-- FEATURED PROJECTS -->
      <section class="lnh-section">
        <div class="lnh-section-head lnh-section-head--row">
          <div>${eyebrow("Proyectos destacados")}<h2>Casas pensadas, despacio.</h2></div>
          ${btn("Ver todos","outline","navigate('/portafolio')")}
        </div>
        <div class="lnh-portfolio-grid">
          <a class="lnh-project lnh-project--lg" onclick="navigate('/portafolio/casa-en-un-pueblo')">
            ${photo("cream","4/5")}
            <div class="lnh-project-body">
              ${eyebrow("Vivienda · Sagunto")}
              <h3>Casa en un pueblo</h3>
              <span class="lnh-project-meta">Reforma integral · 2024</span>
            </div>
          </a>
          <div class="lnh-project-stack">
            <a class="lnh-project" onclick="navigate('/portafolio/estudio-fotografico')">
              ${photo("oliva","4/3")}
              <div class="lnh-project-body">
                ${eyebrow("Home Staging · Ruzafa")}
                <h3>Estudio fotográfico</h3>
              </div>
            </a>
            <a class="lnh-project" onclick="navigate('/portafolio/apartamento-patacona')">
              ${photo("arena","4/3")}
              <div class="lnh-project-body">
                ${eyebrow("Vivienda para alquiler")}
                <h3>Apartamento Patacona</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      <!-- TESTIMONIAL -->
      <section class="lnh-section lnh-section--testimonial">
        ${eyebrow("Lo que dicen las clientas")}
        <blockquote class="lnh-quote">"Laura entendió mi casa antes que yo. Cada detalle tiene una razón — y a la vez todo respira."</blockquote>
        <div class="lnh-quote-attr">
          <span class="lnh-quote-line"></span>
          Marta G. · Vivienda en Ruzafa
        </div>
      </section>

      <!-- BLOG TEASER -->
      <section class="lnh-section">
        <div class="lnh-section-head lnh-section-head--row">
          <div>${eyebrow("Diario del estudio")}<h2>Notas, materiales, casas que me inspiran.</h2></div>
          ${btn("Leer el blog","outline","navigate('/blog')")}
        </div>
        <div class="lnh-blog-grid">
          ${posts3.map(p=>`
            <article class="lnh-post-card" onclick="navigate('/blog/${p.slug}')">
              ${photo(p.tone,"4/3")}
              <div class="meta"><span>${p.category}</span><span>${p.read}</span></div>
              <h3>${p.title}</h3>
              <p>${p.excerpt}</p>
            </article>
          `).join("")}
        </div>
      </section>

      <!-- CTA -->
      <section class="lnh-cta-strip">
        <div class="lnh-cta-text">
          <h2>¿Pensando en empezar un proyecto?</h2>
          <p>Cuéntame en qué estás. Respondo personalmente en menos de 48 horas.</p>
        </div>
        ${btn("Cuéntame tu proyecto","primary","navigate('/contacto')")}
      </section>
    </main>`;
}

function renderAbout() {
  return `
    <main class="lnh-page">
      <section class="lnh-section lnh-section--narrow">
        ${crumbs([{label:"Inicio",href:"/"},{label:"Sobre mí"}])}
        ${eyebrow("Sobre mí")}
        <h1 class="lnh-page-title">Me llamo Laura.<br/>Diseño hogares <em>vividos despacio</em>.</h1>
      </section>
      <section class="lnh-about">
        <div class="lnh-about-image">${photo("cream","3/4")}</div>
        <div class="lnh-about-text">
          <p class="lnh-lead">Llevo seis años diseñando casas en Valencia — y, cada vez más, fuera de ella. Creo en los espacios que se viven despacio, en los materiales nobles, en la luz natural.</p>
          <p>Empecé este estudio porque sentía que muchos hogares se decoraban sin escuchar a quien iba a vivirlos. Mi forma de trabajar es, ante todo, una conversación. Te acompaño desde la primera idea hasta el último detalle, paso a paso, sin prisa por entregar.</p>
          <p>He completado más de noventa proyectos — viviendas familiares, apartamentos para alquilar, locales pequeños, asesorías a distancia. Cada uno con su propia voz.</p>
          <h3>Mi forma de trabajar</h3>
          <ul class="lnh-values">
            <li><strong>Cercanía.</strong> Atiendo cada proyecto en persona, de principio a fin.</li>
            <li><strong>Detalle.</strong> Lo importante está en lo pequeño — el tirador, la junta, el textil.</li>
            <li><strong>Calidad.</strong> Trabajo con artesanos y materiales que duran.</li>
            <li><strong>Pausa.</strong> Las decisiones buenas necesitan tiempo. No tengo prisa por entregar.</li>
          </ul>
          ${btn("Cuéntame tu proyecto","primary","navigate('/contacto')")}
        </div>
      </section>
      ${divider()}
      <section class="lnh-section lnh-section--testimonial">
        ${eyebrow("Estudio")}
        <blockquote class="lnh-quote">"Diseñar una casa es escuchar primero. Lo demás llega después."</blockquote>
        <div class="lnh-quote-attr">
          <span class="lnh-quote-line"></span>
          Laura · fundadora
        </div>
      </section>
    </main>`;
}

function renderServicesHub() {
  return `
    <main class="lnh-page">
      <section class="lnh-page-hero">
        ${crumbs([{label:"Inicio",href:"/"},{label:"Servicios"}])}
        <div class="lnh-page-hero--split">
          <div>
            ${eyebrow("Servicios")}
            <h1>Tres formas de<br/>trabajar <em>juntos</em>.</h1>
          </div>
          <p class="lnh-lead">Cada proyecto es distinto. Estas son las tres puertas de entrada — desde aquí adaptamos el alcance a lo que tu casa necesita.</p>
        </div>
      </section>
      <section class="lnh-services-hub">
        ${SERVICES_DATA.map(s=>`
          <article class="lnh-service-card" onclick="navigate('/servicios/${s.slug}')">
            ${photo(s.tone,"4/3")}
            <div class="lnh-service-card-body">
              <span class="lnh-service-num">${s.num}</span>
              <h3>${s.title}</h3>
              <p>${s.summary}</p>
              <div class="lnh-service-card-foot">
                <span class="price">${s.price}</span>
                <span class="arrow">Ver servicio →</span>
              </div>
            </div>
          </article>
        `).join("")}
      </section>
      <section class="lnh-compare">
        <div class="lnh-compare-inner">
          <div>
            ${eyebrow("Comparativa")}
            <h2>¿Cuál es para ti?</h2>
            <p>Una mirada rápida a las tres modalidades, lado a lado. Si dudas, escríbeme — te ayudo a elegir sin compromiso.</p>
          </div>
          <table class="lnh-compare-table">
            <thead><tr><th></th><th>Decoración</th><th>Home Staging</th><th>Asesoría</th></tr></thead>
            <tbody>
              <tr><th>Duración</th><td>3 – 12 meses</td><td>2 – 6 semanas</td><td>90 min</td></tr>
              <tr><th>Modalidad</th><td>Presencial</td><td>Presencial</td><td>Online o presencial</td></tr>
              <tr><th>Acompañamiento</th><td>Integral</td><td>Puntual</td><td>1 sesión</td></tr>
              <tr><th>Renders 3D</th><td><span class="lnh-compare-dot">●</span> Incluidos</td><td>—</td><td>—</td></tr>
              <tr><th>Compra y obra</th><td><span class="lnh-compare-dot">●</span> Acompaño</td><td>—</td><td>—</td></tr>
              <tr><th>Inversión</th><td>Desde 2.400 €</td><td>Desde 850 €</td><td>Desde 180 €</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>`;
}

function renderServiceDetail(slug) {
  const s = SERVICE_DETAIL[slug];
  if (!s) return renderServicesHub();
  return `
    <main class="lnh-page">
      <div class="lnh-svc-detail">
        <section style="padding-top:32px;">
          ${crumbs([{label:"Inicio",href:"/"},{label:"Servicios",href:"/servicios"},{label:s.title}])}
        </section>
        <section class="lnh-svc-detail-hero">
          <div>
            ${eyebrow(s.eyebrow)}
            <h1>${s.title}</h1>
            <p class="lnh-lead">${s.lead}</p>
            <div class="lnh-hero-actions" style="margin-top:32px;margin-bottom:0;">
              ${btn("Solicitar información","primary","navigate('/contacto')")}
              ${btn("Ver proyectos","link","navigate('/portafolio')")}
            </div>
            <div class="lnh-svc-meta">
              <div><span>Duración</span><strong>${s.duration}</strong></div>
              <div><span>Modalidad</span><strong>${s.modality}</strong></div>
              <div><span>Inversión</span><strong>${s.from}</strong></div>
            </div>
          </div>
          ${photo(s.tone,"4/5")}
        </section>

        <section class="lnh-process">
          <div class="lnh-process-head">
            ${eyebrow("Proceso")}
            <h2>Cuatro fases, sin prisa.</h2>
          </div>
          <div class="lnh-process-list">
            ${s.process.map((p,i)=>`
              <div class="lnh-process-step">
                <span class="num">0${i+1}</span>
                <h4>${p.t}</h4>
                <p>${p.d}</p>
              </div>
            `).join("")}
          </div>
        </section>

        <section class="lnh-includes">
          <div class="lnh-includes-col">
            ${eyebrow("Qué incluye")}
            <h3>Todo esto está dentro.</h3>
            <ul class="lnh-features">${s.includes_left.map(f=>`<li>${f}</li>`).join("")}</ul>
          </div>
          <div class="lnh-includes-col">
            ${eyebrow("Y también")}
            <h3>Pequeños detalles que cambian el proyecto.</h3>
            <ul class="lnh-features">${s.includes_right.map(f=>`<li>${f}</li>`).join("")}</ul>
          </div>
        </section>

        <section class="lnh-pricing">
          <div class="lnh-pricing-head">
            ${eyebrow("Inversión")}
            <h3>Tarifas transparentes.</h3>
            <p class="lnh-pricing-note">No hay sorpresas — la tarifa se calcula al inicio y se respeta hasta el final.</p>
          </div>
          <div>
            <div class="lnh-pricing-amount"><em>desde</em> ${s.from.replace("Desde ","")}<sup> · iva inc.</sup></div>
            <p class="lnh-pricing-note">No incluye: ${s.not_included}</p>
            ${btn("Solicitar presupuesto","primary","navigate('/contacto')")}
          </div>
        </section>

        <section class="lnh-faq">
          <div class="lnh-section-head">
            ${eyebrow("Dudas frecuentes")}
            <h2>Preguntas que me hacen a menudo.</h2>
          </div>
          <div class="lnh-faq-list">
            ${s.faqs.map(([q,a],i)=>`
              <details class="lnh-faq-item"${i===0?" open":""}>
                <summary>${q}<span class="toggle"></span></summary>
                <p>${a}</p>
              </details>
            `).join("")}
          </div>
        </section>
      </div>

      <section class="lnh-cta-strip">
        <div class="lnh-cta-text">
          <h2>¿Empezamos?</h2>
          <p>Una primera conversación, sin compromiso, para ver si encajamos.</p>
        </div>
        ${btn("Cuéntame tu proyecto","primary","navigate('/contacto')")}
      </section>
    </main>`;
}

function renderPortfolio() {
  const cats = ["Todos","Decoración","Home Staging","Asesoría"];
  const filter = state.portfolioFilter;
  const counts = {};
  cats.forEach(c => { counts[c] = c==="Todos" ? PROJECTS.length : PROJECTS.filter(p=>p.category===c).length; });
  const visible = filter==="Todos" ? PROJECTS : PROJECTS.filter(p=>p.category===filter);

  return `
    <main class="lnh-page">
      <section class="lnh-page-hero">
        ${crumbs([{label:"Inicio",href:"/"},{label:"Portafolio"}])}
        <div class="lnh-page-hero--split">
          <div>${eyebrow("Portafolio")}<h1>Algunos proyectos<br/><em>recientes</em>.</h1></div>
          <p class="lnh-lead">Una selección de casas que he tenido el privilegio de diseñar — desde reformas integrales hasta asesorías a distancia. Cada una con su propia voz.</p>
        </div>
      </section>

      <div class="lnh-filters">
        ${cats.map(c=>`
          <button class="lnh-chip${filter===c?" is-active":""}" onclick="setFilter('${c}')">
            ${c}<span class="lnh-chip-count">${counts[c]}</span>
          </button>
        `).join("")}
      </div>

      <section class="lnh-portfolio-page">
        ${visible.map((p,i)=>`
          <a class="lnh-project${i===0?" lnh-project--lg":""}" onclick="navigate('/portafolio/${p.slug}')">
            ${photo(p.cover, i===0?"4/5":"4/3")}
            <div class="lnh-project-body">
              ${eyebrow(`${p.category} · ${p.place}`)}
              <h3>${p.title}</h3>
              <span class="lnh-project-meta">${p.year}</span>
            </div>
          </a>
        `).join("")}
      </section>

      <section class="lnh-cta-strip">
        <div class="lnh-cta-text">
          <h2>¿Tu casa podría ser la próxima?</h2>
          <p>Cuéntame en qué estás. Respondo personalmente en menos de 48 horas.</p>
        </div>
        ${btn("Cuéntame tu proyecto","primary","navigate('/contacto')")}
      </section>
    </main>`;
}

function renderProjectDetail(slug) {
  const p = PROJECTS.find(x=>x.slug===slug);
  if (!p) return renderPortfolio();
  const next = PROJECTS.find(x=>x.slug===p.next);
  const lbRatios = ["4/5","4/3","4/5","4/3","21/9","4/3","4/5","4/3"];
  return `
    <main class="lnh-page">
      <section class="lnh-proj-hero">
        ${crumbs([{label:"Inicio",href:"/"},{label:"Portafolio",href:"/portafolio"},{label:p.title}])}
        ${eyebrow(`${p.category} · ${p.year}`)}
        <h1 class="lnh-page-title">${p.title}.</h1>
        <p class="lnh-lead" style="max-width:60ch;">${p.summary}</p>
        <div class="lnh-proj-meta-row" style="margin-top:32px;">
          <span><strong>Lugar</strong>${p.place}</span>
          <span><strong>Año</strong>${p.year}</span>
          <span><strong>Servicio</strong>${p.category}</span>
        </div>
      </section>

      <section class="lnh-proj-cover">
        ${photo(p.cover, p.cover_ratio)}
      </section>

      <section class="lnh-proj-body">
        <aside>
          ${eyebrow("Ficha del proyecto")}
          <ul class="lnh-proj-spec">
            ${p.specs.map(([k,v])=>`<li><dt>${k}</dt><dd>${v}</dd></li>`).join("")}
          </ul>
          ${btn("Proyecto similar →","outline","navigate('/contacto')")}
        </aside>
        <div class="lnh-proj-text">
          ${eyebrow("El proyecto")}
          <h2>El briefing y la primera conversación.</h2>
          ${p.description.map(para=>`<p>${para}</p>`).join("")}
        </div>
      </section>

      <section class="lnh-lookbook">
        ${p.lookbook.map((tone,i)=>`
          <div class="lnh-lb lnh-lb-${i+1}">
            ${photo(tone, lbRatios[i]||"4/3")}
          </div>
        `).join("")}
      </section>

      <section class="lnh-pullquote-section">
        ${eyebrow("Lo que dijo la clienta")}
        <blockquote>"${p.quote}"</blockquote>
        <div class="attr">${p.quote_attr}</div>
      </section>

      ${next ? `
        <section class="lnh-next-proj" onclick="navigate('/portafolio/${next.slug}')">
          <div class="lnh-next-proj-text">
            ${eyebrow("Siguiente proyecto")}
            <h2>${next.title}</h2>
            <span class="lnh-project-meta">${next.category} · ${next.place}</span>
          </div>
          <div class="lnh-next-proj-arrow">→</div>
        </section>
      ` : ""}
    </main>`;
}

function renderBlog() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);
  return `
    <main class="lnh-page">
      <section class="lnh-page-hero">
        ${crumbs([{label:"Inicio",href:"/"},{label:"Blog"}])}
        <div class="lnh-page-hero--split">
          <div>${eyebrow("Diario del estudio")}<h1>Notas, materiales,<br/>casas que <em>me inspiran</em>.</h1></div>
          <p class="lnh-lead">Una carta breve cada cierto tiempo. Lo que aprendo en obras, los talleres que visito, las paletas que pruebo — sin prisa, sin titulares.</p>
        </div>
      </section>

      <div class="lnh-blog">
        <article class="lnh-blog-featured" onclick="navigate('/blog/${featured.slug}')">
          ${photo(featured.tone,"4/3")}
          <div>
            ${eyebrow(`Destacado · ${featured.category}`)}
            <h2>${featured.title}</h2>
            <p>${featured.excerpt}</p>
            <div class="meta"><span>${featured.date}</span><span>·</span><span>${featured.read} de lectura</span></div>
          </div>
        </article>

        <div class="lnh-blog-grid">
          ${rest.map(p=>`
            <article class="lnh-post-card" onclick="navigate('/blog/${p.slug}')">
              ${photo(p.tone,"4/3")}
              <div class="meta"><span>${p.category}</span><span>${p.read}</span></div>
              <h3>${p.title}</h3>
              <p>${p.excerpt}</p>
            </article>
          `).join("")}
        </div>
      </div>

      <section class="lnh-newsletter">
        <div class="lnh-newsletter-inner">
          <div>
            ${eyebrow("Newsletter")}
            <h2>Una carta breve, una vez al mes.</h2>
            <p>Materiales que me gustan, casas que me inspiran, y algún detrás-de-escena.</p>
          </div>
          <form class="lnh-newsletter-form" onsubmit="handleNewsletter(event)">
            <input type="email" placeholder="tu@email.com" required>
            <button type="submit">Suscribirme</button>
          </form>
        </div>
      </section>
    </main>`;
}

function renderPostDetail(slug) {
  const p = POSTS.find(x=>x.slug===slug);
  if (!p) return renderBlog();
  const related = POSTS.filter(x=>x.slug!==slug).slice(0,3);
  const bodyHtml = POST_BODY.map(b => {
    if (b.type==="p") return `<p>${b.t}</p>`;
    if (b.type==="h2") return `<h2>${b.t}</h2>`;
    if (b.type==="h3") return `<h3>${b.t}</h3>`;
    if (b.type==="blockquote") return `<blockquote>${b.t}</blockquote>`;
    if (b.type==="list") return `<ul>${b.items.map(it=>`<li>${it}</li>`).join("")}</ul>`;
    return "";
  }).join("");

  return `
    <main class="lnh-page">
      <article class="lnh-post">
        <header>
          ${crumbs([{label:"Inicio",href:"/"},{label:"Blog",href:"/blog"},{label:p.category}])}
          ${eyebrow(p.category)}
          <h1>${p.title}</h1>
          <div class="meta"><span>${p.date}</span><span>·</span><span>${p.read} de lectura</span></div>
        </header>
      </article>

      <div class="lnh-post-cover">${photo(p.tone,"16/9")}</div>

      <article class="lnh-post">
        <div class="lnh-post-body">
          <p style="font-size:22px;font-family:var(--font-display);font-style:italic;color:var(--fg);margin-bottom:32px;line-height:1.4;">${p.excerpt}</p>
          ${bodyHtml}
        </div>
        <div class="lnh-post-author">
          <div class="avatar"></div>
          <div class="text">
            <strong>Laura</strong>
            <span>Diseñadora de interiores · Valencia</span>
          </div>
        </div>
      </article>

      <section class="lnh-related">
        <div class="lnh-related-inner">
          <div class="lnh-section-head" style="margin-bottom:40px;">
            ${eyebrow("Sigue leyendo")}
            <h2>Otras notas del diario.</h2>
          </div>
          <div class="lnh-related-grid">
            ${related.map(rp=>`
              <article class="lnh-post-card" onclick="navigate('/blog/${rp.slug}')">
                ${photo(rp.tone,"4/3")}
                <div class="meta"><span>${rp.category}</span><span>${rp.read}</span></div>
                <h3>${rp.title}</h3>
              </article>
            `).join("")}
          </div>
        </div>
      </section>

      <section class="lnh-newsletter">
        <div class="lnh-newsletter-inner">
          <div>
            ${eyebrow("Newsletter")}
            <h2>¿Te ha gustado?</h2>
            <p>Recibe la próxima nota directamente en tu correo. Una vez al mes, nada más.</p>
          </div>
          <form class="lnh-newsletter-form" onsubmit="handleNewsletter(event)">
            <input type="email" placeholder="tu@email.com" required>
            <button type="submit">Suscribirme</button>
          </form>
        </div>
      </section>
    </main>`;
}

// ========== CONTACT (with booking calendar) ==========

const MONTHS_ES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const DOW = ["L","M","X","J","V","S","D"];
const SLOTS = ["10:00","11:30","13:00","16:00","17:30","19:00"];

function renderMiniCal() {
  const { calYear: y, calMonth: m, selectedDay } = state;
  const first = new Date(y, m, 1);
  const startDow = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const today = new Date();

  let cells = "";
  for (let i = 0; i < startDow; i++) cells += `<div></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const dt = new Date(y, m, d);
    const isPast = dt < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isWeekend = dt.getDay() === 0 || dt.getDay() === 6;
    const disabled = isPast || isWeekend;
    const isToday = today.getFullYear()===y && today.getMonth()===m && today.getDate()===d;
    const isSel = selectedDay===d;
    const cls = ["lnh-cal-day", disabled?"is-disabled":"", isSel?"is-selected":"", isToday?"is-today":""].filter(Boolean).join(" ");
    cells += disabled
      ? `<button class="${cls}" disabled>${d}</button>`
      : `<button class="${cls}" onclick="selectDay(${d})">${d}</button>`;
  }

  return `
    <div class="lnh-cal">
      <div class="lnh-cal-head">
        <button class="lnh-cal-nav" onclick="calPrev()">‹</button>
        <span>${MONTHS_ES[m]} ${y}</span>
        <button class="lnh-cal-nav" onclick="calNext()">›</button>
      </div>
      <div class="lnh-cal-grid">
        ${DOW.map(d=>`<div class="lnh-cal-dow">${d}</div>`).join("")}
        ${cells}
      </div>
    </div>`;
}

function renderContact() {
  const { contactTab: tab, selectedDay, selectedSlot } = state;
  const fmtDate = selectedDay ? `${selectedDay} de ${MONTHS_ES[state.calMonth].toLowerCase()}` : null;

  const formPanel = `
    <form class="lnh-form" onsubmit="handleContactForm(event)">
      <div class="lnh-form-row">
        <label>Nombre<input type="text" placeholder="Tu nombre" required></label>
        <label>Email<input type="email" placeholder="hola@…" required></label>
      </div>
      <div class="lnh-form-row">
        <label>Teléfono (opcional)<input type="tel" placeholder="+34 …"></label>
        <label>Tipo de proyecto
          <select>
            <option>Decoración de interiores</option>
            <option>Home Staging</option>
            <option>Asesoría</option>
            <option>Aún no lo sé</option>
          </select>
        </label>
      </div>
      <div class="lnh-form-row">
        <label>Ubicación<input type="text" placeholder="Valencia, Mallorca…"></label>
        <label>Superficie aprox.
          <select>
            <option>Hasta 80 m²</option>
            <option>80 – 150 m²</option>
            <option>150 – 250 m²</option>
            <option>Más de 250 m²</option>
          </select>
        </label>
      </div>
      <label>Cuéntame en qué estás
        <textarea rows="5" placeholder="Una vivienda, una habitación, un sueño — empieza por ahí."></textarea>
      </label>
      <label class="lnh-check">
        <input type="checkbox" checked> Acepto la política de privacidad y el aviso legal.
      </label>
      ${btn("Enviar mensaje","primary","","submit")}
    </form>`;

  const bookingPanel = `
    <div class="lnh-booking">
      <div>
        <div class="lnh-booking-step is-active">
          <span class="num">1</span> Elige día
        </div>
        ${renderMiniCal()}
      </div>
      <div>
        <div class="lnh-booking-step${selectedDay?" is-active":""}">
          <span class="num">2</span> Elige hora
        </div>
        <div class="lnh-slots">
          ${SLOTS.map(s=>`
            <button class="lnh-slot${selectedSlot===s?" is-selected":""}"
              ${!selectedDay?"disabled style='opacity:0.4'":""}
              onclick="selectSlot('${s}')">
              ${s}
            </button>
          `).join("")}
        </div>
      </div>
      ${selectedDay && selectedSlot ? `
        <div>
          <div class="lnh-booking-summary">
            <span>Reservas <strong>${fmtDate}</strong> a las <strong>${selectedSlot}</strong> · 30 min · gratis</span>
          </div>
          <div style="display:flex;gap:24px;align-items:center;margin-top:16px;">
            ${btn("Confirmar reserva","primary",`handleBookingConfirm('${fmtDate}','${selectedSlot}')`)}
            ${btn("Cambiar","link","resetBooking()")}
          </div>
        </div>
      ` : ""}
    </div>`;

  return `
    <main class="lnh-page">
      <section class="lnh-page-hero">
        ${crumbs([{label:"Inicio",href:"/"},{label:"Contacto"}])}
        <div class="lnh-page-hero--split">
          <div>
            ${eyebrow("Contacto")}
            <h1>Cuéntame<br/>tu <em>proyecto</em>.</h1>
          </div>
          <p class="lnh-lead">Respondo personalmente. Escríbeme una idea, una foto, un sueño — empezamos por ahí. O reserva una primera conversación de 30 minutos, sin compromiso.</p>
        </div>
      </section>

      <section class="lnh-contact">
        <div>
          <div class="lnh-contact-tabs">
            <button class="lnh-contact-tab${tab==="mensaje"?" is-active":""}" onclick="setContactTab('mensaje')">Enviar un mensaje</button>
            <button class="lnh-contact-tab${tab==="reserva"?" is-active":""}" onclick="setContactTab('reserva')">Reservar primera consulta</button>
          </div>
          ${tab==="mensaje" ? formPanel : bookingPanel}
        </div>
        <aside class="lnh-contact-aside">
          <div>${eyebrow("Estudio")}<p>Valencia, España.<br/>Trabajo a nivel nacional e internacional.</p></div>
          <div>${eyebrow("Email")}<p>hola@lauranaturalhome.com</p></div>
          <div>${eyebrow("Instagram")}<p>@lauranaturalhome</p></div>
          <div>${eyebrow("Tiempos")}<p>Respondo en menos de 48 horas, de lunes a viernes.</p></div>
          <div>${eyebrow("Primera consulta")}<p>30 minutos por videollamada, sin compromiso. Para conocernos y ver si encajamos.</p></div>
        </aside>
      </section>
    </main>`;
}

// ========== APP ROUTER ==========

function renderApp() {
  const parts = parseHash();
  const root = parts[0];
  let content;

  if (!root) {
    content = renderHome();
  } else if (root === "sobre-mi") {
    content = renderAbout();
  } else if (root === "servicios") {
    content = parts[1] ? renderServiceDetail(parts[1]) : renderServicesHub();
  } else if (root === "portafolio") {
    content = parts[1] ? renderProjectDetail(parts[1]) : renderPortfolio();
  } else if (root === "blog") {
    content = parts[1] ? renderPostDetail(parts[1]) : renderBlog();
  } else if (root === "contacto") {
    content = renderContact();
  } else {
    content = renderHome();
  }

  document.getElementById("app").innerHTML = `
    ${renderNav()}
    ${content}
    ${renderFooter()}
  `;

  window.scrollTo(0, 0);
}

// ========== EVENT HANDLERS ==========

window.setFilter = function(cat) {
  state.portfolioFilter = cat;
  renderApp();
};

window.setContactTab = function(tab) {
  state.contactTab = tab;
  renderApp();
};

window.calPrev = function() {
  if (state.calMonth === 0) { state.calYear--; state.calMonth = 11; }
  else { state.calMonth--; }
  rerenderCal();
};

window.calNext = function() {
  if (state.calMonth === 11) { state.calYear++; state.calMonth = 0; }
  else { state.calMonth++; }
  rerenderCal();
};

window.selectDay = function(d) {
  state.selectedDay = d;
  state.selectedSlot = null;
  rerenderCal();
};

window.selectSlot = function(s) {
  state.selectedSlot = s;
  rerenderCal();
};

window.resetBooking = function() {
  state.selectedDay = null;
  state.selectedSlot = null;
  rerenderCal();
};

function rerenderCal() {
  const booking = document.querySelector('.lnh-booking');
  if (booking) {
    const { selectedDay, selectedSlot } = state;
    const fmtDate = selectedDay ? `${selectedDay} de ${MONTHS_ES[state.calMonth].toLowerCase()}` : null;

    // Update calendar
    const calContainer = booking.querySelector('.lnh-cal').parentElement;
    const calStepEl = calContainer.querySelector('.lnh-booking-step');
    calContainer.querySelector('.lnh-cal').outerHTML = renderMiniCal();

    // Update slots
    const slotsContainer = booking.querySelectorAll('.lnh-booking')[0] ||
      booking.querySelector('.lnh-slots');

    // Easiest: re-render the whole booking section
    const contactMain = document.querySelector('.lnh-contact > div');
    if (contactMain) {
      const tabsHtml = contactMain.querySelector('.lnh-contact-tabs').outerHTML;
      state.contactTab = "reserva";
      renderApp();
    }
  }
}

window.handleContactForm = function(e) {
  e.preventDefault();
  showToast("Gracias — te respondo en menos de 48 horas.");
};

window.handleNewsletter = function(e) {
  e.preventDefault();
  showToast("¡Suscrita! Hasta la próxima carta.");
};

window.handleBookingConfirm = function(date, slot) {
  showToast(`Reserva confirmada — ${date} a las ${slot}.`);
  state.selectedDay = null;
  state.selectedSlot = null;
};

function showToast(msg) {
  const existing = document.querySelector('.lnh-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'lnh-toast';
  toast.innerHTML = `<span>✓</span><span>${msg}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

// ========== INIT ==========

document.addEventListener("DOMContentLoaded", () => {
  renderApp();
  window.addEventListener("hashchange", () => {
    // Reset filter and tabs on navigation
    const parts = parseHash();
    if (parts[0] !== "portafolio") state.portfolioFilter = "Todos";
    if (parts[0] !== "contacto") { state.contactTab = "mensaje"; state.selectedDay = null; state.selectedSlot = null; }
    renderApp();
  });
});
