import { render, screen } from "@testing-library/react";
import { LanguageDropdown } from "./index";
import userEvent from "@testing-library/user-event";

describe("LanguageDropdown", () => {
  const renderComponent = (props = {}) => {
    const defaultProps = {
      defaultValue: "en",
    };
    return render(<LanguageDropdown {...defaultProps} {...props} />);
  };

  it("should render without crashing", () => {
    renderComponent();
    expect(screen.getByRole("combobox")).toHaveDisplayValue("English");
  });

  it("should open when clicked", async () => {
    renderComponent();
    const selectElement = screen.getByRole("combobox");
    await userEvent.click(selectElement);
    expect(selectElement).toHaveFocus();
  });

  it("should redirect when an option is selected", async () => {
    window.location.assign = jest.fn();
    renderComponent();
    const selectElement = screen.getByRole("combobox");
    await userEvent.selectOptions(selectElement, "Bahasa");
    expect(window.location.assign).toHaveBeenCalledWith("/ms");
  });

  it("should display the correct options", () => {
    renderComponent({ defaultValue: "ms" });
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toHaveValue("ms");
  });

  it("should render desktop view and hide mobile styles", () => {
    renderComponent({
      desktopStyle: { display: "block" },
      mobileStyle: { display: "none" },
    });
    const desktopDiv = screen.getAllByText("Bahasa");
    expect(desktopDiv[0]).toBeVisible();
    expect(desktopDiv[1]).not.toBeVisible();
    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
  });

  it("should render mobile view and hide desktop styles", () => {
    renderComponent({
      mobileStyle: { display: "block" },
      desktopStyle: { display: "none" },
    });
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
    const desktopDiv = screen.getAllByText("English");
    expect(desktopDiv[0]).not.toBeVisible();
    expect(desktopDiv[1]).toBeVisible();
  });
});
