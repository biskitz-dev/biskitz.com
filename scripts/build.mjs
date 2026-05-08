import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const distDir = resolve(root, "dist");

const entriesToCopy = [
  "index.html",
  "404.html",
  "styles.css",
  "script.js",
  "_headers",
  "robots.txt",
  "sitemap.xml",
  "company",
  "about",
  "contact",
];

if (existsSync(distDir)) {
  rmSync(distDir, { recursive: true, force: true });
}

mkdirSync(distDir, { recursive: true });

for (const entry of entriesToCopy) {
  const source = resolve(root, entry);
  const destination = resolve(distDir, entry);

  if (existsSync(source)) {
    cpSync(source, destination, { recursive: true, force: true });
  }
}
