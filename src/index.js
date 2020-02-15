import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
//browserrouter should be used when you have a server that will handle dyanimc requestis
import { BrowserRouter } from "react-router-dom";

//because router componenets only expect to receive a single child element, create <App> 
//componenet that renders the rest of your app
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
