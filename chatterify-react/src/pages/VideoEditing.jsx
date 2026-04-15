import { Link } from 'react-router-dom';

export default function VideoEditing() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <Link to="/" onClick={() => setTimeout(() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="back-link"><i className="fa-solid fa-arrow-left"></i> Zurück zu den Leistungen</Link>
          <div className="badge">Leistung</div>
          <h1 className="section-title">Videoschnitt &amp;<br />Produktion</h1>
          <p className="page-header-desc">Einprägsame Videoschnitt-Dienstleistungen für Marketing, Social-Media-Reels, YouTube-Content und professionelle Werbekampagnen.</p>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <h2 className="section-title mb-6">Kreative Exzellenz</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-film"></i></div>
              <h3>Dynamische Reels</h3>
              <p>Vertikale Kurzformate, optimiert für TikTok, Instagram Reels und YouTube Shorts.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-brands fa-youtube"></i></div>
              <h3>YouTube-Schnitt</h3>
              <p>Langform-Videoschnitt mit packendem Rhythmus, B-Roll-Auswahl und Motion Graphics.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-wand-magic-sparkles"></i></div>
              <h3>VFX &amp; Color Grading</h3>
              <p>Professionelles Color Grading und dezente visuelle Effekte, die Ihre Markenidentität unterstreichen.</p>
            </div>
            <div className="value-card">
              <div className="value-icon"><i className="fa-solid fa-music"></i></div>
              <h3>Audio-Mastering</h3>
              <p>Kristallklare Sprachisolierung, Entfernung von Hintergrundgeräuschen und professionell ausbalanciertes Sounddesign.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container about-cta-container">
          <h2>Preisdetails</h2>
          <p>Jedes Videoprojekt erfordert einen unterschiedlichen kreativen Aufwand. Die Preisgestaltung wird individuell angepasst und nach einem Erstgespräch besprochen.</p>
          <Link to="/contact" className="btn btn-solid mt-4">Vision besprechen</Link>
        </div>
      </section>
    </>
  );
}
