import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

import type { Project } from '@/types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group border-border bg-background hover:border-foreground focus-within:border-foreground border transition-colors">
      <div className="border-border bg-muted aspect-[16/9] overflow-hidden border-b">
        <img
          src={project.heroImage.src}
          alt={project.heroImage.alt}
          width={1280}
          height={720}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01] motion-reduce:transition-none"
          loading="lazy"
        />
      </div>
      <div className="p-5 sm:p-8">
        <p className="text-muted-foreground font-mono text-xs tracking-wide">
          {project.title}
        </p>
        <h3 className="mt-3 text-3xl leading-none tracking-[-0.055em] sm:text-4xl">
          {project.description}
        </h3>
        <p className="text-muted-foreground mt-6 max-w-prose text-lg leading-relaxed">
          {project.summary}
        </p>
        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label={`Technologies used in ${project.title}`}
        >
          {project.technologies.map((technology) => (
            <li
              key={technology}
              className="border-border text-muted-foreground border px-2 py-1 font-mono text-[0.6875rem] tracking-wide"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-3">
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
          <Link
            to={`/projects/${project.slug}`}
            className="border-border hover:border-foreground hover:bg-foreground hover:text-background focus-visible:outline-foreground inline-flex min-h-11 items-center gap-2 border px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Case study
            <ArrowRight
              aria-hidden="true"
              className="size-4"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>
    </article>
  )
}
