import fs from "fs";
import { join } from "path";

export const writer = (path, data) => {
  fs.writeFileSync(
    join(process.cwd(), "source", "model", path),
    JSON.stringify(data, null, 4)
  );
  return "Ok";
};
