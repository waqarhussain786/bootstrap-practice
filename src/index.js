import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirtBootstrap from './first-bootstrap.jsx';
// import NavbarBootstrap from './navbar-bootstrap.jsx';
import CollapsibleExample from './dark-navbar';
import Img from './img';
import IfElse from './if-else';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IfElse />
    <CollapsibleExample/>
    {/* <NavbarBootstrap /> */}
    <Img />
    <FirtBootstrap />
    <App />
  </React.StrictMode>
);
