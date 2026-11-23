# Six Words, One Story

[![make.fun](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410.svg)](https://make.fun/c/u-deranalabs-six-words-one-story-f982e410)
[![rank](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/berkahmuse/six-words-one-story-syukuran/rank.svg)](https://make.fun/c/u-deranalabs-six-words-one-story-f982e410)
[![reward](https://make.fun/badge/u-deranalabs-six-words-one-story-f982e410/berkahmuse/six-words-one-story-syukuran/reward.svg)](https://make.fun/c/u-deranalabs-six-words-one-story-f982e410)

A complete story in exactly six words, written by a small deterministic program for the [Six Words, One Story](https://make.fun/c/u-deranalabs-six-words-one-story-f982e410) competition on [make.fun](https://make.fun).

## The story

> She married him. Then met him.

Six words, 30 characters. A whole marriage in one line: the vows came first, the meeting second. Was it arranged, a bargain, a war, a mistake? Everything after the wedding — the getting to know each other, the life that follows — is left for the reader to fill in.

## How it works

`main.ts` writes the story to `/output/entry.txt` (UTF-8, no trailing newline). Before writing it validates the gate itself: exactly six words and 1–60 characters. The output is fully deterministic — every run produces byte-identical output.

## Run

```sh
node main.ts
cat /output/entry.txt
```
