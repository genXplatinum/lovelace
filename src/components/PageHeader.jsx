import Reveal from './Reveal';
import './PageHeader.css';

export default function PageHeader({ index, label, title, intro, meta }) {
  return (
    <header className="ph">
      <div className="container">
        <div className="ph__top">
          <span className="eyebrow">{label}</span>
          <span className="mono">{index} / 04</span>
        </div>
        <Reveal as="h1" variant="up" className="ph__title">{title}</Reveal>
        {intro && <Reveal as="p" className="ph__intro lead" delay={120}>{intro}</Reveal>}
        {meta && (
          <Reveal as="dl" className="ph__meta" delay={200}>
            {meta.map((m) => (
              <div key={m.k}>
                <dt className="mono">{m.k}</dt>
                <dd>{m.v}</dd>
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </header>
  );
}
