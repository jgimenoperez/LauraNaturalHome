/* Static data for Laura Natural Home — projects + posts. */

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
    specs: [
      ["Tipología", "Casa de pueblo"],
      ["Superficie", "180 m²"],
      ["Año", "2024"],
      ["Servicios", "Decoración integral"],
      ["Duración", "9 meses"],
      ["Fotografía", "Albert M."]
    ],
    quote: "Volvimos a sentir la casa como cuando éramos pequeños — pero ahora con una cocina que funciona.",
    quote_attr: "Cliente · Sagunto",
    lookbook: ["cream", "oliva", "arena", "terracotta", "tinta", "cream", "oliva", "arena"],
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
    specs: [
      ["Tipología", "Espacio comercial"],
      ["Superficie", "65 m²"],
      ["Año", "2023"],
      ["Servicios", "Home Staging"],
      ["Duración", "4 semanas"],
      ["Fotografía", "Estudio propio"]
    ],
    quote: "El espacio cuenta solo. Los clientes entran y se quedan.",
    quote_attr: "Cliente · Ruzafa",
    lookbook: ["oliva", "cream", "arena", "tinta", "terracotta", "oliva", "cream", "arena"],
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
    specs: [
      ["Tipología", "Vivienda alquiler"],
      ["Superficie", "78 m²"],
      ["Año", "2024"],
      ["Servicios", "Home Staging"],
      ["Duración", "8 semanas"],
      ["Fotografía", "Albert M."]
    ],
    quote: "La diferencia es que aquí la gente quiere quedarse.",
    quote_attr: "Propietaria · Patacona",
    lookbook: ["arena", "cream", "oliva", "terracotta", "tinta", "arena", "cream", "oliva"],
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
    specs: [
      ["Tipología", "Casa unifamiliar"],
      ["Superficie", "210 m²"],
      ["Año", "2023"],
      ["Servicios", "Decoración integral"],
      ["Duración", "11 meses"],
      ["Fotografía", "Albert M."]
    ],
    quote: "En verano comemos siempre fuera. La casa lo facilita.",
    quote_attr: "Cliente · L'Eliana",
    lookbook: ["terracotta", "oliva", "cream", "arena", "tinta", "terracotta", "oliva", "cream"],
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
    specs: [
      ["Tipología", "Loft"],
      ["Superficie", "90 m²"],
      ["Año", "2025"],
      ["Servicios", "Decoración"],
      ["Duración", "6 meses"],
      ["Fotografía", "Estudio propio"]
    ],
    quote: "Nunca había vivido tan a gusto en un sólo ambiente.",
    quote_attr: "Cliente · Ruzafa",
    lookbook: ["cream", "tinta", "oliva", "arena", "terracotta", "cream", "tinta", "oliva"],
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
    specs: [
      ["Tipología", "Salón en vivienda"],
      ["Modalidad", "Online"],
      ["Año", "2024"],
      ["Servicios", "Asesoría 1:1"],
      ["Duración", "90 min + email"],
      ["Fotografía", "Cliente"]
    ],
    quote: "Pagué una sesión y avancé seis meses.",
    quote_attr: "Cliente · Mallorca",
    lookbook: ["tinta", "cream", "terracotta", "oliva", "arena", "tinta", "cream", "terracotta"],
    next: "casa-en-un-pueblo"
  }
];

