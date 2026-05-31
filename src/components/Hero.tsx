import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, MessageSquare, Bot, Globe } from 'lucide-react';

export default function Hero() {
  const words = ['WordPress Expert', 'WhatsApp API Specialist', 'Chatbot Automation Pro'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const fullWord = words[currentWordIndex];

      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0A0F1E] pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(91,95,239,0.12),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(37,211,102,0.08),transparent_45%)]" />

      {/* Floating Geometric Shapes with subtle custom CSS float */}
      <div className="absolute top-[20%] left-[10%] w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#5B5FEF]/10 to-transparent border border-[#5B5FEF]/20 animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-24 h-24 rounded-full bg-gradient-to-bl from-[#25D366]/5 to-transparent border border-[#25D366]/10 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[35%] right-[25%] w-8 h-8 rounded-full bg-[#5B5FEF]/20 filter blur-xl animate-bounce" style={{ animationDuration: '6s' }} />
      <div className="absolute bottom-[35%] left-[20%] w-12 h-12 rounded-lg bg-gradient-to-r from-[#25D366]/10 to-[#5B5FEF]/10 border border-[#25D366]/15 rotate-45 animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Hero content container */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Sparkle badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#25D366]" />
          <span className="text-xs uppercase tracking-widest text-[#94A3B8] font-medium font-mono">
            Premium Freelance Agency
          </span>
        </div>

        {/* Typing Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
          We Build Websites That
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#94A3B8] block mt-2">
            Work While You Sleep
          </span>
        </h1>

        {/* Main interactive sub-carousel */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-8">
          <span className="text-lg sm:text-xl md:text-2xl font-mono text-[#25D366] flex items-center gap-2 font-medium">
            <span className="text-white/60">I am a</span>
            <span className="border-r-2 border-[#25D366] pr-1.5 animate-pulse whitespace-nowrap">
              {currentText}
            </span>
          </span>
        </div>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto font-sans text-base sm:text-lg text-[#94A3B8] leading-relaxed mb-12">
          Stop losing clients to slow replies and manual work. We design premium
          <span className="text-white font-medium"> WordPress (Elementor)</span> interfaces, integrate official
          <span className="text-white font-medium"> WhatsApp APIs</span>, and configure custom
          <span className="text-white font-medium"> Chatbots </span> to supercharge your conversions.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            id="hero-whatsapp-cta"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 shadow-xl shadow-[#25D366]/20 hover:scale-102"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#portfolio"
            id="hero-portfolio-cta"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 backdrop-blur-md"
          >
            View Our Work
          </a>
        </div>

        {/* Tiny specs banner */}
        <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex w-10 h-10 rounded-lg bg-blue-500/10 items-center justify-center text-blue-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white font-medium">WordPress</p>
              <p className="text-[11px] text-[#94A3B8]">Pixel-Perfect</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <div className="hidden sm:flex w-10 h-10 rounded-lg bg-emerald-500/10 items-center justify-center text-[#25D366]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white font-medium">WhatsApp API</p>
              <p className="text-[11px] text-[#94A3B8]">Cloud-Automated</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-end">
            <div className="hidden sm:flex w-10 h-10 rounded-lg bg-indigo-500/10 items-center justify-center text-indigo-400">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-white font-medium">Tidio Integration</p>
              <p className="text-[11px] text-[#94A3B8]">Smart AI Bots</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
