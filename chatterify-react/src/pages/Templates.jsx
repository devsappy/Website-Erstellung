import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';

const projects = [
  {
    id: 1,
    title: 'Aset AI',
    description: 'Landing page for an AI-powered platform showcasing intelligent automation capabilities and services.',
    tags: ['Landing Page', 'AI', 'SaaS'],
    url: 'https://aset-six.vercel.app',
  },
  {
    id: 2,
    title: 'Expertise & Risk Management',
    description: 'Professional B2B consulting site focused on risk assessment, mitigation strategies and expert advisory.',
    tags: ['B2B', 'Consulting', 'Corporate'],
    url: 'https://ve-v2.vercel.app',
  },
  {
    id: 3,
    title: 'Landing Page — Starter',
    description: 'Clean, conversion-focused single-page landing site built for speed and maximum impact.',
    tags: ['Landing Page', 'Starter', 'Responsive'],
    url: 'https://landingpage1-peach.vercel.app',
  },
  {
    id: 4,
    title: 'Landing Page — Modern',
    description: 'Sleek modern landing page template with bold visuals and smooth scroll experience.',
    tags: ['Landing Page', 'Modern', 'Template'],
    url: 'https://landingpage2-smoky.vercel.app',
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
    title: 'Buzball',
    description: 'Vibrant e-commerce site for a ready-to-drink cocktail brand with product showcase and ordering.',
    tags: ['E-Commerce', 'Beverage', 'Brand'],
    url: 'https://buzzball-demo.vercel.app',
  },
  {
    id: 7,
    title: 'Anon Store',
    description: 'Minimal e-commerce platform with a clean shopping experience, product listings and checkout flow.',
    tags: ['E-Commerce', 'Minimal', 'Store'],
    url: 'https://anon-demo.vercel.app',
  },
  {
    id: 8,
    title: 'Matias — Creative Designer',
    description: 'Portfolio website for a creative visual designer showcasing work, services and brand identity.',
    tags: ['Portfolio', 'Creative', 'Design'],
    url: 'https://agencyowner-demo.vercel.app',
  },
  {
    id: 9,
    title: 'ChatFlow',
    description: 'AI-powered customer support platform designed to streamline and automate customer interactions.',
    tags: ['SaaS', 'AI', 'Customer Support'],
    url: 'https://landing-page-for-ve.vercel.app',
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

      <section className="templates-cta">
        <div className="container templates-cta-container">
          <h2>Want something like this?</h2>
          <p>We build custom websites tailored to your brand. Let's discuss your next project.</p>
          <a href="https://calendly.com/chatterifyservice/new-meeting" target="_blank" rel="noopener noreferrer" className="btn btn-solid">Book a Call</a>
        </div>
      </section>
    </>
  );
}
