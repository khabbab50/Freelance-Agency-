import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Bot } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Live Demo', href: '#demo' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0F1E]/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" id="nav-logo" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#5B5FEF] to-[#25D366] p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-[#0A0F1E] rounded-[10px] flex items-center justify-center">
              <Bot className="w-5 h-5 text-[#5B5FEF] transition-colors duration-300 group-hover:text-[#25D366]" />
            </div>
          </div>
          <span className="font-display font-medium tracking-wide text-white text-lg lg:text-xl">
            FREELANCE<span className="text-[#25D366]">AGENCY</span>
          </span>
        </a>

        {/* Desktop Nav links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-wide text-[#94A3B8] hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://wa.me/+8801733212051"
            target="_blank"
            rel="noopener noreferrer"
            id="nav-cta"
            className="flex items-center gap-2 bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/30 hover:border-[#25D366]/50 px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          id="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white hover:text-[#5B5FEF] transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-y-0 right-0 w-full sm:w-80 bg-[#0A0F1E] border-l border-white/5 p-8 z-50 flex flex-col justify-between transition-transform duration-500 transform lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '70px', height: 'calc(100vh - 70px)' }}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-display text-lg tracking-wide text-[#94A3B8] hover:text-white transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4">
          <a
            href="https://wa.me/+8801733212051"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#20ba59] px-6 py-3 rounded-xl font-medium tracking-wide transition-all duration-300 shadow-lg shadow-[#25D366]/20"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
