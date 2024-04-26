import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScrollToTopWithNoSSR from "./ScrollToTopNoSSR";

describe("ScrollToTop", () => {
  const scrollPoint = 501;

  it("should render scroller when the right location is met", async () => {
    const { getByText } = render(<ScrollToTopWithNoSSR />);

    const scrollButton = getByText("Top");

    expect(scrollButton).toHaveClass("hidden");

    window.scrollTo(0, scrollPoint);
    fireEvent.scroll(window, {});
    expect(scrollButton).not.toHaveClass("hidden");

    await userEvent.click(scrollButton);
    expect(window.scrollY).toBe(0);
    fireEvent.scroll(window, {});
    expect(scrollButton).toHaveClass("hidden");
  });

  it("should unmount gracefully", async () => {
    const adder = jest
      .spyOn(window, "addEventListener")
      .mockImplementation(() => {});
    const remover = jest
      .spyOn(window, "removeEventListener")
      .mockImplementation(() => {});

    const { unmount } = render(<ScrollToTopWithNoSSR />);

    expect(adder).toHaveBeenCalledWith("scroll", expect.anything());

    unmount();

    expect(remover).toHaveBeenCalledWith("scroll", expect.anything());
  });
});
