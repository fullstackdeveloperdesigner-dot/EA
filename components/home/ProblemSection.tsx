const checklistItems = [
  {
    icon: 'ri-close-circle-line',
    text: 'Conversions are duplicated or missing',
  },
  {
    icon: 'ri-error-warning-line',
    text: 'GA4 tracking is incomplete or misconfigured',
  },
  {
    icon: 'ri-signal-tower-line',
    text: 'Google Ads optimization relies on incorrect data signals',
  },
  {
    icon: 'ri-route-line',
    text: 'Attribution tracking is unreliable',
  },
  {
    icon: 'ri-dashboard-3-line',
    text: 'Reporting dashboards show inconsistent performance data',
  },
];

export default function ProblemSection() {
  return (
    <section id="problems" className="py-32 bg-black relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-500/[0.04] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3372f1]/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white mb-5">
              The Problem
            </p>

            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] mb-4">
              Most Businesses Are Scaling on{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
                Broken Data
              </span>
            </h2>

            <div className="mb-12">
              <div className="flex items-start gap-3 pl-5 border-l-2 border-[#60ccf1]/30">
                <p className="text-white text-sm md:text-base leading-relaxed max-w-lg">
                  Many businesses rely on inaccurate tracking and incomplete reporting without realizing the impact it has on their marketing performance.
                </p>
              </div>
            </div>

            <h3 className="text-base font-semibold text-white mb-5">
              At Eric Analytics, we regularly audit accounts where:
            </h3>

            <div className="space-y-3.5 mb-12">
              {checklistItems.map((item) => (
                <div
                  key={item.text}
                  className="group flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl px-5 py-4 transition-all duration-300 cursor-default hover:border-[#60ccf1]/25 hover:bg-gradient-to-r hover:from-[#60ccf1]/[0.04] hover:to-[#3372f1]/[0.04] hover:shadow-[0_4px_24px_rgba(96,204,241,0.06)]"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#60ccf1]/15 to-[#3372f1]/15 border border-[#60ccf1]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#60ccf1]/35 group-hover:from-[#60ccf1]/25 group-hover:to-[#3372f1]/25">
                    <i className={`${item.icon} text-white transition-transform duration-300 group-hover:scale-110`} />
                  </div>
                  <span className="text-sm font-medium leading-snug text-white transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <div className="bg-gradient-to-r from-[#60ccf1]/[0.04] to-[#3372f1]/[0.04] border border-[#60ccf1]/10 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-full min-h-[48px] bg-gradient-to-b from-[#60ccf1] to-[#3372f1] rounded-full shrink-0 mt-1" />
                  <p className="text-white/70 text-sm leading-relaxed">
                    When tracking is broken, marketing decisions become unreliable, resulting in wasted ad spend and limited growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#60ccf1]/[0.06] to-[#3372f1]/[0.06] border border-[#60ccf1]/15 rounded-full px-5 py-3">
              <div className="w-2 h-2 rounded-full bg-[#60ccf1] shadow-[0_0_10px_rgba(96,204,241,0.5)]" />
              <span className="text-white text-sm font-semibold">Accurate data is the foundation of profitable scaling.</span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-7">
            <div className="relative bg-gradient-to-br from-[#060b14] via-[#080f1e] to-[#060b14] rounded-2xl border border-white/[0.07] overflow-hidden shadow-2xl shadow-black/50">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#3372f1]/[0.04] rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-[#60ccf1]/[0.03] rounded-full blur-[100px] pointer-events-none" />
              <img
                src="/images/problem/tracking-audit-dashboard.webp"
                alt="Tracking Audit Dashboard"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}