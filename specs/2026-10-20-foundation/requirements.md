# Requirements: Foundation

Roadmap Phase 1. Guidance: `specs/mission.md`, `specs/tech-stack.md`.

## Goal

Stand up the project skeleton so every later phase starts from a working, tested, linted base: an Express API, a Next.js frontend, shared types, and CI.

## Scope

In scope:

- npm workspaces monorepo with `api`, `web`, and `packages/shared`.
- Express + TypeScript API (strict mode) exposing `GET /health`.
- Next.js (App Router) + React + TypeScript frontend (strict mode) with Tailwind CSS and a minimal home page.
- ESLint, Prettier, and a type-check script, runnable from the repo root.
- Vitest smoke tests: one for `/health` (via Supertest), one for the home page (via Testing Library).
- GitHub Actions workflow running lint, type-check, and tests on every push.

Out of scope (later phases):

- Landing page content, layout, and navigation (Phase 2).
- Database, Prisma, and models (Phase 3).
- Any feature endpoints or pages, authentication, and Playwright end-to-end tests.
- Deployment.

## Decisions

- **Monorepo:** npm workspaces, as set in `tech-stack.md`. Package manager is npm only.
- **Shared package:** `packages/shared` is created now (empty but wired up and importable from both apps) so later phases don't restructure.
- **Ports:** API on 4000, web on 3000.
- **Node:** current LTS, pinned in `.nvmrc` and the `engines` field.
- **TypeScript:** strict mode in all workspaces, extending a shared root `tsconfig.base.json`.
- **Linting:** ESLint flat config at the root; Prettier with defaults.
- **Tests:** Vitest in every workspace; Supertest for the API, Testing Library for components.
- **Frontend to API:** the web app reads the API base URL from an environment variable (`NEXT_PUBLIC_API_URL`), defaulting to `http://localhost:4000`.
- **Browsers:** latest Chrome, Firefox, Safari, and Edge only.
- **Responsive design:** the web UI is mobile-first. The root layout declares the viewport (`width=device-width`, `initialScale=1`), and the home page uses Tailwind's base-then-breakpoint styles so it works from 320px wide with no horizontal scrolling.

## Context

- The repo currently contains only `README.md` and `specs/`.
- Principle from the mission: small, shippable, reviewable steps; boring, proven choices.
- The audience includes students and booth demos, so setup must be simple: `npm install` then one command to run everything.

## Root scripts

| Script              | Purpose                           |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start API and web together.       |
| `npm run lint`      | ESLint across all workspaces.     |
| `npm run format`    | Prettier check/write.             |
| `npm run typecheck` | `tsc --noEmit` in all workspaces. |
| `npm test`          | Vitest in all workspaces.         |
