# Micorra

**A local MCP gateway — "LiteLLM, but for MCP".** One router on your machine (or on your company's
server) that connects every AI client — Claude Code, Codex, Cursor, VS Code, Gemini CLI and others —
to remote and local MCP servers, exposes only the tools you allow, and shows what each one costs in
tokens.

> The name comes from *mycorrhiza*: the fungal network that lives in symbiosis with plant roots and
> feeds them water and nutrients. Here the plants are your AI clients, and the nutrients are tools,
> context and memory.

**Status:** early development. Nothing to install yet.

## What it does

- **One endpoint for every client.** Connect Jira, Azure DevOps, GitHub, Plane, Linear, Notion and
  local MCP servers once; every AI client talks to Micorra.
- **Only what you allow.** Nothing is exposed by default. Policies per tool, per operation and per
  parameter; name-collision detection; tools that change after approval are quarantined.
- **Projects.** Each repository can declare the tools it needs in `.micorra/project.yaml`, shared
  through git.
- **Token cost in plain sight.** Schema and output tokens per tool, client and project.
- **Memory shared across providers.** Code search and code graph servers are optional: add them
  from the catalog like any other MCP server.
- **Any machine.** Windows, macOS and Linux; x64 and arm64; behind corporate proxies.
- **Headless first.** Everything works from a config file and the CLI; the dashboard is optional.

## Planned usage

```bash
micorra init                    # minimal config, detects your clients, installs the service
micorra connect claude-code     # writes the client config with its own key
micorra status                  # health of every upstream
```

A local dashboard is available at `http://127.0.0.1:8787` when enabled.

## Editions

- **Community** — this repository, Apache-2.0. Complete for individuals and teams: local mode and a
  self-hosted server mode.
- **Commercial editions** for organizations (SAML, SCIM, custom roles, audit export, cost
  chargeback, fleet management) are planned separately.

## Contributing and security

- [CONTRIBUTING.md](CONTRIBUTING.md) — commits need a DCO sign-off.
- [SECURITY.md](SECURITY.md) — report vulnerabilities privately, never in a public issue.
- [DESIGN.md](DESIGN.md) — the visual language of the dashboard.

## License

[Apache-2.0](LICENSE). The "Micorra" name and logo are not licensed under Apache-2.0. Third-party
material in [`third_party/`](third_party/) keeps its own license.
