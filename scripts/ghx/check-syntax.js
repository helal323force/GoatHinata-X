const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const roots = ["scripts/cmds", "scripts/events", "bot", "database", "dashboard"];
const files = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && full.endsWith(".js")) files.push(full);
  }
}
for (const root of roots) walk(root);
let failures = 0;
for (const file of files) {
  const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  if (result.status !== 0) {
    failures++;
    console.error(`SYNTAX ERROR: ${file}\n${result.stderr || result.stdout}`);
  }
}
console.log(`Checked ${files.length} JavaScript files; ${failures} syntax failures.`);
process.exitCode = failures ? 1 : 0;
