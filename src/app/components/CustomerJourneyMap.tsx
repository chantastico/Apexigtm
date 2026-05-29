import { ArrowRight, MousePointer, Search, Users, FileText, Calculator, CheckCircle, UserPlus, Mail, BarChart3, Database, Zap, TrendingUp, Heart, Bot, Target, DollarSign, Leaf, Home, Briefcase, TrendingDown } from 'lucide-react';

export default function CustomerJourneyMap() {
  return (
    <div className="space-y-16">
      {/* Strategic Intro */}
      <section>
        <div
          className="p-10 rounded-[2rem] shadow-xl border-2"
          style={{
            background: 'linear-gradient(135deg, #0C2B61 0%, #1159D1 100%)',
            borderColor: 'var(--primary)'
          }}
        >
          <div className="text-center mb-8">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4 text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              APEXI Strategy
            </h1>
            <div
              className="inline-block px-6 py-3 rounded-full text-xl font-semibold mb-3"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontFamily: 'var(--font-accent)',
                letterSpacing: '0.05em'
              }}
            >
              Quebec&apos;s First EV-Focused Insurance Company
            </div>
            <p
              className="text-2xl font-semibold text-white mt-4"
              style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
            >
              "Votre protection, notre priorité"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div
              className="p-6 rounded-[1.5rem] border border-white/30"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Heart size={28} className="text-white" />
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Human-Centric Marketing
                </h3>
              </div>
              <p className="text-white/95 text-base">
                Authentic storytelling, empathetic brand voice, customer-first experiences, community building, and emotional connection at every touchpoint
              </p>
            </div>
            <div
              className="p-6 rounded-[1.5rem] border border-white/30"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Bot size={28} className="text-white" />
                <h3
                  className="text-xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  AI-Powered Workflows
                </h3>
              </div>
              <p className="text-white/95 text-base">
                Intelligent quote automation, predictive analytics, CRM optimization, personalized nurture campaigns, and operational efficiency behind the scenes
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              className="p-8 rounded-[1.5rem] border border-white/30"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                >
                  <BarChart3 size={24} className="text-white" />
                </div>
                <h2
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  GTM like a B2B SaaS
                </h2>
              </div>
              <ul className="space-y-3 text-white/95">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">Data-driven customer acquisition & attribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">Multi-channel funnel optimization & A/B testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">CAC, LTV, conversion rate focus</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">Product-led growth & self-service quoting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">CRM-powered lifecycle nurture campaigns</span>
                </li>
              </ul>
            </div>

            <div
              className="p-8 rounded-[1.5rem] border border-white/30"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                >
                  <TrendingUp size={24} className="text-white" />
                </div>
                <h2
                  className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Marketing like a D2C Brand
                </h2>
              </div>
              <ul className="space-y-3 text-white/95">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">Authentic, human brand voice & storytelling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">Social-first content & community building</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">Influencer & partnership-driven awareness</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">Visual-heavy, mobile-optimized experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--success-green)' }} />
                  <span className="text-base">Customer-centric UX with instant gratification</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-white/90 text-lg max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
              Combining the precision and scalability of B2B SaaS go-to-market with the emotional connection
              and virality of direct-to-consumer brand marketing to dominate the Quebec EV insurance market.
            </p>
          </div>
        </div>
      </section>

      {/* Buyer Personas */}
      <section>
        <h2
          className="text-3xl font-semibold mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--trust-blue)'
          }}
        >
          Buyer Personas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyerPersonas.map((persona, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-[2rem] shadow-lg border-2"
              style={{ borderColor: persona.color }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: persona.color + '20' }}
              >
                <persona.icon size={32} style={{ color: persona.color }} />
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: persona.color }}
              >
                {persona.name}
              </h3>
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: 'var(--on-surface-variant)', fontFamily: 'var(--font-accent)' }}
              >
                {persona.subtitle}
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--trust-blue)' }}>
                    Demographics:
                  </p>
                  <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
                    {persona.demographics}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--trust-blue)' }}>
                    Pain Points:
                  </p>
                  <ul className="space-y-1">
                    {persona.painPoints.map((point, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span style={{ color: persona.color }}>•</span>
                        <span style={{ color: 'var(--on-surface-variant)' }}>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold mb-1" style={{ color: 'var(--trust-blue)' }}>
                    Acquisition Channels:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {persona.channels.map((channel, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{
                          backgroundColor: persona.color + '15',
                          color: persona.color,
                          fontFamily: 'var(--font-accent)'
                        }}
                      >
                        {channel}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quebec EV Market Data */}
      <section>
        <h2
          className="text-3xl font-semibold mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--trust-blue)'
          }}
        >
          Quebec EV Market Opportunity (2026-2031)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="p-8 rounded-[2rem] shadow-lg"
            style={{ backgroundColor: 'var(--surface-mist)' }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--trust-blue)' }}
            >
              Market Projections
            </h3>
            <div className="space-y-4">
              {marketData.map((data, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                  >
                    <data.icon size={24} />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-semibold mb-1"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--trust-blue)' }}
                    >
                      {data.metric}
                    </h4>
                    <p className="text-2xl font-bold mb-1" style={{ color: 'var(--primary)' }}>
                      {data.value}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
                      {data.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-8 rounded-[2rem] shadow-lg border-2"
            style={{ borderColor: 'var(--warning-orange)', backgroundColor: 'white' }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--warning-orange)' }}
            >
              White Space Opportunities
            </h3>
            <div className="space-y-4">
              {whiteSpaceOpportunities.map((opportunity, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-[1rem]"
                  style={{ backgroundColor: 'var(--surface-mist)' }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <Target size={20} style={{ color: 'var(--warning-orange)', flexShrink: 0, marginTop: 2 }} />
                    <h4
                      className="text-base font-semibold"
                      style={{ fontFamily: 'var(--font-display)', color: 'var(--trust-blue)' }}
                    >
                      {opportunity.title}
                    </h4>
                  </div>
                  <p className="text-sm ml-8" style={{ color: 'var(--on-surface-variant)' }}>
                    {opportunity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Benchmark */}
      <section>
        <h2
          className="text-3xl font-semibold mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--trust-blue)'
          }}
        >
          Competitive Benchmark & Strategic Insights
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {competitorInsights.map((competitor, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-[2rem] shadow-md border border-[#e0e2e8]"
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--trust-blue)' }}
              >
                {competitor.name}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: 'var(--success-green)' }}>
                    ✓ What They Do Well:
                  </p>
                  <ul className="space-y-1">
                    {competitor.strengths.map((strength, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <CheckCircle size={14} style={{ color: 'var(--success-green)', flexShrink: 0, marginTop: 2 }} />
                        <span style={{ color: 'var(--on-surface-variant)' }}>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-2" style={{ color: 'var(--primary)' }}>
                    → APEXI Opportunity:
                  </p>
                  <ul className="space-y-1">
                    {competitor.apexiOpportunity.map((opp, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <ArrowRight size={14} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: 2 }} />
                        <span style={{ color: 'var(--on-surface-variant)' }}>{opp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sales Channels Section */}
      <section>
        <h2
          className="text-3xl font-semibold mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--trust-blue)'
          }}
        >
          Sales Channels
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salesChannels.map((channel, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-[2rem] shadow-sm border border-[#e0e2e8] hover:shadow-md transition-shadow"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: 'var(--surface-mist)' }}
              >
                <channel.icon size={24} style={{ color: 'var(--primary)' }} />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {channel.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
                {channel.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Journey Stages */}
      <section>
        <h2
          className="text-3xl font-semibold mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--trust-blue)'
          }}
        >
          Customer Journey Stages
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {journeyStages.map((stage, idx) => (
              <div key={idx} className="relative">
                <div
                  className="p-6 bg-white rounded-[1rem] shadow-sm border-2 hover:shadow-lg transition-all"
                  style={{ borderColor: stage.color }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                    style={{ backgroundColor: stage.color + '20' }}
                  >
                    <stage.icon size={20} style={{ color: stage.color }} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-2"
                    style={{ fontFamily: 'var(--font-display)', color: stage.color }}
                  >
                    {stage.title}
                  </h3>
                  <ul className="space-y-1">
                    {stage.touchpoints.map((touchpoint, i) => (
                      <li key={i} className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
                        • {touchpoint}
                      </li>
                    ))}
                  </ul>
                </div>
                {idx < journeyStages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <ArrowRight size={16} style={{ color: 'var(--outline)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pages & Touchpoints */}
      <section>
        <h2
          className="text-3xl font-semibold mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--trust-blue)'
          }}
        >
          Website Pages & Touchpoints
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pages.map((page, idx) => (
            <div
              key={idx}
              className="p-6 rounded-[1rem] shadow-sm border border-[#c3c6d6]"
              style={{ backgroundColor: 'var(--surface-mist)' }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--trust-blue)' }}
                >
                  {page.name}
                </h3>
                <span
                  className="px-3 py-1 text-xs font-semibold rounded-full"
                  style={{
                    fontFamily: 'var(--font-accent)',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    letterSpacing: '0.05em'
                  }}
                >
                  {page.stage}
                </span>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--on-surface-variant)' }}>
                {page.purpose}
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold" style={{ color: 'var(--trust-blue)' }}>
                  Key Actions:
                </p>
                {page.actions.map((action, i) => (
                  <div key={i} className="text-xs flex items-start gap-2">
                    <CheckCircle size={14} style={{ color: 'var(--success-green)', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: 'var(--on-surface-variant)' }}>{action}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Backend Integrations */}
      <section>
        <h2
          className="text-3xl font-semibold mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--trust-blue)'
          }}
        >
          Backend Integrations & Data Flow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {backendSystems.map((system, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-[2rem] shadow-md border-2"
              style={{ borderColor: system.color }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: system.color + '15' }}
              >
                <system.icon size={28} style={{ color: system.color }} />
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: system.color }}
              >
                {system.name}
              </h3>
              <p className="text-sm mb-4" style={{ color: 'var(--on-surface-variant)' }}>
                {system.description}
              </p>
              <div className="space-y-2">
                <p className="text-xs font-semibold" style={{ color: 'var(--trust-blue)' }}>
                  Data Captured:
                </p>
                {system.dataPoints.map((point, i) => (
                  <div key={i} className="text-xs flex items-start gap-2">
                    <Zap size={12} style={{ color: system.color, flexShrink: 0, marginTop: 2 }} />
                    <span style={{ color: 'var(--on-surface-variant)' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Review & SEO Strategy */}
      <section>
        <h2
          className="text-3xl font-semibold mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--trust-blue)'
          }}
        >
          Review Generation & SEO Amplification Strategy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="p-8 rounded-[2rem] shadow-lg border-2"
            style={{ borderColor: 'var(--primary)', backgroundColor: 'white' }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--trust-blue)' }}
            >
              Reddit Community Strategy
            </h3>
            <div className="space-y-4">
              {redditStrategy.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle size={20} style={{ color: 'var(--success-green)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: 'var(--trust-blue)' }}>
                      {item.title}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--on-surface-variant)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-8 rounded-[2rem] shadow-lg"
            style={{ backgroundColor: 'var(--surface-mist)' }}
          >
            <h3
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--trust-blue)' }}
            >
              Review Platforms & SEO Impact
            </h3>
            <div className="space-y-4">
              {reviewPlatforms.map((platform, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white rounded-[1rem] border"
                  style={{ borderColor: 'var(--outline)' }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4
                      className="font-semibold"
                      style={{ color: 'var(--trust-blue)', fontFamily: 'var(--font-display)' }}
                    >
                      {platform.name}
                    </h4>
                    <span
                      className="px-3 py-1 text-xs font-bold rounded-full"
                      style={{
                        backgroundColor: platform.priority === 'HIGH' ? 'var(--success-green)' : 'var(--primary)',
                        color: 'white',
                        fontFamily: 'var(--font-accent)'
                      }}
                    >
                      {platform.priority}
                    </span>
                  </div>
                  <p className="text-sm mb-2" style={{ color: 'var(--on-surface-variant)' }}>
                    {platform.impact}
                  </p>
                  <p className="text-xs font-semibold" style={{ color: 'var(--primary)' }}>
                    → {platform.tactic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EV Focus Strategy */}
      <section>
        <h2
          className="text-3xl font-semibold mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--trust-blue)'
          }}
        >
          EV Insurance Strategy (Quebec Focus)
        </h2>
        <div
          className="p-8 rounded-[2rem] shadow-lg"
          style={{ background: 'linear-gradient(135deg, #0C2B61 0%, #1159D1 100%)' }}
        >
          <h3
            className="text-2xl font-semibold mb-6 text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Specialized EV Positioning
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {evStrategy.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-[1rem] border border-white/20"
              >
                <h4 className="text-lg font-semibold mb-3 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </h4>
                <ul className="space-y-2">
                  {item.tactics.map((tactic, i) => (
                    <li key={i} className="text-sm text-white/90 flex items-start gap-2">
                      <TrendingUp size={16} className="flex-shrink-0 mt-0.5" />
                      <span>{tactic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const salesChannels = [
  {
    icon: Search,
    title: 'YouTube SEO/GEO (Priority #1)',
    description: 'French-language video content targeting "assurance VE Québec", how-to guides, EV savings calculators, customer stories — optimized for YouTube search & discovery'
  },
  {
    icon: Users,
    title: 'Facebook & Instagram',
    description: 'Community building, short-form video (Reels/Stories), customer testimonials, EV tips, behind-the-scenes brand storytelling'
  },
  {
    icon: FileText,
    title: 'Content Marketing Ecosystem',
    description: 'Blog → YouTube → Email → Referral funnel. Educational series, guides, calculators, Quebec EV regulations, savings case studies'
  },
  {
    icon: Search,
    title: 'Organic SEO/GEO',
    description: 'Quebec-focused search optimization targeting "assurance auto électrique Québec" with rich content, video embeds, local schema'
  },
  {
    icon: MousePointer,
    title: 'Paid Ads',
    description: 'Google Ads, YouTube pre-roll, Meta campaigns targeting EV owners and homeowners in Quebec with video creative'
  },
  {
    icon: UserPlus,
    title: 'Partnerships',
    description: 'EV dealerships, charging stations (Circuit Électrique), Quebec auto associations, influencer collaborations'
  },
  {
    icon: TrendingUp,
    title: 'Referral Program',
    description: 'Client referral incentives with social sharing, unique tracking links, reward tiers, automated email campaigns'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture sequences, quote follow-ups, educational drip campaigns, customer stories, referral invitations'
  },
  {
    icon: Users,
    title: 'Reddit & Review Generation',
    description: 'r/Quebec, r/electricvehicles community engagement, authentic customer reviews on Reddit, Google Reviews, Trustpilot — boosting local SEO/GEO'
  }
];

const journeyStages = [
  {
    icon: Search,
    title: 'Awareness',
    color: '#0647AC',
    touchpoints: ['SEO/GEO', 'Paid ads', 'Social media', 'Blog articles']
  },
  {
    icon: FileText,
    title: 'Consideration',
    color: '#1159D1',
    touchpoints: ['Homepage', 'Auto/Home pages', 'Blog', 'Comparison tool']
  },
  {
    icon: Calculator,
    title: 'Quote',
    color: '#2759be',
    touchpoints: ['Quote page', 'Quote by Applied', 'Email capture']
  },
  {
    icon: BarChart3,
    title: 'Comparison',
    color: '#6a95fd',
    touchpoints: ['Comparing tool', 'Email nurture', 'Follow-up']
  },
  {
    icon: CheckCircle,
    title: 'Purchase',
    color: '#12B76A',
    touchpoints: ['Policy purchase', 'CRM entry', 'Confirmation email']
  },
  {
    icon: UserPlus,
    title: 'Advocacy',
    color: '#F79009',
    touchpoints: ['Google Reviews', 'Reddit testimonials', 'Referral program', 'Social sharing']
  }
];

const pages = [
  {
    name: 'Homepage',
    stage: 'AWARENESS',
    purpose: 'First impression, value prop, EV focus positioning for Quebec market',
    actions: ['Start quote CTA', 'Navigate to products', 'View comparison tool', 'Read blog']
  },
  {
    name: 'Auto Insurance',
    stage: 'CONSIDERATION',
    purpose: 'EV-specific coverage details, Quebec regulations, savings calculator',
    actions: ['Learn about EV discounts', 'Get quote', 'Download guide']
  },
  {
    name: 'Home Insurance',
    stage: 'CONSIDERATION',
    purpose: 'EV charger coverage, bundling options, Quebec homeowner benefits',
    actions: ['Learn about bundles', 'Get quote', 'Contact agent']
  },
  {
    name: 'Quote Page',
    stage: 'QUOTE',
    purpose: 'Quote by Applied integration, lead capture, email automation trigger',
    actions: ['Complete quote form', 'Submit info', 'Email capture', 'CRM entry']
  },
  {
    name: 'Comparison Tool',
    stage: 'COMPARISON',
    purpose: 'Compare coverage options, EV vs gas savings, interactive calculator',
    actions: ['Input vehicle data', 'See savings', 'Start quote', 'Share results']
  },
  {
    name: 'Blog',
    stage: 'AWARENESS',
    purpose: 'SEO content, EV education, Quebec insurance tips, thought leadership',
    actions: ['Read articles', 'Subscribe newsletter', 'Share content', 'Get quote']
  },
  {
    name: 'Contact Us',
    stage: 'ALL',
    purpose: 'Multi-channel support, callback requests, live chat integration',
    actions: ['Submit inquiry', 'Schedule call', 'Live chat', 'Find broker']
  },
  {
    name: 'Referral Portal',
    stage: 'ADVOCACY',
    purpose: 'Track referrals, claim rewards, share unique links for converted clients',
    actions: ['Get referral link', 'Track status', 'Claim rewards', 'Share']
  }
];

const backendSystems = [
  {
    icon: Database,
    name: 'CRM System',
    color: '#0C2B61',
    description: 'Central customer data hub tracking all interactions across journey stages',
    dataPoints: [
      'Lead source & channel attribution',
      'Quote requests & status',
      'Policy details & status',
      'Customer communication history',
      'Lifecycle stage tracking'
    ]
  },
  {
    icon: Calculator,
    name: 'Quote by Applied',
    color: '#1159D1',
    description: 'Third-party quoting engine integrated via iframe with branded wrapper',
    dataPoints: [
      'Vehicle & driver information',
      'Coverage selections',
      'Quote pricing & options',
      'Quote completion rate',
      'Conversion data back to CRM'
    ]
  },
  {
    icon: UserPlus,
    name: 'Referral Program',
    color: '#12B76A',
    description: 'Automated referral tracking for converted clients with reward management',
    dataPoints: [
      'Unique referral links per client',
      'Referral conversion tracking',
      'Reward tier qualification',
      'Payout processing',
      'Share analytics (email, social)'
    ]
  },
  {
    icon: BarChart3,
    name: 'GA4 Analytics',
    color: '#F79009',
    description: 'Comprehensive tracking across all touchpoints and conversion funnels',
    dataPoints: [
      'Traffic sources & campaigns',
      'Page engagement metrics',
      'Quote funnel drop-off',
      'Conversion paths',
      'EV content performance'
    ]
  },
  {
    icon: TrendingUp,
    name: 'Analytics Dashboard',
    color: '#6a95fd',
    description: 'Real-time performance monitoring across channels and journey stages',
    dataPoints: [
      'Channel ROI & CAC',
      'Quote-to-policy conversion',
      'Referral program metrics',
      'Email campaign performance',
      'Partner attribution'
    ]
  },
  {
    icon: Mail,
    name: 'Email Marketing',
    color: '#2759be',
    description: 'Automated nurture campaigns triggered by user behavior and journey stage',
    dataPoints: [
      'Quote abandonment triggers',
      'Policy renewal reminders',
      'EV content nurture series',
      'Referral invitation emails',
      'Educational drip campaigns'
    ]
  },
  {
    icon: TrendingUp,
    name: 'Review Management',
    color: '#12B76A',
    description: 'Automated review requests and reputation monitoring across Google, Reddit, Trustpilot',
    dataPoints: [
      '30-day post-purchase review requests',
      'Review sentiment tracking & alerts',
      'Reddit mention monitoring',
      'Google My Business review responses',
      'SEO impact tracking (review schema, ratings)'
    ]
  }
];

const evStrategy = [
  {
    title: 'SEO/GEO Optimization',
    tactics: [
      'Target "assurance véhicule électrique Québec" keyword clusters',
      'Local schema markup for Quebec cities',
      'EV-specific landing pages per region',
      'French-first content strategy'
    ]
  },
  {
    title: 'Partnership Network',
    tactics: [
      'Circuit Électrique charging station co-marketing',
      'EV dealership (Nissan, Tesla, Hyundai) referral agreements',
      'CAA-Québec affiliation program',
      'Hydro-Québec rebate program alignment'
    ]
  },
  {
    title: 'Content Leadership',
    tactics: [
      'EV insurance savings calculator (vs gas vehicles)',
      'Quebec EV regulation explainers',
      'Battery coverage education',
      'Charging infrastructure insurance guides'
    ]
  },
  {
    title: 'Paid Media Focus',
    tactics: [
      'Geo-targeted ads to Quebec EV hotspots (Montreal, Quebec City)',
      'Retargeting EV dealership website visitors',
      'Facebook/Instagram EV owner lookalike audiences',
      'Google Ads EV model-specific campaigns'
    ]
  }
];

const buyerPersonas = [
  {
    icon: Leaf,
    name: 'Éco-Innovateur Marc',
    subtitle: 'The Environmental Conscious Early Adopter',
    color: '#12B76A',
    demographics: '32-45, Montreal/Laval, Tesla Model 3/Nissan Leaf owner, tech-savvy, household income $85k-$140k',
    painPoints: [
      'Traditional insurers do not understand EV-specific needs',
      'No discounts for lower accident risk of EVs',
      'Unclear battery coverage & charging station liability'
    ],
    channels: ['YouTube', 'Instagram', 'Google Search', 'EV Forums']
  },
  {
    icon: Home,
    name: 'Famille Tremblay',
    subtitle: 'The Young Family Bundlers',
    color: '#1159D1',
    demographics: '30-42, suburbs (Longueuil, Brossard, Laval), 2 vehicles (1 EV), homeowners, $95k-$160k household income',
    painPoints: [
      'Need bundle savings (auto + home + EV charger coverage)',
      'Want simple, fast quotes without phone calls',
      'Concerned about EV depreciation & replacement cost'
    ],
    channels: ['Facebook', 'YouTube', 'Referrals', 'Google Search']
  },
  {
    icon: Briefcase,
    name: 'Sophie la Professionnelle',
    subtitle: 'The Cost-Conscious Professional',
    color: '#F79009',
    demographics: '28-38, urban (Montreal, Quebec City), Hyundai Kona/Chevy Bolt, commuter, $65k-$95k income',
    painPoints: [
      'High insurance costs despite safe driving record',
      'Wants transparent pricing & instant comparison',
      'Values convenience & digital-first experience'
    ],
    channels: ['Instagram', 'TikTok', 'Google Search', 'Paid Ads']
  }
];

const marketData = [
  {
    icon: TrendingUp,
    metric: 'EV Registrations',
    value: '320,000+',
    description: 'EVs on Quebec roads by 2026, growing to 650,000+ by 2031 (Quebec government target: 1.5M by 2030)'
  },
  {
    icon: DollarSign,
    metric: 'Market Size',
    value: '$480M',
    description: 'Estimated Quebec EV insurance premium market by 2026, growing at 28% CAGR to $1.5B by 2031'
  },
  {
    icon: Target,
    metric: 'Market Share Opportunity',
    value: '5-8%',
    description: 'Realistic 5-year market share target = $75-120M in annual premiums by 2031 (15,000-24,000 policies)'
  },
  {
    icon: Leaf,
    metric: 'EV Adoption Rate',
    value: '22% by 2031',
    description: 'Quebec leading Canada with 22% EV market share of new vehicle sales (vs 12% national average)'
  }
];

const whiteSpaceOpportunities = [
  {
    title: 'No EV-Specialist Insurer in Quebec',
    description: 'All major insurers (Intact, Desjardins, Belairdirect) treat EVs as standard autos. APEXI can own the "EV insurance expert" positioning with specialized coverage, discounts, and education.'
  },
  {
    title: 'Weak Digital Experience from Incumbents',
    description: 'Traditional Quebec insurers still rely on broker calls. Panda7/Kanetix are aggregators, not brands. APEXI can deliver a Lemonade-style digital experience with instant quotes and mobile-first UX.'
  },
  {
    title: 'Untapped YouTube SEO for French Insurance Content',
    description: 'Minimal French-language YouTube content on "assurance VE Québec" — massive opportunity to dominate video search and build thought leadership through educational content marketing.'
  },
  {
    title: 'EV Charger & Home Bundle Gap',
    description: 'No insurer actively markets home + auto + EV charger installation coverage as a bundle. APEXI can create a "Total EV Protection" package targeting homeowners.'
  },
  {
    title: 'Partnership White Space with Dealerships',
    description: 'EV dealerships lack embedded insurance partners at point of sale. APEXI can build referral programs with Nissan, Hyundai, Tesla service centers, and Circuit Électrique charging network.'
  },
  {
    title: 'Underserved Cost-Conscious Segment',
    description: 'Young professionals (25-38) buying used EVs (Leaf, Bolt) are price-sensitive and digitally native. Incumbents focus on premium new EV buyers. APEXI can target this high-growth segment.'
  },
  {
    title: 'Reddit Community & Review Strategy Gap',
    description: 'No Quebec insurers actively engage on Reddit (r/Quebec, r/electricvehicles). No systematic review generation programs. APEXI can build authentic community presence and leverage reviews for local SEO dominance.'
  }
];

const redditStrategy = [
  {
    title: 'r/Quebec Community Engagement',
    description: 'Participate authentically in Quebec subreddit discussions about insurance, EVs, cost of living. Share helpful advice, not sales pitches. Build brand recognition.'
  },
  {
    title: 'r/electricvehicles Thought Leadership',
    description: 'Answer EV insurance questions, share Quebec-specific EV adoption data, battery coverage insights. Establish APEXI as the EV insurance expert.'
  },
  {
    title: 'AMA (Ask Me Anything) Sessions',
    description: 'Host quarterly AMAs on r/Quebec with APEXI founders/experts. Transparent discussions about EV insurance, Quebec regulations, pricing transparency.'
  },
  {
    title: 'Customer Review Requests',
    description: 'Email converted customers 30 days post-purchase asking them to share their experience on Reddit, Google Reviews. Incentivize with referral bonus or small reward.'
  },
  {
    title: 'Reddit Ads + Organic Strategy',
    description: 'Run targeted Reddit ads to r/Quebec, r/PersonalFinanceCanada while maintaining organic community presence. Authentic engagement prevents ad fatigue.'
  }
];

const reviewPlatforms = [
  {
    name: 'Google Reviews',
    priority: 'HIGH',
    impact: 'Directly impacts local SEO rankings, Google Maps visibility, and "near me" searches for Quebec cities',
    tactic: 'Automated email request 30 days post-purchase with direct Google Review link'
  },
  {
    name: 'Reddit (r/Quebec, r/electricvehicles)',
    priority: 'HIGH',
    impact: 'High-intent traffic, strong SEO backlinks, authentic peer validation, drives brand awareness',
    tactic: 'Encourage organic customer testimonials via email template, engage in AMAs'
  },
  {
    name: 'Trustpilot',
    priority: 'MEDIUM',
    impact: 'Trust signals, review schema markup for search results, conversion rate optimization',
    tactic: 'Embed Trustpilot widget on homepage, quote pages. Request reviews via post-purchase flow'
  },
  {
    name: 'Facebook Reviews',
    priority: 'MEDIUM',
    impact: 'Social proof for Facebook/Instagram traffic, community trust building, retargeting opportunities',
    tactic: 'Prompt satisfied customers to leave Facebook reviews via social media CTAs'
  }
];

const competitorInsights = [
  {
    name: 'The Zebra (U.S. Benchmark)',
    strengths: [
      'Clean, conversion-optimized UX with instant multi-carrier comparison',
      'Strong SEO content strategy with state-specific guides and calculators',
      'Transparent pricing and educational tone builds trust',
      'Mobile-first design and frictionless quote funnel'
    ],
    apexiOpportunity: [
      'Adapt Zebra SaaS-like funnel optimization and A/B testing culture',
      'Build similar content depth but in French for Quebec market',
      'Focus on EV niche vs Zebra generalist approach',
      'Add human touch through customer stories and community building'
    ]
  },
  {
    name: 'Panda7 (Quebec Competitor)',
    strengths: [
      'AMF registration & Quebec regulatory compliance clearly displayed',
      'Fully French interface with Montreal/Laval geo-specific pages',
      'Partnerships with local insurers (L Unique, Promutuel)',
      'Bundle savings messaging (up to 15% discount)',
      '24/7 digital convenience positioning'
    ],
    apexiOpportunity: [
      'Differentiate with EV specialization (Panda7 is generalist)',
      'Build stronger brand personality & storytelling (Panda7 is utilitarian)',
      'Invest in YouTube/video content (Panda7 lacks video strategy)',
      'Create referral/loyalty program (Panda7 has none)',
      'Develop proprietary tools (EV savings calculator, battery coverage guide)'
    ]
  }
];
