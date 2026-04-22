#!/usr/bin/env bun
import { renderAll } from "./index.js";

const files = renderAll();
console.log(`Rendered ${files.length} diagrams:`);
files.forEach((f) => console.log(`  - ${f}`));
