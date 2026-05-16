import Hero from "@/components/home/hero";
import Navbar from "@/components/home/navbar";
import Background from "@/components/home/background";
import About from "@/components/home/about";
import Projects from "@/components/home/projects";
import Timeline from "@/components/home/timeline";
import Contact from "@/components/home/contact";
import SmoothScroll from "@/components/home/smooth-scroll";
import ProgressBar from "@/components/home/progress-bar";

export default function Home() {
  return (
    <main className="relative">
      <ProgressBar />
      <SmoothScroll />

      <Background />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  );
}
