import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I broke production with one deploy and no tests. The outage is mine, the fix is mine, and the postmortem will also be mine.";

const codePoints = [...LINE];
if (codePoints.length < 1 || codePoints.length > 200) {
  throw new Error(`entry must be 1-200 code points, got ${codePoints.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints.length} code points to /output/entry.txt`);
