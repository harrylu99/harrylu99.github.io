import { ArrowDown, ArrowUpRight, FileText, PanelsTopLeft } from 'lucide-react'
import { site } from '@/config/site'
import { ThemeToggle } from '@/components/theme-toggle'

const socialLinks = [
  {
    label: 'Blog',
    href: site.links.blog,
    icon: FileText,
    external: true,
  },
] as const

export function Hero() {
  return (
    <section className="relative mx-auto flex min-h-svh w-full max-w-7xl items-end px-5 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <div className="absolute top-6 right-5 sm:top-8 sm:right-8 lg:top-10 lg:right-10">
        <ThemeToggle />
      </div>
      <section aria-labelledby="hero-title" className="max-w-4xl">
        <p className="text-muted-foreground mb-6 font-mono text-xs tracking-wide sm:mb-8">
          Software Developer
        </p>
        <h1
          id="hero-title"
          className="max-w-4xl text-[clamp(3.5rem,5vw,5rem)] leading-[0.9] font-normal tracking-[-0.06em] text-balance"
        >
          Harry Lu
        </h1>
        <p className="text-muted-foreground mt-8 max-w-xl text-lg leading-relaxed sm:mt-10 sm:text-xl">
          Love making software a little less confusing.
        </p>
        <nav aria-label="Professional links" className="mt-10 sm:mt-12">
          <ul className="flex flex-wrap gap-3" role="list">
            <li>
              <a
                href="#projects"
                className="group border-border hover:border-foreground hover:bg-foreground hover:text-background inline-flex min-h-11 items-center gap-2 border px-4 text-sm font-medium transition-colors"
              >
                <PanelsTopLeft
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.5}
                />
                Projects
                <ArrowDown
                  aria-hidden="true"
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </li>
            {socialLinks.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group border-border hover:border-foreground hover:bg-foreground hover:text-background inline-flex min-h-11 items-center gap-2 border px-4 text-sm font-medium transition-colors"
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-4"
                    strokeWidth={1.5}
                  />
                  {label}
                  {external && (
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.5}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </section>
  )
}
