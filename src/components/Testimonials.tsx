import { TESTIMONIALS_DATA } from '../data';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#0A0F1E] px-6">
      {/* Top boundary element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#5B5FEF]/15 border border-[#5B5FEF]/25 px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#5B5FEF]" />
            <span className="text-[11px] uppercase tracking-wider text-[#5B5FEF] font-semibold font-mono">
              Client Feedback
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            What Our Clients Experience
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#94A3B8]">
            Do not just take our word for it. Hear from real founders and team leaders who have scaled their operations using our custom builds.
          </p>
        </div>

        {/* 3 Review Cards Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group cursor-default"
            >
              {/* Quote icon background decoration */}
              <div className="absolute top-6 right-6 text-white/[0.02] group-hover:text-[#5B5FEF]/5 transition-colors pointer-events-none">
                <Quote className="w-16 h-16 rotate-180" />
              </div>

              <div>
                {/* Visual rating stars row */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Review Message Body */}
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 italic font-sans group-hover:text-white transition-colors duration-300">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Bio block with initials avatar */}
              <div className="flex items-center gap-3.5 mt-auto border-t border-white/5 pt-6">
                <div className={`w-11 h-11 rounded-full border flex items-center justify-center font-display font-bold text-sm tracking-wider shadow-inner ${item.avatarBg}`}>
                  {item.initials}
                </div>
                <div>
                  <h4 className="text-sm font-display font-extrabold text-white tracking-wide">
                    {item.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8] font-sans">
                    {item.role}, <span className="text-white/40">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
