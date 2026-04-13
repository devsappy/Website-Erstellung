import { Link } from 'react-router-dom'

export default function Navbar() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={handleScrollTop}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="9" height="9" rx="1" fill="#111"/>
            <rect x="2" y="13" width="9" height="9" rx="1" fill="#111"/>
            <rect x="13" y="13" width="9" height="9" rx="1" fill="#111"/>
            <path d="M13 3C13 2.44772 13.4477 2 14 2H21C21.5523 2 22 2.44772 22 3V10C22 10.5523 21.5523 11 21 11H14C13.4477 11 13 10.5523 13 10V3Z" fill="#111"/>
          </svg>
          <span>Chatterify</span>
        </Link>
        <nav className="nav-links">
          <Link to="/" onClick={handleScrollTop}>Home</Link>
          <Link to="/blogs" onClick={handleScrollTop}>Blogs</Link>
          <Link to="/about" onClick={handleScrollTop}>About Us</Link>
          <Link to="/services" onClick={handleScrollTop}>Templates</Link>
          <Link to="/contact" onClick={handleScrollTop}>Contact</Link>
        </nav>
        <Link to="/contact" className="btn btn-outline" onClick={handleScrollTop}>Get Started</Link>
      </div>
    </header>
  )
}