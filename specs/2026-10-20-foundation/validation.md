# Validation: Foundation

The work is complete and can be merged when every item below passes from a clean checkout.

## Required checks

Run from the repo root after `npm install`:

- [ ] `npm run lint` exits 0 with no errors.
- [ ] `npm run typecheck` exits 0 in all workspaces.
- [ ] `npm test` exits 0, with the `/health` test and the home page test both executed and passing.

## Structure

- [ ] The repo has `api`, `web`, and `packages/shared` as npm workspaces.
- [ ] Strict TypeScript is enabled in every workspace.
- [ ] `api` imports from `packages/shared` and `web` can too.
- [ ] `.github/workflows/ci.yml` runs the same lint, type-check, and test commands as above.

## Responsive design

- [ ] The root layout declares `width=device-width` and `initialScale=1`, verified by a Vitest test.
- [ ] The home page is usable at 320px wide with no horizontal scrolling.
- [ ] Text and spacing scale up at the `sm:` and `md:` breakpoints.

## Scope guard

- [ ] No database, models, feature endpoints, or feature pages were added.
- [ ] No dependencies beyond those named in `specs/tech-stack.md` for this phase.

## Merge criteria

- All required checks pass locally.
- `README.md` documents setup and the root scripts.
- `specs/roadmap.md` marks Phase 1 as done.
- The branch contains small, reviewable commits following the plan's task groups.
