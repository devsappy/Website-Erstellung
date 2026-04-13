import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
          <div className="hero-image-wrapper">
            <img src="/logo.png" alt="Chatterify" className="hero-portrait" />
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
            <Link to="/web-development" className="service-card dark-card highlight-card">
              <h3>Full-Stack<br />Web Development</h3>
              <p>Custom, responsive and scalable websites — landing pages, business sites, e-commerce and web applications.</p>
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
            <Link to="/video-editing" className="service-card light-card">
              <h3>Video Editing<br />&amp; Production</h3>
              <p>Professional video editing for marketing, social media, YouTube content and promotional campaigns.</p>
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

      <section className="portfolio">
        <div className="container">
          <div className="badge">What We Offer</div>
          <div className="portfolio-header">
            <h2 className="section-title">Explore our solutions &amp;<br />service capabilities</h2>
            <p className="section-desc">From chatbots to hosting, we've got every angle covered.</p>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-card has-overlay">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Web Development" />
              <div className="overlay">
                <div className="overlay-tags"><span>Web</span><span>React</span></div>
                <div className="overlay-bottom">
                  <h4>Full-Stack Web Development</h4>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div>
            <div className="portfolio-card has-overlay">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Chatbot Integration" />
              <div className="overlay">
                <div className="overlay-tags"><span>AI</span><span>Chatbots</span></div>
                <div className="overlay-bottom">
                  <h4>Custom AI Chatbots</h4>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div>
            <div className="portfolio-card has-overlay">
              <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80" alt="Backend Systems" />
              <div className="overlay">
                <div className="overlay-tags"><span>Cloud</span><span>Backend</span></div>
                <div className="overlay-bottom">
                  <h4>Scalable Backend Systems</h4>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div>
            <div className="portfolio-card has-overlay">
              <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" alt="Video Production" />
              <div className="overlay">
                <div className="overlay-tags"><span>Video</span><span>Media</span></div>
                <div className="overlay-bottom">
                  <h4>Professional Video Editing</h4>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div>
            <div className="portfolio-card has-overlay">
              <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=600&q=80" alt="AI Automation" />
              <div className="overlay">
                <div className="overlay-tags"><span>AI</span><span>Voice</span></div>
                <div className="overlay-bottom">
                  <h4>Voice Automation Suite</h4>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
            </div>
            <div className="portfolio-card has-overlay">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Business Automation" />
              <div className="overlay">
                <div className="overlay-tags"><span>Auto</span><span>Process</span></div>
                <div className="overlay-bottom">
                  <h4>Business Process Automation</h4>
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
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