# Contributing

Micorra is in early development. Issues and ideas are welcome; for larger changes, open an issue
first so we can agree on the approach.

## Ground rules

- **Developer Certificate of Origin.** Every commit needs a sign-off line certifying that you wrote
  the change or have the right to submit it under Apache-2.0
  ([developercertificate.org](https://developercertificate.org/)):

  ```bash
  git commit -s -m "feat(server): Add tool quarantine review"
  ```

- **Conventional Commits** in English: `type(scope): Subject`.
- Code, identifiers and comments in English.
- Every new test must be seen failing against broken logic before it counts.
- Never commit secrets. A pre-commit hook and CI scan for them.

## Development setup

Coming with the project scaffolding: Node 26, pnpm and one command to run every check.
