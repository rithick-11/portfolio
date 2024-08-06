import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const domainUrl = {
  loaclHost: "http://localhost:3010",
  cloud: "https://portfolio-server-9ly0.onrender.com",
};


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);