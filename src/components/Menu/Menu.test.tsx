import { render, screen } from "@testing-library/react";
import { Menu } from ".";
import { ReactNode } from "react";
import userEvent from "@testing-library/user-event";

describe("Menu", () => {
  const renderMenuWithItems = (
    isDesktop = false,
    shortcutComponent?: ReactNode
  ) =>
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
        mobileStyle={!isDesktop ? { display: "block" } : { display: "none" }}
        desktopStyle={isDesktop ? { display: "block" } : { display: "none" }}
        language="en"
      />
    );

  it("should will display mobile home text that links to home", () => {
    renderMenuWithItems();
    expect(screen.getByRole("link", { name: "Zoo Negara Malaysia" })).toHaveAttribute(
      "href",
      "/en"
    );
    expect(screen.getByText("Hamburger Menu")).toHaveClass("visually-hidden");
    expect(screen.getByLabelText("Main Menu")).toBeInTheDocument();

    expect(screen.getByRole("menuitem", { name: "Zoo Negara" })).toBeVisible();
    expect(screen.getByRole("radio", { name: "Zoo Negara" })).toBeVisible();
    expect(screen.getByRole("menuitem", { name: "About Us" })).toBeVisible();
    expect(screen.getByRole("menuitem", { name: "Zoo Negara Logo" })).toBeVisible();
  });

  it("should display menu correctly for desktop", () => {
    renderMenuWithItems(true);
    expect(screen.getByRole("link", { name: "home link" })).toHaveAttribute(
      "href",
      "/en"
    );

    expect(screen.getByRole("menuitem", { name: "Zoo Negara" })).toBeVisible();
    expect(screen.getByRole("menuitem", { name: "About Us" })).toBeVisible();
    expect(screen.getByRole("menuitem", { name: "Zoo Negara Logo" })).toBeVisible();
  });

  it("should be memozied and forever not modified. It's a menu!", async () => {
    const { rerender } = renderMenuWithItems();
    expect(screen.getByText("Zoo Negara Malaysia")).toBeVisible();
    rerender(<Menu model={[]} mobileHomeText="Not Memoized" language="en" />);
    expect(screen.getByText("Zoo Negara Malaysia")).toBeVisible();
  });

  it("should replace submenu with main menu's root if url of submenu is missing", async () => {
    renderMenuWithItems(true);
    const expectedRootUrl = "/en/about-us";
    expect(screen.getByRole("menuitem", { name: "Zoo Negara" })).toHaveAttribute(
      "href",
      expectedRootUrl
    );
    expect(screen.getByRole("menuitem", { name: "About Us" })).toHaveAttribute(
      "href",
      expectedRootUrl
    );
  });

  it("should replace submenu url with # with topMenu", async () => {
    renderMenuWithItems(true);
    expect(screen.getByRole("menuitem", { name: "Zoo Negara Logo" })).toHaveAttribute(
      "href",
      "/en/about-us#logo"
    );
  });

  it("should not have link for mobile view, and click checks the radio", async () => {
    renderMenuWithItems(false);

    expect(screen.getByRole("menuitem", { name: "Zoo Negara" })).not.toHaveAttribute(
      "href"
    );

    expect(screen.getByRole("radio", { name: "Zoo Negara" })).not.toBeChecked();
    await userEvent.click(screen.getByRole("menuitem", { name: "Zoo Negara" }));
    expect(screen.getByRole("radio", { name: "Zoo Negara" })).toBeChecked();

    expect(screen.getByRole("menuitem", { name: "News" })).toHaveAttribute("href");
  });

  it("should render shortcut components for mobile if exist", () => {
    renderMenuWithItems(
      false,
      <button>I am a shortcut button</button>
    );
    expect(
      screen.getByRole("button", { name: "I am a shortcut button" })
    ).toBeInTheDocument();
  });

  it("should render shortcut components for desktop if exist", () => {
    renderMenuWithItems(
      false,
      <button>I am a shortcut button</button>
    );
    expect(
      screen.getByRole("button", { name: "I am a shortcut button" })
    ).toBeInTheDocument();
  });

  describe("Hiding side menu in mobile", () => {
    const renderMenuItemAndGetCheckBox = () => {
      renderMenuWithItems();
      return {
        sideMenuCheckBox: screen.getByRole("checkbox", { name: "Main Menu" }),
        getByRole: screen.getByRole,
      };
    };

    const assertIsSideMenuUncheck = (element: Element) => {
      expect(element).not.toBeChecked();
      expect(document.body.style.overflow).toBe("auto");
    };

    it("should uncheck the checkbox of side menu, as mobile have cache to stay on page while render new page", async () => {
      const { sideMenuCheckBox, getByRole } = renderMenuItemAndGetCheckBox();

      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();

      await userEvent.click(getByRole("menuitem", { name: "News" }));
      assertIsSideMenuUncheck(sideMenuCheckBox);

      //retry
      await userEvent.click(getByRole("menuitem", { name: "News" }));
      assertIsSideMenuUncheck(sideMenuCheckBox);
    });

    it("should not uncheck if the clicks are on links that are parent with child", async () => {
      const { sideMenuCheckBox, getByRole } = renderMenuItemAndGetCheckBox();
      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();

      await userEvent.click(getByRole("menuitem", { name: "Zoo Negara" }));
      expect(sideMenuCheckBox).toBeChecked();
    });

    it("should uncheck if the clicks are on child", async () => {
      const { getByRole, sideMenuCheckBox } = renderMenuItemAndGetCheckBox();
      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();

      await userEvent.click(getByRole("menuitem", { name: "About Us" }));
      expect(sideMenuCheckBox).not.toBeChecked();

      //retry
      await userEvent.click(getByRole("menuitem", { name: "About Us" }));
      expect(sideMenuCheckBox).not.toBeChecked();
    });

    it("should set body disable from scrolling if checked", async () => {
      const { sideMenuCheckBox } = renderMenuItemAndGetCheckBox();

      //check
      await userEvent.click(sideMenuCheckBox);
      expect(sideMenuCheckBox).toBeChecked();
      expect(document.body.style.overflow).toBe("hidden");

      //uncheck
      await userEvent.click(sideMenuCheckBox);
      assertIsSideMenuUncheck(sideMenuCheckBox);
    });


    it("should be able to fake ref", async () => {
      render(
        <Menu
          model={[
            {
              label: "News",
              url: "/sample-us",
            },
          ]}
          mobileHomeText="Zoo Negara Malaysia"
          desktopStyle={{ display: "none" }}
          language="en"
          fakeRef={true}
        />
      );

      const checkbox = screen.getByRole("checkbox", { name: "Main Menu" })
      await userEvent.click(checkbox);
      expect(checkbox).toBeChecked()

      await userEvent.click(screen.getByRole("menuitem", { name: "News" }));
      expect(checkbox).toBeChecked()
    });
  });
});
