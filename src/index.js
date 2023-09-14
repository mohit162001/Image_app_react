import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-qhnpxtmjxmu0ttnx.us.auth0.com"
    clientId="JOCG4BTS8diCKU2cHelGZbikgNv7Djej"
    redirect_uri= {window.location.origin} >
    <App />
  </Auth0Provider>,
);

reportWebVitals();
