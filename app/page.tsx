import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="border-t border-accent/10" />
      <Skills />
      <div className="border-t border-accent/10" />
      <Experience />
      <div className="border-t border-accent/10" />
      <Projects />
      <div className="border-t border-accent/10" />
      <Education />
      <div className="border-t border-accent/10" />
      <Contact />
      <Footer />
    </main>
  );
}
