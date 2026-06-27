import './PetvetCard.css';

/* Mini landing-page mock for the Petvet Care showcase card: a cheerful
   sky-and-courtyard hero with a marigold garland, sun, headline, WhatsApp
   button and the low-poly animals on the grass. Reused on Home + Work. */

function Cow() {
  return (
    <svg className="pv__svg" viewBox="0 0 50 38" width="30" height="23" aria-hidden="true">
      <rect x="13" y="24" width="3.5" height="11" rx="1.6" fill="#E9D8B5" />
      <rect x="25" y="24" width="3.5" height="11" rx="1.6" fill="#E9D8B5" />
      <ellipse cx="21" cy="22" rx="15" ry="10" fill="#FBF5EA" />
      <ellipse cx="15" cy="20" rx="5" ry="4" fill="#6B4A2B" />
      <path d="M34 10 l-2 -5 4 3 z" fill="#E9D8B5" />
      <path d="M42 10 l2 -5 -4 3 z" fill="#E9D8B5" />
      <circle cx="38" cy="17" r="8" fill="#FBF5EA" />
      <ellipse cx="31" cy="16" rx="3" ry="2" fill="#FBF5EA" />
      <ellipse cx="43" cy="20" rx="4" ry="3" fill="#F3B6BF" />
      <circle cx="39" cy="15" r="1.3" fill="#2E2418" />
    </svg>
  );
}

function Dog() {
  return (
    <svg className="pv__svg" viewBox="0 0 44 38" width="24" height="21" aria-hidden="true">
      <ellipse cx="22" cy="27" rx="12" ry="10" fill="#D89A52" />
      <circle cx="22" cy="13" r="9" fill="#D89A52" />
      <ellipse cx="13" cy="11" rx="3" ry="6" fill="#B97A38" />
      <ellipse cx="31" cy="11" rx="3" ry="6" fill="#B97A38" />
      <ellipse cx="22" cy="16" rx="4" ry="3" fill="#F0DFC4" />
      <circle cx="22" cy="15" r="1.5" fill="#3A2B22" />
      <circle cx="18" cy="11" r="1.2" fill="#2E2418" />
      <circle cx="26" cy="11" r="1.2" fill="#2E2418" />
    </svg>
  );
}

function Bird() {
  return (
    <svg className="pv__svg" viewBox="0 0 32 28" width="16" height="14" aria-hidden="true">
      <path d="M8 14 q-7 2 -2 8 q5 -1 7 -5 z" fill="#1F7FD6" />
      <ellipse cx="15" cy="16" rx="10" ry="9" fill="#3FA7FF" />
      <circle cx="22" cy="11" r="5" fill="#3FA7FF" />
      <path d="M26 11 l6 1 -6 2 z" fill="#FF8A00" />
      <circle cx="22" cy="10" r="1.2" fill="#2E2418" />
    </svg>
  );
}

export default function PetvetMock() {
  const garland = Array.from({ length: 13 });
  return (
    <div className="pv" aria-hidden="true">
      <div className="pv__top">
        <span /><span /><span />
        <em className="mono">petvet care / home</em>
      </div>

      <div className="pv__stage">
        <div className="pv__garland">
          {garland.map((_, i) => <i key={i} style={{ '--i': i }} />)}
        </div>

        <span className="pv__sun" />

        <div className="pv__copy">
          <span className="pv__line pv__line--lg" />
          <span className="pv__line" />
          <span className="pv__cta">WhatsApp</span>
        </div>

        <div className="pv__ground">
          <Cow />
          <Dog />
          <span className="pv__bird"><Bird /></span>
        </div>
      </div>

      <div className="pv__foot mono">
        <span>Home visit · Darbhanga</span>
        <span className="pv__pill">Book ↗</span>
      </div>
    </div>
  );
}
