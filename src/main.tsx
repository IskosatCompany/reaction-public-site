import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import { App } from '@/App';
import '@/styles/global.css';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Elemento #root não encontrado no index.html');
}

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Em produção o HTML já vem pré-renderizado (scripts/prerender.js); em dev o #root está vazio.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
