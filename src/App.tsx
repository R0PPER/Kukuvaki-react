import React from 'react';
import './css/App.css';
import Header from './navbar/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Informations from './pages/Informations';
import Newslatter from './pages/Newsletter';
import Cooking from './pages/Cooking';
import Contact from './pages/Contact';
import Footer from './navbar/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/informations" element={<Informations />} />
            <Route path="newslatter" element={<Newslatter />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
