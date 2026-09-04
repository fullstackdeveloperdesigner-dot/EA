'use client';

import { useState, useEffect, useCallback } from 'react';

const carouselImages = [
  {
    src: '/images/solution/01-accurate-conversion-tracking.webp',
    alt: 'Accurate Conversion Tracking',
    label: 'Accurate Conversion Tracking',
  },
  {
    src: '/images/solution/02-reliable-attribution-reporting.webp',
    alt: 'Reliable Attribution Reporting',
    label: 'Reliable Attribution Reporting',
  },
  {
    src: '/images/solution/03-better-ad-optimization-signals.webp',
    alt: 'Better Ad Optimization Signals',
    label: 'Better Ad Optimization Signals',
  },
  {
    src: '/images/solution/04-improved-marketing-insights.webp',
    alt: 'Improved Marketing Insights',
    label: 'Improved Marketing Insights',
  },
  {
    src: '/images/solution/05-scalable-campaign-performance.webp',
    alt: 'Scalable Campaign Performance',
    label: 'Scalable Campaign Performance',
  },
];

const solutionFeatures = [
  {
    icon: 'ri-check-double-line',
    title: 'Accurate conversion tracking',
  },
  {
    icon: 'ri-git-merge-line',
    title: 'Reliable attribution reporting',
  },
  {
    icon: 'ri-broadcast-line',
    title: 'Better ad optimization signals',
  },
  {
    icon: 'ri-lightbulb-flash-line',
    title: 'Improved marketing insights',
  },
  {
    icon: 'ri-rocket-line',
    title: 'Scalable campaign performance',
  },
];

export default function SolutionSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section id="solutions" className="py-32 bg-black relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-0 w-[700px] h-[700px] bg-blue-500/[0.03] rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[#3372f1]/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#60ccf1]/[0.02] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-col items-center text-center">
            <p className="text-white text-xs uppercase tracking-[0.3em] mb-4 font-medium">
              The Solution
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12] max-w-3xl">
              We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
                Fix the Data.
              </span>{' '}
              Then We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
                Scale What Works.
              </span>
            </h2>
            <p className="text-white/70 text-base max-w-xl mt-5 leading-relaxed">
              Eric Analytics combines analytics implementation, conversion tracking, and performance marketing to help businesses make smarter marketing decisions.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="mb-20">
          <div className="relative group/viz">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#60ccf1]/10 via-[#3372f1]/8 to-[#60ccf1]/10 rounded-[40px] blur-[50px] group-hover/viz:blur-[60px] transition-all duration-700" />

            <div className="relative bg-black rounded-[32px] border border-white/[0.06] overflow-hidden shadow-2xl shadow-black/60">
              <div className="relative h-[600px] overflow-hidden">
                {/* Images */}
                {carouselImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.src}
                    alt={img.alt}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700 ease-in-out ${
                      idx === activeSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                  />
                ))}

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 via-transparent to-[#080808]/40 pointer-events-none" />

                {/* Top Left Dots */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#60ccf1]/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3372f1]/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#60ccf1]/30" />
                  </div>
                </div>

                {/* Bottom Left Status Badge */}
                <div className="absolute bottom-5 left-5 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/[0.08] rounded-full px-4 py-2">
                  <div className="w-2 h-2 rounded-full bg-[#60ccf1] shadow-[0_0_6px_rgba(96,204,241,0.6)] animate-pulse" />
                  <span className="text-xs font-medium text-white/90 transition-all duration-400">
                    {carouselImages[activeSlide].label}
                  </span>
                </div>

                {/* Top Right Icon */}
                <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-[#60ccf1]/10 bg-[#60ccf1]/[0.02] backdrop-blur-sm flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full border border-[#60ccf1]/20 bg-[#60ccf1]/[0.04] flex items-center justify-center">
                    <i className="ri-database-2-line text-[#60ccf1] text-lg" />
                  </div>
                </div>

                {/* Bottom Right Info Badge */}
                <div className="absolute bottom-8 right-8 hidden lg:block">
                  <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md border border-white/[0.08] rounded-full px-3 py-1.5 transition-all duration-400">
                    <i className="ri-shield-check-line text-[#60ccf1] text-xs" />
                    <span className="text-[10px] font-medium text-white/80">Multi-channel attribution & reporting</span>
                  </div>
                </div>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-400 cursor-pointer ${
                        idx === activeSlide
                          ? 'w-6 bg-[#60ccf1]'
                          : 'w-1.5 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm border border-white/[0.08] flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/50 transition-all duration-300 cursor-pointer"
                  aria-label="Previous slide"
                >
                  <i className="ri-arrow-left-s-line text-white/80 text-base" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm border border-white/[0.08] flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-black/50 transition-all duration-300 cursor-pointer"
                  aria-label="Next slide"
                >
                  <i className="ri-arrow-right-s-line text-white/80 text-base" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Subheading */}
        <p className="text-center text-white/80 text-base leading-relaxed max-w-2xl mx-auto mb-10">
          Before scaling campaigns, we focus on building a reliable data infrastructure that ensures:
        </p>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          {solutionFeatures.map((feature) => (
            <div key={feature.title}>
              <div className="group h-full flex flex-col items-center text-center gap-3 bg-white/[0.02] border border-white/[0.05] rounded-2xl px-4 py-6 hover:bg-white/[0.04] hover:border-[#60ccf1]/20 hover:shadow-[0_8px_32px_rgba(96,204,241,0.06)] transition-all duration-400">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#60ccf1]/12 to-[#3372f1]/12 border border-[#60ccf1]/15 flex items-center justify-center group-hover:scale-110 group-hover:border-[#60ccf1]/30 group-hover:shadow-[0_0_20px_rgba(96,204,241,0.15)] transition-all duration-300">
                  <i className={`${feature.icon} text-[#60ccf1] text-lg`} />
                </div>
                <span className="text-white text-sm font-medium leading-snug">
                  {feature.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12">
          <div className="relative group/banner">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#60ccf1]/15 to-[#3372f1]/15 rounded-2xl blur-sm opacity-0 group-hover/banner:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-gradient-to-r from-[#60ccf1]/[0.04] via-[#3372f1]/[0.04] to-[#60ccf1]/[0.04] border border-[#60ccf1]/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#60ccf1]/15 to-[#3372f1]/15 border border-[#60ccf1]/20 flex items-center justify-center shrink-0">
                  <i className="ri-shield-check-line text-[#60ccf1] text-lg" />
                </div>
                <p className="text-white/80 text-sm font-medium leading-relaxed max-w-lg">
                  Our process helps businesses eliminate tracking issues, improve reporting accuracy, and scale with confidence.
                </p>
              </div>
              <a
                href="#contact"
                className="group/btn inline-flex items-center gap-2.5 bg-white text-[#080808] px-6 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(255,255,255,0.12)] active:scale-[0.98]"
              >
                Start Your Audit
                <i className="ri-arrow-right-line group-hover/btn:translate-x-0.5 transition-transform duration-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}