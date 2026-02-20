import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4F4F4]">
      <Hero />
      <Philosophy />
      <ProjectGrid />
      <Contact />
    </main>
  );
}
