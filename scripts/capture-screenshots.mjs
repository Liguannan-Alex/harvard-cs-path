import { spawn } from "node:child_process";
import { mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputDir = path.join(projectRoot, "docs", "screenshots");
const baseUrl = (process.env.SCREENSHOT_BASE_URL || "http://127.0.0.1:4173").replace(/\/$/, "");
const chromeBin = process.env.CHROME_BIN || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const screenshots = [
  { name: "home", hash: "#/" },
  { name: "paths", hash: "#/paths" },
  { name: "path-general", hash: "#/paths/general" },
  { name: "path-ai", hash: "#/paths/ai" },
  { name: "path-web", hash: "#/paths/web" },
  { name: "path-systems", hash: "#/paths/systems" },
  { name: "courses", hash: "#/courses" },
  { name: "course-cs50ai", hash: "#/courses/cs50ai" },
  { name: "method", hash: "#/method" },
  { name: "community", hash: "#/community" },
  { name: "verification", hash: "#/verification" },
  { name: "faq", hash: "#/faq" }
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function screenshotIsStable(filePath, minimumSize = 10_000) {
  let previousSize = -1;
  let stableReads = 0;

  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const current = await stat(filePath);
      if (current.size >= minimumSize && current.size === previousSize) stableReads += 1;
      else stableReads = 0;
      previousSize = current.size;

      if (stableReads >= 2) return true;
    } catch {
      stableReads = 0;
    }

    await sleep(250);
  }

  return false;
}

async function ensurePreviewServer() {
  const response = await fetch(`${baseUrl}/`);
  if (!response.ok) {
    throw new Error(`Preview server returned HTTP ${response.status} at ${baseUrl}`);
  }
}

async function stopChrome(child) {
  if (child.exitCode !== null || child.signalCode !== null) return;

  child.kill("SIGTERM");
  await sleep(1000);

  if (child.exitCode === null && child.signalCode === null) {
    child.kill("SIGKILL");
  }
}

async function capture({ name, hash }) {
  const filePath = path.join(outputDir, `${name}.png`);
  const profileDir = path.join("/private/tmp", `harvard-cs-path-shot-${name}-${process.pid}`);
  const url = `${baseUrl}/?shot=${encodeURIComponent(name)}${hash}`;

  await rm(filePath, { force: true });

  const child = spawn(chromeBin, [
    "--headless=new",
    "--disable-gpu",
    "--disable-background-networking",
    "--disable-sync",
    "--disable-dev-shm-usage",
    "--hide-scrollbars",
    "--no-first-run",
    `--user-data-dir=${profileDir}`,
    "--window-size=1440,900",
    "--virtual-time-budget=1000",
    `--screenshot=${filePath}`,
    url
  ], {
    stdio: ["ignore", "ignore", "pipe"]
  });

  let stderr = "";
  child.stderr.on("data", (chunk) => {
    stderr += chunk.toString();
    if (stderr.length > 3000) stderr = stderr.slice(-3000);
  });

  const stable = await screenshotIsStable(filePath);
  await stopChrome(child);
  await rm(profileDir, { recursive: true, force: true });

  if (!stable) {
    throw new Error(`Could not capture ${name}. Chrome stderr:\n${stderr.trim()}`);
  }

  console.log(`captured docs/screenshots/${name}.png`);
}

await mkdir(outputDir, { recursive: true });
await ensurePreviewServer();

for (const item of screenshots) {
  await capture(item);
}
