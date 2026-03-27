@AGENTS.md

## Ethnic Petal — Project Context

**Store:** Ethnic Petal — Premium South Asian designer dresses for girls and women
**Live URL:** https://ethnic-petal.vercel.app
**GitHub:** https://github.com/favasptcr/ethnic-petal
**Stack:** Next.js 16 (App Router) · Tailwind CSS v4 · TypeScript · Vercel

### Pages
- `/` — Homepage
- `/collections/women` — Women's collection with filters
- `/collections/girls` — Girls' collection with filters
- `/products/[id]` — Product detail page
- `/wishlist` — Wishlist page
- `/checkout` — 3-step checkout
- `/about` — About page

### Key files
- `lib/products.ts` — All product data (women IDs 1-12, girls IDs 101-110)
- `lib/design-system.ts` — Design tokens (colors, typography, spacing)
- `context/CartContext.tsx` — Cart state
- `context/WishlistContext.tsx` — Wishlist state
- `app/globals.css` — Global styles and utility classes

### Design System
- **Colors:** Cream bg `#FAF8F5`, gold `#C9A84C`, dark text `#1A1614`
- **Fonts:** Inter (body) + Cormorant Garamond (display/headings)
- **Utilities:** `.font-display`, `.gold-gradient`, `.btn-primary`, `.btn-outline`, `.glass`, `.grain`, `.skeleton`, `.animate-fade-up`

<!-- VERCEL BEST PRACTICES START -->
## Best practices for developing on Vercel

These defaults are optimized for AI coding agents (and humans) working on apps that deploy to Vercel.

- Treat Vercel Functions as stateless + ephemeral (no durable RAM/FS, no background daemons), use Blob or marketplace integrations for preserving state
- Edge Functions (standalone) are deprecated; prefer Vercel Functions
- Don't start new projects on Vercel KV/Postgres (both discontinued); use Marketplace Redis/Postgres instead
- Store secrets in Vercel Env Variables; not in git or `NEXT_PUBLIC_*`
- Provision Marketplace native integrations with `vercel integration add` (CI/agent-friendly)
- Sync env + project settings with `vercel env pull` / `vercel pull` when you need local/offline parity
- Use `waitUntil` for post-response work; avoid the deprecated Function `context` parameter
- Set Function regions near your primary data source; avoid cross-region DB/service roundtrips
- Tune Fluid Compute knobs (e.g., `maxDuration`, memory/CPU) for long I/O-heavy calls (LLMs, APIs)
- Use Runtime Cache for fast **regional** caching + tag invalidation (don't treat it as global KV)
- Use Cron Jobs for schedules; cron runs in UTC and triggers your production URL via HTTP GET
- Use Vercel Blob for uploads/media; Use Edge Config for small, globally-read config
- If Enable Deployment Protection is enabled, use a bypass secret to directly access them
- Add OpenTelemetry via `@vercel/otel` on Node; don't expect OTEL support on the Edge runtime
- Enable Web Analytics + Speed Insights early
- Use AI Gateway for model routing, set AI_GATEWAY_API_KEY, using a model string (e.g. 'anthropic/claude-sonnet-4.6'), Gateway is already default in AI SDK
  needed. Always curl https://ai-gateway.vercel.sh/v1/models first; never trust model IDs from memory
- For durable agent loops or untrusted code: use Workflow (pause/resume/state) + Sandbox; use Vercel MCP for secure infra access
<!-- VERCEL BEST PRACTICES END -->
