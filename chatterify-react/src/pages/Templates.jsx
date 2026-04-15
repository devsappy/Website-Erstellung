import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const projects = [
  {
    id: 0,
    title: 'Crunchbox',
    description: 'Auffällige E-Commerce-Website für eine Snack-Marke mit lebhaften Produktpräsentationen und einem reibungslosen Bestellvorgang.',
    tags: ['E-Commerce', 'Lebensmittel', 'Marke'],
    category: 'E-Commerce',
    url: 'https://crunchbox-eight.vercel.app',
  },
  {
    id: 1,
    title: 'Wander PH',
    description: 'Reise-Entdeckungsseite mit Zielen auf den Philippinen — visuell eindrucksvoll mit kuratierten Reiseführern.',
    tags: ['Reise', 'Redaktion', 'Entdeckung'],
    category: 'Reise & Gastronomie',
    url: 'https://wander-ph.vercel.app',
  },
  {
    id: 2,
    title: 'StudioType',
    description: 'Kreativ-Studio-Website mit typografiegetriebenem Design, Branding-Projekten und visuellen Identitäten.',
    tags: ['Studio', 'Typografie', 'Portfolio'],
    category: 'Portfolio',
    url: 'https://studiotype.vercel.app',
  },
  {
    id: 3,
    title: 'Aset AI',
    description: 'Landingpage für eine KI-gestützte Plattform mit intelligenten Automatisierungsfunktionen und Dienstleistungen.',
    tags: ['Landingpage', 'KI', 'SaaS'],
    category: 'Landing Page',
    url: 'https://aset-six.vercel.app',
  },
  {
    id: 4,
    title: 'Matias — Kreativer Designer',
    description: 'Portfolio-Website für einen visuellen Gestalter mit Arbeitsproben, Leistungen und Markenidentität.',
    tags: ['Portfolio', 'Kreativ', 'Design'],
    category: 'Portfolio',
    url: 'https://agencyowner-demo.vercel.app',
  },
  {
    id: 5,
    title: 'Café Kaleido',
    description: 'Einladende Café-Website mit Menü-Highlights, Ambiente-Galerie und reservierungsfähigem Layout.',
    tags: ['Gastronomie', 'Café', 'Marke'],
    category: 'Reise & Gastronomie',
    url: 'https://cafekaleido.vercel.app',
  },
  {
    id: 6,
    title: 'Anon Store',
    description: 'Minimale E-Commerce-Plattform mit aufgeräumtem Einkaufserlebnis, Produktlisten und Checkout-Prozess.',
    tags: ['E-Commerce', 'Minimal', 'Shop'],
    category: 'E-Commerce',
    url: 'https://anon-demo.vercel.app',
  },
  {
    id: 7,
    title: 'Buzzball',
    description: 'Lebendige E-Commerce-Website für eine Ready-to-Drink-Cocktailmarke mit Produktpräsentation und Bestellfunktion.',
    tags: ['E-Commerce', 'Getränke', 'Marke'],
    category: 'E-Commerce',
    url: 'https://buzzball-demo.vercel.app',
  },
  {
    id: 8,
    title: 'Landingpage — Starter',
    description: 'Aufgeräumte, conversion-fokussierte Einzelseite — gebaut für Geschwindigkeit und maximale Wirkung.',
    tags: ['Landingpage', 'Starter', 'Responsive'],
    category: 'Landing Page',
    url: 'https://landingpage1-peach.vercel.app',
  },
  {
    id: 9,
    title: 'Expertise & Risikomanagement',
    description: 'Professionelle B2B-Beratungswebsite mit Fokus auf Risikobewertung, Mitigationsstrategien und Expertenberatung.',
    tags: ['B2B', 'Beratung', 'Unternehmen'],
    category: 'B2B',
    url: 'https://ve-v2.vercel.app',
  },
  {
    id: 10,
    title: 'CollabTrack',
    description: 'Eine Task- und Fortschrittsmanagement-Plattform für kreative Teams zur Organisation und Nachverfolgung von Projekten.',
    tags: ['SaaS', 'Projektmanagement', 'Dashboard'],
    category: 'SaaS',
    url: 'https://collab-tracker.vercel.app',
  },
];

const categories = ['Alle', 'E-Commerce', 'Landingpage', 'Portfolio', 'SaaS', 'B2B', 'Reise & Gastronomie'];

export default function Templates() {
  usePageTitle('Templates & Projekte', {
    description: 'Referenzprojekte und Templates von Chatterify — Landingpages, E-Commerce, SaaS und Portfolio-Websites für den DACH-Markt.',
    path: '/templates',
  });
  const [activeProject, setActiveProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('Alle');

  const filteredProjects = activeCategory === 'Alle'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    document.body.style.overflow = activeProject ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeProject]);

  const openPreview = (project) => setActiveProject(project);
  const closePreview = () => setActiveProject(null);

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="badge">Unsere Arbeiten</div>
          <h1 className="section-title">Projekte, die wir<br />gebaut & geliefert haben</h1>
          <p className="page-header-desc">Echte Projekte, echte Ergebnisse. Klicken Sie auf ein Projekt, um die Live-Website in Aktion zu sehen.</p>
        </div>
      </section>

      <section className="showcase-grid-section">
        <div className="container">
          <div className="templates-filter">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`templates-filter-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="showcase-grid">
            {filteredProjects.map((project) => (
              <div
                className="showcase-card"
                key={project.id}
                onClick={() => openPreview(project)}
              >
                <div className="showcase-card-image">
                  <iframe
                    src={project.url}
                    title={project.title}
                    className="showcase-card-iframe"
                    loading="lazy"
                    tabIndex={-1}
                  />
                  <div className="showcase-card-overlay">
                    <span className="showcase-view-btn">
                      <i className="fa-solid fa-eye"></i> Vorschau
                    </span>
                  </div>
                </div>
                <div className="showcase-card-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="showcase-tags">
                    {project.tags.map((tag) => (
                      <span className="showcase-tag" key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Preview Modal */}
      {activeProject && (
        <div className="showcase-modal-backdrop" onClick={closePreview}>
          <div className="showcase-modal" onClick={(e) => e.stopPropagation()}>
            <div className="showcase-modal-header">
              <div className="showcase-modal-title">
                <h3>{activeProject.title}</h3>
              </div>
              <div className="showcase-modal-actions">
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-open-btn"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Öffnen
                </a>
                <button className="showcase-close-btn" onClick={closePreview}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
            <div className="showcase-modal-body">
              <iframe
                src={activeProject.url}
                title={activeProject.title}
                className="showcase-iframe"
              />
            </div>
          </div>
        </div>
      )}

    </>
  );
}
