import { render, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Menu } from ".";
import { ReactNode } from "react";
import userEvent from "@testing-library/user-event";

describe("Menu", () => {
  const renderMenuWithItems = (shortcutComponent?: ReactNode) =>
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
          {
            label: "News",
            url: "/sample-us",
          },
        ]}
        mobileHomeText="Zoo Negara Malaysia"
        shortcutComponent={shortcutComponent}
      />
    );

  it("should will display mobile home text that links to home", () => {
    const { getByRole } = renderMenuWithItems();
    expect(getByRole("link", { name: "Zoo Negara Malaysia" })).toHaveAttribute(
      "href",
      "/"
    );
    expect(getByRole("link", { name: "home link" })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("should will display a main logo", () => {
    const { getByText } = renderMenuWithItems();
    expect(getByText("Zoo Negara")).toBeVisible();
    expect(getByText("About Us")).toBeVisible();
    expect(getByText("Zoo Negara Logo")).toBeVisible();
  });

  it("should display menu correctly", () => {
    const { getByText } = renderMenuWithItems();
    expect(getByText("Zoo Negara")).toBeVisible();
    expect(getByText("About Us")).toBeVisible();
    expect(getByText("Zoo Negara Logo")).toBeVisible();
  });

  it("should be memozied and forever not modified. It's a menu!", async () => {
    const { rerender, getByText } = renderMenuWithItems();
    expect(getByText("Zoo Negara")).toBeVisible();
    rerender(<Menu model={[]} mobileHomeText="Not Memoized" />);
    expect(getByText("Zoo Negara")).toBeVisible();
  });

  it("should replace submenu with main menu's root if url of submenu is missing", async () => {
    const { getByRole, getByText } = renderMenuWithItems();
    const expectedRootUrl = "/about-us";
    expect(getByRole("menuitem", { name: "Zoo Negara" })).toHaveAttribute(
      "href",
      expectedRootUrl
    );
    expect(getByRole("menuitem", { name: "About Us" })).toBeInTheDocument();
    expect(getByText("About Us")).toHaveAttribute("href", expectedRootUrl);
  });

  it("should replace submenu url with # with topMenu", async () => {
    const { getByText } = renderMenuWithItems();
    expect(getByText("Zoo Negara Logo")).toHaveAttribute(
      "href",
      "/about-us#logo"
    );
  });

  it("should have top menu anchor that have child includes a className to prevent click", async () => {
    const { getByRole } = renderMenuWithItems();

    expect(getByRole("menuitem", { name: "Zoo Negara" })).toHaveClass(
      "top-menu-link"
    );

    expect(getByRole("menuitem", { name: "News" })).not.toHaveClass(
      "top-menu-link"
    );
  });

  it("should have a main menu label for mobile display", () => {
    const { getByLabelText } = renderMenuWithItems();
    expect(getByLabelText("Main Menu")).toBeInTheDocument();
  });

  it("should have a main menu label for mobile display", () => {
    const { getByLabelText } = renderMenuWithItems();
    expect(getByLabelText("Main Menu")).toBeInTheDocument();
  });

  it("should not render childless sub menu with hover capabilites", () => {
    const { getByText } = renderMenuWithItems();
    const emptyMenuItemParent = getByText("News").parentNode?.parentElement;
    expect(emptyMenuItemParent).toHaveAttribute("role", "presentation");
    expect(emptyMenuItemParent?.className).toStrictEqual("");
  });

  it("should render shortcut components if exist", () => {
    const { getAllByRole, getByRole } = renderMenuWithItems(
      <button>I am a shortcut button</button>
    );
    expect(
      getAllByRole("button", { name: "I am a shortcut button" })
    ).toHaveLength(2);

    //one of the button is menu item
    expect(
      within(
        getByRole("menuitem", { name: "I am a shortcut button" })
      ).getByRole("button", { name: "I am a shortcut button" })
    ).toBeInTheDocument();
  });

  describe("Hiding side menu in mobile", () => {
    it("should uncheck the checkbox of side menu, as mobile have cache to stay on page while render new page", async () => {
      const { getByRole } = renderMenuWithItems();
      await userEvent.click(getByRole("checkbox", { name: "Main Menu" }));
      expect(getByRole("checkbox", { name: "Main Menu" })).toBeChecked();

      await userEvent.click(getByRole("menuitem", { name: "News" }));
      expect(getByRole("checkbox", { name: "Main Menu" })).not.toBeChecked();

      //retry
      await userEvent.click(getByRole("menuitem", { name: "News" }));
      expect(getByRole("checkbox", { name: "Main Menu" })).not.toBeChecked();
    });

    it("should not uncheck if the clicks are on links that are parent with child", async () => {
      const { getByRole } = renderMenuWithItems();
      await userEvent.click(getByRole("checkbox", { name: "Main Menu" }));
      expect(getByRole("checkbox", { name: "Main Menu" })).toBeChecked();

      await userEvent.click(getByRole("menuitem", { name: "Zoo Negara" }));
      expect(getByRole("checkbox", { name: "Main Menu" })).toBeChecked();
    });

    it("should uncheck if the clicks are on child", async () => {
      const { getByRole } = renderMenuWithItems();
      await userEvent.click(getByRole("checkbox", { name: "Main Menu" }));
      expect(getByRole("checkbox", { name: "Main Menu" })).toBeChecked();

      await userEvent.click(getByRole("menuitem", { name: "About Us" }));
      expect(getByRole("checkbox", { name: "Main Menu" })).not.toBeChecked();

      //retry
      await userEvent.click(getByRole("menuitem", { name: "About Us" }));
      expect(getByRole("checkbox", { name: "Main Menu" })).not.toBeChecked();
    });
  });
});
