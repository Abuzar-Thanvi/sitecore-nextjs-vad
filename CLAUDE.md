# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> See `AGENTS.md` for detailed architecture, key concepts, guardrails, and example tasks. This file covers commands and a high-level overview.

---

## Commands

```bash
npm install
npm run bootstrap          # Regenerate src/temp/ config files (run before dev/build)
npm run build              # Production build (bootstrap + next build)
npm run next:dev           # Start dev server (connected mode, no bootstrap)
npm run start:connected    # Connected dev: bootstrap + next:dev + watch components
npm run start              # Disconnected dev: bootstrap + next:dev + proxy + watch
npm run lint               # ESLint on src/**/*.tsx, src/**/*.ts, scripts/**/*.ts
npm run scaffold           # Scaffold a new Sitecore component
npm run start:production   # bootstrap + next:build + next:start
```

**No test runner is configured** — there are no test scripts in this project.

---

## Architecture Overview

**Stack:** Next.js 16 (Pages Router), React 19, TypeScript 5.4, Sitecore JSS 22

### Request Flow

Every Sitecore-managed URL is handled by a single catch-all: `src/pages/[[...path]].tsx`. On each request:

1. **Middleware** (`src/proxy.ts` → `src/lib/middleware/`) runs first via Next.js 16 middleware entry point. Plugins live in `lib/middleware/plugins/`.
2. **Path & locale** are resolved via `pathExtractor.extract(context.params)` and `context.locale`.
3. **`sitecorePagePropsFactory.create(context)`** runs a plugin chain:
   - Plugin order: `site` (0) → `normal-mode` or `preview-mode` (1) → `component-props` (10)
   - Fetches layout data (REST or GraphQL), i18n dictionary, and per-component props
4. **`Layout.tsx`** renders the layout using JSS `<Placeholder>` and the auto-generated `componentBuilder` from `src/temp/componentBuilder.ts`.

### Plugin System

Most extensible parts use a plugin pattern — auto-discovered by `scripts/generate-plugins.ts` and written to `src/temp/`. **Never edit `src/temp/` manually.** Plugin directories:

| Area | Source | Generated export |
|------|--------|-----------------|
| Page props factory | `src/lib/page-props-factory/plugins/` | `temp/page-props-factory-plugins.ts` |
| Middleware | `src/lib/middleware/plugins/` | `temp/middleware-plugins.ts` |
| Sitemap fetcher | `src/lib/sitemap-fetcher/plugins/` | `temp/sitemap-fetcher-plugins.ts` |
| Next.js config | `src/lib/next-config/plugins/` | `temp/next-config-plugins.ts` |
| Component builder | `scripts/generate-component-builder/plugins/` | `temp/componentBuilder.ts` |

### Configuration Sources

Config is layered: `package.json` config section → `scjssconfig.json` (from `jss setup`, git-ignored) → `.env` → `src/temp/config.ts` (generated at bootstrap). Key env vars: `SITECORE_API_KEY`, `SITECORE_API_HOST`, `SITECORE_SITE_NAME`, `FETCH_WITH` (REST or GraphQL), `DEFAULT_LANGUAGE`, `JSS_EDITING_SECRET`.

### Path Aliases (tsconfig.json)

```
components/* → src/components/*
lib/*        → src/lib/*
temp/*       → src/temp/*
assets/*     → src/assets/*
```

### Data Fetching Mode

Set by `FETCH_WITH` env var:
- `REST` → `RestLayoutService`, `RestDictionaryService`
- `GraphQL` → `GraphQLLayoutService`, `GraphQLDictionaryService`, `GraphQLSitemapService`

### App Name

The app is named `vad` (set in `package.json` config). Root placeholders: `vad-header`, `vad-main`, `vad-footer`. Sitecore CM config patches live in `sitecore/config/vad.config`.

---

## Key Constraints

- **Never edit `src/temp/`** — regenerated on every bootstrap/build.
- **Never commit `.env` or `.env.local`** — add new vars to `.env` template with placeholder values only.
- **Add components via `jss scaffold`** or `scripts/generate-component-builder/plugins/` — not by editing `componentBuilder.ts` directly.
- **Keep plugin order** in page-props-factory and middleware — plugins have dependencies.
- **`npm run build` must pass** after any change.
