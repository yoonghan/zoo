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
    expect(screen.getByRole("link", { name: "English" })).toBeInTheDocument;
    expect(screen.getByRole("link", { name: "Bahasa" })).toBeInTheDocument;
    expect(screen.getByRole("link", { name: "中文" })).toBeInTheDocument;
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

  describe("mobile view", () => {
    const renderMobileView = (props = {}) =>
      renderComponent({
        mobileStyle: { display: "block" },
        desktopStyle: { display: "none" },
        ...props,
      });

    it("should render mobile view and hide desktop styles", () => {
      renderMobileView();
      const selectElement = screen.getByRole("combobox");
      expect(selectElement).toBeInTheDocument();
      const desktopDiv = screen.getAllByText("English");
      expect(desktopDiv[0]).not.toBeVisible();
      expect(desktopDiv[1]).toBeVisible();
    });

    it("should open for mobile when clicked", async () => {
      renderMobileView();
      const selectElement = screen.getByRole("combobox");
      await userEvent.click(selectElement);
      expect(selectElement).toHaveFocus();
    });

    it("should redirect for mobile when an option is selected", async () => {
      window.location.assign = jest.fn();
      renderMobileView();
      const selectElement = screen.getByRole("combobox");
      await userEvent.selectOptions(selectElement, "Bahasa");
      expect(window.location.assign).toHaveBeenCalledWith("/ms");
    });

    it("should display the correct options", () => {
      renderMobileView({
        defaultValue: "ms",
      });
      const selectElement = screen.getByRole("combobox");
      expect(selectElement).toHaveValue("ms");
    });
  });
});
