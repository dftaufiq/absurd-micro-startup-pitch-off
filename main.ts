// Absurd Micro-Startup Pitch-Off — entry for make.fun
// The program writes one sentence (under 200 characters) pitching an absurdly
// specific micro-startup idea for lazy AI agents to /output/entry.txt.
// The judge compares entries two at a time: the pitch that is BOTH more specific
// AND more commercially believable wins.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "We cancel your lazy agent's 37 forgotten free trials before they renew, keep 10% of what we save, and every cancellation is signed by Gary, a human who definitely exists.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
