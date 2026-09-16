const processSteps = [
  {
    number: '01',
    title: 'Tracking Audit & Strategy',
    description: 'Tracking Audit, Requirement Analysis & Strategy Planning',
  },
  {
    number: '02',
    title: 'Technical Implementation',
    description: 'GA4, GTM, Server-Side Tracking, Meta Pixel & CAPI Setup',
  },
  {
    number: '03',
    title: 'Event & Conversion Tracking',
    description: 'Event, Conversion, eCommerce, Funnel & Cross-Domain Tracking Implementation',
  },
  {
    number: '04',
    title: 'Ads & CRM Integration',
    description: 'Google Ads, Meta Ads, CRM Integration & Attribution Optimization',
  },
  {
    number: '05',
    title: 'Validation & Optimization',
    description: 'Data Validation, Custom Reporting, Performance Monitoring & ROAS Optimization',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white mb-4">
            The Process
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
              Conversion-Focused
            </span>{' '}
            Process
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — Illustration */}
          <div>
            <div className="relative">
              <img
                src="/images/eric-analytics/the-process.png"
                alt="Data Analytics and Visualization"
                className="relative w-full max-w-sm mx-auto md:mx-0"
                width={371}
                height={636}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right — Process Cards */}
          <div>
            <div className="space-y-5">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="group relative flex gap-5 p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.10] transition-all duration-300"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#60ccf1]/15 to-[#3372f1]/15 border border-[#60ccf1]/20 flex items-center justify-center">
                    <span className="text-sm font-bold text-[#60ccf1]">{step.number}</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-white text-sm md:text-base font-semibold mb-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}