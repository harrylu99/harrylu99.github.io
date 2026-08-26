import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router'

import currentDrinks from '@/assets/projects/wemilktea/current-drinks.webp'
import currentHome from '@/assets/projects/wemilktea/current-home.webp'
import currentStores from '@/assets/projects/wemilktea/current-stores.webp'
import currentCaseStudyHero from '@/assets/projects/wemilktea/wemilktea-case-study-hero.webp'
import originalHomeDiscovery from '@/assets/projects/wemilktea/original-home-discovery.webp'
import originalDrinks from '@/assets/projects/wemilktea/comparisons/original-drinks.webp'
import originalHomeHero from '@/assets/projects/wemilktea/comparisons/original-home.webp'
import originalStores from '@/assets/projects/wemilktea/comparisons/original-stores.webp'
import { CaseStudySwitcher } from '@/components/projects/wemilktea/case-study-switcher'
import { ThemeToggle } from '@/components/theme-toggle'
import { projects } from '@/data/projects'

const project = projects[0]

type CaseStudyImage = {
  src: string
  alt: string
  caption: string
  width: number
  height: number
}

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

function Comparison({
  label,
  original,
  redesign,
}: {
  label: string
  original: CaseStudyImage
  redesign: CaseStudyImage
}) {
  return (
    <div>
      <p className="text-muted-foreground mb-5 font-mono text-xs tracking-wide">
        {label}
      </p>
      <div className="grid items-start gap-6 md:grid-cols-2">
        <figure className="min-w-0">
          <div className="border-border bg-muted p-3 sm:p-5">
            <img
              src={original.src}
              alt={original.alt}
              width={original.width}
              height={original.height}
              className="border-border block h-auto w-full border"
              loading="lazy"
            />
          </div>
          <figcaption className="text-muted-foreground mt-3 font-mono text-xs">
            <span className="text-foreground">Original</span> ·{' '}
            {original.caption}
          </figcaption>
        </figure>
        <figure className="min-w-0">
          <div className="border-border bg-muted p-3 sm:p-5">
            <img
              src={redesign.src}
              alt={redesign.alt}
              width={redesign.width}
              height={redesign.height}
              className="border-border block h-auto w-full border"
              loading="lazy"
            />
          </div>
          <figcaption className="text-muted-foreground mt-3 font-mono text-xs">
            <span className="text-foreground">Redesign</span> ·{' '}
            {redesign.caption}
          </figcaption>
        </figure>
      </div>
    </div>
  )
}

