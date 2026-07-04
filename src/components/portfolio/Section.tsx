import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("section-pad relative", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-accent uppercase tracking-widest">
              {eyebrow}
            </div>
          )}
          <h2 className="mt-4 font-display font-bold text-4xl sm:text-5xl">
            {title.split(" ").map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-gradient">
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
