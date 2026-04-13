export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-image-wrapper">
            <img src="/logo.png" alt="Chatterify" className="hero-portrait" />
          </div>
          <h1 className="hero-title">Intelligent<br />Digital<br />Solutions</h1>
          <div className="hero-subtitle">
            <p>We help businesses grow<br />with full-stack development,<br />AI chatbots, voice agents<br />&amp; creative media.</p>
          </div>
        </div>
      </section>

      <section className="client-marquee">
        <div className="marquee-track">
          <div className="client-pill"><i className="fa-solid fa-code"></i> Web Dev</div>
          <div className="client-pill"><i className="fa-solid fa-robot"></i> AI Chatbots</div>
          <div className="client-pill"><i className="fa-solid fa-microphone"></i> Voice AI</div>
          <div className="client-pill"><i className="fa-solid fa-video"></i> Video Editing</div>
          <div className="client-pill"><i className="fa-solid fa-server"></i> Backend</div>
          <div className="client-pill"><i className="fa-solid fa-gears"></i> Automation</div>
          <div className="client-pill"><i className="fa-solid fa-code"></i> Web Dev</div>
          <div className="client-pill"><i className="fa-solid fa-robot"></i> AI Chatbots</div>
          <div className="client-pill"><i className="fa-solid fa-microphone"></i> Voice AI</div>
          <div className="client-pill"><i className="fa-solid fa-video"></i> Video Editing</div>
          <div className="client-pill"><i className="fa-solid fa-server"></i> Backend</div>
          <div className="client-pill"><i className="fa-solid fa-gears"></i> Automation</div>
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

      <section className="services">
        <div className="container services-container">
          <div className="services-left">
            <div className="badge">Our Services</div>
            <h2 className="section-title">End-to-end digital<br />solutions for modern<br />businesses</h2>
            <p>From web development to AI automation, we deliver high-quality solutions at affordable prices.</p>
            <a href="/services" className="btn btn-solid mt-6">View Packages</a>
          </div>
          <div className="services-grid">
            <div className="service-card light-card">
              <h3>Full-Stack<br />Web Development</h3>
              <p>Custom, responsive and scalable websites — landing pages, business sites, e-commerce and web applications.</p>
              <i className="fa-solid fa-arrow-right icon-arrow"></i>
            </div>
            <div className="service-card light-card">
              <h3>AI Chatbot<br />Integration</h3>
              <p>Smart chatbots that automate customer support, answer queries and boost engagement across your platforms.</p>
              <i className="fa-solid fa-arrow-right icon-arrow"></i>
            </div>
            <div className="service-card dark-card">
              <h3>AI Voice<br />Agents</h3>
              <p>Voice automation systems that handle calls, assist customers and integrate seamlessly with your business workflows.</p>
              <i className="fa-solid fa-arrow-up-right-from-square icon-arrow"></i>
              <img className="cursor-hand" src="https://cdn-icons-png.flaticon.com/512/8046/8046039.png" alt="Cursor" />
            </div>
            <div className="service-card light-card">
              <h3>Video Editing<br />&amp; Production</h3>
              <p>Professional video editing for marketing, social media, YouTube content and promotional campaigns.</p>
              <i className="fa-solid fa-arrow-right icon-arrow"></i>
            </div>
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
            <div className="experience-item active">
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

      <section className="portfolio">
        <div className="container">
          <div className="badge">What We Offer</div>
          <div className="portfolio-header">
            <h2 className="section-title">Explore our solutions &amp;<br />service capabilities</h2>
            <p className="section-desc">From chatbots to hosting, we've got every angle covered.</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-card"><img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Web Development" /></div>
            <div className="portfolio-card"><img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Chatbot Integration" /></div>
            <div className="portfolio-card"><img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80" alt="Backend Systems" /></div>
            <div className="portfolio-card"><img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" alt="Video Production" /></div>
            <div className="portfolio-card has-overlay">
              <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=600&q=80" alt="AI Automation" />
              <div className="overlay">
                <div className="overlay-tags">
                  <span>AI</span>
                  <span>Automation</span>
                  <span>Voice</span>
                </div>
                <div className="overlay-bottom">
                  <h4>Chatterify — AI Chatbot &amp;<br />Voice Automation Suite</h4>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div>
            <div className="portfolio-card"><img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Business Automation" /></div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="container testimonial-container">
          <div className="quote-icon">"</div>
          <p className="quote-text mb-6">"Chatterify transformed the way we handle customer interactions. Their AI chatbot handles 80% of our queries automatically, saving us hours every week."</p>
          <p className="quote-text">"The team was responsive, transparent and delivered beyond expectations. Their web development and automation services are top-notch — highly recommended for any startup."</p>
          <div className="author">
            <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=100&q=80" alt="Client" className="author-img" />
            <div className="author-info">
              <div className="author-name">Satisfied Client</div>
              <div className="author-title">Startup Founder</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}