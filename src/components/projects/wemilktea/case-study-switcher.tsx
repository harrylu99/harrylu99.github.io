import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

type CaseStudy = 'product' | 'system'

export function CaseStudySwitcher({ active }: { active: CaseStudy }) {
  return (
    <nav aria-label="WeMilktea case studies" className="border-border border-y">
      <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <p className="text-muted-foreground font-mono text-xs tracking-wide">
          CASE STUDIES
        </p>
        <div className="sm:divide-border mt-6 grid gap-0 sm:grid-cols-2 sm:divide-x">
          <Link
            to="/projects/wemilktea"
            aria-current={active === 'product' ? 'page' : undefined}
            className={`group border-border flex min-h-20 min-w-0 items-center justify-between gap-6 border-b py-4 transition-colors sm:border-b-0 sm:pr-8 ${
              active === 'product'
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="min-w-0">
              <span className="block font-mono text-xs">01</span>
              <span className="mt-2 block text-lg tracking-[-0.02em]">
                Product &amp; UI Redesign
              </span>
              <span className="mt-1 block text-sm">
                Experience, information architecture and key flows
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className={`size-4 shrink-0 transition-transform group-hover:translate-x-1 ${
                active === 'product' ? 'text-foreground' : ''
              }`}
              strokeWidth={1.5}
            />
          </Link>
          <Link
            to="/projects/wemilktea/system-design"
            aria-current={active === 'system' ? 'page' : undefined}
            className={`group flex min-h-20 min-w-0 items-center justify-between gap-6 py-4 transition-colors sm:pl-8 ${
              active === 'system'
                ? 'text-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <span className="min-w-0">
              <span className="block font-mono text-xs">02</span>
              <span className="mt-2 block text-lg tracking-[-0.02em]">
                System Design
              </span>
              <span className="mt-1 block text-sm">
                Data, trust boundaries, integrations and deployment
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </nav>
  )
}
