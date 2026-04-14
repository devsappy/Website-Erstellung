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
            <h2>Our Story</h2>
            <p>Chatterify was born from a simple idea: advanced technology shouldn't be reserved for big enterprises. Startups, creators, and growing businesses deserve access to the same powerful tools — at prices that make sense.</p>
            <p>We combine full-stack web development, AI chatbot integration, voice automation, and creative media services under one roof. Our mission is to deliver high-quality digital and AI-powered solutions that are affordable, scalable, and genuinely useful.</p>
            <p>With a small but skilled team of developers, strategists, and creatives, we work closely with every client to understand their unique challenges and deliver solutions that drive real results.</p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="badge">Why Chatterify</div>
          <h2 className="section-title">What sets us<br />apart</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-euro-sign"></i></div>
              <h3>Affordable Pricing</h3>
              <p>Tailored for startups and small businesses — get professional solutions without breaking the bank.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-bolt"></i></div>
              <h3>Fast Turnaround</h3>
              <p>We deliver quickly with transparent processes, keeping you informed at every step of the project.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-robot"></i></div>
              <h3>AI-First Approach</h3>
              <p>We leverage chatbots, voice agents and agentic AI to automate workflows and enhance customer experience.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-shield-halved"></i></div>
              <h3>End-to-End Solutions</h3>
              <p>From development and hosting to maintenance and support — we handle everything so you can focus on growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-skills">
        <div className="container">
          <div className="badge">Our Expertise</div>
          <h2 className="section-title">Technologies &amp;<br />capabilities we cover</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon"><i className="fa-solid fa-code"></i></div>
              <div>
                <h3>Development</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Full-Stack Web Dev</span>
                  <span className="skill-tag">Landing Pages</span>
                  <span className="skill-tag">E-Commerce</span>
                  <span className="skill-tag">Custom Web Apps</span>
                  <span className="skill-tag">API Development</span>
                  <span className="skill-tag">Database Solutions</span>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon"><i className="fa-solid fa-robot"></i></div>
              <div>
                <h3>AI &amp; Automation</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AI Chatbots</span>
                  <span className="skill-tag">Voice Agents</span>
                  <span className="skill-tag">Agentic AI</span>
                  <span className="skill-tag">Workflow Automation</span>
                  <span className="skill-tag">Business Process AI</span>
                </div>
              </div>
            </div>
            <div className="skill-category">
              <div className="skill-icon"><i className="fa-solid fa-server"></i></div>
              <div>
                <h3>Infrastructure</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Website Hosting</span>
                  <span className="skill-tag">SSL &amp; CDN</span>
                  <span className="skill-tag">Server Monitoring</span>
                  <span className="skill-tag">Maintenance</span>
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
              <p>Projects Completed</p>
            </div>
            <div className="number-item">
              <h3>80%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="number-item">
              <h3>50+</h3>
              <p>Active Users</p>
            </div>
            <div className="number-item">
              <h3>8</h3>
              <p>Core Services</p>
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