import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "C", "Python", "Java", "Problem Solving",
    "Critical Thinking", "Basic ML Algo"
  ];

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
            <p>
  I'm a Computer Science student passionate about building AI-powered and web-based applications that solve real-world problems. 
  I enjoy working with <span className="text-foreground font-medium">React, Flask, Django, and FastAPI</span> to create clean, functional, and user-friendly systems.
</p>
<p>
  My projects explore <span className="text-foreground font-medium">generative AI and intelligent automation</span>, from creative AI applications to solutions in healthcare and legal-tech. 
  I focus on turning ideas into working products through continuous learning and experimentation.
</p>
<p>
  Beyond development, I actively contribute to tech communities as a <span className="text-foreground font-medium">DevOps & Infra Lead at AWS Cloud Club</span> 
  and a core member of <span className="text-foreground font-medium">Google Developer Groups</span>, where I collaborate, learn, and grow with like-minded peers.
</p>
              
          </div>

          <div className="md:col-span-2">
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-4 tracking-wider uppercase">Core Strengths</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
