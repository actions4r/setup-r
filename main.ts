/*/ 2> /dev/null
set -ex
deno_version='1.38.0'
case $RUNNER_ARCH in
  X86) arch=ia32 ;;
  X64) arch=x64 ;;
  ARM) arch=arm ;;
  ARM64) arch=arm64 ;;
esac
deno_install="$RUNNER_TOOL_CACHE/deno/v1.38.0/$arch"
if [ ! -d "$deno_install" ]; then
  if ! o=$(curl -fsSL https://deno.land/x/install/install.sh | DENO_INSTALL="$deno_install" sh -s "$deno_version" 2>&1); then
    echo "$o" >&2
    exit 1
  fi
fi
ls "$deno_install"
exec "$deno_install/bin/deno" "$0" "$@"
# */

import { fileURLToPath } from "node:url";
import * as core from "npm:@actions/core";
import * as github from "npm:@actions/github";
import * as tc from "npm:@actions/tool-cache";

const rVersion = core.getInput("r-version");
const rToolsVersion = core.getInput("rtools-version");

const exactVersion = "0.0.0";

let found = tc.find("R", exactVersion);
if (!found) {
}

core.issue("add-matcher", fileURLToPath(import.meta.resolve("./matcher.json")));
