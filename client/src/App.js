// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from "./constants/theme";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import './App.css';
import './index.css';
import './components/Navbar.css';
import './components/Footer.css';
import './components/SubFooter.css';
import './components/Buttons.css';
import './components/Loading.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const OurBusinesses = lazy(() => import('./pages/OurBusinesses'));
const Blog = lazy(() => import('./pages/NewsPage'));
const Contact = lazy(() => import('./pages/Contact'));

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
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourbusinesses" element={<OurBusinesses />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      <SubFooter />
    </Router>
  );
}

export default App;
