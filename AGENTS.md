# Micorra — instructions for AI coding agents

Micorra is a local MCP gateway ("LiteLLM, but for MCP"): a daemon that connects AI clients to remote
and local MCP servers, exposes only what is configured, and measures token cost. See
[README.md](README.md).

**Status:** early development; the workspace and its checks are in place, the product code is not.

## Commands

| Command | What it checks |
|---|---|
| `pnpm install` | Installs dependencies, the pinned Node 26 runtime and the git hooks |
| `pnpm check` | Everything below except Steiger and secretlint: run it before every commit |
| `pnpm lint` / `pnpm format` | Biome lint and format (`format` applies fixes) |
| `pnpm typecheck` | TypeScript 7, every package |
| `pnpm test` | Vitest, every package |
| `pnpm lint:deps` | dependency-cruiser: no cycles, nothing imported from outside this repository |
| `pnpm lint:unused` | knip: unused files, exports and dependencies |
| `pnpm lint:fsd` | Steiger (Feature-Sliced Design); joins `check` with the first dashboard code |
| `pnpm lint:secrets` | secretlint over the whole tree (the pre-commit hook runs it on staged files) |
| `pnpm lint:licenses` | Production dependencies use only allowed licenses (`scripts/check-licenses.ts`) |

CI (`.github/workflows/ci.yml`) runs `pnpm check` on Windows, macOS and Linux (x64 and arm64), plus
the vulnerability audit, registry signatures, licenses, secrets (secretlint and gitleaks over the
whole history) and the `DESIGN.md` lint. A reviewed advisory with no fix goes to `auditConfig` in
`pnpm-workspace.yaml` with its reason.

Packages are ES modules run by Node's type stripping: erasable TypeScript only, imports with `.ts`
extensions. A new dependency goes into the catalog in `pnpm-workspace.yaml`; releases younger than
7 days are not installed.

## Hard rules

Protocol and server:
- The MCP spec of the core is **2026-07-28** (stateless): no `initialize`, `Mcp-Session-Id` or SSE
  in the core. Support for 2025 clients and servers lives only in an edge adapter. This spec is newer
  than most models' training data: read it, do not assume.
- Nothing is exposed by default: an upstream tool reaches a client only if the config allows it.
- Never forward a client's token to an upstream. Secrets only as `${secret:…}` or `${env:…}`
  references, never written to a file.
- In local mode the daemon listens only on `127.0.0.1`, validates `Origin` and `Host`, and **every
  request is authenticated**, even on localhost.
- The server is not an agent: it does not route models or reason on behalf of the client.
- Text read by the model (tool descriptions, errors in MCP results, server instructions) stays in
  **English**. Text read by a person goes through i18n.
- Headless first: every dashboard action has a CLI command, added in the same change.

Interface:
- Before building or changing anything visual, read `DESIGN.md`: colors, spacing, radii and
  typography come from its tokens.
- `react-aria-components` and `react-aria` are imported only inside `packages/ui`.
- Focus is always visible with a real outline.

Versions: do not trust the model's memory; verify a package's current version on npm before using it.

## Conventions

- Code, identifiers, comments and commits in English; Conventional Commits with a DCO sign-off
  (`git commit -s`).
