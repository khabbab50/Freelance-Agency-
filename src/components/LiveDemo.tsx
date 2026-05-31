import { useState, useEffect } from 'react';
import { Smartphone, Laptop, MessageSquare, Bot, ArrowRight, HelpCircle, Check, Play, RefreshCw } from 'lucide-react';

interface ChatBubble {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  delay: number;
}

export default function LiveDemo() {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop');
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(true);

  const conversation: ChatBubble[] = [
    { id: 1, sender: 'bot', text: 'Hi! 👋 How can I help you today?', delay: 1000 },
    { id: 2, sender: 'user', text: 'I need a website', delay: 2000 },
    { id: 3, sender: 'bot', text: 'Great! Let me connect you with our team 🚀', delay: 3000 },
  ];

  const [visibleMessages, setVisibleMessages] = useState<ChatBubble[]>([]);

  // Simulation effect
  useEffect(() => {
    if (!isSimulating) return;

    setVisibleMessages([]);
    let timers: NodeJS.Timeout[] = [];

    conversation.forEach((msg, idx) => {
      const timer = setTimeout(() => {
        setVisibleMessages((prev) => [...prev, msg]);
        setActiveStep(idx);
        // If it is the last message, toggle simulation off briefly after a pause, then loop
        if (idx === conversation.length - 1) {
          const resetTimer = setTimeout(() => {
            // Restart simulation
            setVisibleMessages([]);
            setActiveStep(0);
          }, 5000);
          timers.push(resetTimer);
        }
      }, msg.delay);
      timers.push(timer);
    });

    return () => {
      timers.forEach((t) => clearTimeout(t));
    };
  }, [isSimulating]);

  return (
    <section id="demo" className="relative py-24 bg-[#0A0F1E] px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-0 w-[400px] h-[400px] bg-[#5B5FEF]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] bg-[#25D366]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#25D366]/15 border border-[#25D366]/25 px-3.5 py-1.5 rounded-full mb-4">
            <Play className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="text-[11px] uppercase tracking-wider text-[#25D366] font-semibold font-mono">
              Live Sandbox Preview
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            See the Magic In Action
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#94A3B8]">
            Interact with our simulated chatbot on the left-hand corner, or hover over the official WhatsApp business integration floating anchors on the right.
          </p>

          {/* Device toggle list */}
          <div className="mt-8 inline-flex items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-xl backdrop-blur-md">
            <button
              id="device-toggle-desktop"
              onClick={() => { setDevice('desktop'); setIsSimulating(true); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                device === 'desktop' ? 'bg-[#5B5FEF] text-white shadow-md' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Laptop className="w-4 h-4" />
              Desktop Showroom
            </button>
            <button
              id="device-toggle-mobile"
              onClick={() => { setDevice('mobile'); setIsSimulating(true); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                device === 'mobile' ? 'bg-[#5B5FEF] text-white shadow-md' : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              <Smartphone className="w-4 h-4" />
              Mobile Showroom
            </button>
          </div>
        </div>

        {/* Mock Display Center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left panel: Info annotations */}
          <div className="lg:col-span-4 flex flex-col gap-6 order-2 lg:order-1">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#5B5FEF]" />
              <div className="flex items-center gap-2 mb-3">
                <Bot className="w-5 h-5 text-[#5B5FEF]" />
                <h4 className="text-white font-display font-bold text-base">Tidio Chatbot</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-3">
                Smart automated greeting, instant lead classification, and automatic email dispatching. Books calls directly onto your Google Calendar.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#5B5FEF] font-mono">
                <Check className="w-3 h-3" /> Fully Customized Bot Flow
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#25D366]" />
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <h4 className="text-white font-display font-bold text-base">WhatsApp Integration</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-3">
                Provides frictionless access. Directly connects leads into your WhatsApp sales agents, complete with custom pre-filled message bodies.
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-mono">
                <Check className="w-3 h-3" /> 1-Click Conversational Funnel
              </span>
            </div>

            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className="flex items-center justify-center gap-2 py-3 px-6 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-mono font-medium border border-white/15 transition-all w-full"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
              {isSimulating ? 'Pause Bot Simulator' : 'Restart Bot Simulator'}
            </button>
          </div>

          {/* Right panel: Active simulated viewport mockup */}
          <div className="lg:col-span-8 flex justify-center order-1 lg:order-2">
            <div
              className={`relative bg-[#111827] rounded-3xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-500 ${
                device === 'desktop' ? 'w-full max-w-[700px] h-[450px]' : 'w-[280px] sm:w-[320px] h-[550px]'
              }`}
            >
              {/* Browser Header dots (only if desktop) */}
              {device === 'desktop' && (
                <div className="bg-[#0D1322] px-4 py-3 border-b border-white/5 flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-4 bg-white/5 px-4 py-1 rounded-md text-[10px] text-[#94A3B8] font-mono w-64 text-center truncate select-none">
                    lumina-wellness-spa.com
                  </div>
                </div>
              )}

              {/* Faux client website workspace */}
              <div className="p-6 relative h-full flex flex-col justify-between bg-[#0A0F1E] text-white">
                <div className="relative z-10">
                  {/* Faux Web Site Navigation bar */}
                  <div className="flex justify-between items-center mb-10 pb-4 border-b border-white/5 border-dashed">
                    <span className="font-display font-extrabold text-[#5B5FEF] text-xs sm:text-sm">LUMINA.</span>
                    <div className="flex gap-3 text-[10px] text-white/50">
                      <span>Services</span>
                      <span>About</span>
                      <span>Packages</span>
                    </div>
                  </div>

                  {/* Faux Web Site Hero Content card */}
                  <div className="max-w-[80%]">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-md">
                      Client Demonstration Site
                    </span>
                    <h5 className="font-display text-xl sm:text-2xl font-bold mt-3 leading-tight tracking-tight">
                      Experience Bliss. <br />
                      Book Your Session Today.
                    </h5>
                    <p className="text-[11px] text-[#94A3B8] mt-2 leading-relaxed">
                      Custom, results-driven organic spa therapies designed to bring balance to your body.
                    </p>
                    <button className="mt-4 px-4 py-1.5 bg-[#5B5FEF] text-white text-[10px] rounded-lg font-medium hover:bg-[#4a4ed4] transition-all">
                      Read Reviews
                    </button>
                  </div>
                </div>

                {/* Bottom interactive layers & floating previews */}
                {/* 1. Bot widget on bottom-left */}
                <div className="absolute bottom-4 left-4 z-40 max-w-[210px] sm:max-w-[250px] bg-[#0F1626] border border-white/10 rounded-2xl shadow-xl overflow-hidden flex flex-col">
                  {/* Bot Widget Label indicator and line */}
                  <div className="absolute top-0 right-0 z-50 transform translate-x-10 -translate-y-5 bg-[#5B5FEF] text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-md font-mono scale-[0.8] shadow-lg pointer-events-none">
                    Tidio Chatbot
                  </div>

                  {/* Faux header */}
                  <div className="bg-[#5B5FEF] px-3 py-2 flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-white">
                      <Bot className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="text-[10px] text-white font-medium font-sans">Lumina Helper</p>
                      <p className="text-[7px] text-white/70">Online &amp; Active</p>
                    </div>
                  </div>

                  {/* Simulated chat body */}
                  <div className="p-3 flex flex-col gap-2 max-h-[140px] overflow-y-auto select-none min-h-[110px]">
                    {visibleMessages.length === 0 ? (
                      <p className="text-[9px] text-white/30 font-mono text-center my-auto transition-opacity duration-300">
                        Initializing chatbot simulator...
                      </p>
                    ) : (
                      visibleMessages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex flex-col max-w-[85%] transition-all duration-300 ${
                            msg.sender === 'user' ? 'self-end bg-white/5 border border-white/5 text-white' : 'self-start bg-[#5B5FEF]/10 text-white'
                          } rounded-xl px-2.5 py-1.5`}
                        >
                          <span className="text-[10px] leading-snug">{msg.text}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* 2. Simulated WhatsApp Widget on bottom-right */}
                <div className="absolute bottom-4 right-4 z-40 flex items-center flex-col gap-2">
                  {/* Label tag */}
                  <div className="bg-[#25D366] text-white text-[9px] tracking-widest px-2 py-0.5 rounded font-mono uppercase transform scale-[0.8] shadow-md">
                    WhatsApp Integration
                  </div>

                  {/* Faux pulsing WA button */}
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white relative shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.004 2c-5.51 0-9.99 4.49-9.99 10 0 1.94.56 3.75 1.53 5.3L2 22l4.83-1.25c1.45.8 3.09 1.25 4.83 1.25 5.51-0.01 10-4.49 10-10C21.664 6.49 17.514 2 12.004 2zm5.72 13.56c-.24.33-1.4.92-1.92.98-.53.07-.94.06-1.5-.12-.34-.1-.85-.3-1.63-.64-3.14-1.37-5.18-4.57-5.34-4.78-.16-.21-1.32-1.75-1.32-3.34 0-1.58.82-2.36 1.11-2.67.29-.31.64-.39.85-.39h.61c.21 0 .49-.08.77.59.28.67.97 2.37 1.05 2.53.08.16.14.35.03.56-.11.21-.17.34-.34.54-.17.2-.35.45-.5.61-.17.18-.35.38-.15.72.2.34.88 1.45 1.89 2.35.84.75 1.56 1.13 1.89 1.3.33.17.53.15.73-.07.2-.22.86-1.01 1.09-1.36.23-.35.46-.29.77-.18h3.33c.31.1.2.22.1.28l-.01.01z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
