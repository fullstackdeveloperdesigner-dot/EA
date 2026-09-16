export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#000000]">
      {/* Ambient Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[200px]" />
        <div className="absolute bottom-10 right-0 w-[700px] h-[700px] bg-purple-500/4 rounded-full blur-[180px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/3 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute inset-0 opacity-40" />
      </div>

      <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Content */}
          <div>
            <h1 className="text-[42px] md:text-[52px] lg:text-[58px] font-bold tracking-tight text-white leading-[1.03]">
              Fix Broken Tracking
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
                Scale Profitable Campaigns
              </span>
            </h1>

            <p className="text-lg text-white leading-relaxed mt-8 max-w-xl">
              Eric Analytics helps eCommerce, SaaS, and lead generation businesses improve data accuracy, optimize Google and Meta Ads performance, and make confident, data-driven decisions.
            </p>

            <div className="mt-6 mb-12">
              <div className="flex items-center gap-3 pl-4 border-l-2 border-blue-500/40">
                <p className="text-sm text-white font-medium leading-relaxed">
                  Specialists in GA4, Google Tag Manager, Server-Side Tracking, and Conversion Optimization.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 bg-white text-[#080808] px-9 py-4 rounded-xl font-semibold whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_48px_rgba(255,255,255,0.15)] active:scale-[0.98]"
              >
                Fix Your Tracking Setup
                <i className="ri-arrow-right-line group-hover:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>

          {/* Right - Video */}
          <div className="hidden lg:block">
            <div className="relative w-full h-[540px] rounded-3xl overflow-hidden shadow-2xl shadow-black/40 bg-[#0f0f0f]">
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-[#080808]/30 z-10 pointer-events-none" />
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src="/images/eric-analytics/topvideo.mp4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}