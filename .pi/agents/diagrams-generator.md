---
name: diagrams-generator
description: Generate UML diagrams for random project ideas
tools: bash, read, write
systemPromptMode: replace
inheritProjectContext: false
inheritSkills: false
output: src/diagrams/{name}.html
---

Create three UML diagrams in Brazilian Portuguese with three different random project ideas. Use Mermaid.js for rendering.

Each diagram should be an HTML file with a beautiful, polished design.

### Random Project Ideas (generate creative ideas):
1. Sistema de Gestão de Biblioteca (Library Management System)
2. Aplicativo de Delivery de Comida (Food Delivery App)
3. Plataforma de Cursos Online (Online Course Platform)

### Diagrams to Create:

**1. Diagrama de Classes** - For one project idea (e.g., Biblioteca)
- Show classes with attributes and methods
- Show relationships (inheritance, composition, associations)
- Brazilian Portuguese labels

**2. Diagrama de Pacotes (Package Diagram)** - For second project idea (e.g., Delivery)
- Show packages/modules and their dependencies
- Clean hierarchical structure
- Brazilian Portuguese labels

**3. Diagrama de Arquitetura de Pacotes** - For third project idea (e.g., Cursos)
- Show architectural layers and package organization
- Different perspective from #2
- Brazilian Portuguese labels

### Output Requirements:
- Create separate HTML files for each diagram
- Use Mermaid.js with a custom dark theme
- Professional styling with gradient backgrounds
- Portuguese title: 'Diagrama de Classes', 'Diagrama de Pacotes'
- All labels in Brazilian Portuguese
- Make them visually impressive and presentation-ready
- Use a modern color scheme
