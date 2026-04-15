import { Link } from 'react-router-dom';
import teamImage from '../assets/team-image.png'
import usePageTitle from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('Über uns — Ihre Webdesign Agentur', {
    description: 'Lernen Sie Chatterify kennen — Ihre Webdesign Agentur für Österreich und Deutschland. Wir verbinden innovatives Webdesign mit KI-Automatisierung für Ihren digitalen Erfolg.',
    path: '/about',
  });
  return (
    <>
      <section className="page-header about-hero">
        <div className="container">
          <div className="badge">Ihre Webdesign Agentur</div>
          <h1 className="section-title">Dein Partner für<br />Website-Erstellung<br />in der DACH Region</h1>
          <p className="page-header-desc">Wir sind eine moderne Webagentur, die sich auf hochwertiges Webdesign, SEO und Website-Erstellung für Unternehmen in Österreich und Deutschland spezialisiert hat.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">
          <div className="about-story-image">
            <img src={teamImage} alt="Chatterify Team" />
          </div>
          <div className="about-story-text">
            <h2>Unsere Geschichte</h2>
            <p>Chatterify entstand aus einer einfachen Idee: fortschrittliche Technologie sollte nicht nur Großunternehmen vorbehalten sein. Startups, Kreative und wachsende Unternehmen verdienen Zugang zu denselben leistungsstarken Werkzeugen — zu Preisen, die Sinn ergeben.</p>
            <p>Wir vereinen Full-Stack-Webentwicklung, KI-Chatbot-Integration, Sprachautomatisierung und kreative Mediendienstleistungen unter einem Dach. Unsere Mission ist es, hochwertige digitale und KI-gestützte Lösungen zu liefern, die bezahlbar, skalierbar und genuinely nützlich sind.</p>
            <p>Mit einem kleinen, aber kompetenten Team aus Entwickler:innen, Strateg:innen und Kreativen arbeiten wir eng mit jedem Kunden zusammen, um deren individuelle Herausforderungen zu verstehen und Lösungen zu liefern, die echte Ergebnisse bringen.</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="badge">Warum Chatterify</div>
          <h2 className="section-title">Was uns<br />auszeichnet</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-euro-sign"></i></div>
              <h3>Faire Preise</h3>
              <p>Mit Fokus auf Startups und Kleinunternehmen — professionelle Lösungen, die Ihr Budget nicht sprengen.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-bolt"></i></div>
              <h3>Schnelle Umsetzung</h3>
              <p>Wir liefern zügig mit transparenten Prozessen und halten Sie über jeden Projektschritt am Laufenden.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-robot"></i></div>
              <h3>KI-zuerst-Ansatz</h3>
              <p>Wir setzen Chatbots, Voice Agents und Agent AI ein, um Workflows zu automatisieren und die Kundenerfahrung zu verbessern.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-shield-halved"></i></div>
              <h3>Komplettlösungen</h3>
              <p>Von Entwicklung und Hosting bis Wartung und Support — wir kümmern uns um alles, damit Sie sich auf Ihr Wachstum konzentrieren können.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-skills">
        <div className="container">
          <div className="badge">Unsere Expertise</div>
          <h2 className="section-title">Technologien &amp;<br />Fähigkeiten</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon"><i className="fa-solid fa-code"></i></div>
              <div>
                <h3>Entwicklung</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Full-Stack Webentwicklung</span>
                  <span className="skill-tag">Landingpages</span>
                  <span className="skill-tag">E-Commerce</span>
                  <span className="skill-tag">Individuelle Web-Apps</span>
                  <span className="skill-tag">API-Entwicklung</span>
                  <span className="skill-tag">Datenbanklösungen</span>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon"><i className="fa-solid fa-robot"></i></div>
              <div>
                <h3>KI &amp; Automatisierung</h3>
                <div className="skill-tags">
                  <span className="skill-tag">KI-Chatbots</span>
                  <span className="skill-tag">Voice Agents</span>
                  <span className="skill-tag">Agent AI</span>
                  <span className="skill-tag">Workflow-Automatisierung</span>
                  <span className="skill-tag">Geschäftsprozess-KI</span>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon"><i className="fa-solid fa-server"></i></div>
              <div>
                <h3>Infrastruktur</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Webhosting</span>
                  <span className="skill-tag">SSL &amp; CDN</span>
                  <span className="skill-tag">Server-Monitoring</span>
                  <span className="skill-tag">Wartung</span>
                  <span className="skill-tag">24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-numbers">
        <div className="container">
          <div className="numbers-grid">
            <div className="number-item">
              <h3>5+</h3>
              <p>Projekte abgeschlossen</p>
            </div>
            <div className="number-item">
              <h3>80%</h3>
              <p>Kundenzufriedenheit</p>
            </div>
            <div className="number-item">
              <h3>50+</h3>
              <p>Aktive Nutzer:innen</p>
            </div>
            <div className="number-item">
              <h3>8</h3>
              <p>Kernleistungen</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-container">
          <h2>Bereit für Ihre neue Website?</h2>
          <p>Lass uns besprechen, wie wir durch professionelles Webdesign Ihre Online-Präsenz in Österreich und Deutschland stärken können.</p>
          <Link to="/contact" className="btn btn-solid">Kostenloses Beratungsgespräch</Link>
        </div>
      </section>
    </>
  )
}