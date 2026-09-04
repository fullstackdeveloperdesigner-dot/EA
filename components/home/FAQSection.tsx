'use client';

import { useState } from 'react';
import { faqs } from '@/lib/home';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-32 bg-[#0f0f0f] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/4 rounded-full blur-[180px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-white text-xs uppercase tracking-[0.3em] mb-4 font-medium">
            FAQ
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60ccf1] to-[#3372f1]">
              Questions
            </span>
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 mt-20">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.id}
                className={`bg-white/[0.02] border rounded-2xl overflow-hidden transition-all duration-500 ${
                  isOpen
                    ? 'border-white/[0.12] shadow-[0_0_40px_rgba(59,130,246,0.06)]'
                    : 'border-white/[0.05] hover:border-white/[0.08]'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                >
                  <span className="text-white font-medium text-base pr-4 group-hover:text-white/90 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'border-white/[0.2] bg-white/[0.06] rotate-45'
                        : 'border-white/[0.1] bg-transparent'
                    }`}
                  >
                    <i className="ri-add-line text-white text-sm" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-white text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}