const services = [
  {
    title: 'GA4 Setup & Audit',
    description: 'GA4 setup services including accurate event tracking, enhanced eCommerce tracking, conversion setup, custom reporting structures, analytics audits, and conversion reporting.',
    icon: 'ri-bar-chart-grouped-line',
    color: '#60ccf1',
    bgColor: 'from-[#60ccf1]/15 to-[#3372f1]/15',
    borderColor: 'border-[#60ccf1]/20',
    hoverBorder: 'group-hover:border-[#60ccf1]/35',
    hoverBg: 'group-hover:from-[#60ccf1]/25 group-hover:to-[#3372f1]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(96,204,241,0.15)]',
  },
  {
    title: 'GTM Implementation',
    description: 'Provide GTM Implementation Services with scalable tracking systems, GTM container setup, custom event tracking, pixel implementation, tag configuration, and reduced developer dependency.',
    icon: 'ri-code-box-line',
    color: '#34d399',
    bgColor: 'from-[#34d399]/15 to-[#10b981]/15',
    borderColor: 'border-[#34d399]/20',
    hoverBorder: 'group-hover:border-[#34d399]/35',
    hoverBg: 'group-hover:from-[#34d399]/25 group-hover:to-[#10b981]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]',
  },
  {
    title: 'Server-Side Tracking',
    description: 'Improve tracking accuracy and privacy with server-side tracking, Stape setup, GTM implementation, cookie optimization, and reliable data tracking solutions.',
    icon: 'ri-server-line',
    color: '#818cf8',
    bgColor: 'from-[#818cf8]/15 to-[#6366f1]/15',
    borderColor: 'border-[#818cf8]/20',
    hoverBorder: 'group-hover:border-[#818cf8]/35',
    hoverBg: 'group-hover:from-[#818cf8]/25 group-hover:to-[#6366f1]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(129,140,248,0.15)]',
  },
  {
    title: 'Google Ads Management & Optimization',
    description: 'Scale campaigns with Google Ads Optimization, accurate conversion tracking, ROAS improvement, audience targeting, and performance reporting for better ROI.',
    icon: 'ri-google-fill',
    color: '#fbbf24',
    bgColor: 'from-[#fbbf24]/15 to-[#f59e0b]/15',
    borderColor: 'border-[#fbbf24]/20',
    hoverBorder: 'group-hover:border-[#fbbf24]/35',
    hoverBg: 'group-hover:from-[#fbbf24]/25 group-hover:to-[#f59e0b]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]',
  },
  {
    title: 'Conversion Tracking & Attribution Fixes',
    description: 'Reliable conversion tracking setup for lead generation with attribution setup, lead tracking fixes, cross-domain tracking, CRM integration, and funnel tracking.',
    icon: 'ri-git-merge-line',
    color: '#a78bfa',
    bgColor: 'from-[#a78bfa]/15 to-[#8b5cf6]/15',
    borderColor: 'border-[#a78bfa]/20',
    hoverBorder: 'group-hover:border-[#a78bfa]/35',
    hoverBg: 'group-hover:from-[#a78bfa]/25 group-hover:to-[#8b5cf6]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(167,139,250,0.15)]',
  },
  {
    title: 'Meta Ads Tracking Setup & Optimization',
    description: 'Improve Meta Ads performance with accurate Meta Ads Tracking Setup, CAPI integration, lead generation tracking, conversion attribution, and audience analysis.',
    icon: 'ri-meta-fill',
    color: '#f472b6',
    bgColor: 'from-[#f472b6]/15 to-[#ec4899]/15',
    borderColor: 'border-[#f472b6]/20',
    hoverBorder: 'group-hover:border-[#f472b6]/35',
    hoverBg: 'group-hover:from-[#f472b6]/25 group-hover:to-[#ec4899]/25',
    hoverShadow: 'group-hover:shadow-[0_0_20px_rgba(244,114,182,0.15)]',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-500/3 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/4 rounded-full blur-[150px] animate-float" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-3">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-4 font-medium">
            What We Do
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
              Core Services
            </span>
          </h2>
        </div>

        <div className="text-center mb-16">
          <p className="text-white text-base max-w-xl mx-auto leading-relaxed">
            We provide specialized analytics consulting and performance marketing solutions designed to improve data accuracy and maximize marketing ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group h-full relative bg-black backdrop-blur-sm border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-all duration-500 hover:border-white/[0.12] hover:-translate-y-1 overflow-hidden cursor-default"
            >
              {/* Glow Effect - color matched */}
              <div
                className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-[0.04] blur-[60px] group-hover:opacity-[0.12] transition-opacity duration-500"
                style={{ backgroundColor: service.color }}
              />

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-2xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.bgColor} ${service.borderColor} border group-hover:scale-110 ${service.hoverBorder} ${service.hoverBg} ${service.hoverShadow} transition-all duration-300`}
              >
                <i
                  className={`${service.icon} text-2xl transition-all duration-300 group-hover:scale-110`}
                  style={{ color: service.color }}
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Feature Bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl px-8 py-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white text-sm font-medium">All services include</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/[0.08]" />
            <div className="flex flex-wrap justify-center gap-4 text-white text-sm font-medium">
              <span className="flex items-center gap-1.5">
                <i className="ri-file-text-line text-blue-400" />
                Documentation
              </span>
              <span className="flex items-center gap-1.5">
                <i className="ri-refresh-line text-emerald-400" />
                Ongoing Support
              </span>
              <span className="flex items-center gap-1.5">
                <i className="ri-shield-check-line text-purple-400" />
                Quality Assurance
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}