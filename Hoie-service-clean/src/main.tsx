import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/index.css';
import { enableScrolling } from './app/utils/enableScrolling';

// Enable scrolling immediately
enableScrolling();

// Also enable after DOM is fully loaded
window.addEventListener('DOMContentLoaded', enableScrolling);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
