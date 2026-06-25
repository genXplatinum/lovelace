import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Interstitial from '../components/Interstitial';
import { projects } from '../data/site';
import './Work.css';

export default function Work() {
  return (
    <>
      <PageHeader
        index="02"
        label="Selected work"
        title={<>Work that<br /><em>holds up.</em></>}
        intro="A few recent builds across web, 3D, brand and commerce. Each one designed in-house and engineered to perform long after launch."
        meta={[
          { k: 'Projects', v: 'A selection of recent work' },
          { k: 'Disciplines', v: 'Web · 3D · Brand · Commerce' },
          { k: 'Active since', v: '2024' },
        ]}
      />

      <Interstitial word="Outcomes." align="right" note="// We measure success in performance, not pixels." />

      <section className="section work">
        <div className="container">
          <div className="work__list">
            {projects.map((p, i) => (
              <Reveal
                key={p.id}
                className={`work__row ${i % 2 ? 'work__row--rev' : ''}`}
                variant="up"
              >
                {p.visual === 'cohort' ? (
                  <div className="work__visual work__visual--cohort" style={{ '--accent': p.accent }} data-cursor>
                    <span className="work__cat mono">{p.category}</span>
                    <CohortMock />
                    <span className="work__soon mono">{p.note}</span>
                  </div>
                ) : (
                  <div className="work__visual" style={{ '--accent': p.accent }} data-cursor>
                    <span className="work__num">{p.index}</span>
                    <span className="work__cat mono">{p.category}</span>
                    <span className="work__soon mono">{p.note || 'Case study — on request'}</span>
                  </div>
                )}
                <div className="work__info">
                  <span className="work__idx mono mono--signal">{p.index} / Project</span>
                  <h2 className="work__title">{p.title}</h2>
                  <p className="work__blurb muted">{p.blurb}</p>
                  <div className="work__tags">
                    {p.tags.map((t) => (
                      <span key={t} className="work__tag mono">{t}</span>
                    ))}
                  </div>
                  <span className="work__year mono">{p.category} · {p.year}</span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="work__cta">
            <h2 className="work__cta-title">Your project could be next.</h2>
            <Link to="/contact" className="btn">Start a project <span className="btn__dot" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* Bespoke card visual for the Digithrive CRM — an abstract mini-dashboard
   in the studio's own mono/hairline language (no real client financials). */
function CohortMock() {
  const bars = [40, 56, 46, 68, 60, 82, 100];
  return (
    <div className="cohort" aria-hidden="true">
      <div className="cohort__top">
        <span /><span /><span />
        <em className="mono">digithrive / crm</em>
      </div>
      <div className="cohort__body">
        <div className="cohort__tiles">
          <div className="cohort__tile">
            <span className="cohort__k mono">Collected</span>
            <span className="cohort__meter"><i style={{ width: '72%' }} /></span>
          </div>
          <div className="cohort__tile">
            <span className="cohort__k mono">Dues</span>
            <span className="cohort__meter cohort__meter--ink"><i style={{ width: '28%' }} /></span>
          </div>
        </div>
        <div className="cohort__chart">
          {bars.map((h, i) => (
            <span key={i} className={i === bars.length - 1 ? 'is-accent' : ''} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="cohort__foot mono">
          <span>Reconciled</span>
          <span className="cohort__pill">15 / 20</span>
        </div>
      </div>
    </div>
  );
}
