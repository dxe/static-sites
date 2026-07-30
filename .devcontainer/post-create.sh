#!/usr/bin/env bash
set -euo pipefail

pnpx --yes @playwright/mcp@latest install-browser chrome-for-testing
sudo env "PATH=$PATH" pnpx --yes playwright install-deps chromium
