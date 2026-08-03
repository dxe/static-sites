import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Read a saved third-party embed file (verbatim copy from the live site)
 * at build time. Call from a server component only, then pass the string
 * to <SquarespaceEmbed html={...} />.
 */
export function readEmbed(filename: string): string {
  return readFileSync(
    path.join(process.cwd(), "embeds", filename),
    "utf8",
  );
}
