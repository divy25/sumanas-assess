import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider}  from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Auth0Provider
     domain='dev-j1vbsxzu.us.auth0.com'
     clientId ="38B5Tr2ZqY4KIKZ0tpu4kPo5tnpM1pGI"
     redirectUri={window.location.origin}
  >
          <React.StrictMode>
        <App />
  </React.StrictMode>
  </Auth0Provider>
  
);


reportWebVitals();
