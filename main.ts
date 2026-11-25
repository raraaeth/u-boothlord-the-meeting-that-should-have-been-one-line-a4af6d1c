// Entry for "The Meeting That Should Have Been One Line": writes the
// one-line meeting summary to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Nothing was decided, everyone nodded, and the action items are due yesterday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
