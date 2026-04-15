import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import blogPosts from '../data/blogPosts';
import usePageTitle from '../hooks/usePageTitle';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

const testimonials = [
  {
    quote1: "Chatterify hat unsere Kundenkommunikation komplett verändert. Der KI-Chatbot bearbeitet 80 % unserer Anfragen automatisch und spart uns jede Woche Stunden an Arbeit.",
    quote2: "Das Team war reaktionsschnell, transparent und hat unsere Erwartungen übertroffen. Die Webentwicklung und Automatisierung sind erstklassig — uneingeschränkt empfohlen für jedes Startup.",
    name: "Zufriedene Kundin",
    title: "Startup-Gründerin",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote1: "Die Zusammenarbeit mit Chatterify für unseren Premium-Onlineshop war reibungslos. Das Design sitzt perfekt, und der individuelle Checkout-Prozess hat unsere Conversion-Rate über Nacht gesteigert.",
    quote2: "Wir sind extrem zufrieden mit der Performance des modernen Stacks. Die Seite ist blitzschnell und unsere mobilen Nutzer:innen lieben sie.",
    name: "Alex Mercer",
    title: "E-Commerce-Leiter",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote1: "Der KI-Voice-Agent, den sie für unser Vertriebsteam eingesetzt haben, ist im Grunde ein 24/7-Vertriebsmitarbeiter. Er bucht Termine, beantwortet FAQs und qualifiziert Leads genau wie trainiert — ohne Pause.",
    quote2: "Wenn Sie echte KI-Automatisierung suchen, die echten ROI liefert statt nur ein teures Gadget zu sein, ist Chatterify die richtige Wahl.",
    name: "Sarah Jenkins",
    title: "Vertriebsleiterin",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
  }
];

