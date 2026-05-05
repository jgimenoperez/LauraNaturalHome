/* Sobre mí + Servicios hub + Servicio detail + Contacto */

const { LNH_Eyebrow: Eyebrow, LNH_Button: Button, LNH_Divider: Divider, LNH_PhotoPlaceholder: Photo, LNH_Crumbs: Crumbs } = window;
const _navS = window.LNH_navigate;

/* SOBRE MÍ ---------------------------------------------------------- */
function About() {
  return (
    <main className="lnh-page" data-screen-label="sobre-mi">
      <section className="lnh-section lnh-section--narrow">
        <Crumbs items={[{label:"Inicio", href:"/"}, {label:"Sobre mí"}]} />
        <Eyebrow>Sobre mí</Eyebrow>
        <h1 className="lnh-page-title">Me llamo Laura.<br/>Diseño hogares <em>vividos despacio</em>.</h1>
      </section>
      <section className="lnh-about">
        <div className="lnh-about-image">
          <Photo tone="cream" ratio="3/4" />
        </div>
        <div className="lnh-about-text">
          <p className="lnh-lead">
            Llevo seis años diseñando casas en Valencia — y, cada vez más, fuera de ella. Creo en
            los espacios que se viven despacio, en los materiales nobles, en la luz natural.
          </p>
          <p>
            Empecé este estudio porque sentía que muchos hogares se decoraban sin escuchar a quien
            iba a vivirlos. Mi forma de trabajar es, ante todo, una conversación. Te acompaño desde
            la primera idea hasta el último detalle, paso a paso, sin prisa por entregar.
          </p>
          <p>
            He completado más de noventa proyectos — viviendas familiares, apartamentos para
            alquilar, locales pequeños, asesorías a distancia. Cada uno con su propia voz.
          </p>
          <h3>Mi forma de trabajar</h3>
          <ul className="lnh-values">
            <li><strong>Cercanía.</strong> Atiendo cada proyecto en persona, de principio a fin.</li>
            <li><strong>Detalle.</strong> Lo importante está en lo pequeño — el tirador, la junta, el textil.</li>
            <li><strong>Calidad.</strong> Trabajo con artesanos y materiales que duran.</li>
            <li><strong>Pausa.</strong> Las decisiones buenas necesitan tiempo. No tengo prisa por entregar.</li>
          </ul>
          <Button onClick={() => _navS("/contacto")}>Cuéntame tu proyecto</Button>
        </div>
      </section>
      <Divider />
      <section className="lnh-section lnh-section--testimonial">
        <Eyebrow>Estudio</Eyebrow>
        <blockquote className="lnh-quote">
          “Diseñar una casa es escuchar primero. Lo demás llega después.”
        </blockquote>
        <div className="lnh-quote-attr">
          <span className="lnh-quote-line"></span>
          Laura · fundadora
        </div>
      </section>
    </main>
  );
}

/* SERVICIOS HUB ----------------------------------------------------- */
const SERVICES_DATA = [
  { slug: "decoracion-interiores", num: "01", title: "Decoración de interiores",
    summary: "Proyecto integral, desde el primer plano hasta el último textil. Diseñamos tu casa juntos, paso a paso.",
    price: "Desde 2.400 €", tone: "terracotta",
    duration: "3 a 12 meses",
    modality: "Presencial · Valencia y nacional",
    ideal: "Vivienda completa o reforma" },
  { slug: "home-staging", num: "02", title: "Home Staging",
    summary: "Preparo tu vivienda para que enamore desde la primera visita. Trabajo con lo que ya tienes y añado lo justo.",
    price: "Desde 850 €", tone: "oliva",
    duration: "2 a 6 semanas",
    modality: "Presencial · Valencia",
    ideal: "Venta o alquiler" },
  { slug: "asesorias", num: "03", title: "Asesorías",
    summary: "Una sesión enfocada para resolver dudas concretas — color, distribución, materiales o una pieza clave.",
    price: "Desde 180 €", tone: "arena",
    duration: "90 min + email",
    modality: "Online o presencial",
    ideal: "Ya tienes claras las decisiones" },
];

