import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import { ServiceJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';

export default function WebDevelopment() {
  usePageTitle('Webdesign & Website-Erstellung', {
    description: 'Professionelles Webdesign und Website-Erstellung für Unternehmen in Österreich und Deutschland. SEO-optimiert, responsive, skalierbar — von Landingpages bis E-Commerce.',
    path: '/web-development',
  });
  return (
    <>
      <ServiceJsonLd
        name="Premium Webdesign & Website-Erstellung"
        description="Individuelle, responsive und SEO-optimierte Websites für Unternehmen in Österreich und Deutschland."
        url="/web-development"
      />
      <BreadcrumbJsonLd items={[{ name: 'Startseite', path: '/' }, { name: 'Leistungen', path: '/services' }, { name: 'Webdesign', path: '/web-development' }]} />
      <section className="page-header">
        <div className="container">
          <Link to="/" onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="back-link"><i className="fa-solid fa-arrow-left"></i> Zurück zu den Leistungen</Link>
          <div className="badge">Unsere Kernleistung</div>
          <h1 className="section-title">Webdesign &<br />Website-Erstellung</h1>
          <p className="page-header-desc">Wir entwickeln maßgeschneiderte, hochgradig responsive und skalierbare Websites für Kunden in Österreich und Deutschland. Von SEO-optimierten Landingpages bis hin zu komplexen E-Commerce Webshops (DACH).</p>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="badge">Agentur Qualität</div>
          <h2 className="section-title mb-6">Wie lokales Webdesign Ihren Umsatz steigert</h2>
          <div className="benefits-list">
            <div className="benefit-row">
              <div className="benefit-icon-wrapper"><i className="fa-solid fa-rocket"></i></div>
              <div className="benefit-content">
                <h3>Höhere Conversions</h3>
                <p>Blitzschnelle Ladezeiten und nahtlose UX-Pfade senken die Absprungrate drastisch und machen aus Gelegenheitsbesucher:innen zahlende Kund:innen.</p>
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon-wrapper"><i className="fa-solid fa-shield-halved"></i></div>
              <div className="benefit-content">
                <h3>Unternehmenssicherheit</h3>
                <p>Fortschrittliche Datenverschlüsselung, sichere Authentifizierung und robuste Infrastruktur schützen Ihr Unternehmen vor Cyber-Bedrohungen.</p>
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon-wrapper"><i className="fa-solid fa-chart-line"></i></div>
              <div className="benefit-content">
                <h3>Skalierbare Infrastruktur</h3>
                <p>Ihre Web-App skaliert automatisch. Ob 100 oder 100.000 aktive Nutzer:innen — die Leistung bleibt fehlerfrei ohne Ausfallzeiten.</p>
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon-wrapper"><i className="fa-solid fa-gears"></i></div>
              <div className="benefit-content">
                <h3>Automatisierte Abläufe</h3>
                <p>Wir bauen durchdachte CMS-, Inventar- und Zahlungs-Gateways, die manuelle Aufgaben eliminieren und Ihnen jede Woche Stunden sparen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="badge">Unser Werkzeugkasten</div>
          <h2 className="section-title">Wir nutzen alle gängigen Technologie-Stacks</h2>
          <p className="page-header-desc">Wir glauben nicht an One-Size-fits-All. Wir analysieren Ihre Kern-Logik und wenden den perfekten Technologie-Stack an, um Geschwindigkeit, Sicherheit und Skalierbarkeit zu garantieren.</p>
          
          <div className="tech-grid">
            {/* Frontend */}
            <div className="tech-category">
              <h3>Frontend &amp; UI</h3>
              <div className="tech-list">
                <div className="tech-item"><i className="fa-brands fa-react"></i><span>React.js</span></div>
                <div className="tech-item"><i className="fa-brands fa-vuejs"></i><span>Vue.js</span></div>
                <div className="tech-item"><i className="fa-brands fa-angular"></i><span>Angular</span></div>
                <div className="tech-item"><i className="fa-brands fa-figma"></i><span>Figma UI/UX</span></div>
                <div className="tech-item"><i className="fa-brands fa-html5"></i><span>HTML5</span></div>
                <div className="tech-item"><i className="fa-brands fa-css3-alt"></i><span>TailwindCSS</span></div>
              </div>
            </div>

            {/* Backend */}
            <div className="tech-category">
              <h3>Backend &amp; Logik</h3>
              <div className="tech-list">
                <div className="tech-item"><i className="fa-brands fa-node-js"></i><span>Node.js</span></div>
                <div className="tech-item"><i className="fa-brands fa-python"></i><span>Python / Django</span></div>
                <div className="tech-item"><i className="fa-brands fa-java"></i><span>Java / Spring</span></div>
                <div className="tech-item"><i className="fa-brands fa-php"></i><span>PHP / Laravel</span></div>
                <div className="tech-item"><i className="fa-brands fa-golang"></i><span>Go</span></div>
                <div className="tech-item"><i className="fa-solid fa-network-wired"></i><span>GraphQL</span></div>
              </div>
            </div>

            {/* DB & Cloud */}
            <div className="tech-category">
              <h3>Datenbanken &amp; Cloud</h3>
              <div className="tech-list">
                <div className="tech-item"><i className="fa-brands fa-aws"></i><span>Amazon AWS</span></div>
                <div className="tech-item"><i className="fa-brands fa-docker"></i><span>Docker</span></div>
                <div className="tech-item"><i className="fa-solid fa-database"></i><span>PostgreSQL</span></div>
                <div className="tech-item"><i className="fa-brands fa-envira"></i><span>MongoDB</span></div>
                <div className="tech-item tech-item-google">
                  <svg className="tech-svg-icon" viewBox="0 0 48 48" width="32" height="32">
                    <path className="google-blue" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="currentColor"/>
                    <path className="google-red" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="currentColor"/>
                    <path className="google-green" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="currentColor"/>
                    <path className="google-yellow" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.001-.001 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="currentColor"/>
                  </svg>
                  <span>Google Cloud</span>
                </div>
                <div className="tech-item"><i className="fa-solid fa-server"></i><span>Redis Cache</span></div>
              </div>
            </div>

            {/* Integrations & AI */}
            <div className="tech-category">
              <h3>Integrationen &amp; KI</h3>
              <div className="tech-list">
                <div className="tech-item"><i className="fa-brands fa-stripe"></i><span>Stripe APIs</span></div>
                <div className="tech-item"><i className="fa-brands fa-hubspot"></i><span>HubSpot CRM</span></div>
                <div className="tech-item"><i className="fa-solid fa-microchip"></i><span>OpenAI Integrations</span></div>
                <div className="tech-item"><i className="fa-brands fa-github"></i><span>CI/CD Pipelines</span></div>
                <div className="tech-item"><i className="fa-solid fa-plug"></i><span>WebSockets</span></div>
                <div className="tech-item"><i className="fa-solid fa-shield-cat"></i><span>OAuth 2.0</span></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Lifecycle / Process Workflow */}
      {/* Lifecycle / Process Workflow */}
      <section className="process-workflow">
        <div className="container">
          <div className="badge">Der Prozess</div>
          <div className="experience-header">
            <h2 className="section-title">So erstellen wir<br />Ihre neue Website</h2>
            <p className="section-desc">Ein transparenter Agentur-Prozess in der DACH-Region. Sie erhalten erstklassiges Webdesign aus Österreich & Deutschland.</p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3>Technische Analyse</h3>
              <p>Wir arbeiten eng mit Ihnen zusammen, um alle Anforderungen, User Stories und die optimale Datenbankarchitektur zu definieren — bevor eine Zeile Code geschrieben wird.</p>
            </div>
            <div className="process-card">
              <div className="process-number">02</div>
              <h3>UI/UX-Prototyping</h3>
              <p>Wir liefern hochdetaillierte, interaktive Figma-Designs, damit Sie genau sehen, wie das Produkt auf allen Geräten aussehen wird.</p>
            </div>
            <div className="process-card">
              <div className="process-number">03</div>
              <h3>Agile Entwicklung</h3>
              <p>Unsere Entwickler:innen bauen Ihr Frontend und Backend mit modernen Sprints — und integrieren KI- oder Drittanbieter-APIs sicher.</p>
            </div>
            <div className="process-card">
              <div className="process-number">04</div>
              <h3>QA &amp; Bereitstellung</h3>
              <p>Wir testen die App intensiv unter Last, führen Sicherheitsaudits durch und stellen sie mit Zero-Downtime-Deployment auf Ihren Produktionsservern live.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-container">
          <h2>Preisdetails</h2>
          <p>Jedes Webprojekt hat einzigartige architektonische Anforderungen. Preisgestaltung und Projekt-Roadmaps werden nach einem ausführlichen Erstgespräch besprochen und festgelegt.</p>
          <Link to="/contact" className="btn btn-solid mt-4">Technisches Gespräch vereinbaren</Link>
        </div>
      </section>
    </>
  );
}
