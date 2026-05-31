import React, { useState } from 'react';
import { MessageSquare, Mail, Send, Github, Twitter, Linkedin, Instagram, ArrowRight, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    choice: 'wordpress', 
    budget: '$1000 - $3000', 
    message: '' 
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.choice,
          budget: formData.budget,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        // Clear the form fields as requested
        setFormData({ 
          name: '', 
          email: '', 
          choice: 'wordpress', 
          budget: '$1000 - $3000', 
          message: '' 
        });

        // After successful submit: clear fields and show success state for exactly 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        throw new Error(result.error || "Something went wrong.");
      }
    } catch (error: any) {
      console.error("Email API submission failed:", error);
      setErrorMessage("❌ Something went wrong. Please try WhatsApp instead.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0A0F1E] px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-[#5B5FEF]/5 to-[#25D366]/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left panel: Bullet text & CTA links */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Ready to Scale
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#25D366] to-[#5B5FEF]">
                Your Business?
              </span>
            </h2>
            
            <p className="text-sm sm:text-base text-[#94A3B8] mb-12 max-w-lg leading-relaxed">
              Do not let slow response times map out your sales trajectory. Hire our freelance team to configure pixel-perfect WordPress websites, native WhatsApp bots, and smart conversational logic. Let’s build something extraordinary together.
            </p>

            {/* Direct Instant Action Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://wa.me/+8801733212051"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-whatsapp-btn"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold px-6 py-4 rounded-full transition-all duration-300 shadow-xl shadow-[#25D366]/20 hover:scale-102"
              >
                <div className="bg-white/10 p-1.5 rounded-full">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.004 2c-5.51 0-9.99 4.49-9.99 10 0 1.94.56 3.75 1.53 5.3L2 22l4.83-1.25c1.45.8 3.09 1.25 4.83 1.25 5.51-0.01 10-4.49 10-10C21.664 6.49 17.514 2 12.004 2zm5.72 13.56c-.24.33-1.4.92-1.92.98-.53.07-.94.06-1.5-.12-.34-.1-.85-.3-1.63-.64-3.14-1.37-5.18-4.57-5.34-4.78-.16-.21-1.32-1.75-1.32-3.34 0-1.58.82-2.36 1.11-2.67.29-.31.64-.39.85-.39h.61c.21 0 .49-.08.77.59.28.67.97 2.37 1.05 2.53.08.16.14.35.03.56-.11.21-.17.34-.34.54-.17.2-.35.45-.5.61-.17.18-.35.38-.15.72.2.34.88 1.45 1.89 2.35.84.75 1.56 1.13 1.89 1.3.33.17.53.15.73-.07.2-.22.86-1.01 1.09-1.36.23-.35.46-.29.77-.18h3.33c.31.1.2.22.1.28l-.01.01z" />
                  </svg>
                </div>
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:khabbab.dev@gmail.com?subject=Freelance Project Inquiry"
                id="contact-email-btn"
                className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-6 py-4 rounded-full transition-all duration-300"
              >
                <div className="bg-white/5 p-1.5 rounded-full border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <span>Send an Email Directly</span>
              </a>
            </div>

            {/* Social handles row */}
            <div>
              <p className="text-xs uppercase tracking-widest text-white/40 font-mono mb-4">Find us on socials</p>
              <div className="flex gap-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, link: 'https://twitter.com' },
                  { icon: <Linkedin className="w-5 h-5" />, link: 'https://linkedin.com' },
                  { icon: <Github className="w-5 h-5" />, link: 'https://github.com' },
                  { icon: <Instagram className="w-5 h-5" />, link: 'https://instagram.com' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Premium glass quick form */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-2xl relative">
              
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-6 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Transmission Complete!</h3>
                  <div className="text-sm text-[#25D366] max-w-sm leading-relaxed mb-8 font-medium">
                    <p>✅ Message sent! Check your email for confirmation.</p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white rounded-xl text-xs font-mono border border-white/10 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="text-left mb-2">
                    <h3 className="font-display text-xl font-bold text-white mb-1">Kickstart Your Project</h3>
                    <p className="text-xs text-[#94A3B8]">Submit the project brief with the information. It will go directly to your email.</p>
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider" htmlFor="form-name">
                      Full Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#5B5FEF] transition-colors"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider" htmlFor="form-email">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#5B5FEF] transition-colors"
                    />
                  </div>

                  {/* Specialty selector dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider" htmlFor="form-service">
                        Core Requirement
                      </label>
                      <div className="relative">
                        <select
                          id="form-service"
                          value={formData.choice}
                          onChange={(e) => setFormData({ ...formData, choice: e.target.value })}
                          className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5B5FEF] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="wordpress">Premium WordPress Development</option>
                          <option value="whatsapp">WhatsApp Business API Integration</option>
                          <option value="tidio">Tidio Chatbot &amp; CRM Automation</option>
                          <option value="all">Full Digital Scaling Ecosystem (Combo)</option>
                        </select>
                        {/* Arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>

                    {/* Budget Range Selector */}
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider" htmlFor="form-budget">
                        Budget Range
                      </label>
                      <div className="relative">
                        <select
                          id="form-budget"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-[#111827] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#5B5FEF] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="$500 - $1000">$500 - $1,000 USD</option>
                          <option value="$1000 - $3000">$1,000 - $3,000 USD</option>
                          <option value="$3000 - $5000">$3,000 - $5,000 USD</option>
                          <option value="$5000+">$5,000+ USD</option>
                        </select>
                        {/* Arrow */}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 text-xs">
                          ▼
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider" htmlFor="form-message">
                      Project Notes (Optional)
                    </label>
                    <textarea
                      id="form-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us a little bit about your product..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#5B5FEF] transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-200 text-xs text-center font-mono">
                      {errorMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    id="form-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-[#5B5FEF] hover:bg-[#4a4ed4] disabled:bg-[#5B5FEF]/50 text-white font-semibold rounded-xl text-sm transition-all duration-300 shadow-xl shadow-[#5B5FEF]/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        <span>Transmitting Data...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
