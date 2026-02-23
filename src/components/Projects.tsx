import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Gamepad2, Scale, Palette, HeartPulse } from "lucide-react";

const projects = [
  {
    title: "Start or Scrap?",
    subtitle: "Startup Validation Game",
    icon: Gamepad2,
    description:
      "An interactive idea-validation game simulating real startup decision-making under time pressure. Players analyze random business ideas using structured validation questions, receiving feasibility ratings with constructive feedback.",
    tags: ["Product Thinking", "Decision Systems", "Game Logic", "Scoring Engine"],
    accent: "from-primary/20 to-accent/10",
  },
  {
    title: "Contract Boss",
    subtitle: "AI Legal Contract Analyzer",
    icon: Scale,
    description:
      "AI-powered legal-tech platform analyzing contracts for missing clauses, ambiguous terms, and compliance gaps under Indian law. Assigns risk scores, simplifies legal language, and generates compliance reports aligned with IT Act & DPDP Act 2023.",
    tags: ["NLP Analysis", "Risk Scoring", "Compliance Intelligence", "Legal-Tech"],
    accent: "from-accent/20 to-primary/10",
  },
  {
    title: "AI Interior Design Generator",
    subtitle: "Diffusion-Powered Design",
    icon: Palette,
    description:
      "Diffusion-model-powered system generating personalized room layouts from text prompts. Built with Python, Flask, React.js, and Stable Diffusion v3 for creative interior design personalization.",
    tags: ["Stable Diffusion", "Flask", "React", "Generative AI"],
    accent: "from-primary/15 to-accent/15",
  },
  {
    title: "MediGuardian",
    subtitle: "AI Health Detection",
    icon: HeartPulse,
    description:
      "AI-powered Parkinson's early detection system using voice analysis. Leverages machine learning to identify vocal biomarkers for early diagnosis, built with Python, Flask, and React.js.",
    tags: ["Healthcare AI", "Voice Analysis", "ML", "Early Detection"],
    accent: "from-accent/15 to-primary/15",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover rounded-xl p-6 group cursor-pointer"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${project.accent} mb-4`}>
                <project.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="font-heading text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-muted-foreground mb-3 font-heading tracking-wide uppercase">
                {project.subtitle}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
