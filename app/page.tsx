import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
