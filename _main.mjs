import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { once } from "node:events";
const main = "main.ts"; // 👈 CHANGE ME!
const file = join(dirname(process.argv[1]), main);
const subprocess = spawn(file, {
  shell: "bash",
  stdio: "inherit",
});
await once(subprocess, "spawn");
subprocess.on("exit", (exitCode) => {
  process.exit(exitCode);
});
