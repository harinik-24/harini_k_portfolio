import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  { label: "Programming", items: ["C", "Python", "Java"] },
  { label: "Frontend", items: ["HTML", "CSS", "JavaScript", "React"] },
  { label: "Backend", items: ["Django", "Flask (Basic)", "FastAPI (Basic)"] },
  { label: "Database", items: ["MySQL"] },
  { label: "AI / ML", items: ["Diffusion Models", "NLP Basics"] },
  { label: "Cloud & DevOps", items: ["AWS Fundamentals"] },
  { label: "Tools", items: ["GitHub", "VS Code", "Figma"] },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass-card-hover rounded-xl p-5 border border-primary/20"
            >
              <h3 className="font-heading text-xs font-semibold text-primary tracking-wider uppercase mb-3">
                {cat.label}
              </h3>
              <div className="space-y-1.5">
                {cat.items.map((item) => (
                  <p key={item} className="text-sm text-muted-foreground">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
