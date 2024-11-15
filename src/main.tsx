import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './pages/App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
