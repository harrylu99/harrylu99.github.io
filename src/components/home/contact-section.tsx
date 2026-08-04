import { ArrowUpRight, Code, ContactRound } from "lucide-react";

import { site } from "@/config/site";

const contactLinks = [
  { label: "GitHub", href: site.links.github, icon: Code, external: true },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    icon: ContactRound,
    external: true,
  },
] as const;

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-title"
      className="border-border mx-auto w-full max-w-7xl border-t px-5 py-24 sm:px-8 sm:py-36 lg:px-10 lg:py-52"
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <h2
          id="contact-title"
          className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3"
        >
          Contact
        </h2>
        <div className="md:col-span-8 md:col-start-5 lg:col-span-7">
          <p className="max-w-xl text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.18] tracking-[-0.035em]">
            Let&apos;s make something considered together.
          </p>
          <ul className="border-border mt-10 border-t" role="list">
            {contactLinks.map(({ label, href, icon: Icon, external }) => (
              <li key={label} className="border-border border-b">
                <a
                  href={href}
                  className="group hover:text-muted-foreground flex min-h-14 items-center justify-between gap-4 py-3 text-lg tracking-[-0.02em] transition-colors"
                  {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="flex items-center gap-3">
                    <Icon
                      aria-hidden="true"
                      className="size-4"
                      strokeWidth={1.5}
                    />
                    {label}
                  </span>
                  {external && (
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
