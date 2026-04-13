import { Link } from 'react-router-dom';

export default function AIChatbots() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/" onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services</Link>
          <div className="badge">Service</div>
          <h1 className="section-title">AI Chatbot<br />Integration</h1>
          <p className="page-header-desc">Automate your customer support, answer queries instantly, and boost engagement 24/7 across all your platforms.</p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title mb-6">Smart Automation</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-clock"></i></div>
              <h3>24/7 Availability</h3>
              <p>Never miss a lead. Your chatbot interacts with customers around the clock with zero downtime.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-brain"></i></div>
              <h3>Context-Aware AI</h3>
              <p>Trained on your business data to provide relevant, highly accurate, human-like responses.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-brands fa-whatsapp"></i></div>
              <h3>Multi-Platform</h3>
              <p>Seamlessly integrate the chatbot into your website, WhatsApp, Facebook Messenger, and Instagram.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-chart-line"></i></div>
              <h3>Lead Generation</h3>
              <p>Automatically qualify leads, gather contact information, and sync directly with your CRM.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-container">
          <h2>Pricing Details</h2>
          <p>Chatbot capabilities vary based on logic complexity and integrations. Pricing will be discussed after an introductory meeting.</p>
          <Link to="/contact" className="btn btn-solid mt-4">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}
