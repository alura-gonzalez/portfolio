// Agrega este pequeño componente al inicio de legal-tracker.jsx
const ZoomImage = ({ src, alt, setLightboxSrc }) => (
    <div 
      onClick={() => setLightboxSrc(src)}
      className="my-8 w-full overflow-hidden rounded-2xl cursor-zoom-in hover:shadow-xl transition-shadow"
    >
      <img src={src} alt={alt} className="w-full h-auto block" />
    </div>
  );
  
  import React from 'react';
  import { CaseStudyTemplate } from '../../components/CaseStudyTemplate';
  import leverHero from '../../assets/case-studies/the-lever.png';
  import leverDesktop from '../../assets/case-studies/lever-desktop-home.png';
  import leverMobile from '../../assets/case-studies/lever-mobile-article.png';
  import leverMobileHome from '../../assets/case-studies/lever-mobile-home.png';
  import leverStyle from '../../assets/case-studies/lever-style-guide.png';
  
  export default function LegalCaseStudy({ setLightboxSrc }) {
    return (
      <CaseStudyTemplate
        category="WEBSITE REDESIGN"
        title="The Lever: A Website Redesign"
        subtitle="A visual overhaul for a nonpartisan investigative news outlet."
        heroImage={leverHero} // pasamos la variable entre llaves, sin comillas
        role="Web Designer"
        timeline="2022"
        services="Web Design · Visual Identity · Responsive Design"
      >
        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">The Challenge</h2>
          <p className="leading-relaxed">
          <a
    href="https://www.levernews.com/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#3a7dc9] font-bold underline hover:text-[#2a5a8f] transition-colors"
  >The Lever 
  </a> is a nonpartisan, reader-supported investigative news outlet that holds accountable the people and corporations manipulating the levers of power. Founded in 2020 by David Sirota — an award-winning journalist and Oscar-nominated writer — the organization needed a website that reflected its brand values and made its investigative journalism accessible to a growing audience.</p>  
          <p className="leading-relaxed">
          <span className="font-bold text-[#1a1a1a]">Brand values:</span> Radical Content · Nihilistic · Optimistic · Human · Courageous.</p>
          <p className="leading-relaxed">
          The challenge was to translate these values into a visual identity and user experience that:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li>Communicates trust and authority.</li>
      <li>Highlights investigative journalism.</li>
      <li>Works seamlessly across desktop and mobile.</li>
      <li>Supports reader engagement and subscriptions.</li>
    </ul>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">My Role & Approach</h2>
          <p className="leading-relaxed">
          As <span className="font-bold text-[#1a1a1a]">Web Designer,</span> I led the redesign of The Lever's website — from visual strategy to responsive implementation. My focus was on creating a design that reflects the brand's bold, courageous spirit while ensuring readability and ease of navigation for a news-focused audience.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Visual identity:</span> Bold typography, a considered color palette, and a layout that feels authoritative and approachable.</li>
      <li><span className="font-bold text-[#1a1a1a]">Information architecture:</span> Organizing articles, podcasts, e-books, and team information in a clear hierarchy.</li>
      <li><span className="font-bold text-[#1a1a1a]">Responsive design:</span> Ensuring a seamless experience across desktop and mobile.</li>
    </ul>
        </section>

        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Visual Design Strategy</h2>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Desktop Design
          </h3>
          <p className="leading-relaxed">
          The desktop experience emphasizes hero stories with strong visual impact, clean grid layouts for article listings, clear calls to action for subscriptions and donations, and integrated podcast and e-book sections.</p>
        </section>
  
        <ZoomImage src={leverDesktop} alt="Lever Desktop Home" setLightboxSrc={setLightboxSrc} />

        <section className="space-y-4 pt-6">
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Mobile Design
          </h3>
          <p className="leading-relaxed">
          The mobile experience maintains the same visual integrity while adapting to smaller screens with collapsible navigation, responsive grids, and touch-optimized interactions.</p>
    </section>

        <ZoomImage src={leverMobileHome} alt="Lever Mobile Home" setLightboxSrc={setLightboxSrc} />

        <ZoomImage src={leverMobile} alt="Lever Mobile Article" setLightboxSrc={setLightboxSrc} />
  
    

        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Design System</h2>
        <p className="leading-relaxed">
        The redesign was built on a cohesive design system that ensures consistency across all pages and devices. Key elements include bold, authoritative typography; a restrained color palette with accent colors for calls to action; a flexible grid system; and reusable UI components for articles, podcasts, team profiles, and e-books.</p>
        </section>

        <ZoomImage src={leverStyle} alt="The Lever Style Guide" setLightboxSrc={setLightboxSrc} />

  
        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
        Impact
          </h2>
          <p className="leading-relaxed">
          The redesign positioned The Lever as a modern, credible, and reader-focused news outlet. The new visual identity and improved user experience support the organization's mission to hold power accountable — making investigative journalism accessible and engaging for a growing audience.</p>
          </section>

       <section className="space-y-4 pt-6">
       <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
       Key Takeaways
          </h2>
          <ul className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Design must reflect brand values.</span> The visual identity is not just about aesthetics — it's about communicating who you are and what you stand for.</li>
      <li><span className="font-bold text-[#1a1a1a]">Responsive is non-negotiable.</span> News is consumed everywhere. A seamless mobile experience is critical for engagement.</li>
      <li><span className="font-bold text-[#1a1a1a]">Typography is a tool for authority.</span> Bold, well-chosen typography can communicate trust and urgency without saying a word.</li>
      <li><span className="font-bold text-[#1a1a1a]">Clarity drives conversion.</span> Clear navigation and calls to action make it easy for readers to support the mission.</li>
    </ul>
        </section>


      </CaseStudyTemplate>
    );
  }