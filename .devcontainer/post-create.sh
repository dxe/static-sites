#!/usr/bin/env bash
set -euo pipefail

# Playwright MCP (.mcp.json) needs its browser binary and system libs, neither
# of which npx pulls in automatically.
npx --yes playwright install chromium-headless-shell
sudo env "PATH=$PATH" npx --yes playwright install-deps chromium
