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
import raynaWebApp from '../../assets/case-studies/rayna_web-app.png';
import raynaMethodology from '../../assets/case-studies/rayna_methodology.png';
import raynaPre1 from '../../assets/case-studies/rayna_pre_1.jpg';
import raynaPre2 from '../../assets/case-studies/rayna_pre_2.jpg';
import raynaInfArq from '../../assets/case-studies/rayna_information_arq.jpg';
import raynaBenchmark from '../../assets/case-studies/rayna_benchmark.jpg';
import raynaStyle from '../../assets/case-studies/rayna_style.jpg';
import raynaStyle2 from '../../assets/case-studies/rayna_style_2.jpg';
import raynaPrototype from '../../assets/case-studies/rayna_prototype.mp4';

export default function LegalCaseStudy({ setLightboxSrc }) {
  return (
    <CaseStudyTemplate
      category="LEGAL TECH"
      title="UX Intervention for a Legal Provider Web App"
      subtitle="Rescuing a stalled product by restructuring its information architecture and conducting Usability Testing to unblock project delivery."
      heroImage={raynaWebApp} // pasamos la variable entre llaves, sin comillas
      role="Product Designer"
      timeline="Sep – Oct 2020"
      services="UX Intervention · Information Architecture · Usability Testing"
    >
      <section className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">The Challenge</h2>
        <p className="leading-relaxed">
        <a
    href="https://www.raynacorp.com/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className="text-[#3a7dc9] font-bold underline hover:text-[#2a5a8f] transition-colors"
  >Rayna Corp
  </a> helps law firms accelerate administrative workflows by deploying tailored operational systems.</p>  
        <p className="leading-relaxed">
        A development partner had been engineering a dedicated web application for RayNa Corp for nearly a year. Prior to launch, the client surfaced critical interaction challenges—which were not backend bugs, <span className="font-bold text-[#1a1a1a]">but severe user experience deficiencies.</span></p>
        <p className="leading-relaxed">
        The product lifecycle was completely stalled. The client rejected the implementation, and the engineering squad could not proceed without strategic design guidance. The objective required a precise <span className="font-bold text-[#1a1a1a]">UX intervention to resolve stakeholder objections,</span> establish intuitive navigation architectures for a diverse audience, and deploy modifications safely within the active development constraints.        </p>
      </section>

      <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">My Role & Approach</h2>
        <p className="leading-relaxed">
        As the Product Designer, I stepped into an active, high-friction development cycle. My core mandate was to: </p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
    <li>Isolate the exact interaction bottlenecks triggering client dissatisfaction.</li>
    <li>Architect high-impact, low-scope interface refinements that could be deployed rapidly without a full system rebuild.</li>
    <li>Implementación de un sistema de búsqueda predictiva.</li>
    <li>Successfully bridge the gap between engineering constraints and complex business expectations.</li>
  </ul>
        <p>My strategic approach prioritized workspace empathy: I systematically analyzed how administrative professionals interacted with the platform to uncover frustration patterns, streamline operational flows, and directly unblock product delivery.        </p>
      </section>

      <ZoomImage src={raynaMethodology} alt="Rayna Methodology" setLightboxSrc={setLightboxSrc} />

      <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Discovery & Heuristic Audit</h2>
        <p className="leading-relaxed">
        Prior to alignment meetings, I executed a comprehensive heuristic evaluation and interface analysis of the active Web App to thoroughly map:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
    <li><span className="font-bold text-[#1a1a1a]">Transactional Functionality:</span> Evaluating core navigation flows and data-entry behaviors.</li>
    <li><span className="font-bold text-[#1a1a1a]">Feature Architecture:</span> Documenting the existing layout constraints and database relationships.</li>
    <li><span className="font-bold text-[#1a1a1a]">Friction Baselines:</span> Friction Baselines: Categorizing the specific usability objections surfaced at the start of the project lifecycle.</li>
  </ul>
  </section>

<ZoomImage src={raynaPre1} alt="Rayna Previous 1" setLightboxSrc={setLightboxSrc} />
<ZoomImage src={raynaPre2} alt="Rayna Previous 2" setLightboxSrc={setLightboxSrc} />

      <section className="space-y-4 pt-6">
        <p className="leading-relaxed">
        This diagnostic phase isolated clear UX gaps requiring immediate interface architecture refinements:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
    <li><span className="font-bold text-[#1a1a1a]">Geographical Dropdown Protocols:</span> Transitioning text-entry state fields into standardized selectors to prevent data fragmentation.</li>
    <li><span className="font-bold text-[#1a1a1a]">Funnel Optimization:</span> Accelerating internal data processing through advanced search filtering and multi-column sorting algorithms.</li>
    <li><span className="font-bold text-[#1a1a1a]">Information Accessibility:</span> Deploying explicit status tracking mechanisms and visual feedback systems to guide user behavior.</li>
    <li><span className="font-bold text-[#1a1a1a]">Cross-functional alignment:</span> During our internal kick-off session, we audited the active demo, finalized feature scope parameters, mapped development constraints, and prioritized design recommendations to unblock the delivery cycle.</li>
  </ul>
      </section>

      <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">User Research & Workspace Empathy</h2>
        <p className="leading-relaxed">
        We executed user interviews via Zoom and analyzed workspace routines recorded on Loom to capture direct behavioral patterns. This user research surfaced a core matrix of user requirements to transform fragmented legacy features into high-adoption dashboards:</p>        
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Key insights from the interviews
</h3>
<ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
    <li><span className="font-bold text-[#1a1a1a]">Law Firms & Admins:</span> Portals to request updates, manage patient folders, and track transactional history logs.</li>
    <li><span className="font-bold text-[#1a1a1a]">Providers:</span> Integrated search frameworks, multi-column list sorting, and color-coded verification indicators to manage multi-provider legal claims.</li>
    <li><span className="font-bold text-[#1a1a1a]">Ecosystem Tracking:</span> Complete activity logs to track every discrete workspace modification executed across roles.</li>
  </ul>
      </section>

      <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Information Architecture & User Flow</h2>
        <p className="leading-relaxed">
        We restructured the product's information architecture to seamlessly align large volumes of administrative data with user mental models while optimizing core navigational paths</p>        
</section>
<ZoomImage src={raynaInfArq} alt="Rayna Information Arquitecture" setLightboxSrc={setLightboxSrc} />

<section>
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Benchmarking & Data Design
</h3>
<p className="leading-relaxed">
We analyzed data-heavy enterprise platforms to design optimized dashboard patterns capable of structuring dense legal data layers. The objective was to maintain strict layout simplicity and an authoritative, professional aesthetic without compromising processing efficiency.</p>
      </section>
      <ZoomImage src={raynaBenchmark} alt="Rayna Benchmark" setLightboxSrc={setLightboxSrc} />

      <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Design Strategy</h2>
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Key decisions </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
    <li><span className="font-bold text-[#1a1a1a]">Data Table Optimization:</span> Retaining the tabular architecture but engineering a scalable, modernized interface pattern.</li>
    <li><span className="font-bold text-[#1a1a1a]">Information Hierarchy:</span> Injecting dynamic columns to prioritize high-value core metrics upfront.</li>
    <li><span className="font-bold text-[#1a1a1a]">Data Manipulation Controls:</span> Implementing advanced search filters and a robust query system to streamline information processing.</li>
    <li><span className="font-bold text-[#1a1a1a]">Temporal Visual Anchors:</span> Utilizing a color-coded framework (traffic light hierarchy) as immediate timeframe indicators.</li>
    <li><span className="font-bold text-[#1a1a1a]">Iconography Overhaul:</span> Refining the visual signifier system to improve contextual communication efficiency.</li>
    <li><span className="font-bold text-[#1a1a1a]">Corporate Consistency:</span> Aligning the stylistic execution with strict brand guidelines to ensure professional compliance.</li>
    <li><span className="font-bold text-[#1a1a1a]">Contextual Guidance:</span> Embedding inline microcopy and systemic validation prompts to guide user interaction.</li>
    <li><span className="font-bold text-[#1a1a1a]">Error Mitigation Layouts:</span> Utilizing transactional modal sheets to actively prevent accidental data loss.</li>
  </ul>
  <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
  Visual style & Interaction Scope </h3>
  <p className="leading-relaxed">
  We preserved the core corporate color palette while initiating the interactive phase via Low-Fidelity (LoFi) prototypes. This intentional constraint allowed us to thoroughly isolate layout mechanics, interaction behaviors, and operational user flows before allocating product delivery cycles to high-fidelity visual styling.</p>
      </section>
      <ZoomImage src={raynaStyle} alt="Rayna Style Guide" setLightboxSrc={setLightboxSrc} />
      <ZoomImage src={raynaStyle2} alt="Rayna Style Guide 2" setLightboxSrc={setLightboxSrc} />

      <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Prototype & Validation</h2>
        <p className="leading-relaxed">
        We ran alignment sessions to validate both architectural blueprints (Law Firms & Providers flows) against core technical limitations alongside the Engineering Manager and Project Manager.</p>
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Prototype walkthrough </h3>
        <p className="leading-relaxed">
        A walkthrough of the validated prototypes for both Law Firms and Providers flows.</p>
  <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
  Visual style & Interaction Scope </h3>
  <p className="leading-relaxed">
  We preserved the core corporate color palette while initiating the interactive phase via Low-Fidelity (LoFi) prototypes. This intentional constraint allowed us to thoroughly isolate layout mechanics, interaction behaviors, and operational user flows before allocating product delivery cycles to high-fidelity visual styling.</p>
  <section className="my-12">
    {/* 
      1. Quitamos 'shadow-lg' si quieres un look más plano y limpio como las imágenes.
      2. Quitamos 'border border-black/5' para eliminar el stroke.
      3. Mantenemos 'rounded-2xl' para que coincida con tus imágenes.
    */}
    <div className="w-full overflow-hidden rounded-2xl bg-gray-100">
      <video 
        src={raynaPrototype}
        controls 
        playsInline
        className="w-full h-auto block"
      />
    </div>
  </section>
      </section>

      <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Testing with real users </h3>
        <p className="leading-relaxed">
        Following internal alignment, we conducted usability testing sessions with real RayNa Corp users. The objective was to evaluate interactive task completion rates, diagnose behavioral friction, and harvest qualitative optimization insights.</p>
</section>

<section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Feedback & Iteration</h2>
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Key Insights & Refinements From Usability Testing </h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
    <li><span className="font-bold text-[#1a1a1a]">Information Trimming:</span> Deprecating the "Last updated" column after user logs confirmed it created visual clutter without operational value.</li>
    <li><span className="font-bold text-[#1a1a1a]">Core Attribute Visibility:</span> Introducing "Send Bills by" and "Send Records by" columns to maximize immediate data accessibility on the dashboard.</li>
    <li><span className="font-bold text-[#1a1a1a]">Simplifying Parameters:</span> Condensing validation complexity into 3 explicit states: A) Verified within the last year, B) Verified over a year ago, C) Never verified.</li>
    <li><span className="font-bold text-[#1a1a1a]">Action Context:</span> Placing an explicit, quick-action "Verify" trigger directly within the layout rows.</li>
    <li><span className="font-bold text-[#1a1a1a]">Component Optimization:</span> Transforming AKA names into responsive UI tags to cleanly manage multi-input string values.</li>
    <li><span className="font-bold text-[#1a1a1a]">Data Ingestion Efficiency:</span> Ensuring seamless parsing of external data batches into the primary database.</li>
  </ul>
        <p className="leading-relaxed">
        I systematically iterated both prototypes based on these validation insights before the final client alignment. The structural blueprints received formal stakeholder sign-off, unblocking the active product delivery cycle.</p>
      </section>

      <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Results & Handoff</h2>
        <p className="leading-relaxed">
        <span className="font-bold text-[#1a1a1a]">The outcome:</span> After months of being completely stalled, the redesigned product framework unblocked the development lifecycle. The client approved the structural user experience layout directly inside the LoFi blueprints, requiring zero high-fidelity visual design overhead and saving critical product cycles.</p>
        <p className="leading-relaxed">
        <span className="font-bold text-[#1a1a1a]">Handoff Specification:</span> The engineering squad received two fully mapped, production-ready prototypes in Adobe XD:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
    <li>
    <a 
      href="https://xd.adobe.com/view/a402fdd3-076d-484d-b6db-8da82c262ee0-f151/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[#3a7dc9] font-bold underline hover:text-[#2a5a8f] transition-colors"
    >
      Law Firm Prototype
    </a>
    </li>
    <li>
    <a 
      href="https://xd.adobe.com/view/61d17268-860c-48de-b2f3-3ff644707bdd-3482/" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-[#3a7dc9] font-bold underline hover:text-[#2a5a8f] transition-colors"
    >
      Providers Prototype
    </a>
    </li>
  </ul>
      </section>

      <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Key Takeaways</h2>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
    <li><span className="font-bold text-[#1a1a1a]">Strategic Empathy De-escalates Project Friction:</span> When a product lifecycle is stalled, the bottleneck is rarely just technical. Stakeholder frustration often stems from a lack of alignment. Applying a rigorous, evidence-based UX approach allows product teams to translate friction into actionable, prioritized design requirements.</li>
    <li><span className="font-bold text-[#1a1a1a]">Navigating Cross-Functional Balancing Acts:</span> Maximizing velocity requires driving continuous alignment between aggressive business expectations and rigid engineering codebase constraints. Resolving this interaction mismatch was the definitive key to unblocking product delivery.</li>
    <li><span className="font-bold text-[#1a1a1a]">Outsized Value in Low-Fidelity Prototyping:</span> Comprehensive visual overhauls are not always a prerequisite for success. A systematically structured, validated LoFi prototype is fully capable of anchoring stakeholder trust, accelerating alignment, and securing sign-offs without consuming unnecessary engineering cycles.</li>
    <li><span className="font-bold text-[#1a1a1a]">Usability Testing Solidifies Product Confidence:</span> Direct qualitative validation with actual users is irreplaceable. Harvesting operational insights from the active workspace not only refines the interface architecture but also supplies stakeholders with absolute empirical confidence that the product matches market needs.</li>
  </ol>
      </section>
    </CaseStudyTemplate>
  );
}