const whyChooseItems = [
  {
    title: 'Data-First Strategy',
    description: 'We fix tracking and reporting issues before scaling advertising campaigns.',
    icon: 'ri-database-2-line',
    color: '#60ccf1',
    bgColor: 'from-[#60ccf1]/15 to-[#3372f1]/15',
    borderColor: 'border-[#60ccf1]/20',
    hoverBorder: 'group-hover:border-[#60ccf1]/35',
    hoverBg: 'group-hover:from-[#60ccf1]/25 group-hover:to-[#3372f1]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(96,204,241,0.15)]',
  },
  {
    title: 'Advanced Tracking Expertise',
    description: 'Deep expertise in GA4, GTM, server-side tracking, and attribution modeling.',
    icon: 'ri-radar-line',
    color: '#34d399',
    bgColor: 'from-[#34d399]/15 to-[#10b981]/15',
    borderColor: 'border-[#34d399]/20',
    hoverBorder: 'group-hover:border-[#34d399]/35',
    hoverBg: 'group-hover:from-[#34d399]/25 group-hover:to-[#10b981]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]',
  },
  {
    title: 'ROI-Focused Execution',
    description: 'Every strategy is designed around measurable business growth.',
    icon: 'ri-funds-line',
    color: '#a78bfa',
    bgColor: 'from-[#a78bfa]/15 to-[#8b5cf6]/15',
    borderColor: 'border-[#a78bfa]/20',
    hoverBorder: 'group-hover:border-[#a78bfa]/35',
    hoverBg: 'group-hover:from-[#a78bfa]/25 group-hover:to-[#8b5cf6]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]',
  },
  {
    title: 'Transparent Process',
    description: 'Clear reporting, performance insights, and actionable recommendations.',
    icon: 'ri-search-eye-line',
    color: '#fbbf24',
    bgColor: 'from-[#fbbf24]/15 to-[#f59e0b]/15',
    borderColor: 'border-[#fbbf24]/20',
    hoverBorder: 'group-hover:border-[#fbbf24]/35',
    hoverBg: 'group-hover:from-[#fbbf24]/25 group-hover:to-[#f59e0b]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]',
  },
  {
    title: 'Specialized Analytics Expertise',
    description: 'We solve tracking and attribution issues most agencies overlook.',
    icon: 'ri-sparkling-line',
    color: '#f472b6',
    bgColor: 'from-[#f472b6]/15 to-[#ec4899]/15',
    borderColor: 'border-[#f472b6]/20',
    hoverBorder: 'group-hover:border-[#f472b6]/35',
    hoverBg: 'group-hover:from-[#f472b6]/25 group-hover:to-[#ec4899]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(244,114,182,0.15)]',
  },
];

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="py-32 bg-black relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-blue-500/4 rounded-full blur-[180px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-3">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-4 font-medium">
            Why Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Why Businesses Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
              Eric Analytics
            </span>
          </h2>
        </div>

        <div className="text-center mb-16">
          <p className="text-white text-base max-w-3xl mx-auto leading-relaxed">
            Unlike traditional agencies that focus only on ad management, Eric Analytics prioritizes backend data accuracy before scaling campaigns. Our approach ensures businesses make decisions using reliable data instead of assumptions.
          </p>
        </div>

        {/* Items */}
        <div className="max-w-[960px] mx-auto space-y-4">
          {whyChooseItems.map((item) => (
            <div
              key={item.title}
              className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-7 hover:bg-white/[0.04] hover:border-white/[0.12] transition-all duration-500 overflow-hidden cursor-default"
            >
              {/* Glow Effect - color matched */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-[0.03] blur-[50px] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: item.color }}
              />

              <div className="relative z-10 flex items-start gap-5">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${item.bgColor} ${item.borderColor} border group-hover:scale-110 ${item.hoverBorder} ${item.hoverBg} ${item.hoverShadow} transition-all duration-300`}
                >
                  <i
                    className={`${item.icon} text-2xl transition-all duration-300 group-hover:scale-110`}
                    style={{ color: item.color }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}