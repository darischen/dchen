import { useEffect } from 'react';

// Canonical site origin. The bare domain 308-redirects to www, so www is canonical.
const SITE = 'https://www.darischen.com';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// Injects or updates a JSON-LD <script> tagged by id. Passing null removes it,
// so navigating away from a page clears that page's structured data.
function setJsonLd(id, data) {
  let el = document.head.querySelector(`script[data-seo="${id}"]`);
  if (data) {
    if (!el) {
      el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute('data-seo', id);
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
  } else if (el) {
    el.remove();
  }
}

// Sets per-page title, meta description, canonical URL, Open Graph / Twitter
// tags, a default share image, and optional per-page JSON-LD. react-snap
// serializes the live DOM after render, so these end up in the prerendered HTML
// that crawlers read.
export default function useSeo({
  title,
  description,
  path = '',
  image = `${SITE}/logo.png`,
  jsonLd = null,
}) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    if (title) {
      document.title = title;
      setMeta('property', 'og:title', title);
      setMeta('name', 'twitter:title', title);
    }
    if (description) {
      setMeta('name', 'description', description);
      setMeta('property', 'og:description', description);
      setMeta('name', 'twitter:description', description);
    }
    if (image) {
      setMeta('property', 'og:image', image);
      setMeta('name', 'twitter:image', image);
    }
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:type', 'website');
    setMeta('name', 'twitter:card', 'summary');
    setCanonical(url);
    setJsonLd('page', jsonLd);
  }, [title, description, path, image, jsonLd]);
}
