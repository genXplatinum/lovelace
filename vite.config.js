import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// When building on GitHub Actions, serve under the repo name so assets resolve at
// https://<user>.github.io/<repo>/. User/org sites (<name>.github.io) and every other
// host (local dev, Vercel, Netlify, Hostinger) stay at the root "/".
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const base =
  process.env.GITHUB_ACTIONS && repo && !repo.endsWith('.github.io')
    ? `/${repo}/`
    : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
