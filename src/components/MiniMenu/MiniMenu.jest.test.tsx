import { act, fireEvent, render, screen } from "@testing-library/react";
import MiniMenu from ".";
import { disconnect, intersectionFn } from "@/__mocks__/intersectionObserver";

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
    renderComponent();
    fireEvent.scroll(window, {});

    expect(screen.getByRole("link", { name: "About Us" })).toHaveAttribute(
      "href",
      "#about-us"
    );
    expect(screen.getByRole("link", { name: "Five Pillars" })).toHaveAttribute(
      "href",
      "#five-pillars"
    );
  });

  it("should be able to fake ref", () => {
    render(
      <MiniMenu
        model={[
          { hashId: "about-us", title: "About Us" },
        ]}
        fakeNavBarRef={true}
      />
    );
    fireEvent.scroll(window, {});

    expect(screen.getByRole("link", { name: "About Us" })).toHaveAttribute(
      "href",
      "#about-us"
    );
  });

  it("should have a divider and the first one divider is followed by an anchor", () => {
    renderComponent();
    expect(screen.getAllByRole("separator")).toHaveLength(1);
    expect(screen.getAllByRole("separator")[0].previousElementSibling?.tagName).toBe(
      "A"
    );
  });

  describe("sticky menu", () => {
    const renderComponentWithContainer = (scrollMonitorFn = jest.fn()) =>
      render(
        <div>
          <MiniMenu
            model={[{ hashId: "long-list", title: "Long List" }]}
            onScrollMonitor={scrollMonitorFn}
          />
        </div>
      );

    it("should add sticky class when scrolled over a distance", () => {
      renderComponentWithContainer();
      expect(screen.getByRole("navigation").classList.contains("sticky")).toBeFalsy();
      window.scrollTo(0, 200);
      fireEvent.scroll(window, {});
      expect(screen.getByRole("navigation")).toHaveClass("sticky");
    });

    it("should remove sticky when class scrolls down then up", () => {
      renderComponentWithContainer();
      window.scrollTo(0, 200);
      fireEvent.scroll(window, {});
      expect(screen.getByRole("navigation")).toHaveClass("sticky");
      window.scrollTo(0, -1);
      fireEvent.scroll(window, {});
      expect(screen.getByRole("navigation").classList.contains("sticky")).toBeFalsy();
    });

    it("unmount should not throw exception", () => {
      const scrollMonitorFn = jest.fn();
      const { unmount } = renderComponentWithContainer(scrollMonitorFn);
      window.scrollTo(0, 200);
      fireEvent.scroll(window, {});
      expect(scrollMonitorFn).toHaveBeenCalledTimes(1);
      unmount();
      window.scrollTo(0, 200);
      fireEvent.scroll(window, {});
      expect(scrollMonitorFn).toHaveBeenCalledTimes(1);
    });
  });

  describe("link click", () => {
    it("should call scrollToView to horizontally scroll to itself and italize it", async () => {
      renderComponent();
      const fivePillarsElem = screen.getByRole("link", { name: "Five Pillars" });
      const scrollIntoViewCall = jest
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .spyOn(fivePillarsElem as any, "scrollIntoViewIfNeeded")
        .mockImplementation(() => { });

      act(() => {
        intersectionFn([
          {
            target: { id: "five-pillars" },
            isIntersecting: true,
            boundingClientRect: {
              top: 0,
              left: 0,
            },
          },
        ]);
      });

      expect(fivePillarsElem).toHaveClass("italic underline");

      expect(scrollIntoViewCall).toHaveBeenCalledWith({
        behavior: "instant",
        inline: "center",
      });

      scrollIntoViewCall.mockReset();
    });

    it("should default to 0 if hash is not valid", async () => {
      const { getByRole } = renderComponent();

      act(() => {
        intersectionFn([
          {
            target: { id: "not-valid" },
            isIntersecting: true,
            boundingClientRect: {
              top: 0,
              left: 0,
            },
          },
        ]);
      });

      //first gets italized
      expect(getByRole("link", { name: "About Us" })).toHaveClass(
        "italic underline"
      );
    });

    it("should disconnect when unmount", () => {
      const { unmount } = renderComponent();
      unmount();
      expect(disconnect).toHaveBeenCalledTimes(1);
    });
  });
});
