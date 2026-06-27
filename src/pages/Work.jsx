import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Interstitial from '../components/Interstitial';
import CohortMock from '../components/CohortCard';
import PetvetMock from '../components/PetvetCard';
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
                {p.visual === 'cohort' || p.visual === 'petvet' ? (
                  <div className={`work__visual work__visual--${p.visual}`} style={{ '--accent': p.accent }} data-cursor>
                    <span className="work__cat mono">{p.category}</span>
                    {p.visual === 'cohort' ? <CohortMock /> : <PetvetMock />}
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
