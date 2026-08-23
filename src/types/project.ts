export interface ProjectImage {
  src: string
  alt: string
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
