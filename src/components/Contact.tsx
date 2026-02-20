"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="relative w-full bg-[#F4F4F4] text-[#1A1A1A]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left: Locations & Info */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10">
          <div>
            <h2 className="text-5xl md:text-7xl font-display tracking-tighter mb-12">
              Let's talk.
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-[#5D6D58] mb-4">Milan Studio</h3>
                <p className="text-lg md:text-xl font-sans">
                  Via Tortona 37,<br />
                  20144 Milano, Italy<br />
                  <a href="mailto:milan@euden.eu" className="block mt-2 hover:text-[#5D6D58] transition-colors">milan@euden.eu</a>
                </p>
              </div>

              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-[#5D6D58] mb-4">Bengaluru Studio</h3>
                <p className="text-lg md:text-xl font-sans">
                  Indiranagar 12th Main,<br />
                  Bengaluru 560038, India<br />
                  <a href="mailto:blr@euden.eu" className="block mt-2 hover:text-[#5D6D58] transition-colors">blr@euden.eu</a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0">
            <p className="text-sm opacity-50">© 2026 EUDEN. All rights reserved.</p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="p-8 md:p-16 lg:p-24 flex items-center bg-white">
          <form className="w-full max-w-md mx-auto space-y-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Name</label>
              <input 
                type="text" 
                className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 focus:outline-none focus:border-[#1A1A1A] transition-colors font-display text-xl"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Email</label>
              <input 
                type="email" 
                className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 focus:outline-none focus:border-[#1A1A1A] transition-colors font-display text-xl"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest opacity-50">Message</label>
              <textarea 
                rows={4}
                className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-4 focus:outline-none focus:border-[#1A1A1A] transition-colors font-display text-xl resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button type="button" className="group w-full py-6 bg-[#1A1A1A] text-[#F4F4F4] flex items-center justify-center gap-3 hover:bg-[#5D6D58] transition-colors duration-300 mt-8">
              <span className="uppercase tracking-widest text-sm">Send Message</span>
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
