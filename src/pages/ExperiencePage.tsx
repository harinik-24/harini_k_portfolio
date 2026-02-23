import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Experience from "@/components/Experience";

const ExperiencePage = () => (
  <div className="relative min-h-screen">
    <Starfield />
    <Navbar />
    <main className="relative z-10 pt-24">
      <Experience />
    </main>
  </div>
);

export default ExperiencePage;
