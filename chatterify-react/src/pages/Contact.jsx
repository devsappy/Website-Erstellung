import { useState } from 'react';
import usePageTitle from '../hooks/usePageTitle';

// TODO: Replace with your Web3Forms access key from https://web3forms.com (free)
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

export default function Contact() {
  usePageTitle('Kontakt', {
    description: 'Kontaktieren Sie Chatterify — Ihre Webdesign Agentur für Österreich und Deutschland. Kostenloses Beratungsgespräch innerhalb von 24 Stunden.',
    path: '/contact',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');

    const formData = new FormData(e.target);
    formData.append('access_key', WEB3FORMS_KEY);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="section-title">Let's build something great</h1>
          <p className="page-header-desc">Have a project in mind or want to learn more about our services? Reach out — we'd love to help you grow your business with smart digital solutions.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="contact-info-content">
                <h3>Email</h3>
                <p>hello@chatterify.in</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"><i className="fa-solid fa-globe"></i></div>
              <div className="contact-info-content">
                <h3>Website</h3>
                <p>chatterify.in</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"><i className="fa-solid fa-clock"></i></div>
              <div className="contact-info-content">
                <h3>Response Time</h3>
                <p>Within 24 hours</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Tell us about your project</h2>
            <p className="form-subtitle">Fill out the form below and our team will get back to you within 24 hours.</p>

            {status === 'success' && (
              <div className="form-success-msg">
                <i className="fa-solid fa-circle-check"></i> Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns innerhalb von 24 Stunden.
              </div>
            )}
            {status === 'error' && (
              <div className="form-error-msg">
                <i className="fa-solid fa-circle-exclamation"></i> Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns direkt an hello@chatterify.in.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value="Neue Kontaktanfrage — Chatterify Website" />
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first-name">First Name</label>
                  <input type="text" id="first-name" name="first-name" placeholder="Your first name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Last Name</label>
                  <input type="text" id="last-name" name="last-name" placeholder="Your last name" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" placeholder="you@company.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="+43 XXX XXXXXXX" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" name="service" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  <option value="web-dev">Web Development</option>
                  <option value="chatbot">AI Chatbot Integration</option>
                  <option value="voice-agent">AI Voice Agents</option>
                  <option value="automation">Business Automation</option>
                  <option value="hosting">Website Hosting</option>
                  <option value="starter">Starter Package</option>
                  <option value="business">Business Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Project Details</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your project, goals, timeline and budget..." required></textarea>
              </div>
              <button type="submit" className="btn btn-solid btn-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'} <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-social">
        <div className="container">
          <h2 className="section-title">Find us online</h2>
          <div className="social-cards">
            <a href="#" className="social-card">
              <i className="fa-brands fa-instagram"></i>
              <h3>Instagram</h3>
              <p>@chatterify.in</p>
            </a>
            <a href="#" className="social-card">
              <i className="fa-brands fa-twitter"></i>
              <h3>Twitter</h3>
              <p>@chatterify</p>
            </a>
            <a href="#" className="social-card">
              <i className="fa-brands fa-linkedin-in"></i>
              <h3>LinkedIn</h3>
              <p>Chatterify</p>
            </a>
            <a href="#" className="social-card">
              <i className="fa-brands fa-github"></i>
              <h3>GitHub</h3>
              <p>chatterify</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
