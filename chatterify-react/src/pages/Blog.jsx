import { Link } from 'react-router-dom'
import blogPosts from '../data/blogPosts'

export default function Blog() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      <section className="page-header">
        <div className="container">
          <div className="badge">Blog</div>
          <h1 className="section-title">Insights on AI,<br />automation &amp; digital growth</h1>
          <p className="page-header-desc">Expert guides, comparisons and strategies for the DACH market — from chatbot implementation to web development costs.</p>
        </div>
      </section>

      <section className="blog-featured">
        <div className="container">
          <Link to={`/blogs/${featured.slug}`} className="blog-featured-card blog-featured-link">
            <div className="blog-featured-image">
              <img src={featured.image} alt={featured.title} />
            </div>
            <div className="blog-featured-content">
              <span className={`blog-tag ${featured.tagColor === 'dark' ? 'blog-tag-dark' : ''}`}>{featured.tag}</span>
              <h2>{featured.title}</h2>
              <p>{featured.subtitle}</p>
              <div className="blog-meta">
                <span className="blog-date"><i className="fa-regular fa-calendar"></i> {featured.date}</span>
                <span className="blog-read"><i className="fa-regular fa-clock"></i> {featured.readTime}</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container">
          <div className="blog-grid">
            {rest.map(post => (
              <Link to={`/blogs/${post.slug}`} key={post.id} className="blog-card blog-card-link">
                <div className="blog-card-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-card-content">
                  <span className={`blog-tag ${post.tagColor === 'dark' ? 'blog-tag-dark' : ''}`}>{post.tag}</span>
                  <h3>{post.title}</h3>
                  <p>{post.subtitle}</p>
                  <div className="blog-meta">
                    <span className="blog-date"><i className="fa-regular fa-calendar"></i> {post.date}</span>
                    <span className="blog-read"><i className="fa-regular fa-clock"></i> {post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}