import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1900);
    return () => clearTimeout(t);
  }, []);
  const name = "Nithin Kumar";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)", scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(600px 300px at 50% 50%, color-mix(in oklab, var(--accent) 30%, transparent), transparent)",
            }}
          />
          <div className="relative flex overflow-hidden">
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-6xl font-display font-bold text-gradient"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "12rem" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="relative mt-8 h-[2px] bg-gradient-primary rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground"
          >
            DevOps · Cloud · Azure
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
