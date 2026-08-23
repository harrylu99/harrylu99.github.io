import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Fragment, useEffect, type ReactNode } from 'react'
import { Link } from 'react-router'

import { CaseStudySwitcher } from '@/components/projects/wemilktea/case-study-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { projects } from '@/data/projects'

const project = projects[0]

function SectionHeading({
  id,
  number,
  title,
}: {
  id: string
  number: string
  title: string
}) {
  return (
    <div className="grid gap-6 md:grid-cols-12 md:gap-8">
      <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
        {number}
      </p>
      <h2
        id={id}
        className="max-w-4xl text-[clamp(2.25rem,4vw,4rem)] leading-[0.96] tracking-[-0.06em] md:col-span-8 md:col-start-5"
      >
        {title}
      </h2>
    </div>
  )
}

function DiagramFrame({
  label,
  caption,
  children,
}: {
  label: string
  caption: string
  children: ReactNode
}) {
  const captionId = label.toLowerCase().replaceAll(' ', '-')

  return (
    <figure className="border-border mt-12 max-w-full min-w-0 border p-4 sm:p-6 lg:p-8">
      <div
        role="img"
        aria-label={label}
        aria-describedby={captionId}
        className="border-border bg-muted/30 max-w-full min-w-0 border p-4 sm:p-6"
      >
        {children}
      </div>
      <figcaption
        id={captionId}
        className="text-muted-foreground mt-4 max-w-3xl font-mono text-xs leading-relaxed break-words"
      >
        {caption}
      </figcaption>
    </figure>
  )
}

function DiagramNode({
  eyebrow,
  title,
  detail,
}: {
  eyebrow?: string
  title: string
  detail?: string
}) {
  return (
    <div className="border-border bg-background max-w-full min-w-0 border p-4 break-words sm:p-5">
      {eyebrow && (
        <p className="text-muted-foreground font-mono text-[0.65rem] tracking-wide">
          {eyebrow}
        </p>
      )}
      <p className="mt-2 text-lg leading-tight tracking-[-0.025em]">{title}</p>
      {detail && (
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
          {detail}
        </p>
      )}
    </div>
  )
}

function ResponsiveArrow({
  horizontalAt,
}: {
  horizontalAt: 'sm' | 'md' | 'lg'
}) {
  const downClass = {
    sm: 'sm:hidden',
    md: 'md:hidden',
    lg: 'lg:hidden',
  }[horizontalAt]
  const rightClass = {
    sm: 'hidden sm:inline',
    md: 'hidden md:inline',
    lg: 'hidden lg:inline',
  }[horizontalAt]

  return (
    <span aria-hidden="true" className="text-muted-foreground text-center">
      <span className={downClass}>↓</span>
      <span className={rightClass}>→</span>
    </span>
  )
}

function DownArrow() {
  return (
    <p aria-hidden="true" className="text-muted-foreground py-2 text-center">
      ↓
    </p>
  )
}

function ArchitectureDiagram() {
  return (
    <DiagramFrame
      label="WeMilktea architecture and trust boundaries"
      caption="Public and Admin are separate browser applications. Supabase owns canonical data, authentication and policies; Edge Functions hold privileged integrations; R2 stores image bytes."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1.25fr_auto_1fr] lg:items-center">
        <div className="grid gap-4">
          <DiagramNode
            eyebrow="PUBLIC WEB · REACT / TYPESCRIPT / VITE"
            title="Public discovery"
            detail="Published Stores, Drinks, Search and Picker reads"
          />
          <DiagramNode
            eyebrow="ADMIN WEB · REACT / TYPESCRIPT / VITE"
            title="Internal operations"
            detail="Catalogue, discovery, review and image workflows"
          />
        </div>
        <ResponsiveArrow horizontalAt="lg" />
        <DiagramNode
          eyebrow="SUPABASE"
          title="PostgreSQL + PostGIS"
          detail="Auth, RLS, canonical brands, locations, products and relationships"
        />
        <ResponsiveArrow horizontalAt="lg" />
        <div className="grid gap-4">
          <DiagramNode
            eyebrow="PRIVILEGED SERVER BOUNDARY"
            title="Edge Functions"
            detail="Google Places, candidate detail and image-storage operations"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <DiagramNode eyebrow="OBJECT STORAGE" title="Cloudflare R2" />
            <DiagramNode eyebrow="EXTERNAL REFERENCE" title="Google Places" />
          </div>
        </div>
      </div>
    </DiagramFrame>
  )
}

