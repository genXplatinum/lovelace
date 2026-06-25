import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import Avatar from '../components/Avatar';
import Interstitial from '../components/Interstitial';
import CohortMock from '../components/CohortCard';
import { Mark } from '../components/Logo';
import {
  site,
  services,
  projects,
  process,
  stats,
  founder,
  capabilities,
} from '../data/site';
import './Home.css';

function SectionHead({ index, label, title }) {
  return (
    <div className="section-mark">
      <span className="mono">
        <span className="mono--signal">{index}</span> &nbsp;/&nbsp; {label}
      </span>
      <span className="mono">{site.short}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__top">
            <span className="mono">{site.name} — {site.tagline}</span>
            <span className="mono hide-sm">{site.locations.join('  ·  ')}</span>
          </div>

          <h1 className="hero__title">
            <span className="line"><span>Design,</span></span>
            <span className="line"><span className="hero__title-alt"><em>engineered.</em></span></span>
          </h1>

          <div className="hero__foot">
            <p className="hero__lead">
              Beautiful on the surface, engineered underneath. {site.short} is a design studio led
              by a top-100 ethical hacker — we build websites, brands and 3D experiences that are
              as resilient as they are beautiful.
            </p>
            <div className="hero__cta">
              <Link to="/contact" className="btn">
                Start a project <span className="btn__dot" />
              </Link>
              <Link to="/work" className="link">
                See the work <span className="link__arrow">↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hero__scroll mono">
          <span>Scroll to explore</span>
          <span className="hero__scroll-arrow">↓</span>
        </div>
      </section>

      {/* Everything below scrolls over the fixed canvas */}
      <div className="home__body">
        {/* ---------------- MARQUEE ---------------- */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...capabilities, ...capabilities].map((c, i) => (
              <span className="marquee__item" key={i}>
                {c}
                <span className="marquee__sep" />
              </span>
            ))}
          </div>
        </div>

        {/* ---------------- MANIFESTO ---------------- */}
        <section className="section manifesto">
          <div className="container">
            <Reveal as="p" variant="up" className="manifesto__text">
              We’re a design studio with a security team’s instincts. Every site is
              <span className="manifesto__hl"> drawn by hand</span>, built to perform, and
              <span className="manifesto__hl"> hardened before it ships</span> — so it looks
              effortless and refuses to break.
            </Reveal>
            <div className="manifesto__meta">
              <Reveal className="mono" delay={120}>// est. {site.est} · {site.locations.join(' · ')}</Reveal>
              <Reveal delay={200}>
                <Link to="/about" className="link">The studio story <span className="link__arrow">↗</span></Link>
              </Reveal>
            </div>
          </div>
        </section>

        <Interstitial word="Precision." note="// Every detail measured before anything ships." />

        {/* ---------------- SERVICES ---------------- */}
        <section className="section services-preview">
          <div className="container">
            <SectionHead index="01" label="Capabilities" />
            <div className="sp__list">
              {services.map((s, i) => (
                <Reveal key={s.id} delay={i * 60}>
                  <Link to="/services" className="sp__row" data-cursor>
                    <span className="sp__idx mono">{s.index}</span>
                    <span className="sp__title">{s.title}</span>
                    <span className="sp__short muted">{s.short}</span>
                    <span className="sp__arrow">↗</span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- SELECTED WORK ---------------- */}
        <section className="section work-preview">
          <div className="container">
            <SectionHead index="02" label="Selected work" />
            <div className="wp__grid">
              {projects.slice(0, 4).map((p, i) => (
                <Reveal key={p.id} delay={(i % 2) * 80} className="wp__item">
                  <Link to="/work" className="wp__link" data-cursor>
                    {p.visual === 'cohort' ? (
                      <div className="wp__visual wp__visual--cohort" style={{ '--accent': p.accent }}>
                        <span className="wp__cat mono">{p.category}</span>
                        <CohortMock />
                        <span className="wp__view mono">View case ↗</span>
                      </div>
                    ) : (
                      <div className="wp__visual" style={{ '--accent': p.accent }}>
                        <span className="wp__num">{p.index}</span>
                        <span className="wp__cat mono">{p.category}</span>
                        <span className="wp__view mono">View case ↗</span>
                      </div>
                    )}
                    <div className="wp__meta">
                      <h3 className="wp__title">{p.title}</h3>
                      <span className="wp__year mono">{p.year}</span>
                    </div>
                    <p className="wp__blurb muted">{p.blurb}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <Reveal className="wp__all" delay={120}>
              <Link to="/work" className="btn btn--ghost">
                All projects <span className="btn__dot" />
              </Link>
            </Reveal>
          </div>
        </section>

        <Interstitial word="Craft." align="right" note="// Drawn by hand. Built by engineers — never templated." />

        {/* ---------------- PROCESS ---------------- */}
        <section className="section process">
          <div className="container">
            <SectionHead index="03" label="How we work" />
            <div className="proc__intro">
              <Reveal as="h2" variant="up">
                We treat your website like a system to be secured, not a page to be decorated.
              </Reveal>
            </div>
            <div className="proc__grid">
              {process.map((step, i) => (
                <Reveal key={step.step} className="proc__item" delay={i * 70}>
                  <span className="proc__step mono">{step.step}</span>
                  <h3 className="proc__title">{step.title}</h3>
                  <p className="proc__body muted">{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- STATS ---------------- */}
        <section className="section stats" data-theme="dark">
          <div className="container">
            <div className="stats__grid">
              {stats.map((s, i) => (
                <Reveal key={i} className="stat" delay={i * 80}>
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Interstitial word="Resilience." note="// Built to look effortless and refuse to break." />

        {/* ---------------- FOUNDER TEASER ---------------- */}
        <section className="section founder-teaser">
          <div className="container">
            <SectionHead index="04" label="The founder" />
            <div className="ft__inner">
              <Reveal className="ft__avatar" variant="fade">
                <Avatar initials="LS" label="founder" photo={founder.photo} />
              </Reveal>
              <div className="ft__content">
                <Reveal as="span" className="eyebrow">{founder.role}</Reveal>
                <Reveal as="h2" className="ft__name" delay={60}>{founder.name}</Reveal>
                <Reveal as="p" className="ft__head lead" delay={120}>{founder.headline}</Reveal>
                <Reveal as="p" className="ft__bio muted" delay={180}>{founder.bio[0]}</Reveal>
                <Reveal className="ft__creds" delay={240}>
                  {founder.awards.slice(0, 4).map((a) => (
                    <span key={a} className="ft__cred mono"><Mark size={13} /> {a}</span>
                  ))}
                </Reveal>
                <Reveal delay={300}>
                  <Link to="/about" className="btn">
                    Read the studio story <span className="btn__dot" />
                  </Link>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
