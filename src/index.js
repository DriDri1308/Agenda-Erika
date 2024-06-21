import React from 'react';
import { createRoot } from 'react-dom/client'; // Importe de react-dom/client
import App from './components/App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);