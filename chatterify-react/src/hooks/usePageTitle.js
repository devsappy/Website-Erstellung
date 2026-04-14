import { useEffect } from 'react';

const BASE = 'Chatterify';
const SITE_URL = 'https://chatterify.in';
const DEFAULT_DESC = 'Ihre Webdesign Agentur für Österreich & Deutschland. Professionelle Website-Erstellung, SEO-optimierte Webentwicklung, KI-Chatbots und Voice Agents für Unternehmen im DACH-Raum.';

/**
 * Sets document title + updates meta description, canonical URL, and OG tags.
 * @param {string|null} title — Page-specific title (null = homepage default)
 * @param {object} [options]
 * @param {string} [options.description] — Meta description override
 * @param {string} [options.path] — Canonical path (e.g. "/about")
 */
export default function usePageTitle(title, options = {}) {
  const { description, path = '' } = options;

  useEffect(() => {
    // Title
    document.title = title
      ? `${title} — ${BASE}`
      : `${BASE} — Professionelles Webdesign & Website-Erstellung (DACH)`;

    // Meta description
    const desc = description || DEFAULT_DESC;
    setMeta('description', desc);
    setMeta('og:description', desc, true);
    setMeta('twitter:description', desc, true);

    // OG title
    setMeta('og:title', document.title, true);
    setMeta('twitter:title', document.title, true);

    // Canonical URL
    const fullUrl = `${SITE_URL}${path}`;
    setLink('canonical', fullUrl);
    setMeta('og:url', fullUrl, true);
  }, [title, description, path]);
}

function setMeta(name, content, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}
