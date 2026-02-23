import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Altrustry Innovation Pvt. Ltd.",
    points: [
      "Built a dynamic startup survival simulation game using Django, MySQL, HTML, CSS, JavaScript.",
      "Implemented decision-making logic and resource management system.",
    ],
  },
  {
    role: "Generative AI Intern",
    company: "Vulture Lines Tech Managements Pvt. Ltd.",
    points: [
      "Developed AI system using diffusion models for intelligent interior design personalization.",
      "Integrated prompt-based editing pipeline for creative generation.",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card rounded-xl p-6 border-l-2 border-l-primary/50"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 mt-1">
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-primary/80 font-medium mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
