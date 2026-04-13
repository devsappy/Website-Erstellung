export default function Blog() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="badge">Blog</div>
          <h1 className="section-title">Insights on AI,<br />automation &amp; digital growth</h1>
          <p className="page-header-desc">Exploring the intersection of technology and business — from chatbot strategy to web development best practices.</p>
        </div>
      </section>

      <section className="blog-featured">
        <div className="container">
          <div className="blog-featured-card">
            <div className="blog-featured-image">
              <img src="https://images.unsplash.com/photo-1677442136019-7772581e1272?auto=format&fit=crop&w=1200&q=80" alt="AI Chatbots for Business" />
            </div>
            <div className="blog-featured-content">
              <div className="blog-tag">AI Chatbots</div>
              <h2>Why Every Startup Needs an AI Chatbot in 2026</h2>
              <p>Discover how AI chatbots can automate customer support, boost engagement, and save your team hours every week — all without breaking the bank.</p>
              <div className="blog-meta">
                <span className="blog-date"><i className="fa-regular fa-calendar"></i> March 12, 2026</span>
                <span className="blog-read"><i className="fa-regular fa-clock"></i> 8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            <article className="blog-card">
              <div className="blog-card-image">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" alt="Web Development" />
              </div>
              <div className="blog-card-content">
                <div className="blog-tag">Web Development</div>
                <h3>Building a Startup Website That Actually Converts</h3>
                <p>Key principles for designing and developing a business website that turns visitors into customers.</p>
                <div className="blog-meta">
                  <span className="blog-date"><i className="fa-regular fa-calendar"></i> Feb 28, 2026</span>
                  <span className="blog-read"><i className="fa-regular fa-clock"></i> 6 min read</span>
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-image">
                <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80" alt="Voice AI" />
              </div>
              <div className="blog-card-content">
                <div className="blog-tag">Voice AI</div>
                <h3>AI Voice Agents: The Future of Customer Communication</h3>
                <p>How voice automation is transforming customer service and why businesses are adopting it rapidly.</p>
                <div className="blog-meta">
                  <span className="blog-date"><i className="fa-regular fa-calendar"></i> Feb 14, 2026</span>
                  <span className="blog-read"><i className="fa-regular fa-clock"></i> 5 min read</span>
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-image">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" alt="Business Automation" />
              </div>
              <div className="blog-card-content">
                <div className="blog-tag">Automation</div>
                <h3>Workflow Automation: Save Time and Scale Faster</h3>
                <p>Practical automation strategies that help startups eliminate repetitive tasks and focus on growth.</p>
                <div className="blog-meta">
                  <span className="blog-date"><i className="fa-regular fa-calendar"></i> Jan 30, 2026</span>
                  <span className="blog-read"><i className="fa-regular fa-clock"></i> 7 min read</span>
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-image">
                <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=600&q=80" alt="Video Marketing" />
              </div>
              <div className="blog-card-content">
                <div className="blog-tag">Video Marketing</div>
                <h3>How Professional Video Editing Boosts Your Brand</h3>
                <p>Why high-quality video content is essential for social media growth and how to make it affordable.</p>
                <div className="blog-meta">
                  <span className="blog-date"><i className="fa-regular fa-calendar"></i> Jan 18, 2026</span>
                  <span className="blog-read"><i className="fa-regular fa-clock"></i> 9 min read</span>
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-image">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" alt="Agentic AI" />
              </div>
              <div className="blog-card-content">
                <div className="blog-tag">Agentic AI</div>
                <h3>From Chatbots to Autonomous Agents: The Next Leap</h3>
                <p>Understanding agentic AI and how autonomous agents are changing business process automation.</p>
                <div className="blog-meta">
                  <span className="blog-date"><i className="fa-regular fa-calendar"></i> Dec 22, 2025</span>
                  <span className="blog-read"><i className="fa-regular fa-clock"></i> 6 min read</span>
                </div>
              </div>
            </article>

            <article className="blog-card">
              <div className="blog-card-image">
                <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80" alt="E-Commerce" />
              </div>
              <div className="blog-card-content">
                <div className="blog-tag">E-Commerce</div>
                <h3>Launching an E-Commerce Store on a Startup Budget</h3>
                <p>A practical guide to getting your online store up and running without overspending on development.</p>
                <div className="blog-meta">
                  <span className="blog-date"><i className="fa-regular fa-calendar"></i> Dec 5, 2025</span>
                  <span className="blog-read"><i className="fa-regular fa-clock"></i> 4 min read</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}