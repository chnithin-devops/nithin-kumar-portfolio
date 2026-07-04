import { motion } from "framer-motion";
import { Download, ExternalLink, Printer } from "lucide-react";
import { Section } from "./Section";
import { RESUME_URL } from "@/lib/portfolio-data";

export function Resume() {
  const handlePrint = () => {
    const iframe = document.createElement("iframe");
    iframe.style.position = "fixed";
    iframe.style.right = "0";
    iframe.style.bottom = "0";
    iframe.style.width = "0";
    iframe.style.height = "0";
    iframe.style.border = "0";
    iframe.src = RESUME_URL;
    iframe.onload = () => {
      try {
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
      } catch {
        window.open(RESUME_URL, "_blank", "noopener,noreferrer");
      }
    };
    document.body.appendChild(iframe);
    setTimeout(() => document.body.removeChild(iframe), 60_000);
  };

  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="My complete resume"
      subtitle="Preview inline, download, open in a new tab, or print directly."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-strong rounded-3xl p-4 sm:p-6"
      >
        <div className="flex flex-wrap gap-3 mb-4">
          <a
            href={RESUME_URL}
            download="Nithin_Kumar_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover-glow"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <ExternalLink size={16} /> Open Resume
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-semibold hover:bg-white/10 transition-colors"
          >
            <Printer size={16} /> Print Resume
          </button>
        </div>
        <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
          <iframe
            src={`${RESUME_URL}#toolbar=0&navpanes=0`}
            title="Nithin Kumar Resume"
            className="w-full h-[70vh] min-h-[560px]"
          />
        </div>
      </motion.div>
    </Section>
  );
}
