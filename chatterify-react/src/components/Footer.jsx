import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cta-section">
          <h1 className="cta-title">Gestalten wir<br />zusammen</h1>
          <a href="https://calendly.com/chatterifyservice/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-hire">
            <div className="icon-circle"><i className="fa-solid fa-angles-right"></i></div>
            Gespräch buchen
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-col-main">
            <div className="footer-logos">
              <img src="/logo.png" alt="Chatterify" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '18px', fontFamily: 'serif' }}>&</span>
              <img src="/partner-logo.png" alt="OD Solutions" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
            </div>
            <p className="footer-desc">Eine Partnerschaft, die intelligente digitale Lösungen liefert. Wir vereinen moderne Webentwicklung, KI-gestützte Automatisierung und strategische Beratung, um Unternehmen schneller wachsen zu lassen.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" aria-label="GitHub"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Leistungen</h4>
            <ul className="footer-links">
              <li><Link to="/web-development">Webentwicklung</Link></li>
              <li><Link to="/ai-chatbots">KI-Chatbot-Integration</Link></li>
              <li><Link to="/voice-agents">KI-Voice Agents</Link></li>
              <li><Link to="/templates">Alle Templates</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Unternehmen</h4>
            <ul className="footer-links">
              <li><Link to="/about">Über uns</Link></li>
              <li><Link to="/blogs">Blog</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontakt aufnehmen</h4>
            <ul className="footer-links">
              <li><a href="mailto:hello@chatterify.in">hello@chatterify.in</a></li>
              <li><a href="https://chatterify.in" target="_blank" rel="noopener noreferrer">chatterify.in</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">&copy; {new Date().getFullYear()} Chatterify × OD Solutions. Alle Rechte vorbehalten.</span>
          <div className="footer-bottom-links">
            <Link to="/services">Leistungen</Link>
            <Link to="/blogs">Blog</Link>
            <Link to="/about">Über uns</Link>
            <Link to="/contact">Kontakt</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}