import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Menu } from ".";

describe("Menu", () => {
  const renderMenuWithItems = () =>
    render(
      <Menu
        model={[
          {
            label: "Zoo Negara",
            url: "/about-us",
            items: [
              {
                label: "About Us",
              },
              {
                label: "Zoo Negara Logo",
                url: "#logo",
              },
            ],
          },
        ]}
      />
    );

  it("should display menu correctly", () => {
    const { getByText } = renderMenuWithItems();
    expect(getByText("Zoo Negara")).toBeVisible();
    expect(getByText("About Us")).toBeVisible();
    expect(getByText("Zoo Negara Logo")).toBeVisible();
  });

  it("should be memozied and forever not modified. It's a menu!", async () => {
    const { rerender, getByText } = renderMenuWithItems();
    expect(getByText("Zoo Negara")).toBeVisible();
    rerender(<Menu model={[]} />);
    expect(getByText("Zoo Negara")).toBeVisible();
  });

  it("should replace submenu with main menu's root if url of submenu is missing", async () => {
    const { getByRole, queryByRole, getByText } = renderMenuWithItems();
    const expectedRootUrl = "/about-us";
    expect(getByRole("menuitem", { name: "Zoo Negara" })).toHaveAttribute(
      "href",
      expectedRootUrl
    );
    expect(
      queryByRole("menuitem", { name: "About Us" })
    ).not.toBeInTheDocument();

    expect(getByText("About Us")).toHaveAttribute("href", expectedRootUrl);
  });
});
