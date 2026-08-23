import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-7xl items-end px-5 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
      <section aria-labelledby="not-found-title" className="max-w-2xl">
        <p className="text-muted-foreground font-mono text-xs tracking-wide">
          404
        </p>
        <h1
          id="not-found-title"
          className="mt-6 text-5xl leading-none tracking-[-0.06em] sm:text-7xl"
        >
          Page not found.
        </h1>
        <Link
          to="/"
          className="border-border hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-foreground mt-10 inline-flex min-h-11 items-center gap-2 border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={1.5} />
          Back home
        </Link>
      </section>
    </main>
  )
}
