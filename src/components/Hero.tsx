import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-heading text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
        >
          Hello, I'm{" "}
          <span className="gradient-text">Harini K</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-base md:text-lg font-heading mb-6 tracking-wide"
        >
          Tech Enthusiast · AI Product Builder
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground/80 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about developing AI-powered and web-based applications that solve real-world challenges through practical innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            to="/projects"
            className="glow-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-medium text-sm"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="glow-button inline-flex items-center gap-2 glass-card px-6 py-3 rounded-lg font-heading font-medium text-sm text-foreground"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Link>
          <a
            href="/Harini__K.pdf"
            download
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-heading font-medium text-sm text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
