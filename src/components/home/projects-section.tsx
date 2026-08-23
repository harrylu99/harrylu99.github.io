import { ProjectCard } from '@/components/projects/project-card'
import { projects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="border-border mx-auto w-full max-w-7xl border-t px-5 py-24 sm:px-8 sm:py-36 lg:px-10 lg:py-52"
    >
      <div className="mb-10 flex items-baseline justify-between gap-6 sm:mb-12">
        <h2
          id="projects-title"
          className="text-muted-foreground font-mono text-xs tracking-wide"
        >
          Projects
        </h2>
        <p className="text-muted-foreground font-mono text-xs tracking-wide">
          01
        </p>
      </div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-6 lg:col-start-4">
          <ProjectCard project={projects[0]} />
        </div>
      </div>
    </section>
  )
}
