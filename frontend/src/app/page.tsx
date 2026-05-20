import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import About from "@/components/About";
import Trust from "@/components/Trust";
import Storytelling from "@/components/Storytelling";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Storytelling />
      <Experiences />
      <Trust />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
