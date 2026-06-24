import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import Avatar from '../components/Avatar';
import Interstitial from '../components/Interstitial';
import { Mark } from '../components/Logo';
import { site, founder } from '../data/site';
import './About.css';

const timeline = [
  { k: 'Age 6', t: 'Wrote his first lines of code.' },
  { k: 'Age 10', t: 'Designed and shipped his first website.' },
  { k: 'Age 15', t: 'Founded Five River Solutions.' },
  { k: 'Today', t: 'Founder & MD of Five Rivers Inc. and founder of three startups — leading Lovelace across London, Dubai and India.' },
];

const disclosures = ['Twitter', 'Facebook', 'Apple', 'PayPal', 'MIT', 'Harvard'];

function Mark2({ label }) {
  return (
    <div className="section-mark">
      <span className="mono"><span className="mono--signal">·</span> &nbsp;/&nbsp; {label}</span>
      <span className="mono">{site.short}</span>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    const prevTitle = document.title;
    const meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta ? meta.getAttribute('content') : null;
    document.title = 'Lovepreet Singh — Founder & MD, Five Rivers Inc. | Lovelace';
    if (meta) {
      meta.setAttribute(
        'content',
        'Lovepreet Singh — serial entrepreneur, Founder & Managing Director of Five Rivers Inc., and one of the world’s top 100 ethical hackers. His story, ventures, net worth and recognition.'
      );
    }
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc != null) meta.setAttribute('content', prevDesc);
    };
  }, []);

  return (
    <>
      <PageHeader
        index="01"
        label="The studio"
        title={<>Design with an<br /><em>engineer’s</em> instinct.</>}
        intro={site.manifesto}
        meta={[
          { k: 'Founded', v: '2024' },
          { k: 'Studios', v: site.locations.join(' · ') },
          { k: 'Focus', v: 'Design engineered for trust' },
        ]}
      />

      {/* Philosophy */}
      <section className="section ab-intro">
        <div className="container ab-intro__grid">
          <Reveal as="h2" className="ab-intro__lead">
            We make websites the way a security team would: nothing assumed, nothing left exposed.
          </Reveal>
          <div className="ab-intro__body">
            <Reveal as="p" delay={80}>
              Lovelace began with a simple observation — the prettiest websites are often
              the most fragile. Slow, bloated, quietly insecure. We build the opposite.
            </Reveal>
            <Reveal as="p" delay={160}>
              Design and engineering happen in the same room. We draw every interface by hand,
              build it to perform, and harden it before it ships. The result looks effortless and
              behaves like it was built to last — because it was.
            </Reveal>
          </div>
        </div>
      </section>

      <Interstitial word="Trust." align="right" note="// Security is the foundation, not an afterthought." />

      {/* Founder */}
      <section className="section ab-founder">
        <div className="container">
          <Mark2 label="The founder" />
          <div className="ab-founder__grid">
            <Reveal className="ab-founder__avatar" variant="fade">
              <Avatar initials="LS" label="Lovepreet Singh" photo={founder.photo} />
            </Reveal>
            <div className="ab-founder__content">
              <Reveal as="span" className="eyebrow">{founder.role}</Reveal>
              <Reveal as="h2" className="ab-founder__name" delay={60}>{founder.name}</Reveal>
              {founder.bio.map((para, i) => (
                <Reveal as="p" className="ab-founder__bio muted" delay={120 + i * 60} key={i}>
                  {para}
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal as="blockquote" className="ab-quote" delay={80}>
            <Mark size={24} />
            <p>{founder.quote}</p>
            <cite className="mono">— {founder.name}, {founder.role}</cite>
          </Reveal>
        </div>
      </section>

      {/* Responsible disclosure */}
      <section className="section ab-disc" data-theme="dark">
        <div className="container">
          <Reveal as="span" className="eyebrow">Responsible disclosure</Reveal>
          <Reveal as="h2" className="ab-disc__title" delay={60}>Trusted to find what others miss.</Reveal>
          <Reveal as="p" className="ab-disc__sub" delay={120}>
            Ranked among the world’s top 100 ethical hackers, with vulnerabilities reported
            responsibly to some of the biggest names on the internet:
          </Reveal>
          <Reveal className="ab-disc__chips" delay={180}>
            {disclosures.map((d) => (
              <span key={d} className="ab-disc__chip mono">{d}</span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section ab-time">
        <div className="container">
          <Mark2 label="The path" />
          <div className="ab-time__grid">
            {timeline.map((m, i) => (
              <Reveal className="ab-time__item" key={m.k} delay={i * 70}>
                <span className="ab-time__k mono mono--signal">{m.k}</span>
                <p className="ab-time__t">{m.t}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="section ab-awards">
        <div className="container">
          <Mark2 label="Recognition" />
          <div className="ab-awards__grid">
            {founder.awards.map((a) => (
              <Reveal className="ab-award" key={a}>
                <Mark size={15} />
                <span>{a}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
