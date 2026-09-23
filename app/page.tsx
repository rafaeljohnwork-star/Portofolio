import Rail from "@/components/Rail";
import Hero from "@/components/Hero";
import Readouts from "@/components/Readouts";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row max-w-6xl mx-auto">
      <Rail />
      <main className="flex-1 min-w-0 px-6 sm:px-10 lg:px-14">
        <Hero />
        <Readouts />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-8 font-mono text-xs text-ink-faint">
          Rafael John · built 2026
        </footer>
      </main>
    </div>
  );
}
