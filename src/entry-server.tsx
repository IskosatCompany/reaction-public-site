import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';

import { App } from '@/App';

/** Usado por scripts/prerender.js para gerar o HTML estático no build. */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
