import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar"; // <--- Quitamos "components/" porque ya estamos ahí
import Contact from './Contact';
import Footer from './Footer'; // <--- Quitamos "components/" también

export function CaseStudyTemplate({
  category,
  title,
  subtitle,
  heroImage,
  role,
  timeline,
  services,
  children,
}) {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxSrc(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightboxSrc ? 'hidden' : '';
  }, [lightboxSrc]);

  return (
    <div className="min-h-screen bg-[#f4f3ec] font-body text-[#1a1a1a] selection:bg-[#D2E823] selection:text-[#111111]">
      
      {/* Navbar Modular */}
      <NavBar />

      <main>
        {/* Header del Caso de Estudio */}
        <header className="pt-24 pb-12 lg:pt-36">
          <div className="mx-auto max-w-5xl px-6 lg:px-12">
            <span className="inline-block bg-[#D2E823] text-[#111111] px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              {category}
            </span>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              {title}
            </h1>
            <p className="mt-8 text-lg lg:text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </header>

        {/* Imagen Hero Principal */}
        <section className="mx-auto max-w-5xl px-6 lg:px-12 mb-16">
  <div className="relative w-full h-[400px] overflow-hidden rounded-3xl bg-white">
    <img src={heroImage} alt={title} className="w-full h-full object-cover" />
  </div>
</section>

        {/* Contenido y Sidebar */}
        <article className="mx-auto max-w-5xl px-6 lg:px-12 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            
            {/* Sidebar Sticky con Metadatos */}
            <aside className="md:col-span-4">
              <div className="sticky top-28 space-y-8 bg-white p-6 rounded-3xl">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Role</h3>
                  <p className="font-bold text-gray-900">{role}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Timeline</h3>
                  <p className="font-bold text-gray-900">{timeline}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">Services</h3>
                  <p className="font-bold text-gray-900">{services}</p>
                </div>
                <a 
  href="mailto:alura.gonzalez@gmail.com?subject=You're%20amazing%20and%20I%20have%20an%20amazing%20idea%21" 
  className="block text-center border border-[#1a1a1a] text-[#1a1a1a] py-3.5 px-6 text-sm font-bold rounded-full hover:bg-[#1a1a1a] hover:text-white transition-all"
>
  Discuss a project
</a>
              </div>
            </aside>

            {/* Cuerpo del Artículo */}
<div className="md:col-span-8 space-y-12 text-gray-700 leading-relaxed">
  {React.Children.map(children, child => {
    // Si el hijo es un elemento de React, le inyectamos la función
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setLightboxSrc });
    }
    return child;
  })}
</div>

          </div>
        </article>
      </main>

      {/* Sección de Contact y Footer */}
      <div id="contact"><Contact /></div>
      <Footer />

      {/* Lightbox Global (Único) */}
      {lightboxSrc && (
        <div 
          onClick={() => setLightboxSrc(null)}
          className="fixed inset-0 bg-black/92 z-[9999] flex justify-center items-center cursor-zoom-out p-8"
        >
          <button 
            onClick={() => setLightboxSrc(null)}
            className="fixed top-6 right-8 z-[10000] text-white text-xl bg-white/10 border border-white/20 rounded-full w-12 h-12 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            ✕
          </button>
          <img src={lightboxSrc} alt="Zoom" className="max-w-[95%] max-h-[95%] object-contain rounded-2xl shadow-2xl" />
        </div>
      )}
    </div>
  );
}