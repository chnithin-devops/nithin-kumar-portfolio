import { motion } from "framer-motion";
import { Section } from "./Section";
import { SKILL_GROUPS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I ship with"
      subtitle="A working stack built around Azure, AWS, and the modern DevOps toolchain."
    >
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gi * 0.05 }}
            className="glass rounded-2xl p-6 hover-glow"
          >
            <h3 className="font-display text-lg font-semibold mb-5">
              {group.title}
            </h3>
            <div className="space-y-4">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-foreground/90">{s.name}</span>
                    <span className="text-muted-foreground text-xs">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
