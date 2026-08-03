import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      className="border-border text-foreground hover:bg-muted focus-visible:outline-foreground inline-flex size-11 items-center justify-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun aria-hidden="true" className="size-4" strokeWidth={1.5} />
      ) : (
        <Moon aria-hidden="true" className="size-4" strokeWidth={1.5} />
      )}
    </button>
  )
}
