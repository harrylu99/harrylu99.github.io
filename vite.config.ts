import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const githubPagesBase =
  process.env.GITHUB_ACTIONS === 'true' && repositoryName
    ? repositoryName.endsWith('.github.io')
      ? '/'
      : `/${repositoryName}/`
    : '/'

export default defineConfig({
  // A manual base path takes precedence for custom domains or preview deployments.
  base: process.env.VITE_BASE_PATH ?? githubPagesBase,
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(fileURLToPath(new URL('.', import.meta.url)), 'src'),
    },
  },
})
