import React, { useState } from 'react';

import Home from './components/home.jsx';
import WebXR from './components/webxr.jsx';

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";                
import "primeicons/primeicons.css"; 

import 'bootstrap/dist/css/bootstrap.css'; 

import './App.css';

const App = () => {
    const [type, setType] = useState('ar');
    
    return (
      <div>
        <Home xr={type} setxr={setType} />
        <WebXR xr={type} />
      </div>
    )
}

export default App;
