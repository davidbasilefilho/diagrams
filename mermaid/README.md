# Mermaid Diagrams

Directory for storing Mermaid diagram files.

## Usage

Import and use Mermaid in your scripts:

```javascript
import mermaid from "mermaid";

mermaid.initialize({ startOnLoad: false });

const { svg } = await mermaid.render(
  "diagram-id",
  `
  flowchart LR
    A[Start] --> B[End]
`,
);
```

## Diagram Examples

### Flowchart

```
flowchart LR
  A[Start] --> B{Decision}
  B -->|Yes| C[Action 1]
  B -->|No| D[Action 2]
```

### Sequence Diagram

```
sequenceDiagram
  Alice->>Bob: Hello Bob
  Bob->>Alice: Hi Alice
```

### ER Diagram

```
erDiagram
  CUSTOMER ||--o{ ORDER : places
  ORDER ||--|{ LINE-ITEM : contains
```

## File Naming

Use descriptive names with `.mmd` or `.md` extension:

- `architecture.mmd`
- `flow.mmd`
- `sequence-diagram.mmd`
