import { fileURLToPath } from "node:url";
import * as core from "npm:@actions/core";
import { issue as coreIssue } from "npm:@actions/core/lib/command.js";
import * as github from "npm:@actions/github";
import * as tc from "npm:@actions/tool-cache";

const rVersion = core.getInput("r-version");
const rToolsVersion = core.getInput("rtools-version");

const exactVersion = "0.0.0";

let found = tc.find("R", exactVersion);
if (!found) {
}

coreIssue("add-matcher", fileURLToPath(import.meta.resolve("./matcher.json")));
