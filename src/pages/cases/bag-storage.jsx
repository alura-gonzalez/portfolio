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
  import bounceExpectatios from '../../assets/case-studies/bounce-expectations.png';
  import bounceKeyInfo from '../../assets/case-studies/bounce-key-info.png';
  import bounceProgress from '../../assets/case-studies/bounce-progress.png';
  import bounceScarcity from '../../assets/case-studies/bounce-scarcity.png';
  import bounceSocialProof from '../../assets/case-studies/bounce-social-proof.png';
  import bounceSpotReference from '../../assets/case-studies/bounce-spot-reference.png';
  import bounceSupportiveCopy from '../../assets/case-studies/bounce-supportive-copy.png';
  import bounceThirdParty from '../../assets/case-studies/bounce-third-party.png';
  import bounceHero from '../../assets/case-studies/bounce.png';
  
  export default function LegalCaseStudy({ setLightboxSrc }) {
    return (
      <CaseStudyTemplate
        category="SERVICE TECH"
        title="Bounce: Checkout Funnel Optimization"
        subtitle="A UX audit and comparative analysis that eliminated transaction friction, delivering an +8% conversion rate lift via interface architecture and strategic copy optimization."
        heroImage={bounceHero} // pasamos la variable entre llaves, sin comillas
        role="Product Designer"
        timeline="Aug 2023"
        services="UX Audit · Growth Design · Conversion Optimization"
      >
        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">The Challenge</h2>
          <p className="leading-relaxed">
          <a
      href="https://bounce.com/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[#3a7dc9] font-bold underline hover:text-[#2a5a8f] transition-colors"
    >Bounce
    </a> is a luggage storage service that allows travelers to store their belongings in safe locations while exploring a city.</p>  
          <p className="leading-relaxed">
          The checkout flow is one of the most critical steps in the user journey — it's where conversion actually happens. However, the existing flow had friction points that were causing users to drop off before completing their booking.</p>
          <p className="leading-relaxed">
          <span className="font-bold text-[#1a1a1a]">The opportunity: </span>Identify and remove friction in the checkout flow to maximize funnel conversion and capture latent revenue.</p>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">My Role & Approach</h2>
          <p className="leading-relaxed">
          As Product Designer, I conducted a focused audit of the checkout flow to identify friction points and opportunities for improvement. </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Lightweight & fast:</span> A focused heuristic intervention, not an expensive full redesign.</li>
      <li><span className="font-bold text-[#1a1a1a]">Evidence-driven:</span> Prioritizing UI and copy changes based on behavioral patterns and impact vs. effort mapping.</li>
      <li><span className="font-bold text-[#1a1a1a]">Actionable:</span> Delivering high-impact, low-scope design recommendations for rapid development implementation.</li>
    </ul>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Discovery & Audit</h2>
          <p className="leading-relaxed">
          I executed a heuristic evaluation and competitive benchmarking across the checkout journey to isolate 8 core areas of opportunity:</p>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          1. Maintain Visual Context of the Selected Location
          </h3>
          <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The problem:</span> Upon entering the checkout flow, the interface stripped away all visual cues of the user's selected storage location. This forced users to rely on memory (recall over recognition), drastically increasing cognitive load and checkout anxiety regarding location accuracy.</p>
      <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The solution:</span> Embed a persistent visual thumbnail and summary of the selected spot throughout the transaction journey, mirroring industry best practices to provide immediate micro-reassurance and prevent back-button abandonment.</p>
    </section>
  
  <ZoomImage src={bounceSpotReference} alt="Bounce Spot Reference" setLightboxSrc={setLightboxSrc} />
  
        <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        2. Leverage Persistent Social Proof to Build Trust
          </h3>
          <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The problem:</span> The transaction interface completely lacked validation mechanisms during the highest-friction moment of the user journey. By hiding reviews and ratings, the design missed a critical opportunity to mitigate purchase hesitation and anchor user trust.</p>
      <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The solution:</span> Integrate persistent trust indicators—such as review counts and star ratings—top and center within the checkout view, aligning with verified industry benchmarks to reinforce confidence right before the final conversion trigger.</p>
        </section>

        <ZoomImage src={bounceSocialProof} alt="Bounce Social Proof" setLightboxSrc={setLightboxSrc} />

        <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        3. Ensure Continuous Access to Core Product Attributes
          </h3>
          <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The problem:</span> Transitioning into the checkout stage created an information vacuum, stripping away vital contextual details regarding the selected location. This lack of transparency triggered user second-guessing, driving high drop-off rates as users backtracked to verify core features.</p>
      <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The solution:</span> Maintain immediate availability of key reassurance vectors within the checkout architecture to solidify transactional transparency:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Approximate location anchor:</span> Clear neighborhood or partial address validation.</li>
      <li><span className="font-bold text-[#1a1a1a]">Security & protection tier:</span> Visible security seals and structural safety guarantees.</li>
      <li><span className="font-bold text-[#1a1a1a]">Operational clarity:</span> Quick access to spot amenities, opening hours, and service mechanics.</li>
      <li><span className="font-bold text-[#1a1a1a]">On-demand feedback: </span> Accessible user reviews through progressive disclosure patterns.</li>
    </ul>
        </section>

        <ZoomImage src={bounceKeyInfo} alt="Bounce Key Info" setLightboxSrc={setLightboxSrc} />
  
        <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        4. Implement an Illusion of Progress to Reduce Drop-offs
          </h3>
          <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The problem:</span> The transaction interface failed to communicate the user's position within the funnel, violating the core usability principle of visibility of system status. This lack of structural feedback increased perceived waiting time, causing user fatigue and hesitation.</p>
      <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The solution:</span> Integrate a clear, step-by-step progress indicator to leverage the Goal-Gradient Effect. By visually chunking the transaction into sequential milestones, the journey feels faster, reducing cognitive friction and driving users toward flow completion.</p>
        </section>

        <ZoomImage src={bounceProgress} alt="Bounce Progress" setLightboxSrc={setLightboxSrc} />
  
        <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        5. Deploy Scarcity and Urgency Cues as Behavioral Nudges
          </h3>
          <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The problem:</span> The checkout experience lacked motivational triggers, allowing users to exit the funnel without any perceived consequence of delay. Without contextual urgency, the interface failed to accelerate transaction intent at critical decision-making nodes.</p>
      <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The solution:</span> Introduce strategic scarcity elements (e.g., "Only 2 spots left today") and real-time social validation data (e.g., booking velocity trends) to leverage the Scarcity Heuristic. These micro-nudges build low-friction urgency, significantly lowering funnel drop-offs and accelerating purchase intent.</p>
        </section>

        <ZoomImage src={bounceScarcity} alt="Bounce Scarcity" setLightboxSrc={setLightboxSrc} />
  
        <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        6. Integrate Social Auth Protocols to Eliminate Authentication Friction
          </h3>
          <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The problem:</span> The interface forced users through a manual, high-friction authentication gate right in the middle of the conversion path. Requiring manual data entry or traditional account creation created an unnecessary barrier that disrupted transaction momentum.</p>
      <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The solution:</span>  Implement third-party single sign-on (SSO) options—such as Google and Apple OAuth—to leverage existing device authentication states. Providing streamlined social auth alternatives dramatically reduces interaction friction and accelerates checkout velocity.</p>
        </section>

        <ZoomImage src={bounceThirdParty} alt="Bounce Third Party" setLightboxSrc={setLightboxSrc} />

       <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        7. Introduce Microcopy Architecture to Embed Trust Signals
          </h3>
          <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The problem:</span> The primary H1 checkout heading lacked explicit contextual validation, creating a transactional cold-start effect. Without immediate reassurance regarding billing mechanics, users experienced friction and hesitation at the final point of payment entry.</p>
      <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The solution:</span> Implement a supporting microcopy pattern directly beneath the H1 anchor—mirroring proven e-commerce design frameworks. This micro-narrative provides immediate cognitive reassurance (e.g., "You won't be charged until you review your final order"), neutralizing transaction anxiety and stabilizing checkout completion.</p>
        </section>

        <ZoomImage src={bounceSupportiveCopy} alt="Bounce Supportive Copy" setLightboxSrc={setLightboxSrc} />
  
        <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        <span>8. Align Call-to-Action (CTA) Mechanics with User Mental Models  </span>
  <span className="bg-[#e3e0cf] text-[#111111] px-3 py-1 rounded-full text-base tracking-wide">
    THE WINNING CHANGE
  </span>
          </h3>
          <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The problem:</span> The primary interactive trigger created a severe expectation violation within the conversion funnel. When users clicked "Add a credit card," their mental model prepared them for payment entry; instead, they were abruptly redirected to a mandatory account registration screen. This unexpected interaction mismatch triggered high cognitive friction and immediate funnel abandonment.</p>
      <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">The solution:</span> Optimize the CTA architecture by rewriting the action copy from a premature backend command ("Add a credit card") to a transparent progression anchor (e.g., "Continue to payment" or "Book now"). This simple refinement aligns the interface with the user's intent, ensuring the next interactive state mirrors exact behavioral expectations.</p>
      <h4 className="text-xl font-bold tracking-tight text-[#1a1a1a]">
      Why This Delivered High-Impact ROI
</h4>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Minimal engineering overhead:</span> A low-scope, instantaneous string replacement that required zero modifications to the underlying transactional codebase.</li>
      <li><span className="font-bold text-[#1a1a1a]">Funnel optimization: </span> It targeted and resolved a maximum-friction drop-off trigger at the absolute core of the checkout journey, unblocking user momentum to directly generate the +8% conversion rate lift.</li>
    </ul>
        </section>

        <ZoomImage src={bounceExpectatios} alt="Bounce Expectations" setLightboxSrc={setLightboxSrc} />
  
  <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Strategic Prioritization</h2>
          <p className="leading-relaxed">
    While all 8 optimization opportunities were valid, recommendations were prioritized using an Impact vs. Effort framework. The primary objective was to target the severe misalignment between active user expectations and interface feedback.</p>
    <p className="leading-relaxed">
    To optimize product development velocity, solutions were classified into structural overhauls and immediate operational wins. By focusing heavily on high-impact, low-scope iterations first, the business could unlock immediate conversion value without straining engineering capacity or altering underlying backend logic.</p>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Business Results</h2>
          <p className="leading-relaxed">
          The strategic copy and CTA alignment yielded an immediate +8% increase in net funnel conversion. This outcome serves as a clear indicator that precise behavioral design interventions generate outsized financial returns when they directly resolve a maximum-friction drop-off point.</p>
          <p className="leading-relaxed">
          <span className="font-bold text-[#1a1a1a]">Business Implication:</span> Within a high-volume transactional model like Bounce, an +8% conversion rate lift drives compounding revenue expansion. This optimization required negligible engineering overhead and provided an immediate, frictionless return on design investment.</p>
          </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Additional Optimizations Shipped</h2>
          <p className="leading-relaxed">
          Beyond the primary copy intervention, consecutive UI refinements were implemented to establish a cohesive, transparent, and high-trust transaction environment:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Continuous Visual Reference:</span> Embedding persistent location context to drastically reduce cognitive load and backtracking behavior.</li>
      <li><span className="font-bold text-[#1a1a1a]">Persistent Social Proof Indicators:</span> Keeping star ratings and historical review counts visible to anchor trust right before the payment trigger.</li>
      <li><span className="font-bold text-[#1a1a1a]">Contextual Urgency Mechanisms:</span> Deploying strategic scarcity cues to incentivize checkout momentum and accelerate active purchase intent.</li>
    </ul>
        </section>

        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Key Learnings</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Transactional Predictability Drives Conversion:</span> Expectation alignment is the foundation of trust. Interfaces must feel predictable and reliable. When a product violates interaction expectations at critical funnel checkpoints, user trust erodes instantaneously, driving immediate friction and conversion drop-offs.</li>
      <li><span className="font-bold text-[#1a1a1a]">Outsized ROI in Micro-Optimizations:</span> Radical overhauls are not always the answer. A simple, low-scope copy refinement and layout adjustment delivered a net +8% conversion lift. This proves that precision behavioral design can unlock immense business value with zero technical overhead.</li>
      <li><span className="font-bold text-[#1a1a1a]">Mitigating Anxiety at High-Friction Nodes:</span> The transaction flow is where the highest emotional friction occurs because user commitment is requested. Prioritizing design interventions at these maximum-anxiety decision nodes yields the most direct and measurable impact on business revenue.</li>
      <li><span className="font-bold text-[#1a1a1a]">Audit First, Speculate Later:</span> Running a lightweight, heuristic audit allows product teams to rapidly isolate high-impact, low-effort opportunities. Grounding design strategies in behavioral evidence rather than visual speculation prevents wasted engineering cycles and accelerates time-to-market.</li>
    </ol>
        </section>

      </CaseStudyTemplate>
    );
  }