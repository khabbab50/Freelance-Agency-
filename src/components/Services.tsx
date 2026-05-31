import { SERVICES_DATA } from '../data';
import { Globe, MessageSquare, Bot, Sparkles } from 'lucide-react';

export default function Services() {
  // Mapping standard string to Lucide icons
  const renderIcon = (id: string) => {
    switch (id) {
      case 'wordpress':
        return (
          <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300 relative">
            <Globe className="w-6 h-6" />
            <div className="absolute inset-0 rounded-xl bg-blue-400/20 filter blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        );
      case 'whatsapp':
        return (
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366]/20 group-hover:scale-110 transition-all duration-300 relative">
            <MessageSquare className="w-6 h-6" />
            <div className="absolute inset-0 rounded-xl bg-[#25D366]/20 filter blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        );
      case 'tidio':
        return (
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 transition-all duration-300 relative">
            <Bot className="w-6 h-6" />
            <div className="absolute inset-0 rounded-xl bg-indigo-400/20 filter blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        );
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#0A0F1E] px-6">
      {/* Subtle top section border or line grid */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#5B5FEF]/15 border border-[#5B5FEF]/25 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#5B5FEF]" />
            <span className="text-[11px] uppercase tracking-wider text-[#5B5FEF] font-semibold font-mono">
              Core Capabilities
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Services Built to Convert
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#94A3B8]">
            We bridge beautiful design with modern automation. Get access to fully configured digital ecosystems that operate without you.
          </p>
        </div>

        {/* 3 cards grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl p-8 bg-white/[0.03] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 transition-all duration-300 group overflow-hidden flex flex-col justify-between min-h-[360px] cursor-pointer"
            >
              {/* Card glowing backdrop gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                {/* Header Icon container */}
                <div className="mb-6 flex items-center justify-between">
                  {renderIcon(service.id)}
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest group-hover:text-white/50 transition-colors">
                    0{service.id === 'wordpress' ? 1 : service.id === 'whatsapp' ? 2 : 3}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl font-bold text-white mb-4 tracking-tight group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Tags panel */}
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono bg-white/5 border border-white/5 px-2.5 py-1 rounded-md text-[#94A3B8] group-hover:border-white/10 group-hover:text-white transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
