import { STATS_DATA, BENEFITS_DATA } from '../data';
import { Briefcase, Users, Award, Clock, CheckCircle2, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  // Map icons
  const renderIcon = (id: string) => {
    switch (id) {
      case 'stat-1':
        return <Briefcase className="w-6 h-6 text-[#5B5FEF]" />;
      case 'stat-2':
        return <Users className="w-6 h-6 text-[#25D366]" />;
      case 'stat-3':
        return <Award className="w-6 h-6 text-[#5B5FEF]" />;
      case 'stat-4':
        return <Clock className="w-6 h-6 text-[#25D366]" />;
      default:
        return <Briefcase className="w-6 h-6" />;
    }
  };

  return (
    <section id="why-choose-us" className="relative py-24 bg-[#0A0F1E] px-6">
      {/* Top divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left panel: Benefits checklist */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 bg-[#25D366]/15 border border-[#25D366]/25 px-3.5 py-1.5 rounded-full mb-6 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="text-[11px] uppercase tracking-wider text-[#25D366] font-semibold font-mono">
                Why Work With Us
              </span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              A Freelance Team of Expert Developers &amp; Creators
            </h2>
            
            <p className="text-sm sm:text-base text-[#94A3B8] mb-10 leading-relaxed max-w-xl">
              We cut through the noise. Instead of long-winded corporate meetings, we focus on high-fidelity designs, bulletproof integrations, and direct action. Here is what we bring to every single client project:
            </p>

            {/* Benefit Checkmarks */}
            <ul className="flex flex-col gap-4">
              {BENEFITS_DATA.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366]/20 transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  </div>
                  <span className="text-sm sm:text-base text-[#94A3B8] font-sans group-hover:text-white transition-colors">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right panel: Static Counters Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            {STATS_DATA.map((stat) => (
              <div
                key={stat.id}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between h-[180px] group cursor-default"
              >
                {/* Icon row */}
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                  {renderIcon(stat.id)}
                </div>

                <div>
                  {/* Large static numerical metrics */}
                  <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 tracking-tight mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-xs text-[#94A3B8] font-sans font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
