export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="badge">Contact</div>
          <h1 className="section-title">Let's build<br />something great</h1>
          <p className="page-header-desc">Have a project in mind or want to learn more about our services? Reach out — we'd love to help you grow your business with smart digital solutions.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon"><i className="fa-solid fa-envelope"></i></div>
              <h3>Email</h3>
              <p>hello@chatterify.in</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"><i className="fa-solid fa-globe"></i></div>
              <h3>Website</h3>
              <p>chatterify.in</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon"><i className="fa-solid fa-clock"></i></div>
              <h3>Response Time</h3>
              <p>We typically respond within 24 hours</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Tell us about your project</h2>
            <p className="form-subtitle">Fill out the form below and our team will get back to you within 24 hours.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
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
                  <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Service Interested In</label>
                <select id="subject" name="subject" required>
                  <option value="" disabled selected>Select a service</option>
                  <option value="web-dev">Web Development</option>
                  <option value="chatbot">AI Chatbot Integration</option>
                  <option value="voice-agent">AI Voice Agents</option>
                  <option value="video">Video Editing</option>
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
              <button type="submit" className="btn btn-solid btn-full">Send Message <i className="fa-solid fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-social">
        <div className="container">
          <div className="badge">Connect With Us</div>
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
  )
}