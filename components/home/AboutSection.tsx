const aboutStats = [
  {
    value: '10,000+',
    label: 'Hours of hands-on experience',
    icon: 'ri-time-line',
    color: '#60ccf1',
    from: 'from-[#60ccf1]/12',
    to: 'to-[#3372f1]/12',
    border: 'border-[#60ccf1]/15',
    hoverBorder: 'group-hover:border-[#60ccf1]/30',
    hoverFrom: 'group-hover:from-[#60ccf1]/20',
    hoverTo: 'group-hover:to-[#3372f1]/20',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(96,204,241,0.15)]',
    text: 'text-[#60ccf1]',
    glow: 'bg-[#60ccf1]',
  },
  {
    value: 'Top Rated',
    label: 'Plus on Upwork',
    icon: 'ri-medal-fill',
    color: '#34d399',
    from: 'from-[#34d399]/12',
    to: 'to-[#10b981]/12',
    border: 'border-[#34d399]/15',
    hoverBorder: 'group-hover:border-[#34d399]/30',
    hoverFrom: 'group-hover:from-[#34d399]/20',
    hoverTo: 'group-hover:to-[#10b981]/20',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]',
    text: 'text-[#34d399]',
    glow: 'bg-[#34d399]',
  },
  {
    value: 'Multi-Industry',
    label: 'eCommerce, SaaS & Lead Gen',
    icon: 'ri-building-2-line',
    color: '#a78bfa',
    from: 'from-[#a78bfa]/12',
    to: 'to-[#8b5cf6]/12',
    border: 'border-[#a78bfa]/15',
    hoverBorder: 'group-hover:border-[#a78bfa]/30',
    hoverFrom: 'group-hover:from-[#a78bfa]/20',
    hoverTo: 'group-hover:to-[#8b5cf6]/20',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]',
    text: 'text-[#a78bfa]',
    glow: 'bg-[#a78bfa]',
  },
  {
    value: 'Proven',
    label: 'Analytics & performance expertise',
    icon: 'ri-line-chart-line',
    color: '#fbbf24',
    from: 'from-[#fbbf24]/12',
    to: 'to-[#f59e0b]/12',
    border: 'border-[#fbbf24]/15',
    hoverBorder: 'group-hover:border-[#fbbf24]/30',
    hoverFrom: 'group-hover:from-[#fbbf24]/20',
    hoverTo: 'group-hover:to-[#f59e0b]/20',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]',
    text: 'text-[#fbbf24]',
    glow: 'bg-[#fbbf24]',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-blue-500/3 rounded-full blur-[200px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-3">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-4 font-medium">
            About
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            The Team Behind{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
              Eric Analytics
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
          {/* Left - Image */}
          <div>
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-500/5 rounded-[40px] blur-[60px]" />
              <div className="relative bg-[#111] rounded-3xl border border-white/[0.06] overflow-hidden shadow-2xl">
                <img
                  src="https://ericanalytics.net/images/Ideal_Partner.png"
                  alt="Eric Case - Eric Analytics"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>

              {/* Top Rated Plus Badge */}
              <div className="absolute -top-6 -left-6 bg-[#111] border border-white/[0.1] rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-2">
                  <i className="ri-star-fill text-amber-400" />
                  <span className="text-white text-sm font-semibold">Top Rated Plus</span>
                </div>
              </div>

              {/* 10+ Years Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#111] border border-white/[0.1] rounded-2xl p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <i className="ri-verified-badge-fill text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">10+</div>
                </div>
                <div className="text-white text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-white/80 leading-relaxed">
                Eric Analytics was founded by Eric Case after years of working with businesses struggling with inaccurate data, broken conversion tracking, and inefficient advertising spend.
              </p>
              <p className="text-white/80 leading-relaxed">
                After identifying how unreliable analytics and poor attribution were negatively impacting marketing performance, Eric Analytics was built to help growing businesses create accurate, scalable, and data-driven marketing systems.
              </p>
              <p className="text-white/80 leading-relaxed">
                From fixing broken GA4 implementations to improving conversion tracking and attribution accuracy, Eric Analytics helps businesses eliminate data inconsistencies that often lead to wasted ad budgets and poor decision-making.
              </p>
              <p className="text-white/80 leading-relaxed">
                Today, Eric Analytics specializes in building reliable analytics infrastructures, optimizing tracking systems, and helping businesses scale their marketing campaigns with confidence through accurate performance data.
              </p>
            </div>

            {/* Quote Card */}
            <div className="pt-4">
              <div className="bg-gradient-to-r from-[#60ccf1]/5 via-[#3372f1]/5 to-transparent border border-white/[0.06] rounded-2xl p-6">
                <p className="text-white text-lg font-medium italic leading-relaxed">
                  &ldquo;Build reliable data systems first. Scale performance second.&rdquo;
                </p>
                <div className="mt-3 h-px w-20 bg-gradient-to-r from-[#60ccf1]/30 to-transparent" />
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.1] text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-300 cursor-pointer whitespace-nowrap"
            >
              Let&apos;s Connect
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>

        {/* Experience & Authority */}
        <div className="mt-24">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/[0.02] rounded-[40px] blur-[100px]" />
            <div className="relative">
              <div className="flex items-center justify-center gap-5 mb-12">
                <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                    <i className="ri-award-fill text-amber-400 text-sm" />
                  </div>
                  <span className="text-white text-xs uppercase tracking-[0.25em] font-semibold">
                    Experience & Authority
                  </span>
                </div>
                <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent via-white/[0.12] to-transparent" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {aboutStats.map((stat) => (
                  <div
                    key={stat.value}
                    className="group relative bg-[#0f0f0f] border border-white/[0.06] rounded-2xl p-7 hover:border-white/[0.12] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] cursor-default overflow-hidden"
                  >
                    {/* Color-matched glow orb */}
                    <div
                      className={`absolute -top-8 -right-8 w-24 h-24 rounded-full ${stat.glow}/[0.03] blur-[50px] group-hover:${stat.glow}/[0.08] transition-all duration-500`}
                    />
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Icon container with gradient + colored border */}
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.from} ${stat.to} border ${stat.border} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 ${stat.hoverBorder} ${stat.hoverFrom} ${stat.hoverTo} ${stat.hoverShadow}`}
                      >
                        <i
                          className={`${stat.icon} text-xl ${stat.text} transition-transform duration-300 group-hover:scale-110`}
                        />
                      </div>
                      <div className="text-3xl font-bold tracking-tight mb-2.5 text-white">
                        {stat.value}
                      </div>
                      <p className="text-white text-[0.85rem] leading-relaxed font-medium max-w-[200px]">
                        {stat.label}
                      </p>
                      <div className="mt-5 h-px w-10 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}