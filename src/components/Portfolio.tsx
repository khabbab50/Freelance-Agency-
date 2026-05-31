import { PORTFOLIO_DATA } from '../data';
import { Sparkles, ExternalLink, Globe, Smartphone, MessageSquare } from 'lucide-react';

export default function Portfolio() {
  const getCategoryIcon = (category: string) => {
    if (category.includes('WordPress')) {
      return <Globe className="w-4 h-4 text-blue-400" />;
    }
    if (category.includes('WhatsApp')) {
      return <MessageSquare className="w-4 h-4 text-[#25D366]" />;
    }
    return <Smartphone className="w-4 h-4 text-indigo-400" />;
  };

  return (
    <section id="portfolio" className="relative py-24 bg-[#0A0F1E] px-6">
      {/* Divider constraint line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#5B5FEF]/15 border border-[#5B5FEF]/25 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#5B5FEF]" />
            <span className="text-[11px] uppercase tracking-wider text-[#5B5FEF] font-semibold font-mono">
              Selected Showcase
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            Our Elite Digital Works
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#94A3B8]">
            Explore live case studies demonstrating our ability to craft pixel-perfect web layouts and combine them with seamless automated workflows.
          </p>
        </div>

        {/* 3 Project Card Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col h-[400px] cursor-pointer"
            >
              {/* Image Frame Container */}
              <div className="relative w-full h-[240px] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.85]"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-[#0A0F1E]/20 to-transparent" />

                {/* Premium Rise-up Details Overlay Mask on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#5B5FEF]/82 via-[#0A0F1E]/95 to-[#0A0F1E]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-6">
                  {/* Overlay Top header */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono tracking-widest text-[#25D366] bg-[#25D366]/10 border border-[#25D366]/20 px-2.5 py-1 rounded-md uppercase font-semibold">
                      Case File
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Overlay Mid summary description info */}
                  <div className="my-auto text-center px-4">
                    <p className="text-white text-xs font-mono mb-2 uppercase tracking-wider">Scope &amp; Impact</p>
                    <p className="text-white/80 text-sm leading-relaxed font-sans">
                      Delivered a fully integrated custom build resulting in an average 40% increase in weekly client retention and bookings.
                    </p>
                  </div>

                  {/* Overlay Bottom anchor */}
                  <div className="flex justify-center">
                    <span className="text-xs text-white font-mono font-bold tracking-widest border-b border-white/30 hover:border-white transition-all uppercase">
                      Inspect Work File
                    </span>
                  </div>
                </div>
              </div>

              {/* Text Card description Details bottom wrapper */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  {/* Category annotation with mini logo */}
                  <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#94A3B8]">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-lg font-bold text-white tracking-tight group-hover:text-[#25D366] transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* Tag pills line */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-white/5 border border-white/5 px-2 py-0.5 rounded text-[#94A3B8] font-mono group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
