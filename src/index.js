import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirtBootstrap from './first-bootstrap.jsx';
import NavbarBootstrap from './navbar-bootstrap.jsx';
import CollapsibleExample from './dark-navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CollapsibleExample/>
    <NavbarBootstrap />
    <FirtBootstrap />
    {/* <App /> */}
  </React.StrictMode>
);
