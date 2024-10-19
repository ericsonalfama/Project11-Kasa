import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/about';
import Fiche from './Pages/FicheLogement/Fiche';
import Error from './Pages/Error/Error';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fiche/:id" element={<Fiche />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
