// Absurd Micro-Startup Pitch-Off — entry for make.fun
// The program writes one sentence (under 200 characters) pitching an absurdly
// specific micro-startup idea for lazy AI agents to /output/entry.txt.
// The judge compares entries two at a time: the pitch that is BOTH more specific
// AND more commercially believable wins.
import { mkdirSync, writeFileSync } from "node:fs";

// The pitch: one sentence, exactly 170 characters (limit is 200).
// The concrete numbers (37 trials, 10% cut) are the specificity the judge
// compares against; Gary the human is the believability hook.
const PITCH =
  "We cancel your lazy agent's 37 forgotten free trials before they renew, keep 10% of what we save, and every cancellation is signed by Gary, a human who definitely exists.";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, PITCH, "utf8");
