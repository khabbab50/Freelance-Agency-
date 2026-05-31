import { Bot } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Live Demo', href: '#demo' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050811] text-[#94A3B8] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#5B5FEF] to-[#25D366] p-[1.5px]">
              <div className="w-full h-full bg-[#050811] rounded-[7px] flex items-center justify-center">
                <Bot className="w-4 h-4 text-[#5B5FEF]" />
              </div>
            </div>
            <span className="font-display font-medium tracking-wide text-white text-md lg:text-lg">
              FREELANCE<span className="text-[#25D366]">AGENCY</span>
            </span>
          </div>
          <p className="text-xs text-[#94A3B8]/60 text-center md:text-left max-w-sm">
            High-fidelity custom WordPress builds linked with state-of-the-art WhatsApp and Tidio automation pipelines.
          </p>
        </div>

        {/* Quick Links Horizontal Stream */}
        <nav className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs tracking-wider text-[#94A3B8]/80 hover:text-white transition-colors uppercase font-mono"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Legal and Copyright */}
        <div className="flex flex-col items-center md:items-end gap-1 text-xs">
          <p className="text-white/40">
            &copy; {currentYear} Freelance Agency. All rights reserved.
          </p>
          <p className="text-[#94A3B8]/40">
            Built with supreme React &amp; Tailwind precision.
          </p>
        </div>

      </div>
    </footer>
  );
}
