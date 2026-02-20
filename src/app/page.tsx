import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <section className="h-screen flex items-center justify-center bg-white w-full">
        <h2 className="text-4xl font-display">Scroll to see Lenis + GSAP in action</h2>
      </section>
    </main>
  );
}
