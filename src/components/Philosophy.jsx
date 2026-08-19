import React from 'react';
import { motion } from 'framer-motion';

export default function Philosophy() {
  const principles = [
    {
      number: "1",
      title: "Discovery & Strategy",
      description: "I start with questions, not screens — defining the right problem before designing the solution."
    },
    {
      number: "2",
      title: "Growth & Adaptation",
      description: "I design for growth — leveraging behavioral psychology and funnel data into optimization strategies, powered by AI."
    },
    {
      number: "3",
      title: "Trust & Clarity",
      description: "I design for trust — transforming fragmented, complex legacy systems into intuitive, actionable, and transparent architecture."
    }
  ];

  return (
    <section id="philosophy" className="w-full py-36 bg-[#780016] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Contenedor Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Columna Izquierda: Título Principal + Lista de Principios (7 columnas) */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Título Principal Alineado en la Columna */}
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#f8e8ff]">
              Designing for clarity, trust, and growth.
            </h2>

            {/* Listado */}
            <div className="space-y-8">
              {principles.map((item, index) => (
                <div key={index} className="flex gap-5 items-start">
                  {/* Número con borde y texto blanco */}
                  <span className="border-2 border-[#f8e8ff] text-[#f8e8ff] bg-transparent font-extrabold text-base w-10 h-10 rounded-2xl flex items-center justify-center shrink-0">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold mb-2 tracking-tight text-[#f8e8ff] font-['Plus_Jakarta_Sans',sans-serif]">
                      {item.title}
                    </h3>
                    <p className="text-[#f8e8ff] text-lg font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Columna Derecha: Quote / Testimonio (5 columnas) con animación de rebote tipo pill */}
          <div className="lg:col-span-5 lg:mt-24">
            <motion.div 
              className="bg-[#c01c8c] rounded-3xl p-8 md:p-10 relative shadow-sm text-white"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 25 
              }}
            >
              
              {/* Ícono de comillas de quote con fondo blanco */}
              <div className="absolute -top-4 left-8 bg-[#ffffff] w-9 h-9 rounded-xl flex items-center justify-center border-2 border-white shadow-sm">
                <svg className="w-5 h-5 fill-current text-[#111111]" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Texto del quote */}
              <p className="font-medium text-base md:text-lg mb-8 leading-relaxed text-white pt-2">
                "...What truly stands out about Laura is her ability to seamlessly merge creativity with strategic thinking. She doesn't just design, she crafts experiences that not only look amazing, but also convert."
              </p>
              
              <div>
                <p className="font-extrabold text-white">Francisco Mastromauro</p>
                <p className="text-xs text-white/80 uppercase tracking-wider font-bold mt-0.5">Webflow Expert & Enterprise Partner</p>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}