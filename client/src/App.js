// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from "./constants/theme";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import Home from './pages/Home';
import About from './pages/About';
import OurBusinesses from './components/OurBusinesses';
import Blog from './pages/News';
import Contact from './pages/Contact';
import './App.css';
import React from 'react';
import './index.css';
import './components/Navbar.css';
import './components/Footer.css';
import './components/SubFooter.css';
import './components/Buttons.css';

Object.entries(theme.colors).forEach(([key, value]) => {
  if (typeof value === "string") {
    document.documentElement.style.setProperty(`--color-${key}`, value);
  } else if (typeof value === "object") {
    Object.entries(value).forEach(([subKey, subValue]) => {
      document.documentElement.style.setProperty(`--color-${key}-${subKey}`, subValue);
    });
  }
});


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourbusinesses" element={<OurBusinesses />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <SubFooter />
    </Router>
  );
}

export default App;
