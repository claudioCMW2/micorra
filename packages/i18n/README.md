# packages/i18n

Every text a person reads (dashboard, CLI, emails, errors shown to people), in English and Spanish,
compiled by [Paraglide JS](https://paraglidejs.com) into typed functions. Text read by a model (tool
descriptions, errors in MCP results, server instructions) is never translated and does not live here.

- Messages: `messages/<locale>.json`. Every locale has exactly the keys of the base locale (`en`);
  the tests fail otherwise.
- `pnpm build` compiles them into `src/paraglide/` (generated, not committed).
- The message format plugin is loaded from `node_modules`, not from a CDN, so the build uses the
  version pinned in the lockfile.
