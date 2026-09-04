import Header from '@/components/feature/Header';
import Footer from '@/components/feature/Footer';
import HeroSection from '@/components/home/HeroSection';
import TrustSection from '@/components/home/TrustSection';
import ProblemSection from '@/components/home/ProblemSection';
import ProcessSection from '@/components/home/ProcessSection';
import SolutionSection from '@/components/home/SolutionSection';
import ImpactSection from '@/components/home/ImpactSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import AboutSection from '@/components/home/AboutSection';
import FAQSection from '@/components/home/FAQSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <ProblemSection />
        <ProcessSection />
        <SolutionSection />
        <ImpactSection />
        <ServicesSection />
        <WhyChooseSection />
        <IndustriesSection />
        <TestimonialsSection />
        <AboutSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
