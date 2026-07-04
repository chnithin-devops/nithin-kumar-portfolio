import { motion } from "framer-motion";
import { Trophy, Medal, Sparkles, HeartHandshake } from "lucide-react";
import { Section } from "./Section";
import { ACHIEVEMENTS } from "@/lib/portfolio-data";

const ICONS = [Trophy, Sparkles, Medal, HeartHandshake];

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Recognition & moments"
      subtitle="Awards, participation, and community initiatives."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {ACHIEVEMENTS.map((a, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="glass rounded-2xl p-6 hover-glow"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <Icon size={20} />
              </span>
              <h3 className="mt-4 font-display font-semibold">{a.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
