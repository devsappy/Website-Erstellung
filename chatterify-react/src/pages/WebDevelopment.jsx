import { Link } from 'react-router-dom';

export default function WebDevelopment() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/" onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services</Link>
          <div className="badge">Our Core Solution</div>
          <h1 className="section-title">Full-Stack<br />Web Development</h1>
          <p className="page-header-desc">We engineer custom, highly responsive, and infinitely scalable web platforms. From dynamic landing pages to complex e-commerce architectures, we build your digital foundation.</p>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="badge">Why It Matters</div>
          <h2 className="section-title mb-6">How modern web development drives ROI</h2>
          <div className="benefits-list">
            <div className="benefit-row">
              <div className="benefit-icon-wrapper"><i className="fa-solid fa-rocket"></i></div>
              <div className="benefit-content">
                <h3>Higher Conversions</h3>
                <p>Lightning-fast load times and seamless UX paths dramatically reduce bounce rates and turn casual visitors into paying customers.</p>
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon-wrapper"><i className="fa-solid fa-shield-halved"></i></div>
              <div className="benefit-content">
                <h3>Enterprise Security</h3>
                <p>Advanced data encryption, secure authentication, and robust infrastructure defend your business from cyber threats.</p>
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon-wrapper"><i className="fa-solid fa-chart-line"></i></div>
              <div className="benefit-content">
                <h3>Scalable Infrastructure</h3>
                <p>Your web app scales automatically. Whether you have 100 or 100,000 active users, the performance remains flawless without downtime.</p>
              </div>
            </div>
            <div className="benefit-row">
              <div className="benefit-icon-wrapper"><i className="fa-solid fa-gears"></i></div>
              <div className="benefit-content">
                <h3>Automated Operations</h3>
                <p>We build sophisticated CMS, inventory, and payment gateways that eliminate manual operational tasks, saving you hours every week.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="badge">Our Arsenal</div>
          <h2 className="section-title">We leverage all possible tech stacks</h2>
          <p className="page-header-desc">We don't believe in one-size-fits-all. We analyze your core business logic and apply the perfect technology stack to guarantee speed, security, and scalability.</p>
          
          <div className="tech-grid">
            {/* Frontend */}
            <div className="tech-category">
              <h3>Frontend & UI</h3>
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
              <h3>Backend & Logic</h3>
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
              <h3>Databases & Cloud</h3>
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
              <h3>Integrations & AI</h3>
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
          <div className="badge">The Process</div>
          <div className="experience-header">
            <h2 className="section-title">How we bring your<br />vision to life</h2>
            <p className="section-desc">A completely transparent, professional development cycle. You own the code, you own the IP.</p>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-number">01</div>
              <h3>Technical Scoping</h3>
              <p>We work intimately with you to define all requirements, user stories, and design the ultimate database architectures before writing any code.</p>
            </div>
            <div className="process-card">
              <div className="process-number">02</div>
              <h3>UI/UX Prototyping</h3>
              <p>We deliver high-fidelity, interactive Figma designs so you can see exactly how the product will look and feel on all devices prior to development.</p>
            </div>
            <div className="process-card">
              <div className="process-number">03</div>
              <h3>Agile Development</h3>
              <p>Our engineers build your frontend and backend infrastructure rapidly using modern sprints, securely plugging in any AI or third-party APIs.</p>
            </div>
            <div className="process-card">
              <div className="process-number">04</div>
              <h3>QA & Deployment</h3>
              <p>We subject the app to heavy load-testing, security audits, and QA, finalizing it with a zero-downtime deployment to your production servers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-container">
          <h2>Pricing Details</h2>
          <p>Every web project has unique architectural requirements. Pricing and project roadmaps will be discussed and finalized after a thorough introductory meeting.</p>
          <Link to="/contact" className="btn btn-solid mt-4">Schedule a Technical Call</Link>
        </div>
      </section>
    </>
  );
}
