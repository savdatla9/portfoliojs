import React from 'react';

import Home from './components/home.jsx';
import WebXR from './components/webxr.jsx';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";                
import "primeicons/primeicons.css"; 

import 'bootstrap/dist/css/bootstrap.css'; 

import './App.css';

const App = () => {
    return (
      <div>
        <Home />
        <WebXR />
      </div>
    )
}

export default App;