import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const env = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env ?? {}

// Static hosts serve only the client. The Cloudflare plugin (dist/client +
// dist/portfolio) is kept for the Freebuff Sites build in deploy.json.
const staticHost = Boolean(env.VERCEL || env.GITHUB_PAGES)

// GitHub Pages project sites are served from /<repo>/, everything else from /.
const base = env.GITHUB_PAGES ? '/Portfolio2/' : '/'

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), ...(staticHost ? [] : [cloudflare()])],
  server: { port: 5173, strictPort: false },
})
