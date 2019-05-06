import jsonLd from './json-ld';
const { stringify } = JSON;
const { head } = document;
const jsonLdScript = document.createElement('script');

jsonLdScript.type = 'application/ld+json';
jsonLdScript.dataset.jsonLd = 'https://unpkg.com/test-json-ld';
jsonLdScript.innerHTML = stringify(jsonLd);

head.appendChild(jsonLdScript);
