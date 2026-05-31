import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './components/Hero';
import Services from './components/Services';
import LiveDemo from './components/LiveDemo';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0F1E] text-white flex flex-col font-sans selection:bg-[#25D366]/30 selection:text-white antialiased relative">
      {/* Background radial overlays / Dark luxury glow mesh */}
      <div className="fixed inset-0 glow-mesh pointer-events-none z-0" />

      {/* Dynamic Floating Global Trigger */}
      <FloatingWhatsApp />

      {/* Global Navigation Controller */}
      <Navbar />

      {/* Primary Visual Sections in Requested Order */}
      <main className="flex-grow relative z-10">
        {/* Section 1: Hero Frame with Text typing loops */}
        <Hero />

        {/* Section 2: Services Grid displaying the 3 modular glass cards */}
        <Services />

        {/* Section 3: Live interactive Demo and messaging console */}
        <LiveDemo />

        {/* Section 4: Quantitative Highlights & Counter features */}
        <WhyChooseUs />

        {/* Section 5: Dynamic Portfolio cards & overlay details */}
        <Portfolio />

        {/* Section 6: Testimonials and Star review slides */}
        <Testimonials />

        {/* Section 7: Bold Contact details, call links, and submission system */}
        <Contact />
      </main>

      {/* Section 8: Legal copyright frame and navigation summary */}
      <Footer />
    </div>
  );
}
