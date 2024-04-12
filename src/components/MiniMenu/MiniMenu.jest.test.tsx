import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MiniMenu, { type MiniMenuItems } from ".";

describe("MiniMenu", () => {
  const renderComponent = () =>
    render(
      <MiniMenu
        model={[
          { hashId: "about-us", title: "About Us" },
          { hashId: "five-pillars", title: "Five Pillars" },
        ]}
      />
    );

  it("should render model with hash", () => {
    const { getByRole } = renderComponent();
    expect(getByRole("link", { name: "About Us" })).toHaveAttribute(
      "href",
      "#about-us"
    );
    expect(getByRole("link", { name: "Five Pillars" })).toHaveAttribute(
      "href",
      "#five-pillars"
    );
  });

  it("should have a divider and the first one divider is followed by an anchor", () => {
    const { getAllByRole } = renderComponent();
    expect(getAllByRole("separator")).toHaveLength(1);
    expect(getAllByRole("separator")[0].previousElementSibling?.tagName).toBe(
      "A"
    );
  });
});
