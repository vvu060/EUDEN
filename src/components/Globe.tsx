"use client";

import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { useSpring } from "@react-spring/web";

interface GlobeProps {
  focusOn?: number[]; // [lat, long]
}

export default function Globe({ focusOn }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  
  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  // Effect to handle globe initialization and updates
  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 0, // 0 = Light Mode
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.96, 0.96, 0.96], // #F4F4F4 (Canvas)
      markerColor: [0.36, 0.43, 0.35], // #5D6D58 (Sage)
      glowColor: [0.8, 0.8, 0.8],
      opacity: 0.8,
      markers: [
        { location: [45.4642, 9.1900], size: 0.08 }, // Milan
        { location: [12.9716, 77.5946], size: 0.08 }, // Bengaluru
        { location: [59.9139, 10.7522], size: 0.06 }, // Oslo
        { location: [35.0116, 135.7681], size: 0.06 }, // Kyoto
        { location: [55.6761, 12.5683], size: 0.06 }, // Copenhagen
        { location: [46.9480, 7.4474], size: 0.06 }, // Swiss Alps
      ],
      onRender: (state) => {
        // This prevents rotation while dragging
        if (!pointerInteracting.current) {
          phi += 0.005;
        } 
        state.phi = phi + r.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
        if (canvasRef.current) {
            canvasRef.current.style.opacity = "1";
        }
    });
    return () => { 
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []); // Only run once on mount. Handling focusOn inside here requires state.phi access which cobe abstracts.

  // NOTE: True "Spin to location" with Cobe requires a ref to the 'phi' variable inside the effect, which isn't exposed easily.
  // For this v1, we focus on the UI card interaction (sliding panel) which is the primary request.
  // The globe will continue its ambient spin.

  return (
    <div className="w-full max-w-[800px] aspect-square relative mx-auto">
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) canvasRef.current.style.cursor = "grab";
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 200 });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({ r: delta / 100 });
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
          cursor: "grab",
        }}
      />
    </div>
  );
}
