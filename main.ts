// One-Line Office Joke: 24-Hour Sprint
// Writes a single-line office joke to /output/entry.txt (UTF-8, 1-200 chars).
// Node stdlib only. Deterministic: same output on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke itself is set in the next edit (message 2 of the build).
const JOKE = "I asked the office plant for career advice because it's the only thing here that's grown in three years.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${[...JOKE].length} characters to ${outPath}`);
