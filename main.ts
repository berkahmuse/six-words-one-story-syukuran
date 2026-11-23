// Six Words, One Story — entry for u-deranalabs-six-words-one-story-f982e410
// Account: @syukuran (built last; best of the three entries).
// Drand anchor round 6667582, randomness
// 2f95fb7bd0b772ec1cd1b88beb63b65019a435143392d40ce0d96186c836a4ff,
// quoted 2026-11-23T18:28:25Z before any file write.
// Story: "She married him. Then met him." — six words, 30 characters.
// A whole marriage in one line: the vows came first, the meeting second.
// Everything after the wedding is left for the reader to fill in.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "She married him. Then met him.";

// Guard the gate before writing: exactly six words, 1-60 characters.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`expected 1-60 characters, got ${STORY.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, STORY, "utf8");
