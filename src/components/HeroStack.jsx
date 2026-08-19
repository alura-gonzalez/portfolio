import React, { useState, useEffect } from 'react';
import seedlingIcon from '../assets/seedling-fill.svg';

import iconOne from '../assets/flask-fill.svg';
import iconTwo from '../assets/guide-line.svg';
import iconThree from '../assets/mental-health-line.svg';
import iconFour from '../assets/sparkling-2-line.svg';

// Declarado fuera del componente para que se construya una sola vez en la memoria
const cards = [
  { 
    bg: 'bg-[#061492]', 
    text: 'text-white', 
    title: 'Usability Testing',
    circleBg: 'bg-white/25',
    icon: iconOne
  },
  { 
    bg: 'bg-[#D2E823]', 
    text: 'text-black', 
    title: 'Heuristic Evaluation',
    circleBg: 'bg-black/10',
    icon: iconTwo
  },
  { 
    bg: 'bg-[#e8efd6]', 
    text: 'text-black', 
    title: 'CRO / Experiments',
    circleBg: 'bg-black/10',
    icon: iconThree
  },
  { 
    bg: 'bg-[#f8e8ff]', 
    text: 'text-black', 
    title: 'AI-Augmented Workflows',
    circleBg: 'bg-black/10',
    icon: iconFour
  },
];

export default function HeroStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[380px] md:h-[500px] flex items-center justify-center scale-90 md:scale-100">
      {cards.map((card, i) => {
        const offset = (i - activeIndex + cards.length) % cards.length;
        
        let translateX = offset * 35;
        let translateY = -offset * 35;
        let scale = 1 - offset * 0.06;
        let zIndex = cards.length - offset;
        let opacity = "opacity-100";

        if (offset === 3) {
          opacity = "opacity-40";
        }

        return (
          <div
            key={i}
            className={`absolute w-64 h-64 md:w-80 md:h-80 rounded-[32px] md:rounded-[36px] p-5 md:p-7 flex flex-col justify-between transition-all duration-700 ease-in-out ${card.bg} ${card.text} ${opacity}`}
            style={{
              transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
              zIndex: zIndex,
            }}
          >
            <div>
              <div className="flex justify-between items-start mb-2 md:mb-3">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${card.circleBg} flex items-center justify-center p-3`}>
                  <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
                </div>
              </div>

              <h3 className="text-lg md:text-2xl font-black tracking-tight leading-snug">
                {card.title}
              </h3>
            </div>

            <div className="h-4"></div>

            {offset === 0 && (
              <div className="absolute top-[70%] -translate-y-1/2 -left-4 md:-left-8 bg-white text-black py-3 px-5 md:py-4 md:px-7 rounded-[24px] md:rounded-[28px] flex items-center gap-3 border border-black/10 z-50">
                <img src={seedlingIcon} alt="Growth" className="w-5 h-5 md:w-6 md:h-6 object-contain opacity-30" />
                <span className="font-extrabold text-sm md:text-base tracking-tight">Growth Loop</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}