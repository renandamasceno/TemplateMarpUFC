import assert from "node:assert/strict";
import test from "node:test";

import { addMiniFrameNavigation } from "../scripts/engine.mjs";

test("creates and advances section mini-frames", () => {
  const markdown = `---
marp: true
---

# Cover

---

<!-- ufc-section: Introduction -->

# First

---

# Second

---

<!-- ufc-section: Results -->

# Third
`;

  const result = addMiniFrameNavigation(markdown);

  assert.match(result, /Introduction&nbsp;&nbsp;●○.*Results&nbsp;&nbsp;○/);
  assert.match(result, /Introduction&nbsp;&nbsp;○●.*Results&nbsp;&nbsp;○/);
  assert.match(result, /Introduction&nbsp;&nbsp;○○.*Results&nbsp;&nbsp;●/);
});

test("excludes slides marked with ufc-nav off", () => {
  const markdown = `---
marp: true
---

<!-- ufc-section: Main -->

# Content

---

<!-- ufc-nav: off -->

# Closing
`;

  const result = addMiniFrameNavigation(markdown);

  assert.match(result, /Main&nbsp;&nbsp;●/);
  assert.doesNotMatch(result, /Main&nbsp;&nbsp;●●/);
  assert.doesNotMatch(result.split("# Closing")[0].split("---").at(-1), /_header/);
});

test("does not split a fenced code block at a horizontal rule", () => {
  const markdown = `---
marp: true
---

<!-- ufc-section: Code -->

\`\`\`
---
\`\`\`
`;

  const result = addMiniFrameNavigation(markdown);

  assert.match(result, /Code&nbsp;&nbsp;●/);
  assert.doesNotMatch(result, /Code&nbsp;&nbsp;●○/);
});
