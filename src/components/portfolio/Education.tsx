import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";
import { EDUCATION } from "@/lib/portfolio-data";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic foundation"
      subtitle="Where I studied — from school through degree."
    >
      <div className="grid md:grid-cols-3 gap-5">
        {EDUCATION.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-strong rounded-2xl p-6 hover-glow"
          >
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
              <GraduationCap size={20} />
            </span>
            <h3 className="mt-5 font-display font-semibold text-lg">{e.degree}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{e.institute}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
