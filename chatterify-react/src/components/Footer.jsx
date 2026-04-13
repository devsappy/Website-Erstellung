import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="cta-section">
          <h1 className="cta-title">Let's Build<br />Together</h1>
          <Link to="/contact" className="btn btn-hire">
            <div className="icon-circle"><i className="fa-solid fa-angles-right"></i></div>
            Get Started
          </Link>
        </div>
        <div className="footer-grid">
          <div className="footer-col-main">
            <div className="logo white-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="9" height="9" rx="1" fill="#fff"/>
                <rect x="2" y="13" width="9" height="9" rx="1" fill="#fff"/>
                <rect x="13" y="13" width="9" height="9" rx="1" fill="#fff"/>
                <path d="M13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V3Z" fill="#fff"/>
              </svg>
              <span>Chatterify</span>
            </div>
            <p className="footer-desc">Chatterify is a modern technology startup helping businesses grow through intelligent digital solutions — web development, AI chatbots, voice agents, video editing and automation.</p>
            <div className="social-links">
              <a href="#"><i className="fa-brands fa-instagram"></i></a>
              <a href="#"><i className="fa-brands fa-twitter"></i></a>
              <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#"><i className="fa-brands fa-github"></i></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <p>Web Development<br />AI Chatbot Integration<br />AI Voice Agents<br />Video Editing</p>
          </div>
          <div className="footer-col">
            <h4>Email</h4>
            <p>hello@chatterify.in</p>
          </div>
          <div className="footer-col">
            <h4>Website</h4>
            <p>chatterify.in</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <Link to="/services">Services</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="copyright">
          All rights reserved &copy; Chatterify
        </div>
      </div>
    </footer>
  )
}