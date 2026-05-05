/* Router + Chrome — hash-based router for Laura Natural Home */

const { useState, useEffect, useMemo } = React;

/* ---------- Router ---------- */
function parseHash() {
  const h = (window.location.hash || "#/").replace(/^#/, "");
  const parts = h.split("/").filter(Boolean);
  return parts;
}

function useRoute() {
  const [parts, setParts] = useState(parseHash());
  useEffect(() => {
    const on = () => { setParts(parseHash()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return parts;
}

function navigate(path) {
  if (window.location.hash !== "#" + path) {
    window.location.hash = path;
  } else {
    window.scrollTo(0, 0);
  }
}

window.LNH_navigate = navigate;
window.LNH_useRoute = useRoute;

/* ---------- Nav ---------- */
const NAV_LINKS = [
  { id: "/",            label: "Inicio",      match: (p) => p.length === 0 },
  { id: "/sobre-mi",    label: "Sobre mí",    match: (p) => p[0] === "sobre-mi" },
  { id: "/servicios",   label: "Servicios",   match: (p) => p[0] === "servicios" },
  { id: "/portafolio",  label: "Portafolio",  match: (p) => p[0] === "portafolio" },
  { id: "/blog",        label: "Blog",        match: (p) => p[0] === "blog" },
  { id: "/contacto",    label: "Contacto",    match: (p) => p[0] === "contacto" },
];

function Nav({ parts }) {
  return (
    <header className="lnh-nav">
      <a className="lnh-brand" onClick={() => navigate("/")}>
        Laura <em>Natural</em> Home
      </a>
      <nav className="lnh-nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l.id}
             className={"lnh-nav-link" + (l.match(parts) ? " is-active" : "")}
             onClick={() => navigate(l.id)}>
            {l.label}
          </a>
        ))}
      </nav>
      <button className="lnh-btn lnh-btn--primary lnh-btn--sm" onClick={() => navigate("/contacto")}>
        Cuéntame tu proyecto
      </button>
    </header>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="lnh-footer">
      <div className="lnh-footer-inner">
        <div>
          <div className="lnh-footer-brand">Laura Natural Home</div>
          <p className="lnh-footer-tag">
            Diseño de interiores con alma mediterránea. Valencia y a nivel nacional.
          </p>
        </div>
        <div className="lnh-footer-cols">
          <div>
            <div className="lnh-eyebrow lnh-eyebrow--light">Estudio</div>
            <a onClick={() => navigate("/sobre-mi")}>Sobre mí</a>
            <a onClick={() => navigate("/servicios")}>Servicios</a>
            <a onClick={() => navigate("/portafolio")}>Portafolio</a>
            <a onClick={() => navigate("/blog")}>Blog</a>
          </div>
          <div>
            <div className="lnh-eyebrow lnh-eyebrow--light">Contacto</div>
            <a onClick={() => navigate("/contacto")}>hola@lauranaturalhome.com</a>
            <a>Valencia, España</a>
            <a>Instagram · @lauranaturalhome</a>
          </div>
        </div>
      </div>
      <div className="lnh-footer-bottom">
        <span>© 2026 Laura Natural Home · Todos los derechos reservados</span>
        <span>Una carta breve, una vez al mes.</span>
      </div>
    </footer>
  );
}

/* ---------- Crumbs ---------- */
function Crumbs({ items }) {
  return (
    <div className="lnh-crumbs">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          {it.href
            ? <a onClick={() => navigate(it.href)}>{it.label}</a>
            : <span className="current">{it.label}</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

window.LNH_Nav = Nav;
window.LNH_Footer = Footer;
window.LNH_Crumbs = Crumbs;
