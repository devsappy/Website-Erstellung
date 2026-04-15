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
          <h1 className="section-title">Gestalten wir etwas Großartiges</h1>
          <p className="page-header-desc">Haben Sie ein Projekt im Kopf oder möchten Sie mehr über unsere Leistungen erfahren? Kontaktieren Sie uns — wir helfen Ihnen gerne dabei, Ihr Unternehmen mit smarten digitalen Lösungen weiterzubringen.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon"><i className="fa-solid fa-envelope"></i></div>
              <div className="contact-info-content">
                <h3>E-Mail</h3>
                <p>hello@chatterify.in</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"><i className="fa-solid fa-globe"></i></div>
              <div className="contact-info-content">
                <h3>Website</h3>                <p>chatterify.in</p>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"><i className="fa-solid fa-clock"></i></div>
              <div className="contact-info-content">
                <h3>Antwortzeit</h3>
                <p>Innerhalb von 24 Stunden</p>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Erzählen Sie uns von Ihrem Projekt</h2>
            <p className="form-subtitle">Füllen Sie das Formular aus und unser Team meldet sich innerhalb von 24 Stunden bei Ihnen.</p>

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
                  <label htmlFor="first-name">Vorname</label>
                  <input type="text" id="first-name" name="first-name" placeholder="Ihr Vorname" required />
                </div>
                <div className="form-group">
                  <label htmlFor="last-name">Nachname</label>
                  <input type="text" id="last-name" name="last-name" placeholder="Ihr Nachname" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">E-Mail-Adresse</label>
                  <input type="email" id="email" name="email" placeholder="sie@firma.at" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefonnummer</label>
                  <input type="tel" id="phone" name="phone" placeholder="+43 XXX XXXXXXX" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="service">Gewünschte Leistung</label>
                <select id="service" name="service" defaultValue="" required>
                  <option value="" disabled>Bitte wählen Sie eine Leistung</option>
                  <option value="web-dev">Webentwicklung</option>
                  <option value="chatbot">KI-Chatbot-Integration</option>
                  <option value="voice-agent">KI-Voice Agents</option>
                  <option value="automation">Geschäftsautomatisierung</option>
                  <option value="hosting">Webhosting</option>
                  <option value="starter">Starter-Paket</option>
                  <option value="business">Business-Paket</option>
                  <option value="premium">Premium-Paket</option>
                  <option value="other">Sonstiges</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Projektdetails</label>
                <textarea id="message" name="message" rows="5" placeholder="Erzählen Sie uns von Ihrem Projekt, Ihren Zielen, dem Zeitplan und dem Budget..." required></textarea>
              </div>
              <button type="submit" className="btn btn-solid btn-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Wird gesendet...' : 'Nachricht senden'} <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-social">
        <div className="container">
          <h2 className="section-title">Finden Sie uns online</h2>
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
