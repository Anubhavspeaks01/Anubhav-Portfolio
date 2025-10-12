import Hero3D from "@/components/Hero3D";
import ProjectsFuturistic from "@/components/ProjectsFuturistic";
import TechStackFuturistic from "@/components/TechStackFuturistic";
import AboutMe from "@/components/AboutMe";
import CurrentWork from "@/components/CurrentWork";
import ContactFuturistic from "@/components/ContactFuturistic";
import FooterFuturistic from "@/components/FooterFuturistic";

export default function Page() {
  return (
    <main className="relative">
      <Hero3D />
      <AboutMe />
      <TechStackFuturistic />
      <ProjectsFuturistic />
      <CurrentWork />
      <ContactFuturistic />
      <FooterFuturistic />
    </main>
  );
}
