import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

const AboutPage = () => (
  <div className="relative min-h-screen">
    <Starfield />
    <Navbar />
    <main className="relative z-10 pt-24">
      <About />
    </main>
  </div>
);

export default AboutPage;
