import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import blogPosts from '../data/blogPosts';

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
            <img src="/logo.png" alt="Chatterify" style={{ width: '100%', maxWidth: '280px', height: 'auto', objectFit: 'contain', marginRight: '-50px' }} />
            <span style={{ fontSize: '28px', color: 'var(--text-secondary)', fontWeight: '400', fontFamily: 'serif', transform: 'translateY(10px)' }}>&amp;</span>
            <img src="/partner-logo.png" alt="Partner OS" style={{ width: '100%', maxWidth: '220px', height: 'auto', objectFit: 'contain' }} />
          </div>
          <h1 className="hero-title">Intelligent<br />Digital<br />Solutions</h1>
          <div className="hero-subtitle">
            <p>We help businesses grow<br />with full-stack development,<br />AI chatbots, voice agents<br />&amp; creative media.</p>
          </div>
        </div>
      </section>



      <section className="about">
        <div className="container">
          <div className="badge">About Chatterify</div>
          <div className="about-header">
            <h2 className="section-title">Making advanced technology<br />accessible to every business</h2>
            <p className="section-desc">We bridge the gap between AI technologies<br />and practical business solutions.</p>
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
            <h2 className="section-title">End-to-end digital<br />solutions for modern<br />businesses</h2>
            <p>From web development to AI automation, we deliver high-quality solutions at affordable prices.</p>
            <Link to="/services" className="btn btn-solid mt-6">View Packages</Link>
          </div>
          <div className="services-grid">
            <Link to="/web-development" className="service-card dark-card highlight-card" style={{ gridColumn: 'span 2' }}>
              <h3>Full-Stack<br />Web Development</h3>
              <p>Custom, responsive and scalable websites — landing pages, business sites, e-commerce and web applications. Built with modern frameworks and optimized for speed, security and SEO from day one.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                <span style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>React</span>
                <span style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>Node.js</span>
                <span style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>Next.js</span>
                <span style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>MongoDB</span>
                <span style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>AWS</span>
                <span style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>PostgreSQL</span>
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
          <div className="experience-list">
            <div className="experience-item">
              <div className="exp-info">
                <h3>Discovery &amp; Strategy</h3>
                <p>We understand your goals, audience and requirements to craft a tailored strategy before writing a single line of code.</p>
              </div>
              <div className="exp-year">Step 1</div>
            </div>
            <div className="experience-item">
              <div className="exp-info">
                <h3>Design &amp; Development</h3>
                <p>Our skilled team builds your solution using modern tech stacks, keeping you in the loop at every milestone.</p>
              </div>
              <div className="exp-year">Step 2</div>
            </div>
            <div className="experience-item">
              <div className="exp-info">
                <h3>Testing &amp; Integration</h3>
                <p>Rigorous testing and seamless integration of AI chatbots, voice agents and backend systems into your workflow.</p>
              </div>
              <div className="exp-year">Step 3</div>
            </div>
            <div className="experience-item border-none">
              <div className="exp-info">
                <h3>Launch &amp; Ongoing Support</h3>
                <p>We deploy your project and provide maintenance, monitoring and priority support to keep everything running smoothly.</p>
              </div>
              <div className="exp-year">Step 4</div>
            </div>
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
                { title: 'CollabTrack', url: 'https://collab-tracker.vercel.app' },
                { title: 'Matias — Creative Designer', url: 'https://agencyowner-demo.vercel.app' },
              ].map((item) => (
                <Link to="/templates" className="explore-sample-card" key={item.title}>
                  <div className="explore-sample-preview">
                    <iframe src={item.url} title={item.title} loading="lazy" tabIndex={-1} />
                  </div>
                  <span className="explore-sample-title">{item.title}</span>
                </Link>
              ))}
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