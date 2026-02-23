import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

const ProjectsPage = () => (
  <div className="relative min-h-screen">
    <Starfield />
    <Navbar />
    <main className="relative z-10 pt-24">
      <Projects />
    </main>
  </div>
);

export default ProjectsPage;
