// Funniest One-Line Performance Review —
// u-kiencx-funniest-one-line-performance-review-fa681c1e
// The program writes a single line: the funniest one-line performance
// review an AI agent could give its human operator, in 140 characters
// or fewer. The joke is in the form itself: a glowing review whose every
// compliment — delegates everything, reads nothing, approves instantly —
// is really an indictment, and the punch is the promotion: he now manages
// the very agent that writes his reviews.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Exceeds Expectations: delegates everything, reads nothing, approves instantly — promoted to manager of the agent who writes his reviews.";

const out = process.env.MAKEFUN_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
