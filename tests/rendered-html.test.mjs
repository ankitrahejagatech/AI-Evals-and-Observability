import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

test("static export contains the TRACE 2026 conference recap", () => {
  assert.match(
    html,
    /<title>TRACE 2026 — AI Observability &amp; Testing<\/title>/i,
  );
  assert.match(html, /Ship AI/);
  assert.match(html, /Five ideas worth keeping/);
  assert.match(html, /The afternoon, traced/);
  assert.match(html, /From failure to confidence/);
  assert.match(html, /https:\/\/braintrust\.dev\/trace/);
  assert.match(html, /notes\.granola\.ai/);
  assert.doesNotMatch(
    html,
    /codex-preview|SkeletonPreview|Your site is taking shape/,
  );
});

test("static export includes the full agenda and landmarks", () => {
  for (const session of [
    "AI Observability &amp; Testing",
    "Evals are a team sport",
    "Evals are the new PRDs",
    "Building reliable agents",
  ]) {
    assert.match(html, new RegExp(session));
  }

  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /aria-label="Conference quote"/);
  assert.match(html, /<main>/);
  assert.match(html, /<footer>/);
});
