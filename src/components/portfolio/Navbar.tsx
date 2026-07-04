import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, PROFILE } from "@/lib/portfolio-data";
import { scrollToId } from "@/lib/scroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    NAV_ITEMS.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center h-16 sm:h-20 gap-4">
          <button
            onClick={() => handleClick("home")}
            className="flex items-center gap-2 min-w-0 text-left"
            aria-label="Go to top"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-primary font-display font-bold text-white shadow-glow">
              N
            </span>
            <span className="truncate font-display font-semibold text-lg tracking-tight">
              {PROFILE.name}
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "relative px-3 py-2 text-sm font-medium transition-colors",
                  active === item.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-primary"
                  />
                )}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden grid h-10 w-10 shrink-0 place-items-center rounded-lg glass"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden pb-4 grid gap-1"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  active === item.id
                    ? "glass text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
