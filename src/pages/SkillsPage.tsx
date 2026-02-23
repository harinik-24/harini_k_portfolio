import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

const SkillsPage = () => (
  <div className="relative min-h-screen">
    <Starfield />
    <Navbar />
    <main className="relative z-10 pt-24">
      <Skills />
    </main>
  </div>
);

export default SkillsPage;
