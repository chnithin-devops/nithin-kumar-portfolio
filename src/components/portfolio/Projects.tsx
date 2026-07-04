import { motion } from "framer-motion";
import { CheckCircle2, GitBranch, Layers, Rocket, Zap } from "lucide-react";
import { Section } from "./Section";
import { PROJECT } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Featured Project"
      title="IPOS — Port Operations Platform"
      subtitle="Integrated Port Operating System — a large-scale, multi-environment platform I own end-to-end from a DevOps perspective."
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="glass-strong rounded-3xl p-6 sm:p-10"
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-3xl sm:text-4xl font-bold">
              {PROJECT.name}
            </h3>
            <p className="mt-1 text-accent font-medium">{PROJECT.tagline}</p>
          </div>
          <span className="shrink-0 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-white">
            Enterprise
          </span>
        </div>

        <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
          {PROJECT.overview}
        </p>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <Card icon={<CheckCircle2 size={18} />} title="Responsibilities" items={PROJECT.responsibilities} />
          <Card icon={<Layers size={18} />} title="Architecture" items={PROJECT.architecture} />
          <Card icon={<GitBranch size={18} />} title="CI/CD Pipeline" items={PROJECT.pipeline} />
          <Card icon={<Zap size={18} />} title="Business Impact" items={PROJECT.impact} />
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <Rocket size={18} className="text-accent" />
            <h4 className="font-display font-semibold">Technology Stack</h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {PROJECT.stack.map((t) => (
              <span
                key={t}
                className="rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground/90"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function Card({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="flex items-center gap-2 mb-3 text-accent">
        {icon}
        <h4 className="font-display font-semibold text-foreground">{title}</h4>
      </div>
      <ul className="space-y-2">
        {items.map((it, i) => (
          <li key={i} className="flex gap-3 text-sm text-muted-foreground">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
