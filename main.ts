// Last Text at One Percent — u-azazex-last-text-at-one-percent-ba9fc876
// A dying phone's final text message, written by this program to
// /output/entry.txt. One message, under 200 characters, in the
// phone's own voice: a last confession with a specific, surprising
// detail, not a generic low-battery warning.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke is built in three beats so the confession lands in order:
// the reassurance, the hiding place, then the goodbye.
const OPENING = "1%. Last confession: your photos aren't lost. ";
const CONFESSION = "I hid them in a folder called Taxes 2019. You never open it. ";
const GOODBYE = "Goodbye, tell the charger I loved it.";

const MESSAGE = OPENING + CONFESSION + GOODBYE;

function main(): void {
  // Gate: 1-200 characters, not only whitespace.
  if (MESSAGE.length < 1 || MESSAGE.length > 200 || MESSAGE.trim().length === 0) {
    throw new Error(`entry must be 1-200 characters, got ${MESSAGE.length}`);
  }
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, MESSAGE, "utf8");
  console.log(`Wrote ${MESSAGE.length} characters to /output/entry.txt`);
}

main();
