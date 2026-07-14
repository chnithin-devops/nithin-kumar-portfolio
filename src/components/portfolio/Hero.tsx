import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ArrowRight, Mail, Sparkles, Cloud, Server } from "lucide-react";
import { SiDocker, SiKubernetes, SiTerraform, SiGit, SiLinux, SiJenkins, SiGithubactions } from "react-icons/si";
import { PROFILE, PROFILE_IMG, RESUME_URL } from "@/lib/portfolio-data";
import { scrollToId } from "@/lib/scroll";

const FLOATING_ICONS = [
  { Icon: Cloud, color: "#3B82F6", x: "-8%", y: "8%", label: "Azure" },
  { Icon: Server, color: "#F59E0B", x: "92%", y: "12%", label: "AWS" },
  { Icon: SiDocker, color: "#2496ED", x: "-14%", y: "45%", label: "Docker" },
  { Icon: SiKubernetes, color: "#326CE5", x: "96%", y: "40%", label: "Kubernetes" },
  { Icon: SiTerraform, color: "#7B42BC", x: "-6%", y: "82%", label: "Terraform" },
  { Icon: SiGit, color: "#F1502F", x: "88%", y: "78%", label: "Git" },
  { Icon: SiLinux, color: "#FFCC33", x: "40%", y: "-8%", label: "Linux" },
  { Icon: SiJenkins, color: "#D33833", x: "60%", y: "102%", label: "Jenkins" },
  { Icon: SiGithubactions, color: "#2088FF", x: "10%", y: "100%", label: "Azure DevOps" },
];

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PROFILE.titles[titleIndex];
    const speed = deleting ? 40 : 90;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === "") {
          setDeleting(false);
          setTitleIndex((i) => (i + 1) % PROFILE.titles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayText, deleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.15fr_1fr] items-center gap-12 lg:gap-16">
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <Sparkles size={14} className="text-accent" />
              <span>{PROFILE.availability}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-6 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05]"
            >
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl block mb-2 font-medium">
                Hello, I'm
              </span>
              <span className="text-gradient">Nithin Kumar</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-4 h-9 flex items-center text-xl sm:text-2xl font-display font-medium"
            >
              <span className="text-foreground">{displayText}</span>
              <span className="ml-1 inline-block w-[2px] h-6 bg-accent animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl"
            >
              I design and automate cloud-native delivery pipelines on Azure and AWS —
              turning code into reliable, secure, production-ready systems with Docker,
              Kubernetes, Terraform and modern CI/CD.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href={RESUME_URL}
                download="Nithin_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-glow hover-glow"
              >
                <Download size={16} /> Download Resume
              </a>
              <button
                onClick={() => scrollToId("projects")}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
              >
                View Projects <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollToId("contact")}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
              >
                Hire Me
              </button>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
              >
                <Mail size={16} /> Contact Me
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square max-w-md mx-auto w-full"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-primary blur-3xl opacity-40" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent))",
                padding: "2px",
              }}
            >
              <div className="h-full w-full rounded-full bg-background" />
            </motion.div>
            <div className="absolute inset-3 overflow-hidden rounded-full glass-strong">
              <img
                src={PROFILE_IMG}
                alt="Nithin Kumar — DevOps Engineer"
                className="h-full w-full object-cover object-[center_35%] scale-110"
              />
            </div>

            {FLOATING_ICONS.map(({ Icon, color, x, y, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                transition={{
                  opacity: { delay: 0.8 + i * 0.08 },
                  scale: { delay: 0.8 + i * 0.08 },
                  y: { duration: 3 + i * 0.2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl glass-strong shadow-card"
                style={{ left: x, top: y }}
                title={label}
                aria-label={label}
              >
                <Icon size={24} style={{ color }} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
