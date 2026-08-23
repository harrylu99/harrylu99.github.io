import { useEffect } from 'react'
import { useLocation } from 'react-router'

import { AboutSection } from '@/components/home/about-section'
import { ContactSection } from '@/components/home/contact-section'
import { Hero } from '@/components/home/hero'
import { ProjectsSection } from '@/components/home/projects-section'

function useHashScroll() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/' || !hash) return

    const target = document.getElementById(decodeURIComponent(hash.slice(1)))
    if (!target) return

    const frame = window.requestAnimationFrame(() => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [hash, pathname])
}

export function HomePage() {
  useHashScroll()

  return (
    <main>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
