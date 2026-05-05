/* ----- Reusable atoms shared across pages ----- */

function Eyebrow({ children, light }) {
  return <span className={"lnh-eyebrow" + (light ? " lnh-eyebrow--light" : "")}>{children}</span>;
}

function Button({ variant = "primary", size, children, onClick, type = "button" }) {
  const cls = ["lnh-btn", `lnh-btn--${variant}`, size && `lnh-btn--${size}`]
    .filter(Boolean).join(" ");
  return <button type={type} className={cls} onClick={onClick}>{children}</button>;
}

function Divider() {
  return (
    <div className="lnh-divider" aria-hidden>
      <svg viewBox="0 0 240 60" width="200" height="50" fill="none" stroke="currentColor"
           strokeWidth="1.1" strokeLinecap="round">
        <path d="M10 30 C 60 30, 110 30, 230 30"/>
        <ellipse cx="50" cy="22" rx="10" ry="3.5" transform="rotate(-22 50 22)"/>
        <ellipse cx="70" cy="38" rx="10" ry="3.5" transform="rotate(22 70 38)"/>
        <ellipse cx="92" cy="22" rx="11" ry="3.5" transform="rotate(-22 92 22)"/>
        <ellipse cx="114" cy="38" rx="11" ry="3.5" transform="rotate(22 114 38)"/>
        <ellipse cx="138" cy="22" rx="11" ry="3.5" transform="rotate(-22 138 22)"/>
        <ellipse cx="160" cy="38" rx="10" ry="3.5" transform="rotate(22 160 38)"/>
        <ellipse cx="180" cy="22" rx="9" ry="3" transform="rotate(-22 180 22)"/>
      </svg>
    </div>
  );
}

/* Photographic placeholder – warm Mediterranean gradient meant to stand in for real photography. */
function PhotoPlaceholder({ tone = "terracotta", ratio = "4/3", caption, badge, children }) {
  const palettes = {
    terracotta: ["#B07355", "#D8A883", "#EFD0BF"],
    oliva:      ["#7E7E5A", "#B0B698", "#DBD8C4"],
    arena:      ["#A99477", "#CAB89A", "#ECE3D2"],
    tinta:      ["#3A2D22", "#574437", "#8A7A63"],
    cream:      ["#C9B79B", "#E5D9C2", "#F6F0E6"],
  };
  const [a, b, c] = palettes[tone] || palettes.terracotta;
  return (
    <div className="lnh-photo" style={{ aspectRatio: ratio }}>
      <div className="lnh-photo-img" style={{
        background: `linear-gradient(135deg, ${a} 0%, ${b} 55%, ${c} 100%)`
      }} />
      <div className="lnh-photo-grain" />
      {badge && <div className="lnh-photo-badge">{badge}</div>}
      {caption && <div className="lnh-photo-caption">{caption}</div>}
      {children}
    </div>
  );
}

window.LNH_Eyebrow = Eyebrow;
window.LNH_Button = Button;
window.LNH_Divider = Divider;
window.LNH_PhotoPlaceholder = PhotoPlaceholder;
