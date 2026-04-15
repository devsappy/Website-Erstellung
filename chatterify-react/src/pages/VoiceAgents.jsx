import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import { ServiceJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';

export default function VoiceAgents() {
  usePageTitle('AI Voice Agents', {
    description: 'KI-gestützte Voice Agents für eingehende und ausgehende Anrufe. Terminbuchung, FAQ-Handling und mehrsprachiger Support für Unternehmen im DACH-Raum.',
    path: '/voice-agents',
  });
  return (
    <>
      <ServiceJsonLd
        name="AI Voice Agents"
        description="KI-gestützte Sprachautomatisierung für eingehende und ausgehende Anrufe mit Terminbuchung."
        url="/voice-agents"
      />
      <BreadcrumbJsonLd items={[{ name: 'Startseite', path: '/' }, { name: 'Leistungen', path: '/services' }, { name: 'Voice Agents', path: '/voice-agents' }]} />
      <section className="page-header">
        <div className="container">
          <Link to="/" onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="back-link"><i className="fa-solid fa-arrow-left"></i> Zurück zu den Leistungen</Link>
          <div className="badge">Leistung</div>
          <h1 className="section-title">KI-Voice<br />Agents</h1>
          <p className="page-header-desc">Sprachautomatisierung der nächsten Generation für eingehende und ausgehende Anrufe — mit natürlicher Flüssigkeit, die Kunden begeistert.</p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title mb-6">Die Zukunft der Sprache</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-phone-volume"></i></div>
              <h3>Eingehende Anrufe</h3>
              <p>Sofortige Klärung von FAQs, Entgegennahme von Reservierungen und Weiterleitung von Kundenservice-Anliegen per Telefon.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-microphone-lines"></i></div>
              <h3>Menschliches Gesprächsverhalten</h3>
              <p>Ultra-niedrige Latenz bedeutet, dass die KI Unterbrechungen erkennt und natürlich spricht.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-calendar-check"></i></div>
              <h3>Terminbuchung</h3>
              <p>Direkte Integration mit Ihrem Kalender ermöglicht dem Voice Agent, Termine zu buchen und zu verwalten.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-language"></i></div>
              <h3>Mehrsprachig</h3>
              <p>Unterstützen Sie eine vielfältige Kundschaft durch flüssige Kommunikation in mehreren Sprachen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-container">
          <h2>Preisdetails</h2>
          <p>Voice Agents erfordern individuelles Training und Telefonie-Integration. Die Preisgestaltung wird nach einem Erstgespräch besprochen.</p>
          <Link to="/contact" className="btn btn-solid mt-4">Beratungsgespräch</Link>
        </div>
      </section>
    </>
  );
}
