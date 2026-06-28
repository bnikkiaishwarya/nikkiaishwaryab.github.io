## Plan: Redesign case studies to match the resume/document format

### Goal
Replace the current image/PDF-based case study viewer with a structured, document-style case study display that mirrors the clean resume format shown in the attached image (white page, header with project name + role, contact-style meta line, summary, competencies/tools, experience/process sections, bullet-driven content).

### What will change
1. **Data model**: Convert `FOLDER_CASE_STUDIES` from `{ pdf, thumb, pages }` into structured case study objects with fields like `title`, `role`, `duration`, `summary`, `problem`, `solution`, `process`, `tools`, `outcomes`, and `images`.
2. **Renderer**: Build a new `CaseStudyDocument` component that renders the structured data as a scrollable white document page with sections styled like the resume (header, horizontal rules, bold section titles, bullet lists, two-column skill/tools grid).
3. **Viewer shell**: Update the existing modal/portal so the document floats on a dark backdrop, similar to the attached resume thumbnail, with the existing traffic-light close controls.
4. **Desktop integration**: Keep desktop folder clicks opening the same project; the new renderer shows the document instead of the static case-study image.

### Content
I will create placeholder case-study copy based on each project's existing title/subject (e.g., Expense Tracker → finance/tracking focus, The Mind → wellness/meditation focus). You can refine the text later or provide the exact copy you want for each project.

### Out of scope (unless you ask)
- Adding new projects
- Changing the desktop icon layout
- Modifying the resume PDF itself

### Verification
- Type-check and production build pass.
- Open each project folder and confirm the document renders cleanly without truncation.

Do you want me to proceed with this approach, or did you mean something narrower (e.g., only restyle the existing image viewer frame)?