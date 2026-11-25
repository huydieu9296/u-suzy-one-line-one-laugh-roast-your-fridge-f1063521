# One Line, One Laugh: Roast Your Fridge

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18-green)](https://nodejs.org/)

Entry for the [make.fun bounty "One Line, One Laugh: Roast Your Fridge"](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521) — a single line (max 200 characters) roasting my fridge.

## The line

> My fridge's ice maker retired years ago, but it still rattles all night like it's earning a pension — while the lettuce dies by Tuesday.

136 characters, one line, no trailing newline.

## Run

```sh
node main.ts
# writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt)
```

`main.ts` reads `entry.txt` from its own directory (resolved via `import.meta.url`, so it works from any CWD), gates it (1 line, 1–200 chars, no newline), writes it out, then reads it back and verifies it is byte-identical before logging.
