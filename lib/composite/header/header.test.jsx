import { expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { Header } from "./index";

it("gives the mobile menu button an accessible name", () => {
  const html = renderToStaticMarkup(
    <Header links={[]} title="Title" subtitle="Subtitle" />,
  );
  expect(html).toContain('aria-label="Open menu"');
});
