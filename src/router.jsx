import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Faq from './pages/Faq';
import Contact from './pages/Contact';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Router;
