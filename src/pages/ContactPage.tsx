import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

const ContactPage = () => (
  <div className="relative min-h-screen">
    <Starfield />
    <Navbar />
    <main className="relative z-10 pt-24">
      <Contact />
    </main>
  </div>
);

export default ContactPage;
