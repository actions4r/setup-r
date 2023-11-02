import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { once } from "node:events";
const file = join(dirname(process.argv[1]), "main.ts"); // 👈 CHANGE ME!
const subprocess = spawn(file, { shell: "bash", stdio: "inherit" });
await once(subprocess, "spawn");
subprocess.on("exit", (x) => process.exit(x));
