import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'bootstrap5-toggle/css/bootstrap5-toggle.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'jquery/dist/jquery.min.js';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
// eslint-disable-next-line
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
