import React from 'react';
import ReactDOM from 'react-dom/client';  // Note the use of 'react-dom/client'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!); // Create the root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
