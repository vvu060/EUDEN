"use client";

import React, { useState } from "react";
import Globe from "@/components/Globe";
import { ArrowLeft, MapPin, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Data for locations
const locations = [
  {
    id: "milan",
    name: "Milan",
    coords: [45.4642, 9.1900],
    role: "Headquarters",
    description: "The heart of our design operations, focusing on European urbanism and heritage restoration.",
    image: "https://images.unsplash.com/photo-1517581177697-a06a1891bdd2?q=80&w=1974&auto=format&fit=crop", // Reusing reliable images
    stats: { projects: 12, team: 45 }
  },
  {
    id: "bengaluru",
    name: "Bengaluru",
    coords: [12.9716, 77.5946],
    role: "Innovation Hub",
    description: "Our technology and research center, exploring high-density living solutions and sustainable materials.",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070&auto=format&fit=crop",
    stats: { projects: 8, team: 32 }
  },
  {
    id: "oslo",
    name: "Oslo",
    coords: [59.9139, 10.7522],
    role: "Nordic Office",
    description: "Focusing on timber construction and cold-climate resilience.",
    image: "https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=1974&auto=format&fit=crop",
    stats: { projects: 4, team: 12 }
  },
  {
    id: "kyoto",
    name: "Kyoto",
    coords: [35.0116, 135.7681],
    role: "Research Lab",
    description: "Studying traditional craftsmanship and its application in modern architecture.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop",
    stats: { projects: 2, team: 8 }
  },
];

export default function Explore() {
  const [activeLocation, setActiveLocation] = useState<typeof locations[0] | null>(null);

  return (
    <main className="min-h-screen w-full bg-[#F4F4F4] text-[#1A1A1A] overflow-hidden flex flex-col items-center justify-center relative">
      
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-center pointer-events-none">
        <Link href="/" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#5D6D58] transition-colors pointer-events-auto">
          <ArrowLeft size={16} /> Back
        </Link>
        <h1 className="text-2xl font-display font-medium tracking-tight pointer-events-auto">Global Footprint</h1>
      </header>

      {/* Globe Container */}
      {/* Passing active coordinates to Globe to trigger rotation */}
      <div className={`relative z-10 w-full h-[80vh] flex items-center justify-center transition-all duration-700 ${activeLocation ? 'md:w-2/3 md:-translate-x-[10%]' : 'md:w-full'}`}>
        <Globe focusOn={activeLocation?.coords} />
      </div>

      {/* Bottom Nav (Location Selector) */}
      <div className="absolute bottom-12 w-full text-center z-20 px-4 pointer-events-none">
        <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-50 mb-4">Active Locations</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 font-display text-lg md:text-xl pointer-events-auto">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc)}
              className={`transition-colors hover:text-[#5D6D58] ${activeLocation?.id === loc.id ? 'text-[#5D6D58] underline decoration-1 underline-offset-8' : 'opacity-60 hover:opacity-100'}`}
            >
              {loc.name}
            </button>
          ))}
        </div>
      </div>

      {/* Right Info Card */}
      <AnimatePresence>
        {activeLocation && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 h-full w-full md:w-1/3 bg-white shadow-2xl z-30 flex flex-col"
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveLocation(null)}
              className="absolute top-8 right-8 z-40 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Image Header */}
            <div className="relative h-1/3 w-full bg-gray-200">
              <Image 
                src={activeLocation.image} 
                alt={activeLocation.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div>
                  <span className="text-white/80 text-xs font-mono uppercase tracking-widest block mb-2">{activeLocation.role}</span>
                  <h2 className="text-white text-4xl font-display">{activeLocation.name}</h2>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex-1 flex flex-col gap-8">
              <div>
                <h3 className="text-sm font-mono uppercase tracking-widest text-gray-400 mb-4">Overview</h3>
                <p className="text-lg leading-relaxed text-gray-800 font-sans">
                  {activeLocation.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-8">
                <div>
                  <span className="block text-3xl font-display text-[#5D6D58]">{activeLocation.stats.projects}</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400">Active Projects</span>
                </div>
                <div>
                  <span className="block text-3xl font-display text-[#5D6D58]">{activeLocation.stats.team}</span>
                  <span className="text-xs uppercase tracking-widest text-gray-400">Team Members</span>
                </div>
              </div>

              <div className="mt-auto">
                <button className="w-full py-4 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                  <MapPin size={14} /> View Office Details
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