const POSTS = [
  {
    slug: "luz-mediterranea-en-valencia",
    title: "La luz mediterránea, y por qué cambia todo lo que pongas debajo",
    excerpt: "Antes de hablar de paredes, muebles o textiles, hay que hablar de la luz. En Valencia es alta, dorada, larga — y cualquier color cambia con ella.",
    date: "12 marzo 2026",
    read: "6 min",
    category: "Diseño",
    tone: "cream"
  },
  {
    slug: "como-elegir-textiles-naturales",
    title: "Cómo elijo textiles naturales para una casa que se vive todos los días",
    excerpt: "Lino, algodón crudo, lana virgen — y por qué estoy dejando de usar mezclas con sintético, incluso cuando los clientes lo piden.",
    date: "28 febrero 2026",
    read: "8 min",
    category: "Materiales",
    tone: "oliva"
  },
  {
    slug: "home-staging-vs-decoracion",
    title: "Home Staging y decoración no son lo mismo. Te cuento la diferencia.",
    excerpt: "Una pregunta que me hacen cada semana. La respuesta no es técnica — es de intención. Y cambia el presupuesto.",
    date: "14 febrero 2026",
    read: "5 min",
    category: "Servicios",
    tone: "arena"
  },
  {
    slug: "paleta-terracota-y-oliva",
    title: "Terracota y oliva: la paleta que sigue funcionando después de seis años",
    excerpt: "La empecé a usar casi por casualidad. Hoy es la base de la mitad de los proyectos del estudio.",
    date: "31 enero 2026",
    read: "7 min",
    category: "Color",
    tone: "terracotta"
  },
  {
    slug: "ceramica-de-manises",
    title: "Cerámica de Manises: tres talleres que han cambiado mi forma de trabajar",
    excerpt: "Llevo dos años yendo cada mes. Lo que aprendí allí no se enseña en las escuelas de interiorismo.",
    date: "20 enero 2026",
    read: "10 min",
    category: "Oficio",
    tone: "tinta"
  },
  {
    slug: "errores-en-iluminacion",
    title: "Cinco errores comunes en iluminación residencial",
    excerpt: "Y cómo resolverlos sin reformar — porque la luz mala estropea cualquier proyecto, por bonito que sea.",
    date: "8 enero 2026",
    read: "9 min",
    category: "Iluminación",
    tone: "oliva"
  },
  {
    slug: "casa-mediterranea-cuatro-claves",
    title: "Cuatro claves para que una casa se sienta mediterránea (sin ser una postal)",
    excerpt: "No son los azulejos azules ni los cántaros. Son cosas más sutiles, y mucho más importantes.",
    date: "20 diciembre 2025",
    read: "6 min",
    category: "Estilo",
    tone: "cream"
  }
];

const POST_BODY = {
  default: [
    { type: "p", t: "Empecemos por algo que parece obvio pero que la mayoría de proyectos olvida: ningún espacio funciona si la luz no funciona. Y la luz no es solo cuántas lámparas pones, ni siquiera de qué color son los watts." },
    { type: "p", t: "La luz tiene tres dimensiones que conviene separar. La primera es la natural — la que entra por las ventanas y cambia cada hora. La segunda es la general — la que enciendes al llegar a casa para no tropezarte. La tercera, y a la que casi nadie atiende, es la atmosférica: la que se enciende a las nueve de la noche, cuando el día se acaba y empiezas a habitar la casa de verdad." },
    { type: "h2", t: "Tres dimensiones, tres soluciones distintas" },
    { type: "p", t: "Para la luz natural, lo importante no es maximizarla — eso ya lo hace el sol — sino filtrarla. Una cortina de lino crudo, una contraventana de madera, incluso una persiana enrollable bien colocada cambian la temperatura del espacio sin que te des cuenta." },
    { type: "blockquote", t: "La luz buena no se ve. Se siente. Cuando entras en una habitación y respiras hondo sin saber por qué, casi siempre es porque la luz está bien resuelta." },
    { type: "p", t: "Para la luz general te bastan dos puntos por estancia, bien colocados, con una temperatura entre 2700 y 3000 K. Más fríos cansan; más cálidos amarillean los textiles." },
    { type: "h2", t: "El error más común" },
    { type: "p", t: "Concentrar toda la luz en el techo. Es lo que se ve en las viviendas de obra nueva: un downlight cada metro y medio, y al encenderlos todos parece un despacho. No tiene atmósfera." },
    { type: "p", t: "La solución es banal y cara a la vez: lámparas de pie, de mesa, apliques en la pared a 1,80 m de altura. Tres puntos bajos por estancia. Encendidos los tres a la vez se ilumina el espacio sin necesidad de tocar nada en el techo." },
    { type: "h3", t: "Si solo te quedas con una idea" },
    { type: "list", items: [
      "Mide la luz natural antes de elegir el color de las paredes — un crudo cambia mucho según oriente.",
      "Pon dos puntos de luz general por estancia. No uno, no cuatro.",
      "Pon tres puntos de luz baja, distintos, y con regulador.",
      "Y, sobre todo, prueba la luz a las nueve de la noche, no al mediodía.",
    ]},
    { type: "p", t: "La luz buena no necesita ser cara. Necesita estar pensada — y eso, lamentablemente, no se compra hecho." }
  ]
};

window.LNH_DATA = { PROJECTS, POSTS, POST_BODY };
