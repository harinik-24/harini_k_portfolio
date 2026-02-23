import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Navbar />
      <main className="relative z-10">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
