import React from 'react';
import { motion } from 'framer-motion';

export default function EcommerceBanner() {
  const radius = 40;
  const circumference = 2 * Math.PI * radius; // 251.2
  const targetProgress = 78;
  const strokeDashoffsetTarget = circumference - (circumference * targetProgress) / 100;

  return (
    <section className="w-full py-36 px-6 md:px-16 lg:px-24 bg-[#f4f3ec]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Columna izquierda: Tarjeta vertical alta con indicador de porcentaje + 3 tarjetas */}
        <div className="flex flex-col sm:flex-row gap-4 items-stretch">
          
          {/* Tarjeta Vertical Alta (#f8e8ff) - Overall Readiness con Círculo SVG Animado */}
          <div className="bg-[#f8e8ff] rounded-3xl p-8 flex flex-col justify-between flex-1 sm:w-1/2">
            <div>
              <span className="text-[#8E5B83] text-xs font-bold tracking-wider uppercase bg-black/5 px-3 py-1.5 rounded-full inline-block">
                Overall Readiness
              </span>
            </div>

            {/* Círculo de porcentaje animado al hacer scroll */}
            <div className="flex flex-col items-center my-4">
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Círculo de fondo (Track oscuro con opacidad) */}
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="currentColor"
                    strokeWidth="5"
                    className="text-black/10 fill-none"
                  />
                  {/* Círculo de progreso animado (#e8be02) */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="#e8be02"
                    strokeWidth="5"
                    strokeDasharray={circumference}
                    strokeLinecap="round"
                    className="fill-none"
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: strokeDashoffsetTarget }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <motion.span 
                    className="text-4xl font-extrabold text-[#111111] tracking-tight"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {targetProgress}
                  </motion.span>
                  <span className="text-xs font-semibold text-[#111111]/70">/ 100</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#111111] tracking-tight mb-2 [font-family:system-ui,-apple-system,sans-serif]">
                Needs Work
              </h3>
              <p className="text-[#111111]/80 text-sm font-normal leading-relaxed [font-family:system-ui,-apple-system,sans-serif]">
                How well this page can be interpreted, executed, and trusted by autonomous shopping agents.
              </p>
            </div>
          </div>

          {/* Columna derecha con las 3 tarjetas apiladas (con animación de rebote escalonada para las pills) */}
          <div className="flex flex-col justify-between gap-4 flex-1 sm:w-1/2">
            
            {/* Tarjeta 1 (Verde Oliva) - Interpretability */}
            <div className="bg-[#798167] rounded-3xl p-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <motion.span 
                  className="text-[#1b4d2e] text-xs font-bold bg-[#A3E635] px-3 py-1 rounded-full flex items-center gap-1 shadow-sm"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Passed
                </motion.span>
              </div>
              <div>
                <p className="text-white text-2xl font-bold tracking-tight">Interpretability</p>
              </div>
            </div>

            {/* Tarjeta 2 (Magenta #e100ff) - Executability */}
            <div className="bg-[#e100ff] rounded-3xl p-5 flex flex-col gap-3">
              <div className="flex justify-between items-start">
                 <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                 </div>
                 <motion.span 
                  className="text-[#1b4d2e] text-xs font-bold bg-[#A3E635] px-3 py-1 rounded-full flex items-center gap-1 shadow-sm"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Passed
                </motion.span>
              </div>
              <div>
                <p className="text-white text-2xl font-bold tracking-tight">Executability</p>
              </div>
            </div>

            {/* Tarjeta 3 (Azul #608afc) - Reliability */}
            <div className="bg-[#608afc] rounded-3xl p-5 flex flex-col gap-3">
               <div className="flex justify-between items-start">
                <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <motion.span 
                  className="text-[#7f1d1d] text-xs font-bold bg-[#FCA5A5] px-3 py-1 rounded-full flex items-center gap-1 shadow-sm"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 400, damping: 10 }}
                >
                  <svg className="w-3.5 h-3.5 stroke-[3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Failed
                </motion.span>
               </div>
              <div>
                <p className="text-white text-2xl font-bold tracking-tight">Reliability</p>
              </div>
            </div>

          </div>

        </div>

        {/* Columna derecha: Texto y Botón */}
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6 text-[#111111]">
          Optimize E-Commerce Performance with this AI Audit Agent
          </h2>
          <p className="text-lg text-[#333333] font-medium max-w-xl mb-10 leading-relaxed">
          Get an instant e-commerce audit score and an intelligent dashboard powered by GitHub and Make with actionable recommendations to fix it.
          </p>
          
          <a 
            href="#get-started" 
            className="inline-block bg-[#D2E823] text-[#111111] text-base font-bold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            See it in action
          </a>
        </div>

      </div>
    </section>
  );
}