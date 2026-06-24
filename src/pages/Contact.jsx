import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { Mark } from '../components/Logo';
import { site } from '../data/site';
import './Contact.css';

const projectTypes = ['Website', '3D / WebGL experience', 'Branding & identity', 'E-commerce', 'Something else'];
const budgets = ['Under £5k', '£5k – £15k', '£15k – £40k', '£40k+', 'Not sure yet'];

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', type: projectTypes[0], budget: budgets[0], message: '',
  });
  const [sent, setSent] = useState(false);
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry — ${form.name || 'Lovelace'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHeader
        index="04"
        label="Contact"
        title={<>Let’s<br /><em>talk.</em></>}
        intro="Tell us what you’re building. We reply to every serious enquiry within two working days."
        meta={[
          { k: 'Email', v: site.email },
          { k: 'Studios', v: site.locations.join(' · ') },
          { k: 'Response', v: 'Within 2 working days' },
        ]}
      />

      <section className="section contact">
        <div className="container contact__grid">
          <Reveal className="contact__form-wrap">
            {sent ? (
              <div className="contact__sent">
                <Mark size={40} />
                <h2>Your message is ready to send.</h2>
                <p className="muted">
                  Your email app should have opened with everything filled in. If it didn’t,
                  write to us directly:
                </p>
                <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            ) : (
              <form className="contact__form" onSubmit={submit} noValidate>
                <div className="field">
                  <label htmlFor="name" className="mono">Name</label>
                  <input id="name" required value={form.name} onChange={update('name')} placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email" className="mono">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="you@company.com" />
                </div>
                <div className="field">
                  <label htmlFor="type" className="mono">Project type</label>
                  <select id="type" value={form.type} onChange={update('type')}>
                    {projectTypes.map((t) => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="budget" className="mono">Budget</label>
                  <select id="budget" value={form.budget} onChange={update('budget')}>
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div className="field field--full">
                  <label htmlFor="message" className="mono">Tell us about it</label>
                  <textarea id="message" rows="5" required value={form.message} onChange={update('message')} placeholder="What are you building, and what does success look like?" />
                </div>
                <button type="submit" className="btn contact__submit">
                  Send enquiry <span className="btn__dot" />
                </button>
              </form>
            )}
          </Reveal>

          <Reveal as="aside" className="contact__aside" delay={120}>
            <div className="contact__block">
              <span className="mono contact__block-head">// email</span>
              <a href={`mailto:${site.email}`} className="contact__mail">{site.email}</a>
            </div>
            <div className="contact__block">
              <span className="mono contact__block-head">// studios</span>
              {site.locations.map((l) => <span key={l} className="contact__line">{l}</span>)}
            </div>
            <div className="contact__block">
              <span className="mono contact__block-head">// elsewhere</span>
              <div className="contact__socials">
                {site.social.map((s) => (
                  <a key={s.label} href={s.href} className="link" target="_blank" rel="noreferrer">{s.label}</a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
