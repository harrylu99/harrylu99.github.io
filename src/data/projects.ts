import heroImageDark from '@/assets/projects/wemilktea/wemilktea-cover-dark.webp'
import heroImageLight from '@/assets/projects/wemilktea/wemilktea-cover-light.webp'
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
      lightSrc: heroImageLight,
      darkSrc: heroImageDark,
      alt: 'WeMilktea responsive product overview.',
      width: 2560,
      height: 1600,
    },
    links: {
      live: 'https://web.wemilkteanz.workers.dev/',
      repository: 'https://github.com/harrylu99/wemilktea',
    },
  },
] as const satisfies readonly Project[]
