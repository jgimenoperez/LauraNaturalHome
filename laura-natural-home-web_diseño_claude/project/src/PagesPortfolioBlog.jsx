/* Portafolio index + project detail + Blog index + post detail */

const { LNH_Eyebrow: Eyebrow, LNH_Button: Button, LNH_Divider: Divider, LNH_PhotoPlaceholder: Photo, LNH_Crumbs: Crumbs } = window;
const _navP = window.LNH_navigate;
const { useState: useStateP } = React;

/* PORTAFOLIO INDEX -------------------------------------------------- */
function Portfolio() {
  const [filter, setFilter] = useStateP("Todos");
  const projects = window.LNH_DATA.PROJECTS;
  const cats = ["Todos", "Decoración", "Home Staging", "Asesoría"];
  const counts = cats.reduce((acc, c) => {
    acc[c] = c === "Todos" ? projects.length : projects.filter(p => p.category === c).length;
    return acc;
  }, {});
  const visible = filter === "Todos" ? projects : projects.filter(p => p.category === filter);

  return (
    <main className="lnh-page" data-screen-label="portafolio">
      <section className="lnh-page-hero">
        <Crumbs items={[{label:"Inicio", href:"/"}, {label:"Portafolio"}]} />
        <div className="lnh-page-hero--split">
          <div>
            <Eyebrow>Portafolio</Eyebrow>
            <h1>Algunos proyectos<br/><em>recientes</em>.</h1>
          </div>
          <p className="lnh-lead">
            Una selección de casas que he tenido el privilegio de diseñar — desde reformas
            integrales hasta asesorías a distancia. Cada una con su propia voz.
          </p>
        </div>
      </section>

      <div className="lnh-filters">
        {cats.map((c) => (
          <button key={c}
                  className={"lnh-chip" + (filter === c ? " is-active" : "")}
                  onClick={() => setFilter(c)}>
            {c}<span className="lnh-chip-count">{counts[c]}</span>
          </button>
        ))}
      </div>

      <section className="lnh-portfolio-page">
        {visible.map((p, i) => (
          <a key={p.slug} className={"lnh-project" + (i === 0 ? " lnh-project--lg" : "")} onClick={() => _navP("/portafolio/" + p.slug)}>
            <Photo tone={p.cover} ratio={i === 0 ? "4/5" : "4/3"} />
            <div className="lnh-project-body">
              <Eyebrow>{p.category} · {p.place}</Eyebrow>
              <h3>{p.title}</h3>
              <span className="lnh-project-meta">{p.year}</span>
            </div>
          </a>
        ))}
      </section>

      <section className="lnh-cta-strip">
        <div className="lnh-cta-text">
          <h2>¿Tu casa podría ser la próxima?</h2>
          <p>Cuéntame en qué estás. Respondo personalmente en menos de 48 horas.</p>
        </div>
        <Button onClick={() => _navP("/contacto")}>Cuéntame tu proyecto</Button>
      </section>
    </main>
  );
}

/* PROJECT DETAIL ---------------------------------------------------- */
function ProjectDetail({ slug }) {
  const projects = window.LNH_DATA.PROJECTS;
  const p = projects.find(x => x.slug === slug);
  if (!p) return <Portfolio />;
  const next = projects.find(x => x.slug === p.next);

  return (
    <main className="lnh-page" data-screen-label={"portafolio/" + slug}>
      <section className="lnh-proj-hero">
        <Crumbs items={[{label:"Inicio", href:"/"}, {label:"Portafolio", href:"/portafolio"}, {label: p.title}]} />
        <Eyebrow>{p.category} · {p.year}</Eyebrow>
        <h1 className="lnh-page-title">{p.title}.</h1>
        <p className="lnh-lead" style={{maxWidth: "60ch"}}>{p.summary}</p>
        <div className="lnh-proj-meta-row" style={{marginTop: 32}}>
          <span><strong>Lugar</strong>{p.place}</span>
          <span><strong>Año</strong>{p.year}</span>
          <span><strong>Servicio</strong>{p.category}</span>
        </div>
      </section>

      <section className="lnh-proj-cover">
        <Photo tone={p.cover} ratio={p.cover_ratio} />
      </section>

      <section className="lnh-proj-body">
        <aside>
          <Eyebrow>Ficha del proyecto</Eyebrow>
          <ul className="lnh-proj-spec">
            {p.specs.map(([k,v]) => (
              <li key={k}><dt>{k}</dt><dd>{v}</dd></li>
            ))}
          </ul>
          <Button variant="outline" onClick={() => _navP("/contacto")}>Proyecto similar →</Button>
        </aside>
        <div className="lnh-proj-text">
          <Eyebrow>El proyecto</Eyebrow>
          <h2>El briefing y la primera conversación.</h2>
          {p.description.map((para, i) => <p key={i}>{para}</p>)}
        </div>
      </section>

      <section className="lnh-lookbook">
        {p.lookbook.map((tone, i) => (
          <div key={i} className={"lnh-lb lnh-lb-" + (i+1)}>
            <Photo tone={tone} ratio={i === 4 ? "21/9" : (i % 3 === 0 ? "4/5" : "4/3")} />
          </div>
        ))}
      </section>

      <section className="lnh-pullquote-section">
        <Eyebrow>Lo que dijo la clienta</Eyebrow>
        <blockquote>“{p.quote}”</blockquote>
        <div className="attr">{p.quote_attr}</div>
      </section>

      {next && (
        <section className="lnh-next-proj" onClick={() => _navP("/portafolio/" + next.slug)}>
          <div className="lnh-next-proj-text">
            <Eyebrow>Siguiente proyecto</Eyebrow>
            <h2>{next.title}</h2>
            <span className="lnh-project-meta">{next.category} · {next.place}</span>
          </div>
          <div className="lnh-next-proj-arrow">→</div>
        </section>
      )}
    </main>
  );
}

