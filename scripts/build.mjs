import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const distDir = resolve(root, "dist");

const filesToCopy = [
  "index.html",
  "404.html",
  "styles.css",
  "script.js",
  "_headers",
  "robots.txt",
  "sitemap.xml",
];

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

mkdirSync(distDir, { recursive: true });

for (const file of filesToCopy) {
  cpSync(resolve(root, file), resolve(distDir, file), { recursive: true });
}
