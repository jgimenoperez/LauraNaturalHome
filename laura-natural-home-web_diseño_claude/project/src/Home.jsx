/* Home page — Laura Natural Home */

const { LNH_Eyebrow: Eyebrow, LNH_Button: Button, LNH_Divider: Divider, LNH_PhotoPlaceholder: Photo } = window;
const _nav = window.LNH_navigate;

function Home() {
  return (
    <main className="lnh-page lnh-page--home">

      {/* HERO */}
      <section className="lnh-hero">
        <div className="lnh-hero-text">
          <Eyebrow>Estudio de interiorismo · Valencia</Eyebrow>
          <h1 className="lnh-hero-title">
            Diseño de interiores<br/>
            con alma <em>mediterránea</em>.
          </h1>
          <p className="lnh-hero-lead">
            Acompaño cada proyecto desde la primera idea hasta el último detalle, para que tu
            hogar se sienta como tuyo.
          </p>
          <div className="lnh-hero-actions">
            <Button onClick={() => _nav("/contacto")}>Cuéntame tu proyecto</Button>
            <Button variant="link" onClick={() => _nav("/portafolio")}>Ver portafolio</Button>
          </div>
          <div className="lnh-hero-meta">
            <div><strong>+90</strong><span>Proyectos</span></div>
            <div><strong>6 años</strong><span>De estudio</span></div>
            <div><strong>Valencia</strong><span>+ a nivel nacional</span></div>
          </div>
        </div>
        <div className="lnh-hero-image">
          <Photo tone="terracotta" ratio="3/4" />
        </div>
      </section>

      {/* SERVICES TEASER */}
      <section className="lnh-section lnh-section--soft">
        <div className="lnh-section-head">
          <Eyebrow>Servicios</Eyebrow>
          <h2>Tres formas de trabajar juntos.</h2>
        </div>
        <div className="lnh-services">
          {[
            { t: "Decoración de interiores", d: "Proyecto a medida, desde la primera planta hasta la última lámpara. Te acompaño en cada decisión.", n: "01", slug: "decoracion-interiores" },
            { t: "Home Staging",            d: "Preparo tu vivienda para que enamore desde la primera visita. Trabajo con lo que ya tienes.",           n: "02", slug: "home-staging" },
            { t: "Asesorías",               d: "Una sesión enfocada para resolver dudas concretas — color, distribución, materiales.",                  n: "03", slug: "asesorias" },
          ].map((s) => (
            <article key={s.n} className="lnh-service">
              <span className="lnh-service-num">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
              <a className="lnh-link" onClick={() => _nav("/servicios/" + s.slug)}>Ver servicio →</a>
            </article>
          ))}
        </div>
      </section>

      <Divider />

      {/* FEATURED PROJECTS */}
      <section className="lnh-section">
        <div className="lnh-section-head lnh-section-head--row">
          <div>
            <Eyebrow>Proyectos destacados</Eyebrow>
            <h2>Casas pensadas, despacio.</h2>
          </div>
          <Button variant="outline" onClick={() => _nav("/portafolio")}>Ver todos</Button>
        </div>
        <div className="lnh-portfolio-grid">
          <a className="lnh-project lnh-project--lg" onClick={() => _nav("/portafolio/casa-en-un-pueblo")}>
            <Photo tone="cream" ratio="4/5" />
            <div className="lnh-project-body">
              <Eyebrow>Vivienda · Sagunto</Eyebrow>
              <h3>Casa en un pueblo</h3>
              <span className="lnh-project-meta">Reforma integral · 2024</span>
            </div>
          </a>
          <div className="lnh-project-stack">
            <a className="lnh-project" onClick={() => _nav("/portafolio/estudio-fotografico")}>
              <Photo tone="oliva" ratio="4/3" />
              <div className="lnh-project-body">
                <Eyebrow>Home Staging · Ruzafa</Eyebrow>
                <h3>Estudio fotográfico</h3>
              </div>
            </a>
            <a className="lnh-project" onClick={() => _nav("/portafolio/apartamento-patacona")}>
              <Photo tone="arena" ratio="4/3" />
              <div className="lnh-project-body">
                <Eyebrow>Vivienda para alquiler</Eyebrow>
                <h3>Apartamento Patacona</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="lnh-section lnh-section--testimonial">
        <Eyebrow>Lo que dicen las clientas</Eyebrow>
        <blockquote className="lnh-quote">
          “Laura entendió mi casa antes que yo. Cada detalle tiene una razón — y a la vez todo respira.”
        </blockquote>
        <div className="lnh-quote-attr">
          <span className="lnh-quote-line"></span>
          Marta G. · Vivienda en Ruzafa
        </div>
      </section>

      {/* BLOG TEASER */}
      <section className="lnh-section">
        <div className="lnh-section-head lnh-section-head--row">
          <div>
            <Eyebrow>Diario del estudio</Eyebrow>
            <h2>Notas, materiales, casas que me inspiran.</h2>
          </div>
          <Button variant="outline" onClick={() => _nav("/blog")}>Leer el blog</Button>
        </div>
        <div className="lnh-blog-grid">
          {window.LNH_DATA.POSTS.slice(0, 3).map((p) => (
            <article key={p.slug} className="lnh-post-card" onClick={() => _nav("/blog/" + p.slug)}>
              <Photo tone={p.tone} ratio="4/3" />
              <div className="meta"><span>{p.category}</span><span>{p.read}</span></div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="lnh-cta-strip">
        <div className="lnh-cta-text">
          <h2>¿Pensando en empezar un proyecto?</h2>
          <p>Cuéntame en qué estás. Respondo personalmente en menos de 48 horas.</p>
        </div>
        <Button onClick={() => _nav("/contacto")}>Cuéntame tu proyecto</Button>
      </section>
    </main>
  );
}

window.LNH_Home = Home;
