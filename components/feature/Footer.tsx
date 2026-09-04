const footerNav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-14">
          <img
            src="https://ericanalytics.net/images/log.png"
            alt="Eric Analytics - Data Analytics Consulting Agency"
            className="h-20 w-auto object-contain"
            loading="lazy"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column - Description */}
          <div className="lg:col-span-5">
            <p className="text-white text-sm leading-relaxed mb-3 max-w-md">
              Eric Analytics is a data analytics consulting agency specializing in Google Ads optimization using GA4, GA4 audit and optimization services, Google Tag Manager (GTM), conversion tracking, and server-side tracking for Meta Ads.
            </p>
            <p className="text-white text-sm leading-relaxed max-w-md">
              We help businesses improve ROAS with accurate tracking, optimize marketing performance, and make data-driven decisions that support measurable business growth.
            </p>
          </div>

          {/* Middle Column - Company Nav */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-7 text-xs uppercase tracking-[0.2em]">
              Company
            </h4>
            <ul className="space-y-4">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-white text-sm hover:text-white transition-colors duration-200"
                  >
                    <span className="w-0 group-hover:w-1 h-px bg-white/40 transition-all duration-300" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold mb-7 text-xs uppercase tracking-[0.2em]">
              Contact
            </h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a
                  href="mailto:info@ericanalytics.net"
                  className="group flex items-center gap-3 text-white text-sm hover:text-white transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/[0.12] transition-all duration-300">
                    <i className="ri-mail-line text-sm" />
                  </div>
                  info@ericanalytics.net
                </a>
              </li>
            </ul>
            <div className="flex gap-2.5">
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all duration-300 cursor-pointer"
              >
                <i className="ri-youtube-fill" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-white/[0.04]">
          <p className="text-white text-xs">
            &copy; 2026 Eric Analytics. All rights reserved.
          </p>
          <div className="flex gap-8 text-white text-xs">
            <span className="hover:text-white/65 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/65 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}