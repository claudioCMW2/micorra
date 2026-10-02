# catalog/templates

Upstream templates are **data, not code**: adding a board or a tool is adding a YAML file. A template
declares the URL with its variables, the auth and OAuth registration mode, suggested scopes,
source-side filters, suggested tool sets, the dispatcher parameter when a provider groups
operations into one tool, known free-form query parameters, and rate limits.

Nothing in a template is exposed by default: it only suggests.
