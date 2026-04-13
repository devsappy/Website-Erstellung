import { Link } from 'react-router-dom';

export default function VoiceAgents() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/" onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services</Link>
          <div className="badge">Service</div>
          <h1 className="section-title">AI Voice<br />Agents</h1>
          <p className="page-header-desc">Next-generation voice automation systems that handle inbound & outbound calls, assisting customers with unparalleled natural fluency.</p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title mb-6">The Future of Voice</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-phone-volume"></i></div>
              <h3>Inbound Answering</h3>
              <p>Instantly resolve FAQs, handle reservations, and triage customer service issues via phone.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-microphone-lines"></i></div>
              <h3>Human-like Flow</h3>
              <p>Ultra-low latency inference means the AI detects interruptions and speaks naturally.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-calendar-check"></i></div>
              <h3>Appointment Setting</h3>
              <p>Direct integration with your calendar allows the voice agent to book and manage meetings.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-language"></i></div>
              <h3>Multilingual</h3>
              <p>Assist diverse customer bases by communicating flawlessly across multiple global languages.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-container">
          <h2>Pricing Details</h2>
          <p>Voice agents require bespoke training and telephony integration. Pricing will be discussed after an introductory meeting.</p>
          <Link to="/contact" className="btn btn-solid mt-4">Let's Talk</Link>
        </div>
      </section>
    </>
  );
}
