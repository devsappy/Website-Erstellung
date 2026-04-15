import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import { ServiceJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';

export default function AIChatbots() {
  usePageTitle('AI Chatbot Integration', {
    description: 'Intelligente KI-Chatbots für automatisierten Kundensupport. 24/7 verfügbar auf WhatsApp, Messenger und Ihrer Website — für Unternehmen in Österreich und Deutschland.',
    path: '/ai-chatbots',
  });
  return (
    <>
      <ServiceJsonLd
        name="AI Chatbot Integration"
        description="Intelligente Chatbots für automatisierten Kundensupport und Lead-Generierung auf allen Plattformen."
        url="/ai-chatbots"
      />
      <BreadcrumbJsonLd items={[{ name: 'Startseite', path: '/' }, { name: 'Leistungen', path: '/services' }, { name: 'KI-Chatbots', path: '/ai-chatbots' }]} />
      <section className="page-header">
        <div className="container">
          <Link to="/" onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="back-link"><i className="fa-solid fa-arrow-left"></i> Zurück zu den Leistungen</Link>
          <div className="badge">Leistung</div>
          <h1 className="section-title">KI-Chatbot<br />Integration</h1>
          <p className="page-header-desc">Automatisieren Sie Ihren Kundensupport, beantworten Sie Anfragen sofort und steigern Sie die Interaktion rund um die Uhr auf allen Plattformen.</p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title mb-6">Intelligente Automatisierung</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-clock"></i></div>
              <h3>24/7 Verfügbarkeit</h3>
              <p>Verpassen Sie keinen Lead mehr. Ihr Chatbot interagiert rund um die Uhr mit Kunden — ohne Ausfallzeiten.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-brain"></i></div>
              <h3>Kontextbewusste KI</h3>
              <p>Auf Ihre Geschäftsdaten trainiert für relevante, hochgradig genaue und menschlich wirkende Antworten.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-brands fa-whatsapp"></i></div>
              <h3>Multi-Plattform</h3>
              <p>Nahtlose Integration des Chatbots in Ihre Website, WhatsApp, Facebook Messenger und Instagram.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-chart-line"></i></div>
              <h3>Lead-Generierung</h3>
              <p>Automatische Lead-Qualifizierung, Kontaktdatenerfassung und direkte Synchronisation mit Ihrem CRM.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-container">
          <h2>Preisdetails</h2>
          <p>Chatbot-Funktionen variieren je nach Logik-Komplexität und Integrationen. Die Preisgestaltung wird nach einem Erstgespräch besprochen.</p>
          <a href="https://calendly.com/chatterifyservice/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-solid mt-4">Beratung buchen</a>
        </div>
      </section>
    </>
  );
}
