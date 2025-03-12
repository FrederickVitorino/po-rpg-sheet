import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import GlobalStyles from './styles/globalStyles';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <GlobalStyles />
        <App />
    </StrictMode>,
)
