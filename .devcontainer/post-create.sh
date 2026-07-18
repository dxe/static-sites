#!/usr/bin/env bash
set -euo pipefail

pnpx --yes playwright install chromium-headless-shell
sudo env "PATH=$PATH" pnpx --yes playwright install-deps chromium
