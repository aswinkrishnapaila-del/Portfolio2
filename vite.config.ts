import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vercel only serves the static client. The Cloudflare plugin (dist/client +
// dist/portfolio) is kept for the Freebuff Sites build in deploy.json.
const onVercel = Boolean(
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env?.VERCEL,
)

export default defineConfig({
  plugins: [react(), tailwindcss(), ...(onVercel ? [] : [cloudflare()])],
  server: { port: 5173, strictPort: false },
})
