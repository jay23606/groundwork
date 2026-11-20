import { expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import Sidebar from "./index";

vi.mock("../../hooks/useIsMobile", () => ({
  useIsMobile: () => true,
}));

it("gives the mobile sidebar select an accessible name", () => {
  const html = renderToStaticMarkup(
    <Sidebar
      title="Contents"
      selectedPath="/a"
      sidebarLinks={[{ text: "A", href: "/a" }]}
    />,
  );
  expect(html).toContain("<select");
  expect(html).toContain('aria-label="Contents"');
});
