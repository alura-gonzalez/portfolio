import React from 'react';
import { Routes, Route } from 'react-router-dom'; // <--- Nota que ya NO importamos BrowserRouter aquí
import Navbar from './components/Navbar';
import EcommerceBanner from './components/EcommerceBanner';
import seedlingIcon from './assets/seedling-fill.svg';
import HeroStack from './components/HeroStack';
import CaseStudies from './components/CaseStudies';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalCaseStudy from './pages/cases/legal-tracker';
import SafariCaseStudy from './pages/cases/safari-nursery';
import BounceCaseStudy from './pages/cases/bag-storage';
import ResearchCaseStudy from './pages/cases/research-to-growth';
import EnarmCaseStudy from './pages/cases/e-learning-enarm';
import TheLeverCaseStudy from './pages/cases/the-lever-website';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';

// Componente para la página de inicio (Home)
function Home() {
  return (
    <div className="min-h-screen text-brand-dark bg-[#f4f3ec]">
      
      {/* Navbar Modular */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full bg-[#3B1044] pt-48 pb-36 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6 text-[#E4ADff]">
            Designing to Drive Measured Growth
            </h1>
            <p className="text-lg md:text-xl text-[#E4ADff]/90 font-medium max-w-2xl leading-relaxed">
            Product Designer bridging UX, behavioral psychology, and AI capabilities to optimize conversion funnels, reduce time-to-value, and scale user retention.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-center lg:justify-end pr-12">
            <HeroStack />
          </div>
        </div>
      </section>

      {/* Banner de E-commerce */}
      <div id="dashboard">
        <EcommerceBanner />
      </div>

      {/* Sección de Casos de Estudio */}
      <div id="caseStudies">
        <CaseStudies />
      </div>

      {/* Sección de Filosofía modular */}
      <div id="philosophy">
        <Philosophy />
      </div>

      {/* Sección de Contact */}
      <div id="contact">
        <Contact />
      </div>

      {/* Footer modular */}
      <Footer />
    </div>
  );
}

// Componente principal de la App (SIN BrowserRouter porque ya vive en main.jsx)
export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cases/legal-tracker" element={<LegalCaseStudy />} />
        <Route path="/cases/safari-nursery" element={<SafariCaseStudy />} />
        <Route path="/cases/bag-storage" element={<BounceCaseStudy />} />
        <Route path="/cases/research-to-growth" element={<ResearchCaseStudy />} />
        <Route path="/cases/e-learning-enarm" element={<EnarmCaseStudy />} />
        <Route path="/cases/the-lever-website" element={<TheLeverCaseStudy />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}