import teamImage from '../assets/team-image.png'

export default function About() {
  return (
    <>
      <section className="page-header about-hero">
        <div className="container">
          <div className="badge">About Us</div>
          <h1 className="section-title">Bridging AI and<br />practical business<br />solutions</h1>
          <p className="page-header-desc">Chatterify is a modern technology startup focused on helping businesses grow through intelligent digital solutions — from web development to AI automation.</p>
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
              <div className="value-icon"><i className="fa-solid fa-indian-rupee-sign"></i></div>
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
            <div className="skill-category">
              <h3>AI &amp; Automation</h3>
              <div className="skill-tags">
                <span className="skill-tag">AI Chatbots</span>
                <span className="skill-tag">Voice Agents</span>
                <span className="skill-tag">Agentic AI</span>
                <span className="skill-tag">Workflow Automation</span>
                <span className="skill-tag">Business Process AI</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Creative &amp; Media</h3>
              <div className="skill-tags">
                <span className="skill-tag">Video Editing</span>
                <span className="skill-tag">Short Reels</span>
                <span className="skill-tag">YouTube Content</span>
                <span className="skill-tag">Promotional Videos</span>
                <span className="skill-tag">Social Media</span>
              </div>
            </div>
            <div className="skill-category">
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
          <h2>Ready to transform your business?</h2>
          <p>Let's discuss how Chatterify can automate, scale, and elevate your digital presence.</p>
          <a href="/contact" className="btn btn-solid">Get In Touch</a>
        </div>
      </section>
    </>
  )
}