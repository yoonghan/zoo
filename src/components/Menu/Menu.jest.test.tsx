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

  it("should display top main menu correctly", () => {
    const { getByText, queryByText } = renderMenuWithItems();
    expect(getByText("Zoo Negara")).toBeVisible();
    expect(queryByText("About Us")).not.toBeInTheDocument();
  });
});
