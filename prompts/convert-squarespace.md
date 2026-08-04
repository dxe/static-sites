# Squarespace conversion prompt

Please act as the orchestrator (Fable) for the task below, delegating bulk work to cheaper Sonnet/Haiku subagents so it completes autonomously and cost-effectively. Tell me what my initial prompt to you should be, and generate any scripts needed to launch and coordinate those subagent workers (e.g. headless `claude -p` batch runs). Flag any manual steps I'll need to handle myself along the way.

## Task

I want to convert my squarespace site into an idiomatic next.js app in this monorepo. The site must look similar to the original and work on desktop and mobile.

Find the live site at https://<DOMAIN>/ -- there are 35-40 pages. the sitemap is here: https://<DOMAIN>/sitemap.xml

see @<DIRECTORY>/package.json -- I already created the next app scaffolding with this command:

pnpm create next-app --ts --tailwind --eslint --app --use-pnpm <DIRECTORY>

Test visual comparison with Playwright MCP. Test 375px, 768px, 1920px for every page. There should be no console errors. Playwright MCP is available.

Be sure to capture the live site's favicon as well.

Add a launch.json config for developers to test the local version without SSG, but make sure it builds with SSG for prod later. Please match the style of existing launch.config entries.

Think about how to avoid cluttering the context. Avoid reading screenshots to keep context cost low. Read scaled-down screenshots if you must judge visuals yourself. Don't do raw CSS/HTML forensics inline if a subagent can return the distilled answer. Consider a single cheap worker that summarizes all reports to one table instead of reading all per-worker files. The same logic applies one level up: if the site has many pages, rather than staying in one continuous session across every phase, consider spawning a fresh top-level session per phase and handing off via a written summary doc (decisions made, deviations, gotchas hit, what's left) instead of carrying the whole transcript forward.

### Gotchas

- pnpm: `coalition-to-end-ff/pnpm-workspace.yaml` needs `allowBuilds: sharp/unrs-resolver: true` (done).
- Squarespace CDN serves WebP unless `Accept: image/jpeg|png` header sent; some `.png` URLs are JPEG.
- Fluid-engine DOM order ≠ visual order (CSS grid-area) — trust screenshots.
- Both you and worker scripts should run with `--dangerously-skip-permissions` (fine in this devcontainer) — don't let permission prompts stall an autonomous run.
- The Playwright MCP browser is a single shared instance — don't let parallel workers use it.

### Pages with embeds

if helpful, the embeds on these pages have been extracted from squarespace and saved. sometimes these should be left untouched as they are provided externally.

url path - notes:
/path1 - embed available in tmp/embeds/path1-embed1.txt
...

### Pages to skip

/path9
/path8
