import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line of earned pride: three winters of patching, one dry bucket.
const LINE =
  "After three winters of patching the same roof, my grandfather stood back in the rain and watched the bucket stay empty.";

// The gate allows 1-240 characters in a single line; fail loudly if the
// line ever drifts outside it instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 240 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-240 characters on one line, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
