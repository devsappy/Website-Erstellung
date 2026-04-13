import { Link } from 'react-router-dom';

export default function VideoEditing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/" onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="back-link"><i className="fa-solid fa-arrow-left"></i> Back to Services</Link>
          <div className="badge">Service</div>
          <h1 className="section-title">Video Editing &amp;<br />Production</h1>
          <p className="page-header-desc">Engaging, high-retention video editing services for marketing, social media reels, YouTube content, and robust promotional campaigns.</p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title mb-6">Creative Excellence</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-film"></i></div>
              <h3>Dynamic Reels</h3>
              <p>Short-form vertical content optimized for TikTok, Instagram Reels, and YouTube Shorts.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-brands fa-youtube"></i></div>
              <h3>YouTube Editing</h3>
              <p>Long-form video editing with engaging pacing, B-roll selection, and motion graphics.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
              <h3>VFX & Coloring</h3>
              <p>Professional color grading and subtle visual effects that elevate your brand identity.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-music"></i></div>
              <h3>Audio Mastering</h3>
              <p>Crisp voice isolation, background noise removal, and expertly balanced sound design.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-container">
          <h2>Pricing Details</h2>
          <p>Every video project requires a different level of creative effort. Pricing will be custom tailored and discussed after an introductory meeting.</p>
          <Link to="/contact" className="btn btn-solid mt-4">Discuss Your Vision</Link>
        </div>
      </section>
    </>
  );
}
