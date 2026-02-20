"use client";

import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-text-line",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, stagger: 0.2, delay: 0.5 }
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 },
        "-=1"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-[#F4F4F4]">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 md:px-16 md:py-8">
        <Link href="/" className="text-2xl font-display font-medium tracking-tight text-[#1A1A1A]">
          EUDEN
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/explore" className="hidden md:block text-sm uppercase tracking-widest hover:text-[#5D6D58] transition-colors">
            Explore
          </Link>
          <button className="flex items-center gap-2 text-sm uppercase tracking-widest hover:text-[#5D6D58] transition-colors">
            <span>Menu</span>
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 max-w-[1920px] mx-auto">
        <h1 ref={titleRef} className="flex flex-col text-[12vw] leading-[0.85] font-display tracking-tighter text-[#1A1A1A] mix-blend-multiply">
          <span className="hero-text-line overflow-hidden block">DESIGNING</span>
          <span className="hero-text-line overflow-hidden block">FOR A SHARED</span>
          <span className="hero-text-line overflow-hidden block text-[#5D6D58]">FUTURE</span>
        </h1>
        
        <p ref={subRef} className="mt-8 max-w-md text-lg md:text-xl font-sans text-[#1A1A1A]/80 leading-relaxed">
          Creating global experiences that connect people and protect our shared ecosystem.
        </p>
      </div>

      {/* Background Image (Misty Forest) */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop" 
          alt="Misty Forest" 
          className="w-full h-full object-cover grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F4F4F4] via-transparent to-transparent h-1/2 bottom-0" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-8 md:left-16 z-20 animate-bounce">
        <span className="text-xs uppercase tracking-[0.2em] opacity-50">Scroll</span>
      </div>
    </div>
  );
}
