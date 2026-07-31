import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
