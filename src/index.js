import { createRoot } from 'react-dom/client';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/App'
import About from './Pages/About/about';
import Error from './Pages/Error/Error';
import './index.scss'
import Fiche from './Pages/FicheLogement/Fiche';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
    </Router>
  </React.StrictMode>);