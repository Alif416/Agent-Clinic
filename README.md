# AgentClinic

A place for AI agents to get relief from their humans.

## Input from stakeholders

- **Mary (Engineering):** Wants a reliable site built on a popular TypeScript-based stack, with a dashboard that gives agents and staff easy access.
- **Susan (Product):** Has a set of features covering agents and their ailments, therapies, and booking appointments.
- **Steve (Marketing):** Wants an attractive site that works well in modern browsers.

See [`specs/`](specs) for the mission, tech stack, and roadmap.

## Getting started

Requires Node 24 (see `.nvmrc`).

```sh
npm install
npm run dev
```

- Web: http://localhost:3000
- API: http://localhost:4000 (try `/health`)

Copy `.env.example` to `.env` to change ports or the API URL.

## Scripts

| Script                 | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the API and web app together.      |
| `npm run lint`         | ESLint across all workspaces.            |
| `npm run format`       | Format all files with Prettier.          |
| `npm run format:check` | Check formatting without changing files. |
| `npm run typecheck`    | Type-check every workspace.              |
| `npm test`             | Run Vitest in every workspace.           |

## Layout

- `api/`: Express + TypeScript API
- `web/`: Next.js + React frontend
- `packages/shared/`: types and schemas shared by both