export default function Home() {
  usePageTitle(null, { path: '/' });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [activeSample, setActiveSample] = useState(null);

  useEffect(() => {
    document.body.style.overflow = activeSample ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [activeSample]);
  const videoRef = useRef(null);
  const videoCardRef = useRef(null);

  // Only mount the <video> element (and fetch metadata) when the card
  // scrolls near the viewport, so the 18 MB file never blocks initial page load.
  useEffect(() => {
    if (!videoCardRef.current || videoReady) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoReady(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '200px' }
    );
    observer.observe(videoCardRef.current);
    return () => observer.disconnect();
  }, [videoReady]);

  const toggleVideo = () => {
    // First click mounts the <video> if it hasn't been created yet
    if (!videoReady) {
      setVideoReady(true);
      // Defer play until React renders the element
      setTimeout(() => {
        const v = videoRef.current;
        if (v) { v.play(); setVideoPlaying(true); }
      }, 0);
      return;
    }
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setVideoPlaying(true);
    } else {
      video.pause();
      setVideoPlaying(false);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[currentTestimonial];

  return (
    <>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-image-wrapper" style={{ display: 'flex', gap: '4px', alignItems: 'center', width: 'auto', background: 'transparent', overflow: 'visible', right: '0' }}>
            <img src="/home_logo.png" alt="Chatterify" style={{ width: '100%', maxWidth: '500px', height: 'auto', objectFit: 'contain' }} />
          </div>
          <h1 className="hero-title">Professionelles<br />Webdesign<br />(DACH)</h1>
          <div className="hero-subtitle">
            <p>Maßgeschneiderte Website-Erstellung,<br />SEO-optimierte Webentwicklung und<br />KI-Lösungen für Unternehmen in<br />Österreich und Deutschland.</p>
          </div>
        </div>
      </section>



      <section className="about">
        <div className="container">
          <div className="badge">Über Chatterify</div>
          <div className="about-header">
            <h2 className="section-title">Ihre Webdesign Agentur für<br />Österreich & Deutschland</h2>
            <p className="section-desc">Wir verbinden innovatives Webdesign mit leistungsstarker<br />Technologie für Ihren digitalen Erfolg.</p>
          </div>
          <div className="about-content">
            <div
              ref={videoCardRef}
              className={`about-image-card ${videoPlaying ? 'is-playing' : ''}`}
              onClick={toggleVideo}
            >
              {videoReady ? (
                <video
                  ref={videoRef}
                  className="about-video"
                  loop
                  muted
                  playsInline
                  preload="none"
                  poster="/about-video-poster.jpg"
                  onPlay={() => setVideoPlaying(true)}
                  onPause={() => setVideoPlaying(false)}
                  onEnded={() => setVideoPlaying(false)}
                  aria-label="Chatterify-Team bei der Arbeit"
                >
                  <source src="/about-video.webm" type="video/webm" />
                  <source src="/about-video.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src="/about-video-poster.jpg"
                  alt="Chatterify-Team bei der Arbeit"
                  className="about-video"
                  loading="lazy"
                  decoding="async"
                />
              )}
              <button
                type="button"
                className="play-btn"
                onClick={(e) => { e.stopPropagation(); toggleVideo(); }}
                  aria-label={videoPlaying ? 'Video pausieren' : 'Video abspielen'}
              >
                <i className={`fa-solid ${videoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
              </button>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>5+</h3>
                <p>5+ Projekte mit modernster Technologie und engagierter Betreuung umgesetzt</p>
              </div>
              <div className="stat-item">
                <h3>80%</h3>
                <p>Kundenzufriedenheit — wir priorisieren Qualität, Transparenz und Ergebnisse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container services-container">
          <div className="services-left">
            <div className="badge">Unsere Leistungen</div>
            <h2 className="section-title">Website erstellen lassen:<br />Lösungen für moderne<br />Unternehmen</h2>
            <p>Von der professionellen Website-Erstellung bis zur KI-Automatisierung — wir liefern Webdesign auf Agenturniveau in der gesamten DACH-Region.</p>
            <Link to="/services" className="btn btn-solid mt-6">Pakete ansehen</Link>
          </div>
          <div className="services-grid">
            <Link to="/web-development" className="service-card dark-card highlight-card" style={{ gridColumn: 'span 2' }}>
              <h3>Premium Webdesign<br />&amp; Website-Erstellung</h3>
              <p>Individuelle, responsive und SEO-optimierte Websites. Egal ob Landingpage, Unternehmenswebsite oder E-Commerce — wir sind Ihre Webentwickler für Österreich und Deutschland.</p>
              <div className="service-card-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Next.js</span>
                <span>MongoDB</span>
                <span>AWS</span>
                <span>PostgreSQL</span>
              </div>
              <i className="fa-solid fa-arrow-up-right-from-square icon-arrow"></i>
            </Link>
            <Link to="/ai-chatbots" className="service-card light-card">
              <h3>KI-Chatbot<br />Integration</h3>
              <p>Intelligente Chatbots, die Ihren Kundensupport automatisieren, Anfragen beantworten und die Interaktion auf allen Plattformen steigern.</p>
              <i className="fa-solid fa-arrow-right icon-arrow"></i>
            </Link>
            <Link to="/voice-agents" className="service-card light-card">
              <h3>KI-Voice<br />Agents</h3>
              <p>Sprachautomatisierung für eingehende und ausgehende Anrufe, die Kunden assistiert und sich nahtlos in Ihre Geschäftsprozesse integriert.</p>
              <i className="fa-solid fa-arrow-right icon-arrow"></i>
            </Link>

          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <div className="badge">Unser Ansatz</div>
          <div className="experience-header">
            <h2 className="section-title">Wie wir Ergebnisse<br />für Ihr Unternehmen liefern</h2>
            <p className="section-desc">Unser schrittweiser Prozess sorgt für transparente<br />Kommunikation, schnelle Umsetzung und<br />hochwertige Ergebnisse.</p>
          </div>
          <div className="experience-stack">
            <ScrollStack useWindowScroll itemDistance={16} itemStackDistance={20} stackPosition="22%" baseScale={0.88}>
              <ScrollStackItem itemClassName="experience-stack-card">
                <div className="exp-icon"><i className="fa-solid fa-compass-drafting"></i></div>
                <div className="exp-info">
                  <span className="exp-eyebrow">Step 1 · Woche 1</span>
                  <h3>Discovery &amp; Strategy</h3>
                  <p>Wir analysieren Ihre Zielgruppe, Wettbewerber und Geschäftsziele, um eine maßgeschneiderte Webdesign- und SEO-Strategie für den DACH-Markt zu entwickeln — bevor eine einzige Zeile Code geschrieben wird.</p>
                  <ul className="exp-features">
                    <li><i className="fa-solid fa-check"></i> Stakeholder-Workshop &amp; Brand Audit</li>
                    <li><i className="fa-solid fa-check"></i> Keyword- &amp; Wettbewerbsanalyse (DE/AT)</li>
                    <li><i className="fa-solid fa-check"></i> Sitemap, User Flows &amp; Tech-Stack-Auswahl</li>
                  </ul>
                </div>
                <div className="exp-year">01</div>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="experience-stack-card">
                <div className="exp-icon"><i className="fa-solid fa-code"></i></div>
                <div className="exp-info">
                  <span className="exp-eyebrow">Step 2 · Woche 2–5</span>
                  <h3>Design &amp; Development</h3>
                  <p>Pixelgenaues UI-Design in Figma, gefolgt von performantem Custom-Code in React, Next.js und Tailwind. Sie erhalten wöchentliche Previews und können in jeder Phase Feedback geben.</p>
                  <ul className="exp-features">
                    <li><i className="fa-solid fa-check"></i> Responsive UI &amp; Design-System</li>
                    <li><i className="fa-solid fa-check"></i> Core Web Vitals optimiert (90+ Lighthouse)</li>
                    <li><i className="fa-solid fa-check"></i> CMS-Integration &amp; SEO-On-Page</li>
                  </ul>
                </div>
                <div className="exp-year">02</div>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="experience-stack-card">
                <div className="exp-icon"><i className="fa-solid fa-vial-circle-check"></i></div>
                <div className="exp-info">
                  <span className="exp-eyebrow">Step 3 · Woche 6</span>
                  <h3>Testing &amp; Integration</h3>
                  <p>QA über Geräte und Browser, Anbindung von KI-Chatbots, Voice Agents, CRM und Analytics. DSGVO-konforme Cookie-Banner und vollständige Datenschutz-Compliance inklusive.</p>
                  <ul className="exp-features">
                    <li><i className="fa-solid fa-check"></i> Cross-Browser- &amp; Mobile-Tests</li>
                    <li><i className="fa-solid fa-check"></i> Chatbot, Voice &amp; CRM-Integration</li>
                    <li><i className="fa-solid fa-check"></i> DSGVO &amp; Accessibility (WCAG)</li>
                  </ul>
                </div>
                <div className="exp-year">03</div>
              </ScrollStackItem>
              <ScrollStackItem itemClassName="experience-stack-card">
                <div className="exp-icon"><i className="fa-solid fa-rocket"></i></div>
                <div className="exp-info">
                  <span className="exp-eyebrow">Step 4 · Go-Live &amp; Beyond</span>
                  <h3>Launch &amp; Ongoing Support</h3>
                  <p>Deployment auf Vercel oder Ihrem bevorzugten Hosting, kontinuierliches Monitoring und priorisierter Support. Wir wachsen mit Ihrem Geschäft und liefern messbare Performance-Updates.</p>
                  <ul className="exp-features">
                    <li><i className="fa-solid fa-check"></i> Zero-Downtime Deployment</li>
                    <li><i className="fa-solid fa-check"></i> 24/7 Monitoring &amp; Uptime-Reporting</li>
                    <li><i className="fa-solid fa-check"></i> Monatliche Performance- &amp; SEO-Updates</li>
                  </ul>
                </div>
                <div className="exp-year">04</div>
              </ScrollStackItem>
            </ScrollStack>
          </div>
        </div>
      </section>

      <section className="explore-section">
        <div className="container">
          <div className="badge">Entdecken</div>
          <div className="explore-header">
            <h2 className="section-title">Unsere Projekte &<br />aktuelle Insights</h2>
          </div>

          {/* Templates Samples */}
          <div className="explore-block">
            <div className="explore-block-top">
              <h3>Unsere Templates</h3>
              <Link to="/templates" className="explore-view-all">Alle ansehen <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="explore-samples-grid">
              {[
                { title: 'Crunchbox', url: 'https://crunchbox-eight.vercel.app' },
                { title: 'Wander PH', url: 'https://wander-ph.vercel.app' },
                { title: 'StudioType', url: 'https://studiotype.vercel.app' },
              ].map((item) => (
                <div
                  className="explore-sample-card"
                  key={item.title}
                  onClick={() => setActiveSample(item)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="explore-sample-preview">
                    <iframe src={item.url} title={item.title} loading="lazy" tabIndex={-1} />
                  </div>
                  <span className="explore-sample-title">{item.title}</span>
                </div>
              ))}
              <Link to="/templates" className="explore-view-all-card">
                <span>Alle Templates ansehen</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Blog Samples */}
          <div className="explore-block">
            <div className="explore-block-top">
              <h3>Aktuelle Blogbeiträge</h3>
              <Link to="/blogs" className="explore-view-all">Alle ansehen <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="explore-samples-grid">
              {blogPosts.slice(0, 3).map((post) => (
                <Link to={`/blogs/${post.slug}`} className="explore-blog-card" key={post.id}>
                  <div className="explore-blog-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="explore-blog-info">
                    <span className="explore-blog-tag">{post.tag}</span>
                    <h4>{post.title}</h4>
                  </div>
                </Link>
              ))}
              <Link to="/blogs" className="explore-view-all-card">
                <span>Alle Blogbeiträge ansehen</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container testimonial-container">
          <div className="quote-icon">"</div>
          <div key={currentTestimonial} className="animate-fade-in">
            <p className="quote-text mb-6">"{activeTestimonial.quote1}"</p>
            {activeTestimonial.quote2 && <p className="quote-text">"{activeTestimonial.quote2}"</p>}
            <div className="author">
              <img src={activeTestimonial.image} alt={activeTestimonial.name} className="author-img" />
              <div className="author-info">
                <div className="author-name">{activeTestimonial.name}</div>
                <div className="author-title">{activeTestimonial.title}</div>
              </div>
            </div>
          </div>
          <div className="carousel-dots">
             {testimonials.map((_, idx) => (
               <div 
                 key={idx} 
                 className={`carousel-dot ${idx === currentTestimonial ? 'active' : ''}`}
                 onClick={() => setCurrentTestimonial(idx)}
               ></div>
             ))}
          </div>
        </div>
      </section>

      {activeSample && (
        <div className="showcase-modal-backdrop" onClick={() => setActiveSample(null)}>
          <div className="showcase-modal" onClick={(e) => e.stopPropagation()}>
            <div className="showcase-modal-header">
              <div className="showcase-modal-title">
                <h3>{activeSample.title}</h3>
              </div>
              <div className="showcase-modal-actions">
                <a
                  href={activeSample.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="showcase-open-btn"
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i> Öffnen
                </a>
                <button className="showcase-close-btn" onClick={() => setActiveSample(null)}>
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
            <div className="showcase-modal-body">
              <iframe
                src={activeSample.url}
                title={activeSample.title}
                className="showcase-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}