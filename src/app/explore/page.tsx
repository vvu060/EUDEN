import React from "react";
import Globe from "@/components/Globe";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Explore() {
  return (
    <main className="min-h-screen w-full bg-[#F4F4F4] text-[#1A1A1A] overflow-hidden flex flex-col items-center justify-center relative">
      
      {/* Header */}
      <header className="absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#5D6D58] transition-colors">
          <ArrowLeft size={16} /> Back
        </Link>
        <h1 className="text-2xl font-display font-medium tracking-tight">Global Footprint</h1>
      </header>

      {/* Globe Container */}
      <div className="relative z-10 w-full h-[80vh] flex items-center justify-center scale-125 md:scale-100">
        <Globe />
      </div>

      {/* Overlay Text */}
      <div className="absolute bottom-12 w-full text-center z-20 px-4">
        <p className="font-mono text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Active Locations</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 font-display text-lg md:text-xl">
          <span>Milan</span>
          <span>Bengaluru</span>
          <span className="opacity-40">Oslo</span>
          <span className="opacity-40">Kyoto</span>
          <span className="opacity-40">Copenhagen</span>
        </div>
      </div>

    </main>
  );
}
