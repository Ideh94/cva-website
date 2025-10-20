// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { theme } from "./constants/theme";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubFooter from './components/SubFooter';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css'; // Make sure global styles are applied


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
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <SubFooter />
      </div>
    </Router>
  );
}

export default App;
