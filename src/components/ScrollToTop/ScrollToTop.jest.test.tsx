import "@testing-library/jest-dom";
import { act, fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScrollToTopWithNoSSR from "./ScrollToTopNoSSR";

describe("ScrollToTop", () => {
  const scrollPoint = 501;

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  const advanceScroll = () => {
    fireEvent.scroll(window, {});
    act(() => {
      jest.advanceTimersByTime(51);
    });
  };

  it("should render scroller when the right location is met", async () => {
    const { getByText } = render(<ScrollToTopWithNoSSR />);

    const scrollButton = getByText("Top");

    expect(scrollButton).toHaveClass("hidden");

    window.scrollTo(0, scrollPoint);
    advanceScroll();
    expect(scrollButton).not.toHaveClass("hidden");

    //test return
    const timedUserEvent = userEvent.setup({
      advanceTimers: jest.advanceTimersByTime,
    });
    await timedUserEvent.click(scrollButton);
    expect(window.scrollY).toBe(0);
    advanceScroll();
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
