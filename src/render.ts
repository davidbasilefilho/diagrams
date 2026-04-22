import { readFileSync, readdirSync, mkdirSync } from "node:fs";
import { resolve, join, basename } from "node:path";
import { spawnSync } from "node:child_process";

const MERMAID_DIR = resolve("./mermaid");
const OUT_DIR = resolve("./out");

const MMDC_PATH = resolve(
  "node_modules/@mermaid-js/mermaid-cli/src/cli.js",
);

export interface RenderOptions {
  outputDir?: string;
}

function runMmdc(args: string[]): void {
  const result = spawnSync(process.execPath, [MMDC_PATH, ...args], {
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "pipe"],
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(
      `mmdc exited with code ${result.status}: ${result.stderr || result.stdout}`,
    );
  }
}

export function renderFile(
  filePath: string,
  options: RenderOptions = {},
): string {
  const outDir = options.outputDir ?? OUT_DIR;
  mkdirSync(outDir, { recursive: true });

  const outputPath = join(
    outDir,
    `${basename(filePath, ".mmd")}.svg`,
  );

  runMmdc(["-i", filePath, "-o", outputPath]);

  return outputPath;
}

export function renderAll(options: RenderOptions = {}): string[] {
  const files = readdirSync(MERMAID_DIR).filter((f) => f.endsWith(".mmd"));
  const results: string[] = [];

  for (const f of files) {
    results.push(renderFile(join(MERMAID_DIR, f), options));
  }

  return results;
}

export function getDiagramFiles(): string[] {
  return readdirSync(MERMAID_DIR)
    .filter((f) => f.endsWith(".mmd"))
    .map((f) => join(MERMAID_DIR, f));
}