export function WemilkteaCaseStudy() {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const previousDescription = description?.getAttribute('content')

    document.title = 'WeMilktea UI/UX Redesign — Harry Lu'
    description?.setAttribute(
      'content',
      'How I redesigned WeMilktea from an early milk tea directory into a clearer, connected Auckland discovery experience.',
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

      <CaseStudySwitcher active="product" />

      <section className="mx-auto w-full max-w-7xl px-5 pt-6 pb-16 sm:px-8 sm:pt-8 sm:pb-24 lg:px-10 lg:pb-32">
        <div className="mt-20 max-w-4xl sm:mt-28">
          <p className="text-muted-foreground font-mono text-xs tracking-wide">
            PROJECT · WEMILKTEA
          </p>
          <h1 className="mt-6 text-[clamp(3.5rem,5vw,5rem)] leading-[0.92] tracking-[-0.055em] text-balance">
            WeMilktea
          </h1>
          <p className="mt-8 max-w-3xl text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.12] tracking-[-0.035em]">
            From a milk tea directory to a connected discovery experience.
          </p>
          <p className="text-muted-foreground mt-8 max-w-2xl text-lg leading-relaxed">
            I revisited the original WeMilktea experience to rethink its
            information hierarchy, navigation, responsive layouts, and key
            discovery flows — making it easier for Aucklanders to decide what to
            drink and where to get it.
          </p>
        </div>
        <img
          src={currentCaseStudyHero}
          alt="Current WeMilktea discovery experience shown across a desktop home and mobile home view."
          width={1600}
          height={900}
          className="border-border mt-16 block h-auto w-full border sm:mt-24"
        />
      </section>

      <nav aria-label="Case study contents" className="border-border border-y">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-8 sm:px-8 sm:py-10 lg:grid-cols-12 lg:gap-8 lg:px-10">
          <p className="text-muted-foreground font-mono text-xs tracking-wide lg:col-span-3">
            Contents
          </p>
          <ol className="grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:col-span-8 lg:col-start-5">
            {[
              ['01', 'Background', '#background'],
              ['02', 'Problems', '#problems'],
              ['03', 'Process', '#process'],
              ['04', 'Information architecture', '#information-architecture'],
              ['05', 'Design system', '#design-system'],
              ['06', 'Key flows', '#key-flows'],
              ['07', 'Outcome', '#outcome'],
              ['08', 'Before / after', '#before-after'],
              ['09', 'What I learned', '#what-i-learned'],
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
          id="background"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="background-title"
            number="01"
            title="Background"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              2022 → now
            </p>
            <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-5">
              <p>
                WeMilktea started in 2022 as a personal project for discovering
                milk tea stores and drinks around Auckland.
              </p>
              <p>
                The original experience had three destinations — Home, Explore,
                and Find Store. It had a distinctive visual identity and useful
                milk tea content, but its structure made it difficult to support
                the complete journey from “I want milk tea” to “What should I
                get?” and “Where can I get it?”
              </p>
            </div>
          </div>
          <figure className="mt-16 md:ml-[25%] md:max-w-3xl">
            <img
              src={originalHomeDiscovery}
              alt="Original WeMilktea homepage showing Top Pick Store, Top Drink, and a free milk tea promotion."
              width={1800}
              height={1293}
              className="border-border block h-auto w-full border"
              loading="lazy"
            />
            <figcaption className="text-muted-foreground mt-3 font-mono text-xs">
              Original Home · featured content and promotions shared one visual
              sequence
            </figcaption>
          </figure>
        </section>

        <section
          id="problems"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="problems-title"
            number="02"
            title="The audit exposed four decision gaps."
          />
          <div className="mt-14 md:ml-[25%] md:max-w-3xl">
            <ul className="border-border divide-border divide-y border-t">
              {[
                [
                  'Discovery was fragmented',
                  'The original navigation exposed Explore and Find Store as separate destinations. Someone could browse a drink or browse a store, but the interface did not connect those decisions into one journey.',
                ],
                [
                  'The information architecture followed content categories',
                  'Find Store was organised around regions such as Auckland CBD, while Explore was organised around brands such as YiFang. Useful categories became almost the only discovery mechanisms.',
                ],
                [
                  'Homepage hierarchy prioritised identity and promotion',
                  'Top Pick Store, Top Drink, and Free MilkTea gave the homepage personality, but branding, discovery, and promotion competed for the first clear action.',
                ],
                [
                  'Decision context was limited',
                  'The old store cards made browsing possible, but the redesign needed richer context — search, Near Me, map, location, detail, and directions — to help someone choose where to go.',
                ],
              ].map(([title, copy]) => (
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
          id="process"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="process-title"
            number="03"
            title="A focused process for making the product easier to use."
          />
          <ol className="border-border mt-14 grid border-t sm:grid-cols-5">
            {[
              ['01', 'Audit'],
              ['02', 'Reframe the information architecture'],
              ['03', 'Establish the visual system'],
              ['04', 'Rebuild the key discovery flows'],
              ['05', 'Validate across breakpoints'],
            ].map(([number, label]) => (
              <li
                key={number}
                className="border-border border-b py-6 sm:border-r sm:border-b-0 sm:px-5 sm:first:pl-0 sm:last:border-r-0"
              >
                <span className="text-muted-foreground font-mono text-xs">
                  {number}
                </span>
                <p className="mt-5 max-w-[12rem] text-lg leading-tight tracking-[-0.02em]">
                  {label}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section
          id="information-architecture"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="information-architecture-title"
            number="04"
            title="Reframing the information architecture"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              From sections to decisions
            </p>
            <div className="space-y-6 text-lg leading-relaxed md:col-span-7 md:col-start-5">
              <p>
                The original product was organised around content silos: Home,
                Explore, then brand-grouped drinks or region-grouped stores. The
                redesign reorganised discovery around clearer user intentions
                and connected objects.
              </p>
              <p>
                The important change was not adding routes. It was making the
                relationship between a drink, its availability, a store, and a
                person&apos;s next action visible.
              </p>
              <div className="grid gap-6 border-t pt-6 sm:grid-cols-2">
                <div>
                  <p className="text-muted-foreground font-mono text-xs">
                    Original
                  </p>
                  <div className="mt-4 space-y-3 text-base">
                    <p className="border-border border-b pb-3">Home</p>
                    <p className="border-border border-b pb-3">
                      Explore → Brand → Drinks
                    </p>
                    <p className="border-border border-b pb-3">
                      Find Store → Region → Stores
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground font-mono text-xs">
                    Redesign
                  </p>
                  <div className="mt-4 space-y-3 text-base">
                    <p className="border-border border-b pb-3">Home</p>
                    <p className="border-border border-b pb-3">
                      Search → Stores ↔ Store Detail
                    </p>
                    <p className="border-border border-b pb-3">
                      Drinks ↔ Drink Detail → Available at
                    </p>
                    <p className="border-border border-b pb-3">
                      Picker → Result
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="design-system"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="design-system-title"
            number="05"
            title="Creating a calmer visual system"
          />
          <div className="mt-14 grid gap-8 md:grid-cols-12 md:gap-8">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              Keep the personality. Make the decision easier.
            </p>
            <div className="space-y-8 md:col-span-7 md:col-start-5">
              <p className="text-2xl leading-tight tracking-[-0.035em] sm:text-3xl">
                The redesign moved toward roughly 80% calm editorial and 20%
                delightful surprise — a quieter base for useful information.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The original product expressed personality through powder blue,
                navy, custom display type, and campaign-like compositions. The
                redesign moved that personality into content photography,
                microcopy, and small playful moments: a warm neutral canvas,
                grounded green, consistent cards, shared rails, restrained
                borders, and clearer active and focus states.
              </p>
              <ul className="border-border grid gap-x-8 gap-y-4 border-t pt-6 text-sm sm:grid-cols-2">
                {[
                  'Clearer typography hierarchy',
                  'Reusable cards and controls',
                  'Responsive spacing and rails',
                  'Visible active and focus states',
                ].map((item) => (
                  <li key={item} className="border-border border-b pb-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="key-flows"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="key-flows-title"
            number="06"
            title="Making discovery feel connected"
          />
          <div className="mt-14 grid gap-20">
            <article className="grid gap-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-mono text-xs tracking-wide">
                  01 · HOME
                </p>
                <h3 className="mt-5 text-2xl tracking-[-0.035em]">
                  From “what is featured?” to “what should I drink?”
                </h3>
              </div>
              <div className="md:col-span-9 md:col-start-4">
                <Comparison
                  label="Home"
                  original={{
                    src: originalHomeHero,
                    alt: 'Original 2022 WeMilktea Home hero with WE LOVE MILKTEA campaign typography and a promotional visual.',
                    caption: '2022',
                    width: 1280,
                    height: 720,
                  }}
                  redesign={{
                    src: currentHome,
                    alt: 'Current WeMilktea Home with a discovery-first hero and Pick for me action.',
                    caption: 'Current',
                    width: 1280,
                    height: 720,
                  }}
                />
                <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
                  The original Home answered what WeMilktea was, what was
                  featured, and what promotion was running. The redesign more
                  quickly supports “What should I drink?”, “Where should I go?”,
                  or “Can&apos;t decide? Pick for me.”
                </p>
              </div>
            </article>

            <article className="grid gap-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-mono text-xs tracking-wide">
                  02 · STORES
                </p>
                <h3 className="mt-5 text-2xl tracking-[-0.035em]">
                  From region cards to location-aware decisions
                </h3>
              </div>
              <div className="md:col-span-9 md:col-start-4">
                <Comparison
                  label="Stores"
                  original={{
                    src: originalStores,
                    alt: 'Original 2022 Find Store page organised around Auckland CBD and store cards.',
                    caption: '2022',
                    width: 1280,
                    height: 720,
                  }}
                  redesign={{
                    src: currentStores,
                    alt: 'Current WeMilktea Stores page showing search, filters, a store list, and the Auckland map.',
                    caption: 'Current',
                    width: 1280,
                    height: 720,
                  }}
                />
                <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
                  The old flow moved from region to store cards. The current
                  flow combines search, Near Me, filters, a coordinated list and
                  Auckland map, Store Detail, and directions so location becomes
                  useful decision context.
                </p>
              </div>
            </article>

            <article className="grid gap-8 md:grid-cols-12 md:gap-8">
              <div className="md:col-span-3">
                <p className="text-muted-foreground font-mono text-xs tracking-wide">
                  03 · DRINKS
                </p>
                <h3 className="mt-5 text-2xl tracking-[-0.035em]">
                  From brand groups to a connected catalogue
                </h3>
              </div>
              <div className="md:col-span-9 md:col-start-4">
                <Comparison
                  label="Drinks"
                  original={{
                    src: originalDrinks,
                    alt: 'Original 2022 Explore page grouped under YiFang with drink cards and prices.',
                    caption: '2022',
                    width: 1280,
                    height: 720,
                  }}
                  redesign={{
                    src: currentDrinks,
                    alt: 'Current WeMilktea Drinks page showing search, category filters, and a responsive catalogue.',
                    caption: 'Current',
                    width: 1280,
                    height: 720,
                  }}
                />
                <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed">
                  Explore became a searchable, filterable catalogue with real
                  product imagery, detail pages, availability relationships, and
                  pagination to support a larger collection.
                </p>
              </div>
            </article>
          </div>
          <div className="border-border mt-20 grid gap-8 border-t pt-10 md:grid-cols-12">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              DRINK ↔ STORE
            </p>
            <div className="grid gap-6 text-2xl leading-tight tracking-[-0.035em] sm:grid-cols-2 sm:text-3xl md:col-span-7 md:col-start-5">
              <div>
                <p>Drink</p>
                <p className="text-muted-foreground mt-2">↓ Where to get it</p>
                <p className="mt-2">Store</p>
              </div>
              <div>
                <p>Store</p>
                <p className="text-muted-foreground mt-2">↓ Available drinks</p>
                <p className="mt-2">Drink</p>
              </div>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed md:col-span-7 md:col-start-5">
              Instead of treating drinks and stores as two separate catalogues,
              the redesign made their relationship part of the product
              experience.
            </p>
          </div>
          <div className="border-border mt-16 grid gap-8 border-t pt-10 md:grid-cols-12">
            <p className="text-muted-foreground font-mono text-xs tracking-wide md:col-span-3">
              OTHER IMPROVEMENTS
            </p>
            <ul className="grid gap-4 text-lg leading-relaxed sm:grid-cols-2 md:col-span-7 md:col-start-5">
              {[
                'Mobile-first responsive behaviour',
                'Map and list composition on desktop',
                'Pagination for a growing drinks catalogue',
                'Consistent image, card, and CTA treatment',
                'Clearer search and microcopy',
                'Keyboard-visible interaction states',
              ].map((item) => (
                <li key={item} className="border-border border-b pb-4">
                  {item}
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
            number="07"
            title="A clearer foundation for deciding what to drink and where to get it."
          />
          <p className="mt-14 max-w-3xl text-2xl leading-tight tracking-[-0.035em] sm:text-3xl md:ml-[25%]">
            The redesign turned WeMilktea from three largely separate browsing
            pages into a connected discovery experience. Users can now start
            from a drink, a store, a search, or a recommendation and move
            naturally toward the information needed to make a decision.
          </p>
          <ul className="border-border mt-12 grid gap-x-8 gap-y-4 border-t pt-6 text-lg leading-relaxed sm:grid-cols-2 md:ml-[25%] md:max-w-3xl">
            {[
              'Connected Drink ↔ Store journeys',
              'Location-aware store discovery',
              'Searchable and filterable catalogue',
              'Dedicated detail experiences',
              'Responsive mobile, tablet, and desktop system',
              'Catalogue structure ready for substantially more content',
            ].map((item) => (
              <li key={item} className="border-border border-b pb-4">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="before-after"
          className="border-border scroll-mt-24 border-b py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="before-after-title"
            number="08"
            title="Before / after"
          />
          <div className="mt-14 grid gap-16">
            <Comparison
              label="Home"
              original={{
                src: originalHomeHero,
                alt: 'Original 2022 WeMilktea Home hero with WE LOVE MILKTEA campaign typography and a promotional visual.',
                caption: '2022',
                width: 1280,
                height: 720,
              }}
              redesign={{
                src: currentHome,
                alt: 'Current WeMilktea Home with a discovery-first hero and Pick for me action.',
                caption: 'Current',
                width: 1280,
                height: 720,
              }}
            />
            <Comparison
              label="Stores"
              original={{
                src: originalStores,
                alt: 'Original 2022 Find Store page organised around Auckland CBD and store cards.',
                caption: '2022',
                width: 1280,
                height: 720,
              }}
              redesign={{
                src: currentStores,
                alt: 'Current WeMilktea Stores page showing search, filters, a store list, and the Auckland map.',
                caption: 'Current',
                width: 1280,
                height: 720,
              }}
            />
            <Comparison
              label="Drinks"
              original={{
                src: originalDrinks,
                alt: 'Original 2022 Explore page grouped under YiFang with drink cards and prices.',
                caption: '2022',
                width: 1280,
                height: 720,
              }}
              redesign={{
                src: currentDrinks,
                alt: 'Current WeMilktea Drinks page showing search, category filters, and a responsive catalogue.',
                caption: 'Current',
                width: 1280,
                height: 720,
              }}
            />
          </div>
        </section>

        <section
          id="what-i-learned"
          className="scroll-mt-24 py-24 sm:py-36 lg:py-44"
        >
          <SectionHeading
            id="what-i-learned-title"
            number="09"
            title="What I learned"
          />
          <ol className="border-border mt-14 border-t md:ml-[25%] md:max-w-3xl">
            {[
              [
                'Redesign the journey before the interface',
                'The most important change was reorganising how stores and drinks connect, not changing the colour palette.',
              ],
              [
                'Information relationships are UX',
                'Showing where a drink is available makes the drink page more useful; showing drinks at a store makes the store page more useful.',
              ],
              [
                'Responsive design changes priorities',
                'Desktop can use map/list compositions and larger catalogues, while mobile needs tighter hierarchy and contextual actions.',
              ],
            ].map(([title, copy], index) => (
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
