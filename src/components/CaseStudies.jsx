import React from 'react';
import { Link } from 'react-router-dom';
import icon1 from '../assets/brand-icons/01-abcm-icon.svg';
import icon2 from '../assets/brand-icons/02-bounce-icon.svg';
import icon3 from '../assets/brand-icons/03-hinge-icon.svg';
import icon4 from '../assets/brand-icons/04-rayna-icon.svg';
import icon5 from '../assets/brand-icons/05-enarm-icon.svg';
import icon6 from '../assets/brand-icons/06-lever-icon.svg';

export default function CaseStudies() {
  const studies = [
    {
      category: "ED-TECH",
      year: "2025",
      title: "Safari Nursery: Behavioral Design for Engagement",
      description: "A leading EdTech platform faced a critical growth bottleneck: high initial activation, but steep short-term retention drop-offs.",
      imageBg: "bg-[#cc7931]",
      icon: icon1,
      link: "/cases/safari-nursery", // <--- Aquí agregamos la coma que faltaba
      metrics: [
        { value: "40%→44%", label: "Retention before and after" },
        { value: "+3.5pp", label: "Day 1 retention" },
        { value: "0→Prod", label: "Launched from scratch" }
      ]
    },
    {
      category: "SERVICE SECTOR",
      year: "2023",
      title: "Bounce: Checkout Funnel Optimization",
      description: "A UX audit and comparative analysis that eliminated transaction friction, delivering improvement in conversion rate via interface architecture and strategic copy optimization.",
      imageBg: "bg-[#3a7dc9]",
      icon: icon2,
      link: "/cases/bag-storage", // <--- Aquí agregamos la coma que faltaba
      metrics: [
        { value: "+8%", label: "Conversion rate lift" },
        { value: "8 Core", label: "Audit revisions" },
        { value: "1 A/B Test", label: "Validated win" }
      ]
    },
    {
      category: "HEALTH TECH",
      year: "2023",
      title: "Turn Research into Growth",
      description: "A CRO Audit that uncovered a core communication problem and built a roadmap to fix it.",
      imageBg: "bg-[#57a14f]",
      icon: icon3,
      link: "/cases/research-to-growth", // <--- Aquí agregamos la coma que faltaba
      metrics: [
        { value: "4 User Personas", label: "Mapped to funnel" },
        { value: "9 Experiments", label: "Scoped & Prioritized" },
        { value: "1 Roadmap", label: "Alignment strategy" }
      ]
    },
    {
      category: "LEGAL TECH",
      year: "2020",
      title: "UX Intervention for a Legal Provider Web App",
      description: "Rescuing a stalled product by restructuring its information architecture and conducting Usability Testing to unblock project delivery.",
      imageBg: "bg-[#6C446D]",
      icon: icon4,
      link: "/cases/legal-tracker", // <--- Aquí agregamos la coma que faltaba
      metrics: [
        { value: "1 Year", label: "Stalled project unblocked" },
        { value: "2 Flows", label: "Law firms & providers" },
        { value: "LoFi Sign-off", label: "Zero hi-fi overhead" }
      ]
    },
    {
      category: "ED-TECH",
      year: "2022",
      title: "Plataforma de Estudio de Especialidades Médicas",
      description: "Cómo un enfoque UX transformó una plataforma obsoleta en una experiencia de aprendizaje flexible y autogestionable.",
      imageBg: "bg-[#3a9cc9]",
      icon: icon5,
      link: "/cases/e-learning-enarm", // <--- Aquí agregamos la coma que faltaba
      metrics: [
        { value: "1:1 Support", label: "Drastic reduction" },
        { value: "WP → Web App", label: "React/JS/CSS Stack" },
        { value: "100% Scalable", label: "Content migration" }
      ]
    },
    {
      category: "WEBDESIGN",
      year: "2026 — Present",
      title: "The Lever: A Website Redesign",
      description: "A visual overhaul for a nonpartisan investigative news outlet.",
      imageBg: "bg-[#f5ca3d]",
      icon: icon6,
      link: "/cases/the-lever-website", // <--- Aquí agregamos la coma que faltaba
      metrics: [
        { value: "Bold Brand ID", label: "Radical & human" },
        { value: "Responsive UX", label: "Mobile-first news" },
        { value: "Conversion Flow", label: "Reader-supported" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="w-full py-28 bg-[#f4f3ec]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        
        {/* Título y Subtítulo Centrados */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-[#333333] font-medium leading-relaxed">
            The projects that best show how I work.
          </p>
        </div>

        {/* Lista de Tarjetas */}
        <div className="space-y-6">
          {studies.map((study, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 md:p-10 flex flex-col gap-8 transition-all"
            >
              {/* Parte superior: Cuadro con SVG y textos */}
              <div className="flex flex-col md:flex-row gap-6 items-start">
                
                {/* Cuadro de color plano con el SVG centrado */}
                <div className={`w-24 h-24 sm:w-28 sm:h-28 rounded-2xl shrink-0 ${study.imageBg} flex items-center justify-center p-4 shadow-inner`}>
                  <img src={study.icon} alt={study.category} className="w-full h-full object-contain" />
                </div>

                {/* Contenedor de Textos */}
                <div className="space-y-2 flex-1">
                  <div className="text-xs font-bold text-[#666666] tracking-wider uppercase">
                    {study.category} &nbsp;·&nbsp; {study.year}
                  </div>

                  {/* Título H3 */}
                  <h3 className="text-xl md:text-[22px] font-bold text-[#111111] leading-snug font-sans">
                    {study.title}
                  </h3>

                  <p className="text-[#333333] font-medium text-sm md:text-base leading-relaxed pt-1">
                    {study.description}
                  </p>
                </div>

              </div>

              {/* Parte inferior: Stats y Botón */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pt-6 border-t border-black/10 items-end">
                
                {/* Stats ocupando 3 columnas */}
<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
  {study.metrics.map((metric, mIndex) => (
    <div key={mIndex} className="sm:border-r sm:last:border-r-0 border-black/10 pr-4">
      {/* Value con tamaño base/lg y negrita */}
      <p className="text-lg font-bold text-[#111111] mb-1 font-['Plus_Jakarta_Sans',sans-serif]">
        {metric.value}
      </p>
      {/* Label con el mismo tamaño base, color gris y negrita */}
      <p className="text-base font-regular text-[#666666] font-['Plus_Jakarta_Sans',sans-serif]">
        {metric.label}
      </p>
    </div>
  ))}
</div>

                {/* Botón Learn more */}
                <div className="md:col-span-1 flex justify-start md:justify-end">
                  <Link 
                    to={study.link || "#"} 
                    className="inline-flex items-center justify-center bg-[#f1d2ff] hover:bg-[#e8b5ff] text-[#111111] text-base font-bold px-8 py-4 rounded-full transition-colors w-full md:w-auto text-center"
                  >
                    Learn more
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}