import { useEffect, useRef } from 'react'
import { Route, Routes, useLocation } from 'react-router'

import { HomePage } from '@/components/home/home-page'
import { WemilkteaCaseStudy } from '@/components/projects/wemilktea/wemilktea-case-study'
import { WemilkteaSystemDesignCaseStudy } from '@/components/projects/wemilktea/system-design-case-study'
import { NotFoundPage } from '@/pages/not-found-page'

function RouteScroll() {
  const { hash, pathname } = useLocation()
  const previousPathname = useRef(pathname)

  useEffect(() => {
    if (previousPathname.current === pathname) return

    previousPathname.current = pathname

    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }, [hash, pathname])

  return null
}

function App() {
  return (
    <>
      <RouteScroll />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/wemilktea" element={<WemilkteaCaseStudy />} />
        <Route
          path="/projects/wemilktea/system-design"
          element={<WemilkteaSystemDesignCaseStudy />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
