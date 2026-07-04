import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Loader } from "@/components/portfolio/Loader";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Education } from "@/components/portfolio/Education";
import { Resume } from "@/components/portfolio/Resume";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Loader />
      <SmoothScroll />
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Certifications />
        <Achievements />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster theme="dark" position="top-center" />
    </>
  );
}
