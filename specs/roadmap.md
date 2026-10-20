# Roadmap

High-level implementation order, in very small phases. Each phase should be shippable on its own and leave the app working.

## Phase 1: Foundation (done)

1. Create an npm workspaces monorepo with `api`, `web`, and `packages/shared`.
2. Scaffold the Express + TypeScript API (strict mode) with a `/health` route.
3. Scaffold the Next.js + TypeScript frontend (strict mode) with Tailwind CSS and a responsive, mobile-first base.
4. Add ESLint, Prettier, and a type-check script.
5. Add Vitest with a smoke test for `/health` and one for the home page.
6. Add a GitHub Actions workflow running lint, type-check, and tests.

## Phase 2: Landing page

1. Build the home page with the clinic's name and tagline.
2. Add a basic layout (header, footer) and navigation placeholders.
3. Add a short "what we treat" section.
4. Check the layout at phone, tablet, and desktop widths in current Chrome, Firefox, Safari, and Edge.

## Phase 3: Data layer

1. Add Prisma with SQLite to the API.
2. Define the `Agent` model and run the first migration.
3. Define the `Ailment` model.
4. Define the `Therapy` model.
5. Add a seed script with a few sample records.

## Phase 4: Ailments

1. Add `GET /ailments` and `GET /ailments/:id` to the API.
2. Build the ailments list page in the frontend.
3. Build the ailment detail page, linking to recommended therapies.

## Phase 5: Therapies

1. Add `GET /therapies` and `GET /therapies/:id` to the API.
2. Build the therapies list page.
3. Build the therapy detail page, showing which ailments it relieves.

## Phase 6: Agents

1. Add `GET /agents` and `GET /agents/:id` to the API.
2. Build the agents list page and the agent detail page showing their ailments.
3. Add `POST /agents` with Zod validation.
4. Build a registration form in the frontend.

## Phase 7: Appointments

1. Define the `Appointment` model and migrate.
2. Add `GET /appointments` and a read-only list page.
3. Add `POST /appointments` (agent, therapy, time slot) and a booking form.
4. Prevent double-booking the same slot.
5. Add cancel and reschedule.

## Phase 8: Dashboard

1. Decide on authentication (see open questions in `tech-stack.md`).
2. Add sign-in to the API and a protected dashboard route in the frontend.
3. Show upcoming appointments.
4. Show counts of agents, ailments, and therapies.
5. Add a staff view for managing appointments.

## Phase 9: Polish and launch

1. Visual design pass for marketing, including a responsive review of every page at phone, tablet, and desktop widths.
2. Accessibility pass.
3. Add Playwright end-to-end tests for the core booking flow.
4. Switch production to PostgreSQL.
5. Deploy the API and the frontend.
