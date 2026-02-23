import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Github, Linkedin, Send, Code2, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/harini-k-33bb38299/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Harini24K" },
  { icon: Code2, label: "HackerRank", href: "https://www.hackerrank.com/profile/harinik1024" },
  { icon: Trophy, label: "LeetCode", href: "https://leetcode.com/u/Harini_K1024/" },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    setSending(true);
    // TODO: connect to backend
    setTimeout(() => {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setSending(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2 text-center">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-primary rounded-full mb-6 mx-auto" />
        <p className="text-muted-foreground text-sm mb-8 text-center">
          Open to opportunities in full-stack development, generative AI, and product engineering.
          Let's build something meaningful together.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a href="mailto:harinik1024@gmail.com" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4 text-primary" /> harinik1024@gmail.com
          </a>
          <a href="tel:+918825866583" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4 text-primary" /> +91 8825866583
          </a>
        </div>

        {/* Social Links - 4 boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-hover rounded-xl p-4 flex flex-col items-center gap-2 text-center"
            >
              <link.icon className="w-5 h-5 text-primary" />
              <span className="text-xs text-foreground font-medium">{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <a
            href="/Harini__K.htm"
            download
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-medium text-sm hover:bg-primary/90 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            Resume
          </a>
        </motion.div>

        {/* Message Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card rounded-xl p-6 md:p-8 space-y-4"
        >
          <h3 className="font-heading text-lg font-semibold text-foreground mb-2">Send a Message</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-secondary/50 border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-secondary/50 border-border"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="flex w-full rounded-md border border-border bg-secondary/50 px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="glow-button inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-heading font-medium text-sm w-full justify-center disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>

        <p className="text-muted-foreground/40 text-xs mt-16 font-heading text-center">
          © 2026 Harini K. Crafted with passion.
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
