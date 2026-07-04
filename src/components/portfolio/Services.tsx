import { motion } from "framer-motion";
import { Section } from "./Section";
import { SERVICES } from "@/lib/portfolio-data";
import { Cloud, GitBranch, Cog, Server, Container, Boxes, Layers, Rocket } from "lucide-react";

const ICONS = [GitBranch, Cloud, Layers, Server, Cloud, Container, Boxes, Cog, Rocket];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I can build for you"
      subtitle="From first commit to production release — practical DevOps and cloud services."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              className="group glass rounded-2xl p-6 hover-glow"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-glow">
                <Icon size={20} />
              </span>
              <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
