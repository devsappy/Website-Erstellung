import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  // Close menu on route change / resize past mobile
  useEffect(() => {
    const close = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="nav-container" style={{ padding: '0 40px', width: '100%' }}>
        <Link to="/" className="logo" onClick={handleScrollTop}>
          <span className="michroma-regular">Website-Erstellung</span>
        </Link>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
          <Link to="/" onClick={handleScrollTop}>Home</Link>
          <Link to="/blogs" onClick={handleScrollTop}>Blogs</Link>
          <Link to="/about" onClick={handleScrollTop}>About Us</Link>
          <Link to="/services" onClick={handleScrollTop}>Services</Link>
          <Link to="/templates" onClick={handleScrollTop}>Templates</Link>
          <Link to="/contact" onClick={handleScrollTop}>Contact</Link>
          <a href="https://calendly.com/chatterifyservice/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-solid nav-mobile-cta" onClick={() => setMenuOpen(false)}>Book a Call</a>
        </nav>
        <a href="https://calendly.com/chatterifyservice/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-solid nav-desktop-cta">Book a Call</a>
        <button
          className={`hamburger ${menuOpen ? 'hamburger-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>
    </header>
  );
}
