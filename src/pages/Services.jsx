import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Interstitial from '../components/Interstitial';
import { Mark } from '../components/Logo';
import { services } from '../data/site';
import './Services.css';

export default function Services() {
  return (
    <>
      <PageHeader
        index="03"
        label="Services"
        title={<>What we<br /><em>do.</em></>}
        intro="Four disciplines, one studio. We design and engineer the whole thing in-house — so nothing gets lost between the brief and the browser."
        meta={[
          { k: 'Disciplines', v: 'Design · Engineering · Brand · Growth' },
          { k: 'Engagements', v: 'Projects & retainers' },
          { k: 'Approach', v: 'In-house, end to end' },
        ]}
      />

      <Interstitial word="In-house." note="// Design and engineering under one roof." />

      <section className="section services">
        <div className="container">
          {services.map((s) => (
            <Reveal key={s.id} className="svc" variant="up">
              <span className="svc__idx mono">{s.index}</span>
              <div className="svc__main">
                <h2 className="svc__title">{s.title}</h2>
                <p className="svc__summary lead">{s.summary}</p>
                <div className="svc__cols">
                  <div className="svc__block">
                    <span className="mono svc__block-head">// what’s included</span>
                    <ul className="svc__points">
                      {s.points.map((p) => (
                        <li key={p}><Mark size={12} /> {p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="svc__block">
                    <span className="mono svc__block-head">// deliverables</span>
                    <div className="svc__tags">
                      {s.deliverables.map((d) => (
                        <span key={d} className="svc__tag mono">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal className="svc__cta">
            <span className="eyebrow">Not sure where to start?</span>
            <h2 className="svc__cta-title">Tell us the problem. We’ll scope the build.</h2>
            <Link to="/contact" className="btn">Start a project <span className="btn__dot" /></Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
