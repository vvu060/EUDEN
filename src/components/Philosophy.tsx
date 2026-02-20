"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative w-full py-24 md:py-40 px-6 md:px-16 bg-[#1A1A1A] text-[#F4F4F4]">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <span className="block text-xs font-mono uppercase tracking-[0.2em] text-[#5D6D58] mb-8">
          Our Philosophy
        </span>
        
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display leading-[1.1] tracking-tight">
          We believe architecture is not just building, but a <span className="text-[#D4AF37] italic">response</span> to climate change and complex urban settlement systems.
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-4">Collective Dialogue</h3>
            <p className="text-[#F4F4F4]/70 font-sans leading-relaxed">
              EUDEN provides a platform for interdisciplinary design development through constant exchange between architects, ecologists, and sociologists.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-medium mb-4">Adaptive Strategies</h3>
            <p className="text-[#F4F4F4]/70 font-sans leading-relaxed">
              Our work innovates design methodologies through context-driven research, aiming to create resilient spaces that stand the test of time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
