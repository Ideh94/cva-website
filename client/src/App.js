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

// Business detail pages
const Agriculture = lazy(() => import('./pages/Agriculture'));
const FoodProcessing = lazy(() => import('./pages/FoodProcessing'));
const Construction = lazy(() => import('./pages/Construction'));
const Logistics = lazy(() => import('./pages/Logistics'));
const CapacityDevelopment = lazy(() => import('./pages/CapacityDevelopment'));
const NotFound = lazy(() => import('./pages/NotFound'));

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
          {/* Business detail pages */}
          <Route path="/agriculture" element={<Agriculture />} />
          <Route path="/foodprocessing" element={<FoodProcessing />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/capacitydevelopment" element={<CapacityDevelopment />} />
          {/* Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
      <SubFooter />
    </Router>
  );
}

export default App;
