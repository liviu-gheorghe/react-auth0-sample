import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";





const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <Auth0Provider
    domain="dev-7xee2v3w.eu.auth0.com"
    clientId="kcYV7IUYxyyRqq8ARB5jtSPKwz51qwfm"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);


reportWebVitals();