function MonorepoDiagram() {
  return (
    <DiagramFrame
      label="WeMilktea monorepo structure"
      caption="One engineering context, separate runtime responsibilities. The applications share domain, validation and browser-safe configuration packages without becoming microservices."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <p className="text-muted-foreground font-mono text-xs">APPS</p>
          <div className="mt-3 grid gap-3">
            <DiagramNode title="apps/web/" detail="Public discovery" />
            <DiagramNode title="apps/admin/" detail="Internal operations" />
          </div>
        </div>
        <div>
          <p className="text-muted-foreground font-mono text-xs">
            SHARED / DATA
          </p>
          <div className="mt-3 grid gap-3">
            <DiagramNode
              title="packages/"
              detail="domain · validation · config"
            />
            <DiagramNode
              title="supabase/"
              detail="migrations · functions · tests"
            />
            <DiagramNode
              title="docs/"
              detail="product and engineering decisions"
            />
          </div>
        </div>
      </div>
    </DiagramFrame>
  )
}

function DataModelDiagram() {
  return (
    <DiagramFrame
      label="Simplified WeMilktea catalogue data model"
      caption="The diagram focuses on the relationships that support the public Drink ↔ Store journey. It omits operational columns and implementation detail."
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-center">
        <div className="grid gap-4">
          <DiagramNode title="Brand" detail="One business" />
          <DiagramNode title="Location" detail="One physical branch" />
        </div>
        <ResponsiveArrow horizontalAt="lg" />
        <div className="grid gap-4">
          <DiagramNode
            title="Product"
            detail="One curated drink, shared across branches"
          />
          <DiagramNode
            title="location_products"
            detail="Availability, local price and verification"
          />
        </div>
        <ResponsiveArrow horizontalAt="lg" />
        <div className="grid gap-4">
          <DiagramNode title="Category" detail="Published catalogue context" />
          <DiagramNode
            title="ImageAsset"
            detail="Metadata and ownership/provenance"
          />
        </div>
      </div>
      <div className="border-border mt-6 border-t pt-6">
        <p className="text-muted-foreground font-mono text-xs">
          DISCOVERY LIFECYCLE
        </p>
        <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center">
          {[
            'DiscoveryRun',
            'Candidate',
            'Human review',
            'Canonical draft',
            'Published',
          ].map((label, index, items) => (
            <Fragment key={label}>
              <DiagramNode title={label} />
              {index < items.length - 1 && (
                <ResponsiveArrow horizontalAt="lg" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </DiagramFrame>
  )
}

function DiscoveryDiagram() {
  return (
    <DiagramFrame
      label="WeMilktea store discovery and candidate review flow"
      caption="Google Places contributes discovery and enrichment input. The candidate layer creates a deliberate pause between an external result and a trusted, publishable WeMilktea record."
    >
      <div className="mx-auto max-w-3xl">
        <DiagramNode eyebrow="AUTHORIZED ADMIN" title="Start a discovery run" />
        <DownArrow />
        <DiagramNode
          eyebrow="SUPABASE EDGE FUNCTION · STORE-DISCOVERY"
          title="Call Google Places Text Search"
          detail="The Google key and service-role client stay server-side."
        />
        <DownArrow />
        <div className="grid gap-3 sm:grid-cols-2">
          <DiagramNode
            title="Normalize and deduplicate"
            detail="Reuse durable Place IDs and surface possible duplicates."
          />
          <DiagramNode
            title="Record run + observations"
            detail="Keep discovery operations separate from canonical data."
          />
        </div>
        <DownArrow />
        <DiagramNode
          eyebrow="INTERNAL STATE"
          title="Store candidate"
          detail="New, possible_duplicate, known or reviewed."
        />
        <DownArrow />
        <div className="grid gap-3 sm:grid-cols-3">
          <DiagramNode title="Approve" detail="Create a canonical draft" />
          <DiagramNode title="Merge" detail="Attach to an existing location" />
          <DiagramNode title="Reject" detail="Retain the audit trail" />
        </div>
        <DownArrow />
        <div className="grid gap-3 sm:grid-cols-2">
          <DiagramNode
            title="Canonical location"
            detail="Independently verified WeMilktea fields"
          />
          <DiagramNode
            title="Explicit publication"
            detail="Published rows become visible to the public app"
          />
        </div>
      </div>
    </DiagramFrame>
  )
}

function TrustBoundaryDiagram() {
  return (
    <DiagramFrame
      label="WeMilktea authentication and authorization boundaries"
      caption="Authentication identifies a session. The private admin_users allow-list, is_admin(), and RLS decide whether that session can operate on protected data."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="border-border border-t pt-4">
          <p className="font-mono text-xs">PUBLIC</p>
          <div className="mt-4 grid gap-3">
            <DiagramNode title="Public Web" />
            <DownArrow />
            <DiagramNode
              title="Anon Supabase client"
              detail="Published catalogue reads only"
            />
            <DownArrow />
            <DiagramNode title="RLS" />
          </div>
        </div>
        <div className="border-border border-t pt-4">
          <p className="font-mono text-xs">AUTHENTICATED · ADMIN</p>
          <div className="mt-4 grid gap-3">
            <DiagramNode title="Admin Web" />
            <DownArrow />
            <DiagramNode
              title="Supabase Auth"
              detail="Email/password session"
            />
            <DownArrow />
            <DiagramNode
              title="admin_users allow-list"
              detail="is_admin() + RLS"
            />
          </div>
        </div>
        <div className="border-border border-t pt-4">
          <p className="font-mono text-xs">SERVER ONLY</p>
          <div className="mt-4 grid gap-3">
            <DiagramNode title="Edge Functions" />
            <DownArrow />
            <DiagramNode title="Google Places + R2 credentials" />
            <DownArrow />
            <DiagramNode title="Privileged orchestration" />
          </div>
        </div>
      </div>
    </DiagramFrame>
  )
}

function ImageStorageDiagram() {
  return (
    <DiagramFrame
      label="WeMilktea image upload and metadata flow"
      caption="R2 stores binary objects while PostgreSQL stores metadata, provenance and relationships. The workflow keeps the working canonical reference if later cleanup fails."
    >
      <div className="grid gap-3 lg:grid-cols-5 lg:items-center">
        <DiagramNode title="Admin browser" detail="Authenticated request" />
        <ResponsiveArrow horizontalAt="lg" />
        <DiagramNode
          eyebrow="IMAGE-STORAGE EDGE FUNCTION"
          title="Presigned PUT URL"
          detail="Short-lived, content-type-bound"
        />
        <ResponsiveArrow horizontalAt="lg" />
        <DiagramNode title="Cloudflare R2" detail="Image bytes only" />
      </div>
      <div className="my-6 border-t pt-6">
        <div className="mx-auto grid max-w-3xl gap-3 lg:grid-cols-3 lg:items-center">
          <DiagramNode title="Verify object" detail="Type, size and key" />
          <ResponsiveArrow horizontalAt="lg" />
          <DiagramNode title="Admin RPC" detail="Metadata + relationship" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <DiagramNode
          title="PostgreSQL"
          detail="image_assets + location_images / product_images"
        />
        <DiagramNode
          title="Cleanup old object"
          detail="Follow-up warning if R2 is unavailable"
        />
      </div>
    </DiagramFrame>
  )
}

function DeploymentDiagram() {
  return (
    <DiagramFrame
      label="WeMilktea production deployment topology"
      caption="Frontend assets, Edge Functions and database migrations are deliberately separate release boundaries."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <DiagramNode
          eyebrow="CLOUDFLARE WORKER"
          title="Public Web"
          detail="Static Assets SPA"
        />
        <DiagramNode
          eyebrow="CLOUDFLARE WORKER"
          title="Admin Web"
          detail="Static Assets SPA"
        />
        <DiagramNode
          eyebrow="SUPABASE CLOUD"
          title="PostgreSQL + PostGIS"
          detail="Auth + RLS"
        />
        <DiagramNode
          eyebrow="SUPABASE EDGE"
          title="Privileged functions"
          detail="Google Places + R2 operations"
        />
      </div>
      <div className="border-border mt-6 border-t pt-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <DiagramNode
            eyebrow="CLOUDFLARE"
            title="R2"
            detail="Owned/permitted image bytes"
          />
          <DiagramNode
            eyebrow="GOOGLE"
            title="Maps JavaScript API"
            detail="Public map rendering with a browser-restricted key"
          />
        </div>
      </div>
    </DiagramFrame>
  )
}

const requirements = [
  'Public discovery',
  'Internal catalogue operations',
  'Store/product relationships',
  'Geographic queries',
  'Controlled publication',
  'Third-party enrichment',
  'Image management',
  'Independent deployments',
]

const tradeOffs = [
  [
    'Managed backend vs custom service',
    'Supabase reduces infrastructure surface area, while its Auth, RLS and Edge Function model becomes an important platform dependency.',
  ],
  [
    'One repo vs separate repos',
    'The monorepo keeps shared domain context together; separate applications and deployments preserve runtime boundaries.',
  ],
  [
    'Discovery vs canonical ownership',
    'Google Places improves discovery, but reviewed WeMilktea records remain owned by the product.',
  ],
  [
    'R2 + PostgreSQL',
    'Separating binary storage from metadata is clean, but there is no distributed transaction across both systems.',
  ],
]

const lessons = [
  [
    'Ownership matters more than integration',
    'Connecting an API is easy. Deciding which system owns the resulting data is the harder architectural decision.',
  ],
  [
    'Security boundaries belong below the UI',
    'An Admin screen is not authorization. The real boundary needs to survive a modified browser.',
  ],
  [
    'Simple architecture can still have strong boundaries',
    'WeMilktea does not need microservices to separate public reads, privileged operations, external providers and deployments.',
  ],
]

export function WemilkteaSystemDesignCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content')

    document.title = 'WeMilktea System Design — Harry Lu'
    description?.setAttribute(
      'content',
      'Behind the cup: the system design decisions that structure WeMilktea data, trust boundaries, integrations and deployment.',
    )

    return () => {
      document.title = previousTitle
      if (description && previousDescription) {
        description.setAttribute('content', previousDescription)
      }
    }
  }, [])

  return (
    <main>
      <header className="bg-background/95 border-border sticky top-0 z-40 border-b backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8 sm:py-4 lg:px-10">
          <Link
            to="/#projects"
            className="text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-wide transition-colors"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-4"
              strokeWidth={1.5}
            />
            Projects
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <CaseStudySwitcher active="system" />

      <section className="mx-auto w-full max-w-7xl px-5 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-24 lg:px-10 lg:pb-32">
        <div className="mt-20 max-w-4xl sm:mt-28">
          <p className="text-muted-foreground font-mono text-xs tracking-wide">
            CASE STUDY 02 · SYSTEM DESIGN
          </p>
          <h1 className="mt-6 text-[clamp(3.5rem,5vw,5rem)] leading-[0.92] tracking-[-0.055em] text-balance">
            Behind the WeMilktea.
          </h1>
          <p className="mt-8 max-w-3xl text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.12] tracking-[-0.035em]">
            Designing the system that powers WeMilktea.
          </p>
          <div className="text-muted-foreground mt-8 max-w-2xl space-y-5 text-lg leading-relaxed">
            <p>
              As WeMilktea grew beyond a simple directory, the challenge was no
              longer just presenting stores and drinks.
            </p>
            <p>
              The new application needed clear ownership of catalogue data, safe
              admin workflows, geographic discovery, image storage, third-party
              integrations and deployment boundaries — without turning a
              personal product into an over-engineered distributed system.
            </p>
          </div>
        </div>
      </section>

      <nav
        aria-label="System Design contents"
        className="border-border border-b"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-12 lg:gap-8 lg:px-10">
          <p className="text-muted-foreground font-mono text-xs tracking-wide lg:col-span-3">
            Contents
          </p>
          <ol className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {[
              ['01', 'Context', '#context'],
              ['02', 'Architecture at a glance', '#architecture'],
              ['03', 'Choosing the boundaries', '#boundaries'],
              ['04', 'Data model', '#data-model'],
              ['05', 'Trusted store discovery', '#store-discovery'],
              ['06', 'Authentication & authorization', '#authorization'],
              ['07', 'Image storage', '#image-storage'],
              ['08', 'Deployment boundaries', '#deployment'],
              ['09', 'Trade-offs', '#trade-offs'],
              ['10', 'Outcome', '#outcome'],
              ['11', 'What I learned', '#what-i-learned'],
            ].map(([number, label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center gap-3 transition-colors"
                >
                  <span className="font-mono text-xs">{number}</span>
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <section
          id="context"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="context-title"
            number="01"
            title="The product gained new responsibilities."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              THE QUESTION
            </p>
            <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-5">
              <p>
                The original product could present a small directory. The new
                WeMilktea needed to operate a growing catalogue with public
                discovery, internal operations and trusted publication.
              </p>
              <p>
                The system-design question became: how do you give a growing
                product clean boundaries, trusted data and safe integrations
                without over-engineering it?
              </p>
              <ul className="border-border grid gap-x-8 gap-y-4 border-t pt-6 text-base sm:grid-cols-2">
                {requirements.map((requirement) => (
                  <li key={requirement} className="border-border border-b pb-4">
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="architecture"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="architecture-title"
            number="02"
            title="Architecture at a glance"
          />
          <div className="mt-14 md:ml-[25%] md:max-w-4xl">
            <p className="max-w-3xl text-lg leading-relaxed">
              Public Web and Admin are separate React applications in one Bun
              workspace. Supabase is the data and authorization boundary;
              server-side functions are reserved for secret-bearing work.
            </p>
            <ArchitectureDiagram />
            <p className="text-muted-foreground mt-8 max-w-3xl text-lg leading-relaxed">
              Google Places helps discover a store. It does not become the
              WeMilktea database. PostgreSQL owns the reviewed catalogue, while
              R2 owns permitted image bytes and Supabase stores their metadata.
            </p>
          </div>
        </section>

        <section
          id="boundaries"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="boundaries-title"
            number="03"
            title="Choosing the boundaries"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              ONE REPOSITORY
            </p>
            <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-5">
              <p>
                A shared Bun-workspace monorepo keeps domain contracts,
                validation and configuration close to both applications. The
                runtime boundary is still explicit: Public Web and Admin have
                different audiences, access levels, UI responsibilities and
                deployments.
              </p>
              <p>
                This is one engineering context with separate runtime
                responsibilities — not a microservices system.
              </p>
            </div>
          </div>
          <div className="md:ml-[25%] md:max-w-4xl">
            <MonorepoDiagram />
          </div>
        </section>

        <section
          id="data-model"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="data-model-title"
            number="04"
            title="Designing the data model around ownership"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              CANONICAL DATA
            </p>
            <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-5">
              <p>
                A brand is the business. A location is one physical branch. A
                product is a curated drink owned by the brand, not a copy made
                for every branch.
              </p>
              <p>
                The{' '}
                <code className="font-mono text-base break-words">
                  location_products
                </code>{' '}
                relationship carries availability, local price, provenance and
                verification time. That lets one drink connect to many stores
                without duplicating the product itself.
              </p>
            </div>
          </div>
          <div className="md:ml-[25%] md:max-w-4xl">
            <DataModelDiagram />
            <div className="border-border mt-10 grid gap-6 border-t pt-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs">USER EXPERIENCE</p>
                <p className="mt-3 text-2xl leading-tight tracking-[-0.035em]">
                  Drink → Where to get it → Store
                </p>
              </div>
              <div>
                <p className="font-mono text-xs">SYSTEM RELATIONSHIP</p>
                <p className="mt-3 text-2xl leading-tight tracking-[-0.035em]">
                  products ↔ location_products ↔ locations
                </p>
              </div>
            </div>
          </div>
          <p className="text-muted-foreground mt-10 text-lg leading-relaxed md:ml-[25%] md:max-w-3xl">
            Geographic behaviour is modeled with PostGIS{' '}
            <code className="font-mono text-base break-words">
              geography(Point, 4326)
            </code>{' '}
            rather than duplicated latitude and longitude fields. That supports
            nearby discovery, distance-aware sorting and duplicate assistance.
          </p>
        </section>

        <section
          id="store-discovery"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="store-discovery-title"
            number="05"
            title="Making external discovery safe"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              GOOGLE PLACES
            </p>
            <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-5">
              <p>
                A naive implementation would send a Google result directly into
                the locations table. WeMilktea deliberately inserts a candidate
                layer between external discovery and canonical state.
              </p>
              <p>
                The authorized Admin invokes the{' '}
                <code className="font-mono text-base break-words">
                  store-discovery
                </code>{' '}
                Edge Function. Results are normalized and deduplicated into
                durable candidates and observations, then a human can approve,
                merge or reject them.
              </p>
            </div>
          </div>
          <div className="md:ml-[25%] md:max-w-4xl">
            <DiscoveryDiagram />
            <div className="border-border mt-10 grid gap-6 border-t pt-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs">REFERENCE DATA</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  <code className="font-mono text-sm break-words">
                    candidate-google-detail
                  </code>{' '}
                  retrieves Place Details on demand with attribution. The
                  response is transient and read-only; it is not copied into a
                  candidate record.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs">TRANSACTIONAL RESOLUTION</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  <code className="font-mono text-sm break-words">
                    approve_store_candidate
                  </code>
                  ,{' '}
                  <code className="font-mono text-sm break-words">
                    merge_store_candidate
                  </code>{' '}
                  and{' '}
                  <code className="font-mono text-sm break-words">
                    reject_store_candidate
                  </code>{' '}
                  lock the candidate and complete one admin-only state change.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="authorization"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="authorization-title"
            number="06"
            title="Authentication is not authorization"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              TRUST BOUNDARIES
            </p>
            <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-5">
              <p>
                Supabase Auth establishes an email/password session. It does not
                make that user an administrator. The private{' '}
                <code className="font-mono text-base break-words">
                  admin_users
                </code>{' '}
                allow-list,{' '}
                <code className="font-mono text-base break-words">
                  is_admin()
                </code>{' '}
                and Row Level Security decide whether the session can operate on
                protected data.
              </p>
              <p>
                The Admin UI can choose login or unauthorized states, but a
                modified browser still cannot bypass the database policies.
              </p>
            </div>
          </div>
          <div className="md:ml-[25%] md:max-w-4xl">
            <TrustBoundaryDiagram />
            <p className="text-muted-foreground mt-8 text-lg leading-relaxed">
              The public app reads only published canonical catalogue rows. It
              cannot query candidates, discovery runs, moderation records or
              draft content under the anonymous Supabase boundary.
            </p>
          </div>
        </section>

        <section
          id="image-storage"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="image-storage-title"
            number="07"
            title="Keeping image bytes out of the database"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              R2 + POSTGRESQL
            </p>
            <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-5">
              <p>
                The browser receives a short-lived presigned upload URL from the
                authenticated{' '}
                <code className="font-mono text-base break-words">
                  image-storage
                </code>{' '}
                Edge Function. It uploads directly to R2; the function then
                verifies the object before an admin RPC stores metadata and the
                canonical relationship in PostgreSQL.
              </p>
              <p>
                R2 owns binary objects. PostgreSQL owns object keys, content
                metadata, provenance, alt text and relationships. Public code
                combines validated keys with the configured public image base
                URL; it never lists the bucket or receives R2 credentials.
              </p>
            </div>
          </div>
          <div className="md:ml-[25%] md:max-w-4xl">
            <ImageStorageDiagram />
            <div className="border-border mt-10 border-t pt-8">
              <p className="font-mono text-xs">THE HONEST TRADE-OFF</p>
              <p className="mt-4 max-w-3xl text-2xl leading-tight tracking-[-0.035em]">
                R2 and PostgreSQL do not share a distributed transaction. The
                workflow updates the working canonical reference first, then
                cleans up the old object. A cleanup failure can leave an orphan
                that needs follow-up, but it does not delete the working image
                relationship early.
              </p>
            </div>
          </div>
        </section>

        <section
          id="deployment"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="deployment-title"
            number="08"
            title="Deployment boundaries matter more than CI detail"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              RELEASE TOPOLOGY
            </p>
            <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-5">
              <p>
                Public Web and Admin deploy independently as Cloudflare Workers
                Static Assets applications. Supabase owns database migrations,
                Auth, RLS and Edge Functions. R2 owns image bytes. Google Maps
                renders public maps with a browser-restricted key.
              </p>
              <p>
                Frontend deployment, Edge Function deployment and database
                migration are separate release boundaries. A successful frontend
                build does not imply that a migration or privileged function is
                live.
              </p>
            </div>
          </div>
          <div className="md:ml-[25%] md:max-w-4xl">
            <DeploymentDiagram />
            <div className="border-border mt-10 grid gap-6 border-t pt-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-xs">BROWSER-SAFE</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  Supabase URL, anon/publishable key, public R2 base URL and a
                  browser-restricted Maps key.
                </p>
              </div>
              <div>
                <p className="font-mono text-xs">SERVER-ONLY</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  Google Places key, R2 credentials and service-role access
                  where a trusted function requires it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="trade-offs"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="trade-offs-title"
            number="09"
            title="Trade-offs kept visible"
          />
          <div className="mt-14 md:ml-[25%] md:max-w-3xl">
            <ul className="border-border divide-border divide-y border-t">
              {tradeOffs.map(([title, copy]) => (
                <li
                  key={title}
                  className="grid gap-3 py-6 sm:grid-cols-3 sm:gap-8"
                >
                  <h3 className="text-xl leading-tight tracking-[-0.02em]">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed sm:col-span-2">
                    {copy}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="outcome"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="outcome-title"
            number="10"
            title="A system that can grow without making trust implicit"
          />
          <div className="mt-14 md:ml-[25%] md:max-w-3xl">
            <p className="text-2xl leading-tight tracking-[-0.035em] sm:text-3xl">
              The result is not a more complicated system for its own sake. It
              is a set of boundaries that keeps external data, public
              submissions and browser credentials from quietly becoming trusted
              application state.
            </p>
            <p className="text-muted-foreground mt-8 text-lg leading-relaxed">
              Public discovery stays simple, while the work required to verify,
              manage and publish that data remains behind explicit operational
              boundaries.
            </p>
            <ul className="border-border mt-10 grid gap-x-8 gap-y-4 border-t pt-6 text-base sm:grid-cols-2">
              {[
                'Reviewed canonical catalogue data',
                'Geographic store discovery',
                'Safe external enrichment',
                'Controlled publication',
                'Secure admin-only operations',
                'Independent public/admin deployments',
              ].map((item) => (
                <li key={item} className="border-border border-b pb-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="what-i-learned"
          className="scroll-mt-24 py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="what-i-learned-title"
            number="11"
            title="What I learned"
          />
          <ol className="border-border mt-14 border-t md:ml-[25%] md:max-w-3xl">
            {lessons.map(([title, copy], index) => (
              <li
                key={title}
                className="border-border grid gap-3 border-b py-6 sm:grid-cols-3 sm:gap-8"
              >
                <span className="text-muted-foreground font-mono text-xs">
                  0{index + 1}
                </span>
                <div className="sm:col-span-2">
                  <h3 className="text-xl tracking-[-0.02em]">{title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>

      <section className="border-border border-t">
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center gap-3 px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <Link
            to="/#projects"
            className="border-border hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-foreground inline-flex min-h-11 items-center gap-2 border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Back to projects
            <ArrowLeft
              aria-hidden="true"
              className="size-4"
              strokeWidth={1.5}
            />
          </Link>
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="border-border hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-foreground inline-flex min-h-11 items-center gap-2 border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Find your milk tea 🧋
            <ArrowUpRight
              aria-hidden="true"
              className="size-4"
              strokeWidth={1.5}
            />
          </a>

          <a
            href={project.links.repository}
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-foreground inline-flex min-h-11 items-center gap-2 px-2 text-sm transition-colors"
          >
            View source
            <ArrowUpRight
              aria-hidden="true"
              className="size-4"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </section>
    </main>
  )
}
