# Client Profile: EUDEN (Eudomos Design Network)

## 1. Identity & Brand Voice
*   **Name:** EUDEN (Eudomos Design Network).
*   **Tagline:** "We create global experiences that connect people and protect our shared future."
*   **Locations:** Milan (Italy) & Bengaluru (India). A fusion of European design heritage and Indian dynamism.
*   **Core Philosophy:** Research-driven, interdisciplinary, context-aware. They view architecture not just as building, but as a response to climate change and complex urban settlement systems.
*   **Vibe:** Academic yet practical, boutique, thoughtful, minimalist but warm.
*   **Keywords:** Collective Dialogue, Integrated Collaboration, Adaptive Strategies, Context-Driven.

## 2. Design Aspirations (The "Look & Feel")
Based on their references (Cobe, Effekt, Populous), they want to punch above their weight.
*   **Visual Style:** "Scandinavian Modernism meets Italian Craft."
    *   **Layout:** Hero-heavy. Large, edge-to-edge imagery. Minimal text overlays.
    *   **Typography:** Clean Sans-Serif (Swiss style) – think *Helvetica Now* or *Inter*. Large headings, plenty of whitespace.
    *   **Navigation:** Simple, unobtrusive. Maybe a "burger" menu even on desktop to save screen real estate for images.
    *   **Color Palette:** Monochromatic (Black/White/Greys) to let the renders/photos pop. Perhaps a subtle accent color (Earth tone like Terracotta or Sage Green) to reflect "sustainability."

## 3. Target Audience
*   **Primary:** High-end developers, city planners, institutional clients (universities, governments).
*   **Secondary:** Other architects/collaborators (since they emphasize "Network" and "Dialogue").

---

# Product Requirements Document (PRD)
**Project:** Euden Corporate Website Redesign
**Version:** 1.0

## 1. Executive Summary
Euden requires a portfolio-centric website that positions them as a global, research-led design practice. The current site is a placeholder; the new site must rival top-tier Danish firms (Cobe, Effekt) in visual quality, conveying "Global Expertise" despite their boutique size.

## 2. Sitemap & Information Architecture
1.  **Home (The "Hook"):**
    *   Full-screen video background or slider of best projects.
    *   Minimal text: Tagline + "Explore".
    *   Auto-playing "Atmosphere" reel (Milan studio, Bengaluru studio, sketches, construction sites).
2.  **Projects (The "Proof"):**
    *   Grid view (Masonry layout).
    *   Filters: Architecture, Urbanism, Research, Interior.
    *   **Project Detail Page:**
        *   Hero Image.
        *   "Project Facts" sidebar (Location, Size, Year, Status).
        *   Narrative Description (The "Story").
        *   Gallery (Renders + Diagrams).
3.  **Studio (The "People"):**
    *   "Philosophy" section (Research-driven).
    *   "Team" grid (Professional headshots, B&W).
    *   "Locations" (Milan & Bengaluru map/contacts).
4.  **Research / Journal (The "Brain"):**
    *   Articles/Whitepapers on Climate Change, Urban Settlements.
    *   This is crucial to match their "Think Tank" positioning.
5.  **Contact:**
    *   Simple form.
    *   Physical addresses with elegant typography.

## 3. Functional Requirements
*   **CMS:** Must be easy for the team to add new projects/renders without coding. (Recommendation: Sanity.io or Strapi).
*   **Performance:** Image optimization is critical. Lazy loading for the masonry grid.
*   **Animations:**
    *   Subtle "fade-in" on scroll.
    *   Smooth page transitions (like a single-page application feel).
    *   Hover effects on project cards (zoom or overlay).

## 4. Technical Stack Recommendation
*   **Frontend:** Next.js (React) – for speed and SEO.
*   **Styling:** Tailwind CSS – for rapid, custom design.
*   **Animation:** Framer Motion – for that "premium" feel.
*   **CMS:** Sanity.io – headless CMS, perfect for image-heavy portfolios.
*   **Hosting:** Vercel (Global Edge Network).

## 5. Open Questions for Client
1.  **Content:** Do you have high-res photography/renders for at least 6-8 projects? (The design relies on this).
2.  **Copy:** The "Research" angle is strong. Do you have existing whitepapers or articles to populate the "Journal" section at launch?
3.  **Video:** Can you provide a 10-15 second "Showreel" for the homepage background?
