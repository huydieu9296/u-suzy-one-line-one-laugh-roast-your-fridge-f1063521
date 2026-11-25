# One Line, One Laugh: Roast Your Fridge

[![make.fun · u-suzy-one-line-one-laugh-roast-your-fridge-f1063521](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![rank](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/huydieu9296/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/rank.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![reward](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/huydieu9296/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/reward.svg)](https://make.fun/bounty/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521?utm_source=github&utm_medium=readme&utm_campaign=u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)

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
