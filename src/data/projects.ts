import heroImage from '@/assets/projects/wemilktea/wemilktea-project-cover.webp'
import type { Project } from '@/types/project'

export const projects = [
  {
    slug: 'wemilktea',
    title: 'WeMilktea',
    summary:
      'A web application helping Aucklanders discover what to drink and where to get it — from milk tea to matcha, you will always find your favourite.',
    description: 'Auckland milktea discovery',
    technologies: ['React', 'TypeScript', 'Supabase', 'Cloudflare'],
    heroImage: {
      src: heroImage,
      alt: 'WeMilktea product cover showing the desktop home, stores map, drinks catalogue and mobile home experience.',
    },
    links: {
      live: 'https://web.wemilkteanz.workers.dev/',
      repository: 'https://github.com/harrylu99/wemilktea',
    },
  },
] as const satisfies readonly Project[]
