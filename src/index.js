import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import FirtBootstrap from './first-bootstrap.jsx';
// import NavbarBootstrap from './navbar-bootstrap.jsx';
import CollapsibleExample from './dark-navbar';
import Img from './img';
// import IfElse from './if-else';
import Function from './function';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CollapsibleExample/>
    {/* <IfElse /> */}
    <Function />
    {/* <NavbarBootstrap /> */}
    <Img />
    <FirtBootstrap />
    <App />
  </React.StrictMode>
);
