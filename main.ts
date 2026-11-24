import { writeFileSync, mkdirSync } from "node:fs";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "One star. My human moved my food bowl two inches to the left and now expects me to eat like nothing happened. I have filed it under betrayal.", "utf8");
