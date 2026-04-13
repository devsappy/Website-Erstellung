export default function Services() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="badge">Services &amp; Packages</div>
          <h1 className="section-title">Affordable digital<br />solutions for every<br />business size</h1>
          <p className="page-header-desc">From startup essentials to enterprise automation — choose the package that fits your needs and budget.</p>
        </div>
      </section>

      <section className="templates-filter">
        <div className="container">
          <div className="filter-tabs">
            <button className="filter-tab active" data-filter="all">All</button>
            <button className="filter-tab" data-filter="web">Web Dev</button>
            <button className="filter-tab" data-filter="ai">AI &amp; Chatbots</button>
            <button className="filter-tab" data-filter="voice">Voice AI</button>
            <button className="filter-tab" data-filter="video">Video</button>
            <button className="filter-tab" data-filter="packages">Packages</button>
          </div>
        </div>
      </section>

      <section className="templates-grid-section">
        <div className="container">
          <div className="templates-grid">
            <div className="template-card" data-category="web">
              <div className="template-card-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Landing Page" />
                <div className="template-overlay">
                  <a href="/contact" className="btn btn-sm btn-white">Get Quote</a>
                </div>
              </div>
              <div className="template-card-info">
                <div className="template-tags">
                  <span className="template-tag">Web Dev</span>
                  <span className="template-tag">Starter</span>
                </div>
                <h3>Landing Page Website</h3>
                <p>Single-page responsive landing site to establish your online presence quickly and effectively.</p>
                <div className="template-meta">
                  <span><i className="fa-solid fa-indian-rupee-sign"></i> 5,000 - 12,000</span>
                  <span><i className="fa-solid fa-clock"></i> 3-5 days</span>
                </div>
              </div>
            </div>

            <div className="template-card" data-category="web">
              <div className="template-card-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Business Website" />
                <div className="template-overlay">
                  <a href="/contact" className="btn btn-sm btn-white">Get Quote</a>
                </div>
              </div>
              <div className="template-card-info">
                <div className="template-tags">
                  <span className="template-tag">Web Dev</span>
                  <span className="template-tag">Business</span>
                </div>
                <h3>Business Website</h3>
                <p>Multi-page professional website with modern design, optimized for performance and conversions.</p>
                <div className="template-meta">
                  <span><i className="fa-solid fa-indian-rupee-sign"></i> 12,000 - 30,000</span>
                  <span><i className="fa-solid fa-clock"></i> 1-2 weeks</span>
                </div>
              </div>
            </div>

            <div className="template-card" data-category="ai">
              <div className="template-card-image">
                <img src="https://images.unsplash.com/photo-1677442136019-7772581e1272?auto=format&fit=crop&w=600&q=80" alt="AI Chatbot" />
                <div className="template-overlay">
                  <a href="/contact" className="btn btn-sm btn-white">Get Quote</a>
                </div>
              </div>
              <div className="template-card-info">
                <div className="template-tags">
                  <span className="template-tag">AI</span>
                  <span className="template-tag">Chatbot</span>
                </div>
                <h3>AI Chatbot Integration</h3>
                <p>Smart chatbots to automate customer support, handle queries and improve engagement 24/7.</p>
                <div className="template-meta">
                  <span><i className="fa-solid fa-indian-rupee-sign"></i> 5,000 - 70,000</span>
                  <span><i className="fa-solid fa-clock"></i> Custom</span>
                </div>
              </div>
            </div>

            <div className="template-card" data-category="voice">
              <div className="template-card-image">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80" alt="AI Voice Agent" />
                <div className="template-overlay">
                  <a href="/contact" className="btn btn-sm btn-white">Get Quote</a>
                </div>
              </div>
              <div className="template-card-info">
                <div className="template-tags">
                  <span className="template-tag">Voice AI</span>
                  <span className="template-tag">Automation</span>
                </div>
                <h3>AI Voice Agents</h3>
                <p>Voice automation systems that handle calls, assist customers, and integrate with your business workflows.</p>
                <div className="template-meta">
                  <span><i className="fa-solid fa-indian-rupee-sign"></i> 10,000 - 1,50,000</span>
                  <span><i className="fa-solid fa-clock"></i> Custom</span>
                </div>
              </div>
            </div>

            <div className="template-card" data-category="web">
              <div className="template-card-image">
                <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=600&q=80" alt="E-Commerce Website" />
                <div className="template-overlay">
                  <a href="/contact" className="btn btn-sm btn-white">Get Quote</a>
                </div>
              </div>
              <div className="template-card-info">
                <div className="template-tags">
                  <span className="template-tag">Web Dev</span>
                  <span className="template-tag">E-Commerce</span>
                </div>
                <h3>E-Commerce Website</h3>
                <p>Full-featured online store with product pages, cart, checkout and payment integration.</p>
                <div className="template-meta">
                  <span><i className="fa-solid fa-indian-rupee-sign"></i> 25,000 - 80,000</span>
                  <span><i className="fa-solid fa-clock"></i> 2-4 weeks</span>
                </div>
              </div>
            </div>

            <div className="template-card" data-category="video">
              <div className="template-card-image">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80" alt="Video Editing" />
                <div className="template-overlay">
                  <a href="/contact" className="btn btn-sm btn-white">Get Quote</a>
                </div>
              </div>
              <div className="template-card-info">
                <div className="template-tags">
                  <span className="template-tag">Video</span>
                  <span className="template-tag">Creative</span>
                </div>
                <h3>Professional Video Editing</h3>
                <p>High-quality video editing for marketing, YouTube, social media reels and promotional content.</p>
                <div className="template-meta">
                  <span><i className="fa-solid fa-indian-rupee-sign"></i> 300 - 20,000</span>
                  <span><i className="fa-solid fa-clock"></i> Varies</span>
                </div>
              </div>
            </div>

            <div className="template-card" data-category="web">
              <div className="template-card-image">
                <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=600&q=80" alt="Custom Web App" />
                <div className="template-overlay">
                  <a href="/contact" className="btn btn-sm btn-white">Get Quote</a>
                </div>
              </div>
              <div className="template-card-info">
                <div className="template-tags">
                  <span className="template-tag">Web Dev</span>
                  <span className="template-tag">Custom App</span>
                </div>
                <h3>Custom Web Application</h3>
                <p>Bespoke web applications with advanced functionality, API integrations and scalable architecture.</p>
                <div className="template-meta">
                  <span><i className="fa-solid fa-indian-rupee-sign"></i> 30,000 - 1,20,000+</span>
                  <span><i className="fa-solid fa-clock"></i> 4-8 weeks</span>
                </div>
              </div>
            </div>

            <div className="template-card" data-category="ai">
              <div className="template-card-image">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" alt="Agentic AI" />
                <div className="template-overlay">
                  <a href="/contact" className="btn btn-sm btn-white">Get Quote</a>
                </div>
              </div>
              <div className="template-card-info">
                <div className="template-tags">
                  <span className="template-tag">AI</span>
                  <span className="template-tag">Agentic</span>
                </div>
                <h3>Agentic AI Solutions</h3>
                <p>Autonomous AI agents for business process automation, workflow optimization and smart decision-making.</p>
                <div className="template-meta">
                  <span><i className="fa-solid fa-indian-rupee-sign"></i> Custom Pricing</span>
                  <span><i className="fa-solid fa-clock"></i> Scoping Required</span>
                </div>
              </div>
            </div>

            <div className="template-card" data-category="packages">
              <div className="template-card-image">
                <img src="https://images.unsplash.com/photo-1512941937666-8e1c3f496068?auto=format&fit=crop&w=600&q=80" alt="Starter Package" />
                <div className="template-overlay">
                  <a href="/contact" className="btn btn-sm btn-white">Get Started</a>
                </div>
              </div>
              <div className="template-card-info">
                <div className="template-tags">
                  <span className="template-tag">Package</span>
                  <span className="template-tag">Starter</span>
                </div>
                <h3>Starter Package — 10,000</h3>
                <p>Landing page website, basic chatbot and two edited reels — perfect for startups getting off the ground.</p>
                <div className="template-meta">
                  <span><i className="fa-solid fa-star"></i> Best Value</span>
                  <span><i className="fa-solid fa-bolt"></i> Quick Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="templates-cta">
        <div className="container templates-cta-container">
          <h2>Need a custom solution?</h2>
          <p>Every business is unique. Tell us your requirements and we'll craft a tailored package that delivers real results.</p>
          <a href="/contact" className="btn btn-solid">Talk to Us</a>
        </div>
      </section>
    </>
  )
}