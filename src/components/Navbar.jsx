import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import seedlingIcon from '../assets/seedling-fill.svg';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center">
      <header className="w-full max-w-7xl bg-white rounded-full p-2 flex justify-between items-center [box-shadow:0px_4px_0px_0px_rgba(0,0,0,0.15)]">
        
        {/* Logo que lleva al inicio */}
        <Link to="/" className="flex items-center gap-3 px-4">
          <img src={seedlingIcon} alt="Icono de plántula" className="w-6 h-6 object-contain" />
          <span className="font-extrabold text-lg tracking-tight">Laura González</span>
        </Link>

        <nav className="hidden md:flex gap-8 font-medium text-base items-center">
        <button 
  onClick={() => handleScrollToSection('caseStudies')} 
  className="hover:text-brand-purple transition-colors cursor-pointer bg-transparent border-none font-medium text-base"
>
  Case Studies
</button>
          <a href="/#philosophy" className="hover:text-brand-purple transition-colors">Philosophy</a>
          <a href="/#contact" className="hover:text-brand-purple transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
  <a 
    href="mailto:alura.gonzalez@gmail.com?subject=You%20are%20amazing..." 
    className="bg-[#111111] text-white text-base font-bold px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
  >
    Let's talk
  </a>
</div>

      </header>
    </div>
  );
}