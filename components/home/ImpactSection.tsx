const impactCards = [
  {
    number: '01',
    icon: 'ri-focus-3-line',
    title: 'TRACKING ACCURACY',
    metric: '+40%',
    description: 'Improved conversion tracking accuracy by up to 40%.',
    image: '/images/impact/01-tracking-accuracy.webp',
    metricColor: 'text-[#60ccf1]',
    iconBg: 'bg-[#60ccf1]/10',
    iconColor: 'text-[#60ccf1]',
    borderColor: 'border-[#60ccf1]/15',
    hoverBorderColor: 'hover:border-[#60ccf1]/30',
    shadowColor: 'hover:shadow-[0_0_60px_rgba(96,204,241,0.07)]',
    numberColor: 'text-[#60ccf1]/60',
  },
  {
    number: '02',
    icon: 'ri-arrow-down-line',
    title: 'CPA REDUCTION',
    metric: '-32%',
    description: 'Reduced cost per acquisition through better data signals.',
    image: '/images/impact/02-cpa-reduction.webp',
    metricColor: 'text-[#34d399]',
    iconBg: 'bg-[#34d399]/10',
    iconColor: 'text-[#34d399]',
    borderColor: 'border-[#34d399]/15',
    hoverBorderColor: 'hover:border-[#34d399]/30',
    shadowColor: 'hover:shadow-[0_0_60px_rgba(52,211,153,0.07)]',
    numberColor: 'text-[#34d399]/60',
  },
  {
    number: '03',
    icon: 'ri-bar-chart-grouped-line',
    title: 'CAMPAIGN SCALE',
    metric: '+2.4x',
    description: 'Enabled scalable Google Ads campaigns with reliable reporting.',
    image: '/images/impact/03-campaign-scale.webp',
    metricColor: 'text-[#a78bfa]',
    iconBg: 'bg-[#a78bfa]/10',
    iconColor: 'text-[#a78bfa]',
    borderColor: 'border-[#a78bfa]/15',
    hoverBorderColor: 'hover:border-[#a78bfa]/30',
    shadowColor: 'hover:shadow-[0_0_60px_rgba(167,139,250,0.07)]',
    numberColor: 'text-[#a78bfa]/60',
  },
];

export default function ImpactSection() {
  return (
    <section id="results" className="py-32 bg-black relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/[0.02] rounded-full blur-[220px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#60ccf1]/[0.02] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-5 font-medium">
            Impact
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] max-w-3xl mb-5">
            Real Impact,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
              Not Just Reports
            </span>
          </h2>
          <h3 className="text-white text-lg lg:text-xl font-semibold tracking-tight max-w-2xl">
            We focus on real results, not just numbers on a report.
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {impactCards.map((card) => (
            <div
              key={card.number}
              className={`group relative rounded-[24px] bg-white/[0.02] backdrop-blur-sm border ${card.borderColor} ${card.hoverBorderColor} overflow-hidden transition-all duration-500 ${card.shadowColor} hover:-translate-y-1`}
            >
              {/* Content */}
              <div className="p-6 pb-4">
                {/* Icon + Number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-full ${card.iconBg} border border-white/[0.06] flex items-center justify-center shrink-0`}>
                    <i className={`${card.icon} ${card.iconColor} text-base`} />
                  </div>
                  <span className={`text-xs font-semibold tracking-[0.15em] ${card.numberColor}`}>
                    {card.number}
                  </span>
                </div>

                {/* Title */}
                <p className="text-white text-xs font-bold uppercase tracking-[0.12em] mb-2 opacity-80">
                  {card.title}
                </p>

                {/* Metric */}
                <p className={`text-4xl font-bold tracking-tight ${card.metricColor} mb-2`}>
                  {card.metric}
                </p>

                {/* Description */}
                <p className="text-white text-sm leading-relaxed max-w-xs">
                  {card.description}
                </p>
              </div>

              {/* Image */}
              <div className="px-4 pb-5">
                <div className="relative w-full rounded-2xl overflow-hidden">
                  <img
                    src={card.image}
                    alt="Analytics dashboard"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}