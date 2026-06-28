const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "../dist/client/assets");
const templatePath = path.join(__dirname, "../index.template.html");
const outPath = path.join(__dirname, "../dist/client/index.html");

const files = fs.readdirSync(assetsDir);
const css = files.find((f) => f.endsWith(".css"));
const jsFiles = files.filter((f) => f.endsWith(".js") && !f.startsWith("_"));

if (!css) { console.error("No CSS file found in dist/client/assets"); process.exit(1); }
if (jsFiles.length < 2) { console.error("Expected 2 JS files, found:", jsFiles); process.exit(1); }

let html = fs.readFileSync(templatePath, "utf8");
html = html.replace("__STYLES_CSS__", `/assets/${css}`);
html = html.replace("__MAIN_JS_1__", `/assets/${jsFiles[0]}`);
html = html.replace("__MAIN_JS_2__", `/assets/${jsFiles[1]}`);

fs.writeFileSync(outPath, html);
console.log("Generated dist/client/index.html");
console.log("  CSS:", css);
console.log("  JS:", jsFiles.join(", "));
