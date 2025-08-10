import { ThemeToggle } from "../components/ThemeToggle";
import { StarsBackground } from "@/components/StarsBackground";
import { Navbar } from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillSection } from "../components/SkillSection";
import  ProjectsSection  from "../components/ProjectsSection"; // ✅ Add this line
import  ContactSection from "../components/ContactSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects */}
      <StarsBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection /> 
        <ContactSection/>
        {/* ✅ Add this line */}
      </main>
    </div>
  );
};
