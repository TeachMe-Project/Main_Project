import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/main.scss';
import {Auth0Provider} from '@auth0/auth0-react';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Auth0Provider
        domain="prasadkpd.us.auth0.com"
        clientId="FbgbRqzMDHQTtfynGLGbuuvJYJf1HJc0"
        redirectUri="http://localhost:3000/dashboard"
        audience="this"
        scope="openid profile email"
    >
        <BrowserRouter>
      <App/>
        </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
