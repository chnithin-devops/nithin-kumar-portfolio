import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Github, Loader2, Send, CheckCircle2 } from "lucide-react";
import { Section } from "./Section";
import { PROFILE } from "@/lib/portfolio-data";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Please enter a valid email").max(160),
  subject: z.string().trim().min(3, "Subject is too short").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1500),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    const body = `Hi Nithin,%0D%0A%0D%0A${encodeURIComponent(data.message)}%0D%0A%0D%0A— ${encodeURIComponent(
      data.name
    )} (${encodeURIComponent(data.email)})`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      data.subject
    )}&body=${body}`;
    toast.success("Message ready — your mail app is opening.");
    setSubmitting(false);
    reset();
  };

  const contacts = [
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phoneRaw}` },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/chnithin", href: PROFILE.linkedin, external: true },
    { icon: Github, label: "GitHub", value: "github.com/chnithin-devops", href: PROFILE.github, external: true },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something reliable"
      subtitle="Open to full-time DevOps / Cloud roles and freelance projects."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-muted-foreground">{PROFILE.availability}</span>
          </div>

          {contacts.map(({ icon: Icon, label, value, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 glass rounded-2xl p-4 hover-glow"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-white">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  {label}
                </span>
                <span className="block text-sm sm:text-base font-medium truncate">
                  {value}
                </span>
              </span>
            </a>
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit(onSubmit)}
          className="glass-strong rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} className={inputCls} placeholder="Your name" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input {...register("email")} type="email" className={inputCls} placeholder="you@example.com" />
            </Field>
          </div>
          <Field label="Subject" error={errors.subject?.message}>
            <input {...register("subject")} className={inputCls} placeholder="What's this about?" />
          </Field>
          <Field label="Message" error={errors.message?.message}>
            <textarea
              {...register("message")}
              rows={5}
              className={`${inputCls} resize-none`}
              placeholder="Tell me about the project or role…"
            />
          </Field>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-glow hover-glow disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Send size={16} /> Send Message
              </>
            )}
          </button>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 size={14} className="text-emerald-400" />
            Opens your mail app pre-filled — no message is stored.
          </p>
        </motion.form>
      </div>
    </Section>
  );
}

const inputCls =
  "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