function ServicesHub() {
  return (
    <main className="lnh-page" data-screen-label="servicios">
      <section className="lnh-page-hero">
        <Crumbs items={[{label:"Inicio", href:"/"}, {label:"Servicios"}]} />
        <div className="lnh-page-hero--split">
          <div>
            <Eyebrow>Servicios</Eyebrow>
            <h1>Tres formas de<br/>trabajar <em>juntos</em>.</h1>
          </div>
          <p className="lnh-lead">
            Cada proyecto es distinto. Estas son las tres puertas de entrada — desde aquí
            adaptamos el alcance a lo que tu casa necesita.
          </p>
        </div>
      </section>

      <section className="lnh-services-hub">
        {SERVICES_DATA.map((s) => (
          <article key={s.slug} className="lnh-service-card" onClick={() => _navS("/servicios/" + s.slug)}>
            <Photo tone={s.tone} ratio="4/3" />
            <div className="lnh-service-card-body">
              <span className="lnh-service-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.summary}</p>
              <div className="lnh-service-card-foot">
                <span className="price">{s.price}</span>
                <span className="arrow">Ver servicio →</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="lnh-compare">
        <div className="lnh-compare-inner">
          <div>
            <Eyebrow>Comparativa</Eyebrow>
            <h2>¿Cuál es para ti?</h2>
            <p>Una mirada rápida a las tres modalidades, lado a lado. Si dudas, escríbeme — te ayudo a elegir sin compromiso.</p>
          </div>
          <table className="lnh-compare-table">
            <thead>
              <tr>
                <th></th>
                <th>Decoración</th>
                <th>Home Staging</th>
                <th>Asesoría</th>
              </tr>
            </thead>
            <tbody>
              <tr><th>Duración</th><td>3 – 12 meses</td><td>2 – 6 semanas</td><td>90 min</td></tr>
              <tr><th>Modalidad</th><td>Presencial</td><td>Presencial</td><td>Online o presencial</td></tr>
              <tr><th>Acompañamiento</th><td>Integral</td><td>Puntual</td><td>1 sesión</td></tr>
              <tr><th>Renders 3D</th><td><span className="lnh-compare-dot">●</span> Incluidos</td><td>—</td><td>—</td></tr>
              <tr><th>Compra y obra</th><td><span className="lnh-compare-dot">●</span> Acompaño</td><td>—</td><td>—</td></tr>
              <tr><th>Inversión</th><td>Desde 2.400 €</td><td>Desde 850 €</td><td>Desde 180 €</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

/* SERVICIO DETAIL --------------------------------------------------- */
const SERVICE_DETAIL = {
  "decoracion-interiores": {
    eyebrow: "Servicio principal",
    title: "Decoración de interiores",
    lead: "Un proyecto integral, desde el primer plano hasta el último textil. Diseñamos tu casa contigo, paso a paso, con propuestas de distribución, materiales, mobiliario y todo lo necesario para vivirla.",
    tone: "terracotta",
    duration: "3 – 12 meses",
    modality: "Presencial · Valencia + nacional",
    from: "Desde 2.400 €",
    process: [
      { t: "Conversación inicial", d: "Una sesión sin compromiso para escuchar tu proyecto. Te explico cómo trabajo." },
      { t: "Levantamiento y plano", d: "Mido la casa, fotografío, dibujo el estado actual y propongo distribución." },
      { t: "Moodboard y 3D", d: "Dirección de estilo, materiales, paleta y render 3D de los espacios clave." },
      { t: "Compra y obra", d: "Acompaño en cada decisión. Coordino con artesanos y proveedores hasta el último día." },
    ],
    includes_left: ["Visita técnica y levantamiento", "Plano de distribución", "Moodboard de dirección de estilo", "Paleta de color y materiales", "Selección de mobiliario y textil"],
    includes_right: ["Render 3D de espacios clave", "Listado de proveedores", "Acompañamiento en compras", "Visitas de obra (Valencia)", "Estilismo final y entrega"],
    not_included: "Honorarios de obra civil y costes de mobiliario.",
    faqs: [
      ["¿Trabajas también fuera de Valencia?", "Sí. Tengo proyectos activos en Mallorca, Madrid y Andalucía. Para fuera de la provincia ajustamos las visitas presenciales y trabajamos online entre ellas."],
      ["¿Qué pasa si ya tengo arquitecto?", "Encantada. Coordino con el equipo técnico y me ocupo de la capa de interiorismo, materiales y mobiliario. Es lo habitual en obra nueva."],
      ["¿Cuánto cuesta un proyecto entero?", "Depende de la superficie y del alcance, pero el rango habitual está entre 2.400 € y 12.000 € de honorarios. La inversión en mobiliario y obra es aparte."],
      ["¿Cuándo cobras?", "Hago dos pagos: el primero al firmar el encargo, el segundo a la entrega de planos y moodboard final."],
    ]
  },
  "home-staging": {
    eyebrow: "Servicio Home Staging",
    title: "Home Staging",
    lead: "Preparo tu vivienda para que enamore desde la primera visita. Trabajo con lo que ya tienes, añado lo justo, y cuento la historia que tu casa merece — para vender o alquilar antes y mejor.",
    tone: "oliva",
    duration: "2 – 6 semanas",
    modality: "Presencial · Valencia",
    from: "Desde 850 €",
    process: [
      { t: "Diagnóstico in situ", d: "Visito la vivienda, identifico fortalezas y trabas, propongo un plan de mejoras." },
      { t: "Plan de bajo coste", d: "Lista priorizada de cambios — pintura, mobiliario, textil, iluminación. Sin obra." },
      { t: "Ejecución", d: "Coordino la pintura y compras puntuales. Estilismo y montaje del espacio." },
      { t: "Reportaje", d: "Sesión de fotos profesional incluida, lista para portales y redes." },
    ],
    includes_left: ["Diagnóstico inicial in situ", "Plan de mejoras priorizado", "Coordinación con pintor", "Compras puntuales (textil, plantas, accesorios)"],
    includes_right: ["Estilismo y montaje", "Reportaje fotográfico profesional", "Asistencia para portales inmobiliarios", "Plan de mantenimiento durante visitas"],
    not_included: "Reformas estructurales o cambios de pavimento.",
    faqs: [
      ["¿Para qué tipo de viviendas funciona mejor?", "Para viviendas de hasta 150 m², en Valencia capital y alrededores. He trabajado tanto pisos pequeños para alquiler como casas familiares para venta."],
      ["¿Necesito vaciar la casa antes?", "No siempre. En muchos casos trabajamos con tu mobiliario actual. Si hay piezas que no funcionan, las retiramos a guardamuebles."],
      ["¿Cuánto se vende mejor con Home Staging?", "Mi media histórica: -42% de tiempo en mercado. La inversión se recupera siempre."],
      ["¿Incluye fotografía?", "Sí. El reportaje profesional está dentro de la tarifa."],
    ]
  },
  "asesorias": {
    eyebrow: "Asesorías online o presencial",
    title: "Asesorías",
    lead: "Una sesión enfocada para resolver dudas concretas: paleta de color, distribución, materiales, una pieza clave. Ideal si quieres avanzar tú con criterio — sin contratar un proyecto entero.",
    tone: "arena",
    duration: "90 min · sesión 1:1",
    modality: "Online · o presencial en Valencia",
    from: "Desde 180 €",
    process: [
      { t: "Briefing previo", d: "Cuestionario corto + fotos y planos. Llego preparada a la sesión." },
      { t: "Sesión 1:1", d: "90 minutos por videollamada o en tu casa. Resolvemos lo que necesites." },
      { t: "Resumen escrito", d: "En 48h te envío un PDF con recomendaciones, paleta, proveedores y referencias." },
      { t: "Email de seguimiento", d: "Una ronda de dudas por email durante el mes siguiente." },
    ],
    includes_left: ["Cuestionario y revisión previa", "Sesión 1:1 de 90 minutos", "Recomendaciones por escrito (PDF)"],
    includes_right: ["Lista de proveedores y artesanos", "Paleta de color (si aplica)", "Una ronda de email de seguimiento"],
    not_included: "Renders 3D, planos y acompañamiento en obra.",
    faqs: [
      ["¿Y si necesito más después?", "Lo habitual. Puedes ampliar a un proyecto integral y descontamos la asesoría del presupuesto."],
      ["¿Sirve para una sola habitación?", "Es justo para lo que mejor funciona. Pintura, sofá, dormitorio infantil, distribución de un salón."],
      ["¿Funciona si vivo fuera de España?", "Sí. La mitad de las asesorías son a distancia."],
      ["¿Cuándo recibo el resumen?", "En 48 horas hábiles tras la sesión."],
    ]
  },
};

function ServiceDetail({ slug }) {
  const s = SERVICE_DETAIL[slug];
  if (!s) return <ServicesHub />;
  return (
    <main className="lnh-page" data-screen-label={"servicios/" + slug}>
      <div className="lnh-svc-detail">
        <section style={{ paddingTop: "32px" }}>
          <Crumbs items={[{label:"Inicio", href:"/"}, {label:"Servicios", href:"/servicios"}, {label: s.title}]} />
        </section>
        <section className="lnh-svc-detail-hero">
          <div>
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h1>{s.title}</h1>
            <p className="lnh-lead">{s.lead}</p>
            <div className="lnh-hero-actions" style={{ marginTop: 32, marginBottom: 0 }}>
              <Button onClick={() => _navS("/contacto")}>Solicitar información</Button>
              <Button variant="link" onClick={() => _navS("/portafolio")}>Ver proyectos</Button>
            </div>
            <div className="lnh-svc-meta">
              <div><span>Duración</span><strong>{s.duration}</strong></div>
              <div><span>Modalidad</span><strong>{s.modality}</strong></div>
              <div><span>Inversión</span><strong>{s.from}</strong></div>
            </div>
          </div>
          <Photo tone={s.tone} ratio="4/5" />
        </section>

        <section className="lnh-process">
          <div className="lnh-process-head">
            <Eyebrow>Proceso</Eyebrow>
            <h2>Cuatro fases, sin prisa.</h2>
          </div>
          <div className="lnh-process-list">
            {s.process.map((p, i) => (
              <div key={i} className="lnh-process-step">
                <span className="num">{String(i+1).padStart(2,"0")}</span>
                <h4>{p.t}</h4>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="lnh-includes">
          <div className="lnh-includes-col">
            <Eyebrow>Qué incluye</Eyebrow>
            <h3>Todo esto está dentro.</h3>
            <ul className="lnh-features">
              {s.includes_left.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <div className="lnh-includes-col">
            <Eyebrow>Y también</Eyebrow>
            <h3>Pequeños detalles que cambian el proyecto.</h3>
            <ul className="lnh-features">
              {s.includes_right.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </section>

        <section className="lnh-pricing">
          <div className="lnh-pricing-head">
            <Eyebrow>Inversión</Eyebrow>
            <h3>Tarifas transparentes.</h3>
            <p className="lnh-pricing-note">No hay sorpresas — la tarifa se calcula al inicio y se respeta hasta el final.</p>
          </div>
          <div>
            <div className="lnh-pricing-amount"><em>desde</em> {s.from.replace("Desde ","")}<sup> · iva inc.</sup></div>
            <p className="lnh-pricing-note">No incluye: {s.not_included}</p>
            <Button onClick={() => _navS("/contacto")}>Solicitar presupuesto</Button>
          </div>
        </section>

        <section className="lnh-faq">
          <div className="lnh-section-head">
            <Eyebrow>Dudas frecuentes</Eyebrow>
            <h2>Preguntas que me hacen a menudo.</h2>
          </div>
          <div className="lnh-faq-list">
            {s.faqs.map(([q,a], i) => (
              <details key={i} className="lnh-faq-item" open={i===0}>
                <summary>{q}<span className="toggle"></span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <section className="lnh-cta-strip">
        <div className="lnh-cta-text">
          <h2>¿Empezamos?</h2>
          <p>Una primera conversación, sin compromiso, para ver si encajamos.</p>
        </div>
        <Button onClick={() => _navS("/contacto")}>Cuéntame tu proyecto</Button>
      </section>
    </main>
  );
}

window.LNH_About = About;
window.LNH_ServicesHub = ServicesHub;
window.LNH_ServiceDetail = ServiceDetail;
