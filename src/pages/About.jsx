import React from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import seedlingIcon from '../assets/seedling-fill.svg';
import profilePhoto from '../assets/case-studies/your-photo.jpg';

export default function About() {
  return (
    <div className="min-h-screen text-[#1a1a1a] bg-[#f4f3ec] flex flex-col justify-between">
      
      {/* Navbar Modular */}
      <Navbar />

      {/* Hero Section de orilla a orilla */}
      <section className="w-full min-h-[450px] bg-[#D2E823] flex flex-col justify-center items-center text-center px-4 pt-36 pb-16">
        <h1 className="text-[#1a1a1a] text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Hi, I'm Laura 👋
        </h1>
        <p className="text-[#333333] text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
          A Product Designer who believes great design is equal parts empathy, data, and craft. Specializing in turning complex user behavior into measurable business impact.
        </p>
      </section>

      {/* Sección "A bit about me" de orilla a orilla */}
      <section className="w-full bg-[#3B1044] text-[#E4ADff] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-xs rounded-2xl overflow-hidden shadow-md bg-stone-800 aspect-[4/5] flex items-center justify-center border border-[#E4ADff]/20">
              <img 
                src={profilePhoto} 
                alt="Laura González" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-[#E4ADff]/90 font-normal leading-relaxed">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#E4ADff]">
              A bit about me
            </h2>
            <p>
              I love reading—maaaaaas. I'm not, at least not as much as I'd like to. I just thought: this photo was a good balance between professional and self-expression, and I like its human touch. No editing needed.
            </p>
            <p>
              I'm a Product Designer with a background in EdTech, LegalTech, HealthTech, and Service Design. I believe that great design is not just about how things look—it's about how they work and how they make people feel.
            </p>
            <p>
              Over the years, I've worked with startups, agencies, and in-house teams to ship products that solve real problems. I'm passionate about turning complex systems into simple, intuitive experiences that users love—and that drive business impact.
            </p>
            <p>
              Beyond design, I really enjoy painting my apartment walls (it's getting full of flowers 🌺) and taking care of my plants. I have a turtle named Gootye—she was a present for my daughter, but between you and me, I think I bought her for myself. I'm introverted, a good listener, and a body language reader. I tend to see the glass half full. I usually remember my dreams, and I love practically—no drama, but chamel is always welcome.
            </p>
            <p className="text-sm italic text-[#E4ADff]/70">
              I do read, BTW—I just wanted to clarify that.
            </p>
          </div>

        </div>
      </section>

      {/* Contenido principal para las secciones del centro */}
      <main className="flex-grow py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-24">
          
          {/* What I believe section */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center text-[#1a1a1a]">
              What I believe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-[#798167] text-white rounded-2xl p-8 space-y-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                  1
                </div>
                <h3 className="text-xl font-bold text-white">Design is problem-solving</h3>
                <p className="text-white text-m leading-relaxed">
                  I start with questions, not screens. Understanding the problem is the first step to solving it.
                </p>
              </div>

              <div className="bg-[#E100FF] text-white rounded-2xl p-8 space-y-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                  2
                </div>
                <h3 className="text-xl font-bold text-white">People first</h3>
                <p className="text-white text-m leading-relaxed">
                  Every pixel should serve the user. Empathy is not optional—it's the foundation of great design.
                </p>
              </div>

              <div className="bg-[#608AFC] text-white rounded-2xl p-8 space-y-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                  3
                </div>
                <h3 className="text-xl font-bold text-white">Impact matters</h3>
                <p className="text-white text-m leading-relaxed">
                  Design that returns is just art. Design for business outcomes and user satisfaction.
                </p>
              </div>

            </div>
          </div>

          {/* What I bring to the table */}
          <div className="bg-white rounded-3xl p-8 md:p-12 space-y-8">
            <h2 className="text-3xl font-black tracking-tight text-[#1a1a1a]">
              What I bring to the table
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a] border-b border-stone-100 pb-2">Experience</h3>
                <ul className="space-y-3 text-stone-600 text-m">
                  <li><strong className="text-stone-900">15+ years</strong> — Product & UX Design</li>
                  <li><strong className="text-stone-900">EdTech, LegalTech, HealthTech</strong> — B2C & B2B</li>
                  <li><strong className="text-stone-900">SaaS, Marketplaces, Service Design</strong></li>
                  <li><strong className="text-stone-900">Design Systems & Component Libraries</strong></li>
                  <li><strong className="text-stone-900">UX Research & User Testing</strong></li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-[#1a1a1a] border-b border-stone-100 pb-2">Skills</h3>
                <ul className="space-y-3 text-stone-600 text-m">
                  <li><strong className="text-stone-900">Product Strategy</strong> — Discovery, Roadmaping, OKRs</li>
                  <li><strong className="text-stone-900">UX Research</strong> — Interviews, Surveys, Usability Testing</li>
                  <li><strong className="text-stone-900">UI & Prototyping</strong> — Figma, Claude</li>
                  <li><strong className="text-stone-900">Design Systems</strong> — Component Libraries, Documentation</li>
                  <li><strong className="text-stone-900">Growth Design</strong> — Conversion Optimization, CRO</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </main>

      {/* Call to Action Final de orilla a orilla con color #2665D6 */}
      <section className="w-full bg-[#2665D6] text-white py-24 px-6 md:px-16 lg:px-24 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-[white] text-5xl md:text-6xl font-bold mb-6">
            Let's build something great together.
          </h1>
          <p className="text-white max-w-xl mx-auto text-lg">
            If you have a project in mind — or just want to connect — I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a 
              href="mailto:alura.gonzalez@gmail.com?subject=You%20are%20amazing..." 
              className="bg-[#D2E823] hover:opacity-90 text-[#111111] font-bold text-base px-8 py-4 rounded-full transition-opacity inline-flex items-center gap-2"
            >
              Drop me a line!
              </a>
          </div>
        </div>
      </section>

      {/* Footer Modular */}
      <Footer />
    </div>
  );
}