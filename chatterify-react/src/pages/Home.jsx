import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import blogPosts from '../data/blogPosts';
import usePageTitle from '../hooks/usePageTitle';
import ScrollStack, { ScrollStackItem } from '../components/ScrollStack';

const testimonials = [
  {
    quote1: "Chatterify transformed the way we handle customer interactions. Their AI chatbot handles 80% of our queries automatically, saving us hours every week.",
    quote2: "The team was responsive, transparent and delivered beyond expectations. Their web development and automation services are top-notch — highly recommended for any startup.",
    name: "Satisfied Client",
    title: "Startup Founder",
    image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote1: "Working with Chatterify on our premium e-commerce site was flawless. They nailed the design, and the custom checkout flow they built increased our conversion rate overnight.",
    quote2: "We're extremely pleased with the modern stack performance. It's lightning-fast and our mobile users love it.",
    name: "Alex Mercer",
    title: "E-Commerce Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80"
  },
  {
    quote1: "The AI Voice agent they deployed for our sales team is basically a 24/7 SDR. It books meetings, answers FAQs, and qualifies leads exactly as trained without taking a break.",
    quote2: "If you're looking for genuine AI automation that delivers ROI rather than an expensive gimmick, Chatterify is the right choice.",
    name: "Sarah Jenkins",
    title: "VP of Sales",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80"
  }
];

export default function Home() {
  usePageTitle(null, { path: '/' });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
          <div className="badge">About Chatterify</div>
          <div className="about-header">
            <h2 className="section-title">Ihre Webdesign Agentur für<br />Österreich & Deutschland</h2>
            <p className="section-desc">Wir verbinden innovatives Webdesign mit leistungsstarker<br />Technologie für Ihren digitalen Erfolg.</p>
          </div>
          <div className="about-content">
            <div className="about-image-card">
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Team working on digital solutions" />
              <div className="play-btn">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-item">
                <h3>5+</h3>
                <p>Projects delivered with cutting-edge technology and dedicated support</p>
              </div>
              <div className="stat-item">
                <h3>80%</h3>
                <p>Client satisfaction rate — we prioritize quality, transparency and results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container services-container">
          <div className="services-left">
            <div className="badge">Our Services</div>
            <h2 className="section-title">Website erstellen lassen:<br />Lösungen für moderne<br />Unternehmen</h2>
            <p>Von der professionellen Website-Erstellung bis zur KI-Automatisierung — wir liefern Webdesign auf Agenturniveau in der gesamten DACH-Region.</p>
            <Link to="/services" className="btn btn-solid mt-6">View Packages</Link>
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
              <h3>AI Chatbot<br />Integration</h3>
              <p>Smart chatbots that automate customer support, answer queries and boost engagement across your platforms.</p>
              <i className="fa-solid fa-arrow-right icon-arrow"></i>
            </Link>
            <Link to="/voice-agents" className="service-card light-card">
              <h3>AI Voice<br />Agents</h3>
              <p>Voice automation systems that handle calls, assist customers and integrate seamlessly with your business workflows.</p>
              <i className="fa-solid fa-arrow-right icon-arrow"></i>
            </Link>

          </div>
        </div>
      </section>

      <section className="experience">
        <div className="container">
          <div className="badge">Our Approach</div>
          <div className="experience-header">
            <h2 className="section-title">How we deliver<br />results for your business</h2>
            <p className="section-desc">Our step-by-step process ensures transparent<br />communication, fast turnaround and<br />high-quality outcomes.</p>
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
          <div className="badge">Explore</div>
          <div className="explore-header">
            <h2 className="section-title">Check out our work<br />&amp; latest insights</h2>
          </div>

          {/* Templates Samples */}
          <div className="explore-block">
            <div className="explore-block-top">
              <h3>Our Templates</h3>
              <Link to="/templates" className="explore-view-all">View all <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
            <div className="explore-samples-grid">
              {[
                { title: 'Aset AI', url: 'https://aset-six.vercel.app' },
                { title: 'Anon Store', url: 'https://anon-demo.vercel.app' },
                { title: 'ChatFlow', url: 'https://landing-page-for-ve.vercel.app' },
              ].map((item) => (
                <Link to="/templates" className="explore-sample-card" key={item.title}>
                  <div className="explore-sample-preview">
                    <iframe src={item.url} title={item.title} loading="lazy" tabIndex={-1} />
                  </div>
                  <span className="explore-sample-title">{item.title}</span>
                </Link>
              ))}
              <Link to="/templates" className="explore-view-all-card">
                <span>View all templates</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Blog Samples */}
          <div className="explore-block">
            <div className="explore-block-top">
              <h3>Latest Blogs</h3>
              <Link to="/blogs" className="explore-view-all">View all <i className="fa-solid fa-arrow-right"></i></Link>
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
                <span>View all blogs</span>
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
    </>
  )
}