import { partnerLogos } from '@/lib/home';

const credentials = [
  {
    label: 'Google Ads Certified',
    icon: 'ri-google-fill',
    hoverColor: '#4285F4',
    hoverShadow: 'rgba(66,133,244,0.30)',
  },
  {
    label: 'GA4 Certified',
    icon: 'ri-bar-chart-fill',
    hoverColor: '#F9AB00',
    hoverShadow: 'rgba(249,171,0,0.30)',
  },
  {
    label: 'Upwork Top Rated Plus',
    icon: 'ri-award-fill',
    hoverColor: '#14A800',
    hoverShadow: 'rgba(20,168,0,0.30)',
  },
];

export default function TrustSection() {
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  return (
    <section className="py-28 bg-[#080808] relative overflow-hidden">
      {/* Section Divider Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="text-center mb-4">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-5 font-medium">
            Trust &amp; Credentials
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-[1.15] text-center mb-4">
          Trusted by Businesses{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
            Focused on Growth
          </span>
        </h2>

        {/* Certification Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-20 mt-12">
          {credentials.map((cred) => (
            <div
              key={cred.label}
              className="group flex items-center gap-3.5 bg-white/[0.03] border border-white/[0.06] rounded-2xl px-6 py-4 transition-all duration-500 hover:bg-white/[0.06] hover:border-white/[0.12] hover:-translate-y-0.5 cursor-default"
              style={{ ['--hover-shadow' as string]: cred.hoverShadow }}
            >
              <div
                className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/[0.06] flex items-center justify-center transition-all duration-500"
                style={{ ['--hover-color' as string]: cred.hoverColor }}
              >
                <i
                  className={`${cred.icon} text-lg text-white transition-colors duration-500 group-hover:text-[var(--hover-color)]`}
                />
              </div>
              <span className="text-white text-sm font-semibold whitespace-nowrap tracking-wide">
                {cred.label}
              </span>
            </div>
          ))}
        </div>

        {/* Client Logo Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-[#080808] z-10 pointer-events-none" />

          <div className="animate-trust-scroll flex items-center gap-x-14 py-2">
            {duplicatedLogos.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="shrink-0 flex items-center justify-center h-8"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto object-contain opacity-45 grayscale brightness-[2] hover:opacity-100 hover:grayscale-0 hover:brightness-100 transition-all duration-500 cursor-default"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}