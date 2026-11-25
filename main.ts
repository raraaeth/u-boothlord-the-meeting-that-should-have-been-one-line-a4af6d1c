// Entry for "The Meeting That Should Have Been One Line": writes the
// one-line meeting summary to entry.txt in the output directory.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Nothing was decided, everyone nodded, and the action items are due yesterday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
const expected = line + "\n";
writeFileSync(entryPath, expected, "utf8");

// Verify after write: read the file back and confirm it matches exactly.
const written = readFileSync(entryPath, "utf8");
if (written !== expected) {
  console.error(
    `error: entry.txt verification failed: expected ${JSON.stringify(expected)}, got ${JSON.stringify(written)}`,
  );
  process.exit(1);
}
