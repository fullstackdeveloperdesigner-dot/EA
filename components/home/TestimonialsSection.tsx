'use client';

import { useState, useEffect, useCallback } from 'react';
import { testimonials } from '@/lib/home';

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = testimonials.length;

  const next = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const testimonial = testimonials[currentPage];

  return (
    <section id="testimonials" className="py-32 bg-black relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-purple-500/3 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-blue-500/4 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-3">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Hear What My Clients{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
              Have to Say
            </span>
          </h2>
        </div>

        <div className="text-center mb-20">
          <p className="text-white/70 text-base max-w-3xl mx-auto leading-relaxed">
            Discover what our satisfied clients have to say about Eric Analytics, a trusted and{' '}
            <span className="font-bold text-white">best analytics agency</span>{' '}
            for web analytics and data analytics services. We take pride in delivering reliable tracking solutions, exceptional client support, and measurable results that help businesses grow.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-[64rem] mx-auto">
          {/* Decorative dots */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-[5%] w-2 h-2 rounded-full bg-[#60ccf1]/30 blur-[2px] animate-pulse" />
            <div className="absolute bottom-1/3 left-[8%] w-1.5 h-1.5 rounded-full bg-[#3372f1]/25 blur-[1px]" />
            <div className="absolute top-[45%] right-[12%] w-1.5 h-1.5 rounded-full bg-[#a78bfa]/20 blur-[1px]" />
            <div className="absolute bottom-[30%] right-[20%] w-1 h-1 rounded-full bg-[#60ccf1]/35 blur-[1px]" />
          </div>

          {/* Ambient glow behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-gradient-to-br from-[#60ccf1]/5 via-transparent to-[#3372f1]/4 rounded-[3rem] blur-[80px] pointer-events-none" />

          {/* Navigation Arrows - Desktop */}
          <button
            onClick={prev}
            className="hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.10] items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.10] hover:border-white/[0.20] hover:shadow-[0_0_28px_rgba(96,204,241,0.15)] transition-all duration-300 group cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            aria-label="Previous testimonial"
          >
            <i className="ri-arrow-left-s-line text-xl group-hover:-translate-x-0.5 transition-transform duration-300" />
          </button>
          <button
            onClick={next}
            className="hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/[0.10] items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.10] hover:border-white/[0.20] hover:shadow-[0_0_28px_rgba(96,204,241,0.15)] transition-all duration-300 group cursor-pointer shadow-[0_8px_32px_rgba(0,0,0,0.35)]"
            aria-label="Next testimonial"
          >
            <i className="ri-arrow-right-s-line text-xl group-hover:translate-x-0.5 transition-transform duration-300" />
          </button>

          {/* Main Card */}
          <div className="relative bg-white/[0.025] backdrop-blur-2xl border border-white/[0.08] rounded-[3rem] overflow-hidden shadow-[0_50px_140px_rgba(0,0,0,0.6),0_0_0_1px_rgba(96,204,241,0.04)_inset]">
            {/* Top gradient line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#60ccf1]/50 to-transparent" />

            {/* Decorative quote */}
            <div className="absolute top-6 right-8 md:right-10 text-[260px] md:text-[360px] leading-none text-white/[0.04] select-none font-serif pointer-events-none">
              &ldquo;
            </div>

            {/* Ambient glows inside card */}
            <div className="absolute -top-32 right-0 w-96 h-96 bg-[#60ccf1]/4 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#3372f1]/3 rounded-full blur-[110px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 px-8 md:px-14 lg:px-16 py-14 md:py-18">
              {/* Avatar + Info */}
              <div className="flex flex-col items-center mb-7 md:mb-8">
                <div className="relative flex-shrink-0">
                  {/* Glow rings */}
                  <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-[#60ccf1]/30 to-[#3372f1]/20 blur-xl" />
                  <div className="absolute -inset-2.5 rounded-full bg-gradient-to-br from-[#60ccf1]/15 to-transparent blur-2xl" />

                  {/* Avatar */}
                  <div className="relative w-[64px] h-[64px] md:w-[76px] md:h-[76px] rounded-full bg-gradient-to-br from-[#0f1729] via-[#0a1228] to-[#060e1f] ring-1 ring-white/[0.14] shadow-[0_20px_60px_rgba(0,0,0,0.55),0_0_0_1px_rgba(96,204,241,0.12)_inset] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#60ccf1]/8 to-transparent" />
                    <span className="relative text-white font-semibold text-lg md:text-xl tracking-wider select-none">
                      {testimonial.initials}
                    </span>
                  </div>
                </div>

                <div className="text-center mt-4 md:mt-5">
                  <div className="text-white font-bold text-xl md:text-2xl tracking-tight">
                    {testimonial.name}
                  </div>
                  <div className="text-white/55 text-sm md:text-base mt-1.5">
                    {testimonial.role}
                  </div>
                  <div className="flex items-center justify-center gap-[3px] mt-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <i key={i} className="ri-star-fill text-amber-400 text-[14px]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review */}
              <div className="flex flex-col items-center">
                <p className="text-white/90 text-base md:text-lg leading-[1.8] md:leading-[1.85] font-light tracking-[0.005em] text-center mx-auto">
                  {testimonial.content}
                </p>
              </div>

              {/* Bottom divider */}
              <div className="mt-10 md:mt-12 flex justify-center">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#60ccf1]/40 to-transparent" />
              </div>
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60ccf1]/20 to-transparent" />
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center text-white hover:bg-white/[0.08] hover:border-white/[0.14] transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <i className="ri-arrow-left-s-line text-lg" />
            </button>
            <span className="text-white/25 text-sm tracking-widest tabular-nums min-w-[60px] text-center">
              {String(currentPage + 1).padStart(2, '0')}
              <span className="mx-1 text-white/10">/</span>
              {String(totalPages).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] flex items-center justify-center text-white hover:bg-white/[0.08] hover:border-white/[0.14] transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <i className="ri-arrow-right-s-line text-lg" />
            </button>
          </div>

          {/* Pagination Dots - Desktop */}
          <div className="hidden md:flex items-center justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-[3px] rounded-full transition-all duration-500 cursor-pointer ${
                  index === currentPage
                    ? 'w-10 bg-gradient-to-r from-[#60ccf1] to-[#3372f1]'
                    : 'w-3 bg-white/[0.06] hover:bg-white/[0.14]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}