import fs from "fs";
import { join } from "path";

export const reader = (path) =>
  JSON.parse(fs.readFileSync(join(process.cwd(), "source", "model", path)));
