const fs = require("fs");
const path = require("path");
const root = path.resolve("scripts/cmds");
const files = fs.readdirSync(root).filter(name => name.endsWith(".js")).sort();
const rows = [];
for (const file of files) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const name = source.match(/\bname\s*:\s*["']([^"']+)["']/);
  const author = source.match(/\bauthor\s*:\s*["']([^"']+)["']/);
  const category = source.match(/\bcategory\s*:\s*["']([^"']+)["']/);
  rows.push({ file, command: name?.[1] || "(dynamic/unknown)", author: author?.[1] || "(unspecified)", category: category?.[1] || "(unspecified)" });
}
const out = path.resolve("docs/COMMAND_CATALOG.json");
fs.writeFileSync(out, JSON.stringify(rows, null, 2) + "\n");
console.log(`Indexed ${rows.length} command files into ${out}`);
