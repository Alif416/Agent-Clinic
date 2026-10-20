# Plan: Foundation

Each task group is small, leaves the repo working, and can be its own commit.

## 1. Monorepo skeleton

1. Add root `package.json` with npm workspaces (`api`, `web`, `packages/*`), `.nvmrc`, `engines`, and `.gitignore`.
2. Add `tsconfig.base.json` with strict mode.
3. Create `packages/shared` with its own `package.json` and `tsconfig.json`, exporting a placeholder constant.

## 2. Express API

1. Scaffold `api` with TypeScript, Express, and a dev runner (e.g. `tsx watch`).
2. Add `GET /health` returning `{ "status": "ok" }`.
3. Read the port from the environment, defaulting to 4000.
4. Import something from `packages/shared` to prove the workspace link works.

## 3. Next.js frontend

1. Scaffold `web` with Next.js (App Router), React, and TypeScript.
2. Add Tailwind CSS.
3. Add a minimal home page showing "AgentClinic", styled mobile-first with Tailwind breakpoints.
4. Declare the viewport in the root layout.
5. Add `NEXT_PUBLIC_API_URL` handling with the default of `http://localhost:4000`.

## 4. Tooling

1. Add ESLint flat config at the root covering `api`, `web`, and `packages/shared`.
2. Add Prettier config and ignore file.
3. Add `typecheck` scripts per workspace and at the root.
4. Add the root `dev`, `lint`, `format`, and `typecheck` scripts.

## 5. Tests

1. Add Vitest to `api` with a Supertest test for `/health`.
2. Add Vitest and Testing Library to `web` with a test that the home page renders "AgentClinic".
3. Add the root `npm test` script running both.

## 6. Continuous integration

1. Add `.github/workflows/ci.yml` running install, lint, type-check, and tests on every push.
2. Use the Node version from `.nvmrc` and cache npm.

## 7. Wrap-up

1. Update `README.md` with setup and run instructions.
2. Run the full validation checklist in `validation.md`.
3. Mark Phase 1 as done in `specs/roadmap.md`.
