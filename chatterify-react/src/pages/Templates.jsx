import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const projects = [
  {
    id: 0,
    title: 'Crunchbox',
    description: 'Bold e-commerce site for a snack brand featuring vibrant product showcases and a smooth ordering experience.',
    tags: ['E-Commerce', 'Food', 'Brand'],
    url: 'https://crunchbox-eight.vercel.app',
  },
  {
    id: 1,
    title: 'Wander PH',
    description: 'Travel discovery site exploring destinations across the Philippines with rich visuals and curated guides.',
    tags: ['Travel', 'Editorial', 'Discovery'],
    url: 'https://wander-ph.vercel.app',
  },
  {
    id: 2,
    title: 'StudioType',
    description: 'Creative studio website showcasing typography-driven design work, branding projects and visual identity.',
    tags: ['Studio', 'Typography', 'Portfolio'],
    url: 'https://studiotype.vercel.app',
  },
  {
    id: 3,
    title: 'Aset AI',
    description: 'Landing page for an AI-powered platform showcasing intelligent automation capabilities and services.',
    tags: ['Landing Page', 'AI', 'SaaS'],
    url: 'https://aset-six.vercel.app',
  },
  {
    id: 4,
    title: 'Matias — Creative Designer',
    description: 'Portfolio website for a creative visual designer showcasing work, services and brand identity.',
    tags: ['Portfolio', 'Creative', 'Design'],
    url: 'https://agencyowner-demo.vercel.app',
  },
  {
    id: 5,
    title: 'CollabTrack',
    description: 'A task and progress management platform designed for creative teams to organize and track projects.',
    tags: ['SaaS', 'Project Management', 'Dashboard'],
    url: 'https://collab-tracker.vercel.app',
  },
  {
    id: 6,
    title: 'Anon Store',
    description: 'Minimal e-commerce platform with a clean shopping experience, product listings and checkout flow.',
    tags: ['E-Commerce', 'Minimal', 'Store'],
    url: 'https://anon-demo.vercel.app',
  },
  {
    id: 7,
    title: 'Café Kaleido',
    description: 'Warm, inviting café website with menu highlights, ambiance gallery and reservation-ready layout.',
    tags: ['Hospitality', 'Café', 'Brand'],
    url: 'https://cafekaleido.vercel.app',
  },
  {
    id: 8,
    title: 'Landing Page — Starter',
    description: 'Clean, conversion-focused single-page landing site built for speed and maximum impact.',
    tags: ['Landing Page', 'Starter', 'Responsive'],
    url: 'https://landingpage1-peach.vercel.app',
  },
  {
    id: 9,
    title: 'Expertise & Risk Management',
    description: 'Professional B2B consulting site focused on risk assessment, mitigation strategies and expert advisory.',
    tags: ['B2B', 'Consulting', 'Corporate'],
    url: 'https://ve-v2.vercel.app',
  },
];

export default function Templates() {
  usePageTitle('Templates & Projekte', {
    description: 'Referenzprojekte und Templates von Chatterify — Landingpages, E-Commerce, SaaS und Portfolio-Websites für den DACH-Markt.',
    path: '/templates',
  });
  const [activeProject, setActiveProject] = useState(null);

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
          <div className="badge">Our Work</div>
          <h1 className="section-title">Projects we've<br />built & shipped</h1>
          <p className="page-header-desc">Real projects, real results. Click on any project to see the live website in action.</p>
        </div>
      </section>

      <section className="showcase-grid-section">
        <div className="container">
          <div className="showcase-grid">
            {projects.map((project) => (
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
                      <i className="fa-solid fa-eye"></i> Preview Site
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
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Open
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
