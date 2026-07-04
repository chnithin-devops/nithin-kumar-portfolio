import { ArrowUp, Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { NAV_ITEMS, PROFILE, RESUME_URL } from "@/lib/portfolio-data";
import { scrollToId, scrollToTop } from "@/lib/scroll";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1.3fr_1fr_1fr] gap-10">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-primary font-display font-bold text-white shadow-glow">
                N
              </span>
              <span className="font-display font-semibold text-lg">{PROFILE.name}</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              DevOps & Cloud Engineer building reliable CI/CD, IaC, and
              container-based delivery on Azure and AWS.
            </p>
            <a
              href={RESUME_URL}
              download="Nithin_Kumar_Resume.pdf"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-white shadow-glow hover-glow"
            >
              <Download size={14} /> Download Resume
            </a>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <button
                    onClick={() => scrollToId(n.id)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {n.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-2">
              <SocialBtn href={PROFILE.linkedin} label="LinkedIn" external>
                <Linkedin size={16} />
              </SocialBtn>
              <SocialBtn href={PROFILE.github} label="GitHub" external>
                <Github size={16} />
              </SocialBtn>
              <SocialBtn href={`mailto:${PROFILE.email}`} label="Email">
                <Mail size={16} />
              </SocialBtn>
              <SocialBtn href={`tel:${PROFILE.phoneRaw}`} label="Phone">
                <Phone size={16} />
              </SocialBtn>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <p className="text-xs text-muted-foreground min-w-0 truncate">
            © {new Date().getFullYear()} {PROFILE.fullName}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex shrink-0 items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium hover:bg-white/10 transition-colors"
          >
            Back to Top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="grid h-10 w-10 place-items-center rounded-xl glass hover:bg-white/10 hover-glow transition"
    >
      {children}
    </a>
  );
}
