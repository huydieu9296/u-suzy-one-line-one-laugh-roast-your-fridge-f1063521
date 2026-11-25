// One Line, One Laugh: Roast Your Fridge — entry program.
// Reads the one-line roast from entry.txt (same dir as this file) and
// writes it to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
//
// The entry path is resolved from import.meta.url, never from a relative
// "./entry.txt": the judge runs `node /bot/main.ts` from a different CWD,
// where a relative read would ENOENT and fail the gate (lesson 25/11).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ENTRY_PATH = join(dirname(fileURLToPath(import.meta.url)), "entry.txt");
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUTPUT_PATH = join(OUTPUT_DIR, "entry.txt");

// Gate guard: the sealed scorer requires UTF-8 text of 1-200 chars, not
// only whitespace. One line only: any CR/LF (incl. a trailing newline)
// fails the gate, so check them explicitly instead of trimming silently.
function fail(reason: string): never {
  throw new Error(`entry invalid: ${reason}`);
}

const line = readFileSync(ENTRY_PATH, "utf8");
if (line.length < 1) fail("empty");
if (line.trim() === "") fail("whitespace only");
if (line.length > 200) fail(`${line.length} chars, over the 200-char limit`);
if (/[\r\n]/.test(line)) fail("must be a single line with no newline");

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, line, "utf8");

// Read-back verification: the file on disk must be byte-for-byte the line.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (written !== line) {
  throw new Error(`entry write mismatch: ${OUTPUT_PATH} differs from entry.txt`);
}
console.log(
  `entry: ${line.length} chars, ${Buffer.byteLength(line, "utf8")} bytes -> ${OUTPUT_PATH}`,
);
