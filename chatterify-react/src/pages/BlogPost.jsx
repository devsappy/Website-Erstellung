import { useParams, Link } from 'react-router-dom'
import blogPosts from '../data/blogPosts'
import usePageTitle from '../hooks/usePageTitle';
import { BlogPostJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)
  usePageTitle(post ? post.title : 'Beitrag nicht gefunden', {
    description: post ? post.subtitle : '',
    path: post ? `/blogs/${post.slug}` : '/blogs',
  });

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '200px', textAlign: 'center' }}>
        <h1>Beitrag nicht gefunden</h1>
        <p style={{ marginTop: '16px' }}>Dieser Blog-Beitrag existiert nicht.</p>
        <Link to="/blogs" className="btn btn-solid" style={{ marginTop: '24px' }}>Zurück zum Blog</Link>
      </div>
    )
  }

  return (
    <article>
      <BlogPostJsonLd
        title={post.title}
        description={post.subtitle}
        image={post.image}
        datePublished={post.date}
        author={post.author}
        url={`/blogs/${post.slug}`}
      />
      <BreadcrumbJsonLd items={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blogs' }, { name: post.title, path: `/blogs/${post.slug}` }]} />
      <section className="blog-post-hero">
        <div className="container">
          <Link to="/blogs" className="blog-post-back"><i className="fa-solid fa-arrow-left"></i> Zurück zum Blog</Link>
          <span className={`blog-tag ${post.tagColor === 'dark' ? 'blog-tag-dark' : ''}`}>{post.tag}</span>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-subtitle">{post.subtitle}</p>
          <div className="blog-post-meta-row">
            <span><i className="fa-regular fa-calendar"></i> {post.date}</span>
            <span><i className="fa-regular fa-clock"></i> {post.readTime}</span>
            <span><i className="fa-regular fa-user"></i> {post.author}</span>
          </div>
        </div>
      </section>

      <section className="blog-post-image-section">
        <div className="container">
          <img src={post.image} alt={post.title} className="blog-post-hero-image" />
        </div>
      </section>

      <section className="blog-post-content">
        <div className="container blog-post-content-inner">
          {post.content.map((block, i) => {
            switch (block.type) {
              case 'paragraph':
                return <p key={i} dangerouslySetInnerHTML={{ __html: block.text }} />
              case 'heading':
                return <h2 key={i}>{block.text}</h2>
              case 'list':
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                )
              case 'table':
                return (
                  <div key={i} className="blog-table-wrapper">
                    <table className="blog-table">
                      <thead>
                        <tr>
                          {block.headers.map((h, k) => <th key={k}>{h}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, k) => (
                          <tr key={k}>
                            {row.map((cell, l) => <td key={l} dangerouslySetInnerHTML={{ __html: cell }} />)}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              case 'callout':
                return (
                  <div key={i} className="blog-callout">
                    <i className="fa-solid fa-bolt"></i>
                    <p dangerouslySetInnerHTML={{ __html: block.text }} />
                  </div>
                )
              default:
                return null
            }
          })}
        </div>
      </section>

      <section className="blog-post-cta">
        <div className="container blog-post-cta-inner">
          <h2>Bereit, Ihre digitale Präsenz auf das nächste Level zu heben?</h2>
          <p>Chatterify und OD Solution bieten individuelle Beratung und technische Umsetzung für Unternehmen im DACH-Raum.</p>
          <Link to="/contact" className="btn btn-solid">Kostenlos beraten lassen</Link>
        </div>
      </section>
    </article>
  )
}