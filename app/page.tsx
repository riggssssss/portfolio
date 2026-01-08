import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WorkGrid from "@/components/sections/WorkGrid";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative z-10 bg-background mb-[500px] shadow-2xl">
        <Hero />
        <Marquee text="Creative Apes — Digital Design — App Development — Branding" />
        <WorkGrid />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
