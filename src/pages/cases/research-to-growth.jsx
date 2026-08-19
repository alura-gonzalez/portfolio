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
  import hingeHero from '../../assets/case-studies/health.png';
  import hingeCROcurrent from '../../assets/case-studies/cro-current-main-flow.png';
  import hingeCROnewFlows from '../../assets/case-studies/cro-new-flows.png';
  import hingeCROpersonas from '../../assets/case-studies/cro-personas.png';
  import hingeCROtext from '../../assets/case-studies/cro-text-preview.png';
  import hingeCROfunnel from '../../assets/case-studies/cro-funnel.png';
  
  export default function LegalCaseStudy({ setLightboxSrc }) {
    return (
      <CaseStudyTemplate
        category="HEALTH TECH"
        title="Turn Research into Growth"
        subtitle="A CRO Audit that uncovered a core communication problem and built a roadmap to fix it."
        heroImage={hingeHero} // pasamos la variable entre llaves, sin comillas
        role="Growth Designer"
        timeline="Jun 2023"
        services="CRO Audit · UX Strategy · Growth Design"
      >
        <section className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">The Challenge</h2>
          <p className="leading-relaxed">
          A health-tech company reached out to us. They had a great value proposition, a consolidated service, and a fantastic team working daily to make it even better. Despite all this, the client-facing communication was confusing enough to take us almost two months to fully understand how people could access their service.</p>  
          <p className="leading-relaxed">
          The opportunity was clear: identify the friction points in the user journey and build a roadmap to optimize conversion across all user segments.</p>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">My Role & Approach</h2>
          <p className="leading-relaxed">
          As part of the <span className="font-bold text-[#1a1a1a]">Conversion Rate Optimization (CRO) team,</span> I jumped into a CRO Audit to identify the most significant opportunities. While the findings suggested there were high-level best practices the client could take advantage of, the most valuable optimization opportunity came from a more profound level of intervention.</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Audit first:</span> Gather findings from available sources — comparative analysis, psychological triggers, and best practices.</li>
      <li><span className="font-bold text-[#1a1a1a]">Benchmark:</span> Align with current trends of direct competitors and best-performance companies.</li>
      <li><span className="font-bold text-[#1a1a1a]">User-centric:</span> Focus on building trust through low-scope / high-impact experiments.</li>
      <li><span className="font-bold text-[#1a1a1a]">Storytelling:</span> Use user journeys to shift stakeholder conversations from opinions to possibilities.</li>
    </ul>
        </section>
  
        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Part 1: Audit & Benchmark</h2>
          <p className="leading-relaxed">
          A CRO Audit gathers findings from available sources, such as comparative analysis, psychological triggers that impact behavior, and best practices applied to the client's digital assets.</p>
          <p className="leading-relaxed">
          The CRO Audit was run on the high-traffic pages and primary user flow from the website, mobile and desktop variations included.</p>
          <p className="leading-relaxed">
          When running this kind of audit, we go from low-scope opportunities (H1 copy, supportive paragraph, loading time, screen sequences, social proof, voice, message, CTAs copy) to high-scope optimization (adding screens, features, interactions, search engines, and so on).</p>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Our principle
          </h3>
          <p className="leading-relaxed">
          Since we are all humans, the most important thing is to build trust. That's why we always focus our proposals on those lowest-scope / highest-impact experiments.</p>
      <p className="leading-relaxed">
      The Benchmark helped us align with current trends of direct competitors and best-performance companies. Having those insights in the loop embraced our proposals, validated solutions, and repurposed best practices.</p>
    </section>
  
        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Part 2: The User Journey</h2>
        <p className="leading-relaxed">
        One of the biggest challenges was negotiating with stakeholders. While everyone's job is essential, the capacity for execution is limited. Prioritizing efforts and strategies that would translate into business outcomes was crucial. That's where storytelling played its part.</p>
        <p className="leading-relaxed">
        Users' journeys helped the stakeholders imagine themselves in the flow — and to find themselves in a position where friction was happening. The conversation moved from "I think this is the best solution" to "how we can help users solve this problem." The speech changed completely. It became less about beliefs and more about possibilities.</p>
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        The Discovery
          </h3>
      <p className="leading-relaxed">
      There were four personas for the health-tech company. Each persona had interacted with the company differently. Once we let the client know about these four personas, we showed how the current flow impacted the interaction with the different users.</p>
      <p className="leading-relaxed">
      The main concern: The client's communication was focused on only one segment, overlooking the other three segments of personas that had no reason to stay in the flow.</p> 
        </section>

        <ZoomImage src={hingeCROpersonas} alt="CRO Personas" setLightboxSrc={setLightboxSrc} />

        <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        The Proposals
          </h3>
          <p className="leading-relaxed">
          The proposals we presented focused on how they could help mitigate the negative impact on the other segments of personas while boosting their current audience experience.</p>
      <p className="leading-relaxed">
      The tests were presented as <span className="font-bold text-[#1a1a1a]">9 Mockups in Figma.</span> Each test got:</p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li>Context</li>
      <li>Hypothesis</li>
      <li>Test name</li>
      <li>KPI</li>
      <li>Mockup</li>
      <li>Competitor example</li>
    </ul>
    <p className="leading-relaxed">
    They were divided into three buckets:</p>
    <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Lowest scope tests</span>  — easiest to implement.</li>
      <li><span className="font-bold text-[#1a1a1a]">Middle scope tests.</span></li>
      <li><span className="font-bold text-[#1a1a1a]">Most impactful tests</span> — currently the hardest to implement.</li>
    </ul>
        </section>

        <ZoomImage src={hingeCROtext} alt="Bounce Key Info" setLightboxSrc={setLightboxSrc} />
  
        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
        Part 3: The Roadmap
          </h2>
          <p className="leading-relaxed">
          After having the first conversation with the client, we set up a Roadmap to focus on the optimization goal.</p>
          <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
          Step 1: Map segments to the funnel
          </h3>
          <p className="leading-relaxed">
          We mapped the segments of personas into the marketing funnel stages to set each flow's purpose.</p>
        </section>

        <ZoomImage src={hingeCROfunnel} alt="Bounce Progress" setLightboxSrc={setLightboxSrc} />

        <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Step 2: Create optimized user journeys
          </h3>
          <p className="leading-relaxed">
          Once we identified the purpose of the different flows, we created the user journeys that best accomplish that purpose and are optimized enough to work between them with the minimum amount of implementation work.</p>
        </section>

        <ZoomImage src={hingeCROnewFlows} alt="Bounce Scarcity" setLightboxSrc={setLightboxSrc} />
  
        <section className="space-y-4 pt-6">
        <h3 className="text-xl font-bold text-[#111111] mt-8 mb-4">
        Step 3: Align experiments to business outcomes
          </h3>
          <p className="leading-relaxed">
          We took that information into the Roadmap to align the experiments to business outcomes. This has been a WIP roadmap since, on each iteration, it suffered adjustments according to the client and experiments requests. Nevertheless, the primary purpose of the Roadmap is to keep track of the experiments, document results, and inform the testing plan.</p>
      <p className="leading-relaxed">
      <span className="font-bold text-[#1a1a1a]">Currently, the Roadmap is a spreadsheet that communicates:</span></p>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Basic Information:</span> Test name, Test Goal, Cross-Business Goals, Segment, Status.</li>
      <li><span className="font-bold text-[#1a1a1a]">Description:</span> Brief description, Pages where the experiment runs, Platform, Comments.</li>
      <li><span className="font-bold text-[#1a1a1a]">Analyze and Plan:</span> Baseline Conversion Rate %, Target Conversion Rate %, Total Variations, Variations Preview, Start-End date, Traffic Allocation.</li>
      <li><span className="font-bold text-[#1a1a1a]">Results:</span> Result % (Lift/Loss), What should you investigate further? How does this test impact roadmap prioritization?</li>
    </ul>
        </section>

       <section className="space-y-4 pt-6">
       <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
       Part 4: Gather Insights & Iterate
          </h2>
          <p className="leading-relaxed">
          After running tests for months, we collected incredible findings on people's preferences and behavior. Some of these were expected, and other results were completely mind-blowing.</p>
      <p className="leading-relaxed">
      We encountered significant interaction, and the middle is moving in a good direction overall, but more importantly, tests kept giving us information on how to tailor our next strategy — and helped us understand what is going on in the person's life beyond the screens.</p>
        </section>
  
        <section className="space-y-4 pt-6">
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">
        Key Takeaways
          </h2>
          <ul className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Continuous Visual Reference:</span> Embedding persistent location context to drastically reduce cognitive load and backtracking behavior.</li>
      <li><span className="font-bold text-[#1a1a1a]">Persistent Social Proof Indicators:</span> Keeping star ratings and historical review counts visible to anchor trust right before the payment trigger.</li>
      <li><span className="font-bold text-[#1a1a1a]">Contextual Urgency Mechanisms:</span> Deploying strategic scarcity cues to incentivize checkout momentum and accelerate active purchase intent.</li>
    </ul>
        </section>

        <section className="space-y-4 pt-6">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a]">Key Learnings</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700 leading-relaxed">
      <li><span className="font-bold text-[#1a1a1a]">Testing is a reminder of our human condition. </span> In many cases, I have seen how great projects put their hard work out on the internet, getting nothing from people, interaction, and results.</li>
      <li><span className="font-bold text-[#1a1a1a]">Small tweaks matter.</span> After watching the same mistake repeatedly and how the little tweaks have helped to increase that desired metric, we must identify the concerns and motivations that drive people to take action.</li>
      <li><span className="font-bold text-[#1a1a1a]">CRO can not be a disconnected strategy.</span>  It feeds from research, marketing, sales, content, growth, development, and every possible team behind these projects.</li>
      <li><span className="font-bold text-[#1a1a1a]">CRO is about taking care of people.</span> To me, CRO has been the door through which we can take care of people while they are using our digital products.</li>
    </ol>
        </section>

      </CaseStudyTemplate>
    );
  }