"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Placeholder data - replace with Sanity data later
const projects = [
  {
    id: 1,
    title: "Nordic Cultural Center",
    category: "Architecture",
    location: "Oslo, Norway",
    image: "https://images.unsplash.com/photo-1517581177697-a06a1891bdd2?q=80&w=1974&auto=format&fit=crop",
    size: "large"
  },
  {
    id: 2,
    title: "Urban Forest Lab",
    category: "Research",
    location: "Milan, Italy",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 3,
    title: "Bengaluru Tech Park",
    category: "Urbanism",
    location: "Bengaluru, India",
    image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  },
  {
    id: 4,
    title: "Alpine Retreat",
    category: "Architecture",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1518005052357-e9847508d4ee?q=80&w=1974&auto=format&fit=crop",
    size: "small"
  },
  {
    id: 5,
    title: "Future Living Module",
    category: "Research",
    location: "Copenhagen, Denmark",
    image: "https://images.unsplash.com/photo-1524146128017-b9dd0bfd2778?q=80&w=2070&auto=format&fit=crop",
    size: "medium"
  },
  {
    id: 6,
    title: "The Glass Pavilion",
    category: "Interior",
    location: "Kyoto, Japan",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop",
    size: "large"
  }
];

export default function ProjectGrid() {
  const containerRef = useRef(null);

  return (
    <section className="relative w-full py-24 md:py-32 px-4 md:px-8 max-w-[1920px] mx-auto bg-[#F4F4F4]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
        <div>
          <h2 className="text-4xl md:text-6xl font-display tracking-tight text-[#1A1A1A]">
            Selected Works
          </h2>
          <p className="mt-4 max-w-md text-lg text-[#1A1A1A]/60 font-sans">
            A curation of projects defining our approach to sustainable urbanism.
          </p>
        </div>
        <button className="group flex items-center gap-2 text-sm uppercase tracking-widest border-b border-[#1A1A1A] pb-1 hover:text-[#5D6D58] hover:border-[#5D6D58] transition-colors">
          View Archive <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative aspect-[4/5] overflow-hidden bg-gray-200 cursor-pointer ${
              project.size === 'large' ? 'md:col-span-2 md:aspect-[16/9]' : ''
            }`}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
              <span className="text-xs font-mono uppercase tracking-wider text-white/80 mb-2 block">
                {project.category} — {project.location}
              </span>
              <h3 className="text-2xl md:text-3xl font-display text-white">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
