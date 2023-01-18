import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirtBootstrap from './first-bootstrap.jsx';
import NavbarBootstrap from './navbar-bootstrap.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarBootstrap />
    <FirtBootstrap />
    <App />
  </React.StrictMode>
);
