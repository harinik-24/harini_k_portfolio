import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Shield, BookOpen } from "lucide-react";

const achievements = [
  { icon: Users, text: "Core Member, Google Developer Groups (1 year)" },
  { icon: Shield, text: "DevOps & Infra Lead, AWS Cloud Club" },
  { icon: Award, text: "GenAI Certified Professional, Oracle" },
  { icon: Shield, text: "Cybersecurity Fundamentals, NASSCOM" },
  { icon: BookOpen, text: "NPTEL Python for Data Science" },
  { icon: Award, text: "Participant, SUSTAIN-A-THON 2024" },
];

const Leadership = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leadership" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
          Leadership & <span className="gradient-text">Achievements</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-10" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-xl p-5 flex items-start gap-3"
            >
              <item.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Leadership;
