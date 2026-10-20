---
name: changelog
description: Update CHANGELOG.md in the project root from git commits, grouped under date headings. Run manually before merging a branch.
disable-model-invocation: true
---

# Changelog

Keep `CHANGELOG.md` in the project root up to date, with one heading per date and a bullet for each change. Run this before merging a branch.

## Format

```markdown
# Changelog

## 2026-10-20

- Added the Express API with a `/health` route.
- Made the home page responsive.

## 2026-10-19

- Initial commit.
```

- Headings are `## YYYY-MM-DD` (ISO date of the commit), newest date first.
- Bullets are short, past-tense, and written for a reader of the project, not copied raw from commit subjects. Merge closely related commits into one bullet.
- Skip noise: merge commits, "fix typo" or formatting-only commits, and changes to the changelog itself.
- Never edit or reorder bullets that are already in the file.

## Steps

1. Check whether `CHANGELOG.md` exists in the project root.

2. **If it does not exist**, build it from history:
   - Run `git log --reverse --date=short --pretty=format:'%ad %s'` on the current branch.
   - Group commits by date, write the bullets, and create the file with the heading and newest date first.

3. **If it exists**, add only what is new:
   - Find the commits being merged: `git log --date=short --pretty=format:'%ad %s' <base>..HEAD`, where `<base>` is `git merge-base HEAD main`. If there is no `main`, use the commits dated after the newest heading.
   - For each commit date, add bullets under that date's heading, creating the heading in the right place if it is missing.
   - Skip any change already covered by an existing bullet.

4. Check for uncommitted work with `git status --short`. If there is some, tell the user it is not included, and do not invent bullets for it.

5. Run `npx prettier --write CHANGELOG.md` so the file passes `npm run format:check`.

6. Show the user the new bullets. Do not commit; leave the commit to the user.

## Notes

- If there are no new commits, say so and leave the file unchanged.
- Dates come from git, not from today's date.
- This skill only edits `CHANGELOG.md`.