/* BLOG INDEX -------------------------------------------------------- */
function Blog() {
  const posts = window.LNH_DATA.POSTS;
  const featured = posts[0];
  const rest = posts.slice(1);
  return (
    <main className="lnh-page" data-screen-label="blog">
      <section className="lnh-page-hero">
        <Crumbs items={[{label:"Inicio", href:"/"}, {label:"Blog"}]} />
        <div className="lnh-page-hero--split">
          <div>
            <Eyebrow>Diario del estudio</Eyebrow>
            <h1>Notas, materiales,<br/>casas que <em>me inspiran</em>.</h1>
          </div>
          <p className="lnh-lead">
            Una carta breve cada cierto tiempo. Lo que aprendo en obras, los talleres
            que visito, las paletas que pruebo — sin prisa, sin titulares.
          </p>
        </div>
      </section>

      <div className="lnh-blog">
        <article className="lnh-blog-featured" onClick={() => _navP("/blog/" + featured.slug)}>
          <Photo tone={featured.tone} ratio="4/3" />
          <div>
            <Eyebrow>Destacado · {featured.category}</Eyebrow>
            <h2>{featured.title}</h2>
            <p>{featured.excerpt}</p>
            <div className="meta">
              <span>{featured.date}</span>
              <span>·</span>
              <span>{featured.read} de lectura</span>
            </div>
          </div>
        </article>

        <div className="lnh-blog-grid">
          {rest.map((p) => (
            <article key={p.slug} className="lnh-post-card" onClick={() => _navP("/blog/" + p.slug)}>
              <Photo tone={p.tone} ratio="4/3" />
              <div className="meta"><span>{p.category}</span><span>{p.read}</span></div>
              <h3>{p.title}</h3>
              <p>{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="lnh-newsletter">
        <div className="lnh-newsletter-inner">
          <div>
            <Eyebrow>Newsletter</Eyebrow>
            <h2>Una carta breve, una vez al mes.</h2>
            <p>Materiales que me gustan, casas que me inspiran, y algún detrás-de-escena.</p>
          </div>
          <form className="lnh-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="tu@email.com" />
            <button type="submit">Suscribirme</button>
          </form>
        </div>
      </section>
    </main>
  );
}

/* POST DETAIL ------------------------------------------------------- */
function PostDetail({ slug }) {
  const posts = window.LNH_DATA.POSTS;
  const p = posts.find(x => x.slug === slug);
  if (!p) return <Blog />;
  const body = window.LNH_DATA.POST_BODY.default;
  const related = posts.filter(x => x.slug !== slug).slice(0, 3);

  return (
    <main className="lnh-page" data-screen-label={"blog/" + slug}>
      <article className="lnh-post">
        <header>
          <Crumbs items={[{label:"Inicio", href:"/"}, {label:"Blog", href:"/blog"}, {label: p.category}]} />
          <Eyebrow>{p.category}</Eyebrow>
          <h1>{p.title}</h1>
          <div className="meta">
            <span>{p.date}</span>
            <span>·</span>
            <span>{p.read} de lectura</span>
          </div>
        </header>
      </article>

      <div className="lnh-post-cover">
        <Photo tone={p.tone} ratio="16/9" />
      </div>

      <article className="lnh-post">
        <div className="lnh-post-body">
          <p style={{fontSize: 22, fontFamily: "var(--font-display)", fontStyle:"italic", color:"var(--fg)", marginBottom: 32, lineHeight: 1.4}}>{p.excerpt}</p>
          {body.map((b, i) => {
            if (b.type === "p") return <p key={i}>{b.t}</p>;
            if (b.type === "h2") return <h2 key={i}>{b.t}</h2>;
            if (b.type === "h3") return <h3 key={i}>{b.t}</h3>;
            if (b.type === "blockquote") return <blockquote key={i}>{b.t}</blockquote>;
            if (b.type === "list") return <ul key={i}>{b.items.map((it, j) => <li key={j}>{it}</li>)}</ul>;
            return null;
          })}
        </div>

        <div className="lnh-post-author">
          <div className="avatar"></div>
          <div className="text">
            <strong>Laura</strong>
            <span>Diseñadora de interiores · Valencia</span>
          </div>
        </div>
      </article>

      <section className="lnh-related">
        <div className="lnh-related-inner">
          <div className="lnh-section-head" style={{marginBottom: 40}}>
            <Eyebrow>Sigue leyendo</Eyebrow>
            <h2>Otras notas del diario.</h2>
          </div>
          <div className="lnh-related-grid">
            {related.map((rp) => (
              <article key={rp.slug} className="lnh-post-card" onClick={() => _navP("/blog/" + rp.slug)}>
                <Photo tone={rp.tone} ratio="4/3" />
                <div className="meta"><span>{rp.category}</span><span>{rp.read}</span></div>
                <h3>{rp.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lnh-newsletter">
        <div className="lnh-newsletter-inner">
          <div>
            <Eyebrow>Newsletter</Eyebrow>
            <h2>¿Te ha gustado?</h2>
            <p>Recibe la próxima nota directamente en tu correo. Una vez al mes, nada más.</p>
          </div>
          <form className="lnh-newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="tu@email.com" />
            <button type="submit">Suscribirme</button>
          </form>
        </div>
      </section>
    </main>
  );
}

window.LNH_Portfolio = Portfolio;
window.LNH_ProjectDetail = ProjectDetail;
window.LNH_Blog = Blog;
window.LNH_PostDetail = PostDetail;
