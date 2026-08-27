export interface ProjectImage {
  lightSrc: string
  darkSrc: string
  alt: string
  width: number
  height: number
}

export interface ProjectLinks {
  live: string
  repository: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  technologies: readonly string[]
  heroImage: ProjectImage
  links: ProjectLinks
}
