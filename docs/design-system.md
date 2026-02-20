# Euden Design System & UI Specification
**Version:** 1.0
**Philosophy:** "Quiet Luxury" — Minimalist, Content-First, Architectural.

## 1. Visual Identity
### Color Palette
*   **Primary (Canvas):** `#F4F4F4` (Off-White/Paper) — Warmer than pure white, feels like a sketchpad.
*   **Secondary (Ink):** `#1A1A1A` (Soft Black) — For typography and primary UI elements.
*   **Accent (Nature):** `#5D6D58` (Muted Sage Green) — Represents sustainability/research. Used sparingly (buttons, active states).
*   **Highlight (Structure):** `#D4AF37` (Antique Brass) — Very subtle, for thin lines or active links.

### Typography
*   **Display (Headings):** *Helvetica Now Display* (or *Inter Tight* as free alternative).
    *   **H1 (Hero):** 120px / 90% LH / Tracking -2% (Massive, magazine style).
    *   **H2 (Section):** 64px / 100% LH.
*   **Body (Text):** *Suisse Int'l* (or *Geist* / *DM Sans*).
    *   **P:** 18px / 160% LH (Readable, airy).
    *   **Label:** 12px / Uppercase / Tracking +10% (Technical feel).

## 2. Layout & Spacing
*   **Grid:** 12-column fluid grid. 24px gutters.
*   **Container:** `max-w-[1920px]` (Cinematic full-width).
*   **Spacing Scale:**
    *   `section-gap`: 160px (Generous whitespace).
    *   `component-gap`: 80px.
    *   `element-gap`: 24px.

## 3. Motion & Interaction (GSAP + Spline)
*   **Scroll:** `Lenis` for smooth scrolling.
*   **Hero Animation:**
    *   Text reveals using `GSAP SplitText` (staggered lines from bottom).
    *   Background image: Parallax effect (`y: -20%`) on scroll.
*   **Page Transitions:**
    *   Simple "curtain" reveal (black overlay slides up).
*   **3D Element (Contact Section):**
    *   **Spline Scene:** An abstract, rotating wireframe globe or a structural node (representing "Network") that reacts to mouse movement.
    *   *Placement:* Floating on the right side of the Contact form.

## 4. Homepage Mockup Description (Prompt for Image Gen)
*   **Header:** Transparent, minimal. Logo top-left (EUDEN), Menu top-right (Hamburger).
*   **Hero Section:** Full-screen render of a modern, sustainable timber building in a misty Nordic landscape (or lush Indian context).
*   **Overlay:** "DESIGNING FOR A SHARED FUTURE" in massive, thin sans-serif type, centered or bottom-left.
*   **UI:** A small "Scroll" indicator at the bottom.
*   **Vibe:** Atmospheric, foggy, photorealistic, architectural visualization style.
