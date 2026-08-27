import { useTheme } from 'next-themes'

import { cn } from '@/lib/utils'

interface ThemeImageProps {
  lightSrc: string
  darkSrc: string
  alt: string
  width: number
  height: number
  className?: string
  loading?: 'eager' | 'lazy'
}

export function ThemeImage({
  lightSrc,
  darkSrc,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
}: ThemeImageProps) {
  const { resolvedTheme } = useTheme()
  const isResolved = resolvedTheme !== undefined
  const src = isResolved
    ? resolvedTheme === 'dark'
      ? darkSrc
      : lightSrc
    : undefined

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      className={cn(!isResolved && 'invisible', className)}
    />
  )
}
