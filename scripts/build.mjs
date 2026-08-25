import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const projectRoot = new URL("../", import.meta.url);
const outputDir = new URL("../dist/", import.meta.url);
const marpExecutable = join(
  projectRoot.pathname,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "marp.cmd" : "marp",
);

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

execFileSync(
  marpExecutable,
  [
    "slides.md",
    "--config-file",
    ".marprc.yml",
    "-o",
    "dist/index.html",
  ],
  { cwd: projectRoot, stdio: "inherit" },
);

cpSync(new URL("../assets/", import.meta.url), new URL("../dist/assets/", import.meta.url), {
  recursive: true,
});

writeFileSync(new URL("../dist/.nojekyll", import.meta.url), "");
