// Make the Judge Laugh in One Line — entry program.
// Writes exactly one funny line (104 chars) to /output/entry.txt.
// Deterministic, Node 22, stdlib only. No randomness, no network,
// no clock reads: the same input always produces the same output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Your smartwatch congratulated you on 10,000 steps, then quietly logged the 9,998 you took to the fridge.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE + "\n", "utf8");
