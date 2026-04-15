import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import { FaqJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';

const services = [
  {
    icon: 'fa-solid fa-code',
    title: 'Webdesign & Website-Erstellung',
    subtitle: 'SEO & Webentwickler DACH',
    description: 'Hochwertiges Webdesign, responsive Firmen-Websites und Online-Shops (E-Commerce) für Kunden aus Österreich und Deutschland.',
    features: ['React / Next.js', 'Responsive Design', 'SEO-optimiert', 'API-Integration', 'Performance-optimiert', 'Sicher & Skalierbar'],
    link: '/web-development',
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI Chatbots',
    subtitle: 'Intelligente Automatisierung',
    description: 'Intelligente Chatbots, die auf Ihre Geschäftsdaten trainiert sind und den Kundensupport automatisieren, Leads erfassen und die Interaktion rund um die Uhr steigern.',
    features: ['Individuelles Training', 'Multi-Plattform', 'Lead-Erfassung', 'CRM-Sync', 'WhatsApp & Social', 'Analytics-Dashboard'],
    link: '/ai-chatbots',
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Voice Agents',
    subtitle: 'Anruf-Automatisierung',
    description: 'KI-gestützte Sprachsysteme für eingehende und ausgehende Anrufe, Lead-Qualifizierung und nahtlose Integration in Ihre Geschäftsprozesse.',
    features: ['Anrufannahme', 'Lead-Qualifizierung', 'CRM-Integration', 'Individuelle Skripte', 'Mehrsprachig', 'Echtzeit-Analytik'],
    link: '/voice-agents',
  },
];

const faqs = [
  {
    q: 'Wie lange dauert ein typisches Projekt?',
    a: 'Die Dauer hängt vom Umfang ab. Eine Landingpage dauert 3–5 Tage, eine Unternehmenswebsite 1–2 Wochen und individuelle Anwendungen 4–8 Wochen. Nach dem Erstgespräch erhalten Sie einen klaren Zeitplan.',
  },
  {
    q: 'Bieten Sie Support nach dem Launch an?',
    a: 'Ja. Alle Pakete beinhalten Post-Launch-Support. Die Dauer hängt von der Paketstufe ab und wird beim Erstgespräch besprochen.',
  },
  {
    q: 'Kann ich mein Paket später upgraden?',
    a: 'Selbstverständlich. Sie können mit dem Starter-Paket beginnen und jederzeit upgraden. Ihre bisherige Investition wird auf das neue Paket angerechnet.',
  },
  {
    q: 'Welche Technologien verwenden Sie?',
    a: 'Wir setzen auf moderne, bewährte Technologien wie React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS und mehr. Wir wählen den besten Stack für Ihre spezifischen Anforderungen.',
  },
];

export default function Services() {
  usePageTitle('Leistungen — Website-Erstellung & KI-Lösungen', {
    description: 'Professionelle Website erstellen lassen für Österreich und Deutschland. Webdesign, AI Chatbots, Voice Agents und Automation — alle Pakete und Preise.',
    path: '/services',
  });
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <FaqJsonLd items={faqs} />
      <BreadcrumbJsonLd items={[{ name: 'Startseite', path: '/' }, { name: 'Leistungen', path: '/services' }]} />
      {/* Hero */}
      <section className="page-header">
        <div className="container">
          <div className="badge">Webdesign Agentur Österreich</div>
          <h1 className="section-title">Professionelle Website<br />erstellen lassen (DACH)</h1>
          <p className="page-header-desc">Wir entwickeln moderne, schnelle und SEO-optimierte Websites für lokale Unternehmen in Österreich und Deutschland.</p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="svc-overview">
        <div className="container">
          <div className="svc-overview-grid">
            {services.map((svc) => (
              <Link to={svc.link} className="svc-overview-card" key={svc.title}>
                <div className="svc-card-top">
                  <div className="svc-overview-icon">
                    <i className={svc.icon}></i>
                  </div>
                  <span className="svc-subtitle">{svc.subtitle}</span>
                </div>
                <h3>{svc.title}</h3>
                <p>{svc.description}</p>
                <div className="svc-divider"></div>
                <ul className="svc-feature-list">
                  {svc.features.map((f) => (
                    <li key={f}><i className="fa-solid fa-circle-check"></i> {f}</li>
                  ))}
                </ul>
                <span className="svc-learn-more">
                  Leistung ansehen <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="svc-process">
        <div className="container">
          <div className="badge">So arbeiten wir</div>
          <h2 className="section-title">Transparente Website-Erstellung</h2>
          <p className="svc-process-subtitle">Persönliche Betreuung für Kunden in Österreich & Deutschland.</p>
          <div className="svc-process-grid">
            <div className="svc-process-step">
              <div className="svc-step-number">01</div>
              <h3>Erstgespräch</h3>
              <p>Wir besprechen Ihre Unternehmensziele, Anforderungen und den Zeitplan, um genau zu verstehen, was Sie brauchen.</p>
            </div>
            <div className="svc-process-step">
              <div className="svc-step-number">02</div>
              <h3>Individuelles Angebot</h3>
              <p>Sie erhalten einen detaillierten Umfang, Zeitplan und Preis — maßgeschneidert für Ihr Projekt, ohne Standardangebote.</p>
            </div>
            <div className="svc-process-step">
              <div className="svc-step-number">03</div>
              <h3>Umsetzung &amp; Review</h3>
              <p>Wir designen und entwickeln Ihre Lösung mit regelmäßigen Abstimmungen, damit Sie stets auf dem Laufenden sind.</p>
            </div>
            <div className="svc-process-step">
              <div className="svc-step-number">04</div>
              <h3>Launch &amp; Support</h3>
              <p>Wir stellen Ihr Projekt live und bieten laufenden Support, damit alles reibungslos funktioniert.</p>
            </div>
          </div>
          <div className="svc-process-cta">
            <a href="https://calendly.com/chatterifyservice/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-solid">Kostenloses Erstgespräch buchen</a>
          </div>
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="svc-trust">
        <div className="container">
          <div className="svc-trust-grid">
            <div className="svc-trust-item">
              <h3>5+</h3>
              <p>Projekte ausgeliefert</p>
            </div>
            <div className="svc-trust-item">
              <h3>100%</h3>
              <p>Pünktliche Lieferung</p>
            </div>
            <div className="svc-trust-item">
              <h3>24/7</h3>
              <p>KI-gestützter Support</p>
            </div>
            <div className="svc-trust-item">
              <h3>80%+</h3>
              <p>Kundenzufriedenheit</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="svc-faq">
        <div className="container">
          <div className="badge">FAQ</div>
          <h2 className="section-title">Häufig gestellte Fragen</h2>
          <div className="svc-faq-list">
            {faqs.map((faq, idx) => (
              <div
                className={`svc-faq-item ${openFaq === idx ? 'svc-faq-open' : ''}`}
                key={idx}
              >
                <button className="svc-faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <span>{faq.q}</span>
                  <i className={`fa-solid ${openFaq === idx ? 'fa-minus' : 'fa-plus'}`}></i>
                </button>
                {openFaq === idx && (
                  <div className="svc-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
