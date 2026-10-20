# Changelog

## 2026-10-20

- Set up an npm workspaces monorepo with `api`, `web`, and `packages/shared`.
- Added the Express + TypeScript API with a `/health` endpoint.
- Added the Next.js + React frontend with Tailwind CSS and a home page showing the clinic name.
- Added ESLint, Prettier, type-checking, and Vitest tests for the API and the home page.
- Added a GitHub Actions workflow for CI.
- Wrote the project specs: mission, tech stack, roadmap, and the Phase 1 foundation spec.
- Made the web UI responsive and mobile-first, and updated the specs to require it.
- Added Vitest suites for the shared package, API routing, and the root layout viewport.
- Added a `/changelog` skill for updating this file before merging.
- Added a `validate` script that runs lint, type-check, and tests, and documented Vitest as the validation approach.

## 2026-10-19

- Initial commit.
