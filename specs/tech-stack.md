# Tech Stack

TypeScript throughout: an Express.js backend API and a React frontend built with Next.js.

## Architecture

- **`api/`:** Express.js (TypeScript) REST API. Owns data, validation, and business rules.
- **`web/`:** Next.js (React, TypeScript) frontend. Renders pages and talks to the API over HTTP.

Next.js is used as the React framework for the frontend only; the backend is Express.

## Backend

| Concern    | Choice                                            | Why                                                         |
| ---------- | ------------------------------------------------- | ----------------------------------------------------------- |
| Language   | TypeScript (strict mode)                          | Required by engineering; catches errors early.              |
| Runtime    | Node.js (current LTS)                             | Stable and universally supported.                           |
| Framework  | Express.js                                        | The most widely used Node framework; familiar and reliable. |
| Database   | SQLite for development, PostgreSQL for production | Zero-setup locally, robust in production.                   |
| ORM        | Prisma                                            | Type-safe queries and simple migrations.                    |
| Validation | Zod                                               | Runtime and compile-time validation of requests.            |

## Frontend

| Concern       | Choice                   | Why                                                     |
| ------------- | ------------------------ | ------------------------------------------------------- |
| Language      | TypeScript (strict mode) | Same language across the stack.                         |
| UI library    | React                    | Popular, component-based UI.                            |
| Framework     | Next.js (App Router)     | Routing, server rendering, and a solid React toolchain. |
| Styling       | Tailwind CSS             | Fast to build an attractive, consistent UI.             |
| UI components | shadcn/ui                | Accessible components we own.                           |

## Shared

- Request and response types and Zod schemas live in a shared `packages/shared` workspace so the API and frontend agree on shapes.
- npm workspaces manage `api`, `web`, and `packages/shared` in one repository.

## Quality

| Concern                    | Choice                                                                 |
| -------------------------- | ---------------------------------------------------------------------- |
| Unit and integration tests | Vitest (Supertest for API route tests, Testing Library for components) |
| End-to-end tests           | Playwright                                                             |
| Linting and formatting     | ESLint and Prettier                                                    |
| CI                         | GitHub Actions: lint, type-check, test on every push                   |

## Conventions

- Package manager: npm.
- Browser support: the latest versions of Chrome, Firefox, Safari, and Edge.
- No feature merges without passing lint, type-check, and tests.

## Open questions

- ~~Authentication approach~~ Decided: email and password with cookie sessions in Express, roles `agent` and `staff` (Phase 8, dashboard).
- Hosting target (default assumption: Vercel for `web`, a container host such as Fly.io or Render for `api`).
