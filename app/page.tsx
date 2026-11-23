import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import TechStack from "@/sections/TechStack";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Education from "@/sections/Education";
import Leadership from "@/sections/Leadership";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
