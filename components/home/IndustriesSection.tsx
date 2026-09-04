const industries = [
  {
    title: 'eCommerce Brands',
    description: 'Improve conversion tracking, optimize ROAS, and scale paid advertising campaigns.',
    icon: 'ri-store-2-line',
    color: '#60ccf1',
    bgColor: 'from-[#60ccf1]/15 to-[#3372f1]/15',
    borderColor: 'border-[#60ccf1]/20',
    hoverBorder: 'group-hover:border-[#60ccf1]/35',
    hoverBg: 'group-hover:from-[#60ccf1]/25 group-hover:to-[#3372f1]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(96,204,241,0.15)]',
  },
  {
    title: 'SaaS Companies',
    description: 'Improve lead attribution, conversion tracking, and customer acquisition reporting.',
    icon: 'ri-cloud-line',
    color: '#34d399',
    bgColor: 'from-[#34d399]/15 to-[#10b981]/15',
    borderColor: 'border-[#34d399]/20',
    hoverBorder: 'group-hover:border-[#34d399]/35',
    hoverBg: 'group-hover:from-[#34d399]/25 group-hover:to-[#10b981]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]',
  },
  {
    title: 'Lead Generation Businesses',
    description: 'Track leads accurately and optimize campaigns for measurable ROI.',
    icon: 'ri-user-search-line',
    color: '#a78bfa',
    bgColor: 'from-[#a78bfa]/15 to-[#8b5cf6]/15',
    borderColor: 'border-[#a78bfa]/20',
    hoverBorder: 'group-hover:border-[#a78bfa]/35',
    hoverBg: 'group-hover:from-[#a78bfa]/25 group-hover:to-[#8b5cf6]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]',
  },
  {
    title: 'Service-Based Businesses',
    description: 'Improve marketing performance through reliable analytics and reporting.',
    icon: 'ri-briefcase-line',
    color: '#fbbf24',
    bgColor: 'from-[#fbbf24]/15 to-[#f59e0b]/15',
    borderColor: 'border-[#fbbf24]/20',
    hoverBorder: 'group-hover:border-[#fbbf24]/35',
    hoverBg: 'group-hover:from-[#fbbf24]/25 group-hover:to-[#f59e0b]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]',
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/3 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/4 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-3">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-4 font-medium">
            Industries
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
              Growth-Focused Businesses
            </span>
          </h2>
        </div>

        <div className="text-center mb-16">
          <p className="text-white text-base max-w-2xl mx-auto leading-relaxed">
            We work with businesses that rely on accurate data and performance-driven marketing to scale efficiently.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="max-w-[1120px] mx-auto grid md:grid-cols-2 gap-5">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="group h-full relative bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-500 hover:border-white/[0.12] hover:-translate-y-1 overflow-hidden"
            >
              {/* Glow Effect - color matched */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-[0.03] blur-[50px] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: industry.color }}
              />

              <div className="relative z-10 flex items-start gap-5">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${industry.bgColor} ${industry.borderColor} border group-hover:scale-110 ${industry.hoverBorder} ${industry.hoverBg} ${industry.hoverShadow} transition-all duration-300`}
                >
                  <i
                    className={`${industry.icon} text-2xl transition-all duration-300 group-hover:scale-110`}
                    style={{ color: industry.color }}
                  />
                </div>
                <div className="pt-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {industry.description}
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