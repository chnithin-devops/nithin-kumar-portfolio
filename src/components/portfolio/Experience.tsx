import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { EXPERIENCE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've built things"
      subtitle="A focused DevOps journey — end-to-end pipeline ownership on a large port operations platform."
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative pl-14 sm:pl-20 pb-10 last:pb-0"
          >
            <span className="absolute left-0 sm:left-2 top-1 grid h-9 w-9 place-items-center rounded-full bg-gradient-primary shadow-glow">
              <Briefcase size={16} className="text-white" />
            </span>
            <div className="glass-strong rounded-2xl p-6 sm:p-8 hover-glow">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                <div className="min-w-0">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold truncate">
                    {exp.role}
                  </h3>
                  <p className="text-accent font-medium mt-1">{exp.company}</p>
                </div>
                <span className="shrink-0 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
                  {exp.duration}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm sm:text-base text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
