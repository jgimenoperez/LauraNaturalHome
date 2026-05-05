/* Contacto — form + reserva consulta tabs */

const { LNH_Eyebrow: EyebrowC, LNH_Button: ButtonC, LNH_Crumbs: CrumbsC } = window;
const _navC = window.LNH_navigate;
const { useState: useStateC } = React;

const MONTHS = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const DOW = ["L","M","X","J","V","S","D"];
const SLOTS = ["10:00","11:30","13:00","16:00","17:30","19:00"];

function MiniCal({ year, month, selected, onSelect, onPrev, onNext }) {
  const first = new Date(year, month, 1);
  const startDow = (first.getDay() + 6) % 7; // monday-first
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  const isPast = (d) => {
    const dt = new Date(year, month, d);
    return dt < new Date(today.getFullYear(), today.getMonth(), today.getDate());
  };
  const isWeekend = (d) => {
    const dt = new Date(year, month, d).getDay();
    return dt === 0 || dt === 6;
  };
  const cells = [];
  for (let i = 0; i < startDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="lnh-cal">
      <div className="lnh-cal-head">
        <button className="lnh-cal-nav" onClick={onPrev} aria-label="anterior">‹</button>
        <span>{MONTHS[month]} {year}</span>
        <button className="lnh-cal-nav" onClick={onNext} aria-label="siguiente">›</button>
      </div>
      <div className="lnh-cal-grid">
        {DOW.map(d => <div key={d} className="lnh-cal-dow">{d}</div>)}
        {cells.map((d, i) => {
          if (d === null) return <div key={"e"+i}></div>;
          const disabled = isPast(d) || isWeekend(d);
          const isToday = today.getFullYear()===year && today.getMonth()===month && today.getDate()===d;
          const isSel = selected === d;
          return (
            <button key={d}
                    disabled={disabled}
                    className={"lnh-cal-day" + (disabled?" is-disabled":"") + (isSel?" is-selected":"") + (isToday?" is-today":"")}
                    onClick={() => !disabled && onSelect(d)}>
              {d}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FormPanel({ onSent }) {
  return (
    <form className="lnh-form" onSubmit={(e) => { e.preventDefault(); onSent("Gracias — te respondo en menos de 48 horas."); }}>
      <div className="lnh-form-row">
        <label>Nombre<input type="text" placeholder="Tu nombre" required /></label>
        <label>Email<input type="email" placeholder="hola@…" required /></label>
      </div>
      <div className="lnh-form-row">
        <label>Teléfono (opcional)<input type="tel" placeholder="+34 …" /></label>
        <label>Tipo de proyecto
          <select defaultValue="Decoración de interiores">
            <option>Decoración de interiores</option>
            <option>Home Staging</option>
            <option>Asesoría</option>
            <option>Aún no lo sé</option>
          </select>
        </label>
      </div>
      <div className="lnh-form-row">
        <label>Ubicación<input type="text" placeholder="Valencia, Mallorca…" /></label>
        <label>Superficie aprox.
          <select defaultValue="Hasta 80 m²">
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
      <label className="lnh-check">
        <input type="checkbox" defaultChecked /> Acepto la política de privacidad y el aviso legal.
      </label>
      <ButtonC type="submit">Enviar mensaje</ButtonC>
    </form>
  );
}

function BookingPanel({ onSent }) {
  const today = new Date();
  const [view, setView] = useStateC({ y: today.getFullYear(), m: today.getMonth() });
  const [day, setDay] = useStateC(null);
  const [slot, setSlot] = useStateC(null);
  const [step, setStep] = useStateC(1);

  const prev = () => setView(v => v.m === 0 ? { y: v.y-1, m: 11 } : { y: v.y, m: v.m-1 });
  const next = () => setView(v => v.m === 11 ? { y: v.y+1, m: 0 } : { y: v.y, m: v.m+1 });

  const fmtDate = day ? `${day} de ${MONTHS[view.m].toLowerCase()}` : null;

  return (
    <div className="lnh-booking">
      <div>
        <div className="lnh-booking-step is-active">
          <span className="num">1</span> Elige día
        </div>
        <MiniCal year={view.y} month={view.m} selected={day}
                 onSelect={(d) => { setDay(d); setStep(2); }}
                 onPrev={prev} onNext={next} />
      </div>

      <div>
        <div className={"lnh-booking-step" + (step >= 2 ? " is-active" : "")}>
          <span className="num">2</span> Elige hora
        </div>
        <div className="lnh-slots">
          {SLOTS.map((s) => (
            <button key={s}
                    className={"lnh-slot" + (slot === s ? " is-selected" : "")}
                    disabled={!day}
                    style={{opacity: day ? 1 : 0.4}}
                    onClick={() => { setSlot(s); setStep(3); }}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {day && slot && (
        <div>
          <div className="lnh-booking-summary">
            <span>Reservas <strong>{fmtDate}</strong> a las <strong>{slot}</strong> · 30 min · gratis</span>
          </div>
          <div style={{display:"flex", gap:24, alignItems:"center", marginTop: 16}}>
            <ButtonC onClick={() => onSent(`Reserva confirmada — ${fmtDate} a las ${slot}.`)}>Confirmar reserva</ButtonC>
            <ButtonC variant="link" onClick={() => { setDay(null); setSlot(null); setStep(1); }}>Cambiar</ButtonC>
          </div>
        </div>
      )}
    </div>
  );
}

function Contact() {
  const [tab, setTab] = useStateC("mensaje");
  const [toast, setToast] = useStateC(null);
  const sent = (msg) => { setToast(msg); setTimeout(() => setToast(null), 4000); };

  return (
    <main className="lnh-page" data-screen-label="contacto">
      <section className="lnh-page-hero">
        <CrumbsC items={[{label:"Inicio", href:"/"}, {label:"Contacto"}]} />
        <div className="lnh-page-hero--split">
          <div>
            <EyebrowC>Contacto</EyebrowC>
            <h1>Cuéntame<br/>tu <em>proyecto</em>.</h1>
          </div>
          <p className="lnh-lead">
            Respondo personalmente. Escríbeme una idea, una foto, un sueño — empezamos por ahí.
            O reserva una primera conversación de 30 minutos, sin compromiso.
          </p>
        </div>
      </section>

      <section className="lnh-contact">
        <div>
          <div className="lnh-contact-tabs">
            <button className={"lnh-contact-tab" + (tab === "mensaje" ? " is-active" : "")} onClick={() => setTab("mensaje")}>
              Enviar un mensaje
            </button>
            <button className={"lnh-contact-tab" + (tab === "reserva" ? " is-active" : "")} onClick={() => setTab("reserva")}>
              Reservar primera consulta
            </button>
          </div>
          {tab === "mensaje" ? <FormPanel onSent={sent} /> : <BookingPanel onSent={sent} />}
        </div>

        <aside className="lnh-contact-aside">
          <div>
            <EyebrowC>Estudio</EyebrowC>
            <p>Valencia, España.<br/>Trabajo a nivel nacional e internacional.</p>
          </div>
          <div>
            <EyebrowC>Email</EyebrowC>
            <p>hola@lauranaturalhome.com</p>
          </div>
          <div>
            <EyebrowC>Instagram</EyebrowC>
            <p>@lauranaturalhome</p>
          </div>
          <div>
            <EyebrowC>Tiempos</EyebrowC>
            <p>Respondo en menos de 48 horas, de lunes a viernes.</p>
          </div>
          <div>
            <EyebrowC>Primera consulta</EyebrowC>
            <p>30 minutos por videollamada, sin compromiso. Para conocernos y ver si encajamos.</p>
          </div>
        </aside>
      </section>

      {toast && (
        <div className="lnh-toast">
          <span>✓</span>
          <span>{toast}</span>
        </div>
      )}
    </main>
  );
}

window.LNH_Contact = Contact;
