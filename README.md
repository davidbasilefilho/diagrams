# Mermaid Diagram Renderer

Render [Mermaid](https://mermaid.js.org/) diagrams from `.mmd` files to SVG using the official Mermaid CLI.

## Requirements

- [Bun](https://bun.sh)

## Setup

```bash
bun install
```

## Usage

Render all diagrams in the `mermaid/` directory to `out/`:

```bash
bun run render
```

Expected output:

```
Rendered 3 diagrams:
  - out/diagrama-atividades-cursos.svg
  - out/diagrama-classes-biblioteca.svg
  - out/diagrama-pacotes-delivery.svg
```

### Programmatic API

Import and use in your own scripts:

```typescript
import { renderFile, renderAll, getDiagramFiles } from "./src/index.js";

// Render a single diagram
const outputPath = renderFile("mermaid/my-diagram.mmd");

// Render all diagrams
const files = renderAll();

// Get all .mmd files
const diagrams = getDiagramFiles();
```

## Project Structure

```
diagrams/
├── mermaid/           # Source .mmd diagram files
│   ├── diagrama-atividades-cursos.mmd
│   ├── diagrama-classes-biblioteca.mmd
│   └── diagrama-pacotes-delivery.mmd
├── out/               # Rendered SVG output
├── src/
│   ├── cli.ts         # CLI entry point
│   ├── index.ts       # Public exports
│   └── render.ts      # Core rendering logic
├── package.json
└── mise.toml
```

## Diagram Types Supported

The project includes examples of:

- **Flowchart** - Activity and process flows
- **Class Diagram** - Object-oriented class relationships
- **Architecture Beta** - System architecture visualization

## Commands

| Command          | Description                |
| ---------------- | -------------------------- |
| `bun run render` | Render all diagrams to SVG |
| `bun run lint`   | Lint with oxlint           |
| `bun run format` | Format with oxfmt          |
| `bun run check`  | Run lint and format        |
| `bun run clean`  | Remove output directory    |
