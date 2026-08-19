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
  import SafariBae from '../../assets/case-studies/Safari-BAE-l.png';
  
  export default function LegalCaseStudy({ setLightboxSrc }) {
    return (
      <CaseStudyTemplate
        category="ED-TECH"
        title="Safari Nursery: Behavioral Design for Engagement"
        subtitle="Increasing Day 1 user return rates by +3.5pp through behavioral design frameworks and rapid iterative testing within a 4-sprint Scrum timeline."
        heroImage={SafariBae}
        role="Product Designer"
        timeline="Jun – Aug 2025"
        services="UX Strategy · Growth Design · Gamification Mechanics"
      >
      {/* Bloque de NDA colocado justo al inicio del contenido */}
      <div className="p-6 sm:p-8 bg-[#e3e0cf] rounded-3xl flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl select-none" role="img" aria-label="Warning">
              ⚠️
            </span>
            <div>
              <h3 className="text-base font-bold text-[#1a1a1a]">
                Full case study available upon request
              </h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                This summary is NDA-protected. The full version includes research findings, user flows, and stakeholder presentations.
              </p>
              <a 
            href="mailto:alura.gonzalez@gmail.com?subject=Requesting%20access%20to%20Safari%20Nursery%20Case%20Study" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#3a7dc9] hover:text-[#2a5a8f] whitespace-nowrap transition-colors"
          >
            Request access →
          </a>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">The Challenge</h2>
          <p className="leading-relaxed">
          A leading EdTech platform with millions of users faced a critical growth bottleneck: high initial activation, but steep short-term retention drop-offs. While the "Safari Workshop" ecosystem was a top destination for new users on Day 0, product analytics revealed a significant churn rate immediately following the first session.</p>
          <p className="leading-relaxed">
          <span className="font-bold text-[#1a1a1a]"> The Opportunity:</span> Transform a popular standalone feature into an intrinsically habit-forming experience designed to optimize short-term user retention metrics and lower user drop-off.</p>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">My Role & Approach</h2>
          <p className="leading-relaxed">
          As the Product Designer, I collaborated closely with a cross-functional Scrum squad through a high-velocity, 4-sprint cycle to design, validate, and ship a new core feature—the "Nursery"—within the Safari Workshop ecosystem. </p>
          <p className="leading-relaxed"> 
          My approach shifted the focus from merely designing a fun interface to solving a core product monetization and engagement problem: how to mitigate the immediate Day 0 drop-off by building data-backed visual loops that serve as sustainable long-term retention drivers.</p>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Discovery & Hypothesis</h2>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Data signals
  </h3>
  <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li>Quantitative metrics indicated peak activation traffic on Day 0, followed by a steep drop-off in user return rates.</li>
      <li>The baseline interaction model lacked systematic feedback loops, variable rewards, or progression hooks to incentivize repetitive engagement.</li>
    </ul>
    <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
    Hypothesis
  </h3>
  <blockquote className="my-12 border-l-4 border-[#E100FF] pl-8 py-4">
  <p className="text-xl lg:text-2xl font-medium text-[#1a1a1a] leading-relaxed">
    "If we introduce a caretaker-driven experience with emotional connection and progressive discovery, we will increase Day 1 retention by creating a reason for users to return."
  </p>
</blockquote>
    </section>
        
    <section className="space-y-4 pt-6">
    <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Design Strategy</h2>
          <p className="leading-relaxed">
          Safari Nursery was architected around a continuous core engagement loop anchored in three psychological drivers:</p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Emotional investment (The Endowment Effect):</span> Users adopt and nurture a baby animal, triggering a strong sense of digital ownership and personal connection.</li>
      <li><span className="font-bold text-[#1a1a1a]">Progressive discovery:</span> Utilizing progressive disclosure design patterns, each subsequent session unlocks net-new content to systematically deepen user engagement.</li>
      <li><span className="font-bold text-[#1a1a1a]">Intrinsic motivation:</span> The user journey focuses on a highly rewarding, playful interaction model, deliberately minimizing transactional friction to encourage habit loops.</li>
    </ol>
    <p className="leading-relaxed">
    Why this was a growth play: The product framework prioritized long-term habit formation over simple aesthetic appeal. By engineering a clear behavioral trigger (checking on their cub and discovery favorites), the system successfully drove predictable increases in Day 1 and Day 7 retention curves.</p>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Validation & Iteration</h2>
          <p className="leading-relaxed">
          We executed high-velocity AI-assisted prototyping leveraging ChatGPT to drastically compress the design-to-prototype cycle. This allowed the squad to explore, generate, and filter multiple variations of interface layouts, component configurations, and interaction patterns in days rather than weeks, unblocking early internal validation for navigation structures and engagement triggers before engineering deployment.</p>        
          <p className="leading-relaxed">
          Following internal alignment, we conducted targeted playtests with a cohort of 20+ target users (children aged 4–7). These qualitative research sessions validated our core mobile navigation approach while uncovering key opportunities to scale emotional immersion through visual distinctiveness (e.g., custom features like collars and fur variations) and high-feedback character animations.</p>        
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Results</h2>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Engagement Metrics
  </h3>
  <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">33%</span> activation rate of Safari visitors engaging with the Nursery experience at launch.</li>
      <li>Interaction metrics scaled to <span className="font-bold text-[#1a1a1a]">68%</span> within week one, establishing a stabilized <span className="font-bold text-[#1a1a1a]">65–70% sustained engagement plateau</span> across a 4-month tracking window. </li>
    </ul>
    <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
    Retention Metrics
  </h3>
  <blockquote className="my-12 border-l-4 border-[#E100FF] pl-8 py-4">
  <p className="text-xl lg:text-2xl font-medium text-[#1a1a1a] leading-relaxed">
    "Users who engaged with the Nursery were +3.5 percentage points more likely to return on Day 1 compared to those who only visited Safari (controlling for Day 0 activity)."
  </p>
</blockquote>
<p>
<span className="font-bold text-[#1a1a1a]">Business Implication:</span> Early-stage user retention is the primary leading indicator of growth and financial predictability for subscription-based EdTech products. Generating a <span className="font-bold text-[#1a1a1a]">+3.5pp net lift in Day 1 retention</span> directly expands user Lifetime Value (LTV), proving that precision behavioral mechanics and rapid, AI-accelerated design iterations deliver enterprise-scale product optimization.
  </p>
  </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Key Learnings</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Emotional Affordances Scale Retention:</span> Users do not return solely for content consumption; they return for behavioral connection. Embedding robust emotional hooks paired with intentional feedback structures transforms passive sessions into predictable, habit-forming interaction loops.</li>
      <li><span className="font-bold text-[#1a1a1a]">Outsized Returns via Strategic Micro-Interventions:</span> Radical product pivots are rarely required to move core metrics. A low-scope, highly focused behavioral design adjustment generated a net +3.5pp lift, proving that targeting specific psychological drop-off triggers maximizes design ROI.</li>
      <li><span className="font-bold text-[#1a1a1a]">Continuous Validation Drives Product Strategy:</span> True data-driven product design extends far beyond static analytics dashboards. It relies on formulating precise behavioral hypotheses and rigorously validating them through mixed-methods research, balancing quantitative metrics with qualitative user patterns.</li>
    </ol>
    </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Next Steps
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Integrate AI-Driven Personalization Loop:</span> Deploy machine learning models to dynamically recommend activities and tailored content variations based on discrete individual interaction history and behavioral preferences.</li>
      <li><span className="font-bold text-[#1a1a1a]">Scale the Centralized Ecosystem Architecture:</span> Extend the modular nursery asset framework to additional animal archetypes within the Safari vertical, establishing a unified, high-adoption ecosystem of caretaking experiences.</li>
      <li><span className="font-bold text-[#1a1a1a]">Introduce Progression Growth Mechanics: </span> Architect evolution loops allowing assets to mature over time based on sustained engagement milestones, leveraging the Sunk Cost Effect to deeply anchor long-term retention curves.</li>
    </ul>
        </section>

        {/* Bloque de NDA colocado justo al inicio del contenido */}
      <div className="my-12 p-6 sm:p-8 bg-[#e3e0cf] rounded-3xl flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <span className="text-2xl select-none" role="img" aria-label="Warning">
              ⚠️
            </span>
            <div>
              <h3 className="text-base font-bold text-[#1a1a1a]">
                Full case study available upon request
              </h3>
              <p className="mt-1 text-sm text-gray-600 leading-relaxed">
              This case study contains proprietary and confidential information about the product's strategy, user research, and internal metrics. The full version — including research findings, user flows, and stakeholder presentations — is protected under NDA.
              </p>
              <a 
            href="mailto:alura.gonzalez@gmail.com?subject=Requesting%20access%20to%20Safari%20Nursery%20Case%20Study" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#3a7dc9] hover:text-[#2a5a8f] whitespace-nowrap transition-colors"
          >
            Request access →
          </a>
            </div>
          </div>
        </div>
  
      </CaseStudyTemplate>
    );
  }