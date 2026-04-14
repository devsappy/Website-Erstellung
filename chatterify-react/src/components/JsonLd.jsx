import { useEffect } from 'react';

const SITE_URL = 'https://chatterify.in';

/**
 * Injects a JSON-LD script tag into <head> and removes it on unmount.
 * Pass any schema.org-compliant object as `data`.
 */
export default function JsonLd({ data }) {
  useEffect(() => {
    if (!data) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, [data]);
  return null;
}

/** Breadcrumb schema helper */
export function BreadcrumbJsonLd({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
  return <JsonLd data={data} />;
}

/** Service page schema helper */
export function ServiceJsonLd({ name, description, url }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Chatterify',
      url: SITE_URL,
    },
    areaServed: [
      { '@type': 'Country', name: 'Austria' },
      { '@type': 'Country', name: 'Germany' },
    ],
  };
  return <JsonLd data={data} />;
}

/** Blog post schema helper */
export function BlogPostJsonLd({ title, description, image, datePublished, author, url }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    datePublished,
    author: {
      '@type': 'Organization',
      name: author || 'Chatterify',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Chatterify',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
    },
    url: `${SITE_URL}${url}`,
    inLanguage: 'de',
    mainEntityOfPage: `${SITE_URL}${url}`,
  };
  return <JsonLd data={data} />;
}

/** FAQ page schema helper */
export function FaqJsonLd({ items }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
  return <JsonLd data={data} />;
}
