import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MiniMenu from ".";
import userEvent from "@testing-library/user-event";

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

  it("should be memozied and forever not modified. It's a menu!", () => {
    const { rerender, getByText } = renderComponent();
    expect(getByText("About Us")).toBeVisible();
    rerender(<MiniMenu model={[]} />);
    expect(getByText("About Us")).toBeVisible();
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
      const { getByRole } = renderComponentWithContainer();
      expect(getByRole("navigation").classList.contains("sticky")).toBeFalsy();
      window.scrollTo(0, 200);
      fireEvent.scroll(window, {});
      expect(getByRole("navigation")).toHaveClass("sticky");
    });

    it("should remove sticky when class scrolls down then up", () => {
      const { getByRole } = renderComponentWithContainer();
      window.scrollTo(0, 200);
      fireEvent.scroll(window, {});
      expect(getByRole("navigation")).toHaveClass("sticky");
      window.scrollTo(0, -1);
      fireEvent.scroll(window, {});
      expect(getByRole("navigation").classList.contains("sticky")).toBeFalsy();
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
    const renderScrollIntoViewComponent = (
      onScrollIntoViewMonitor = () => {}
    ) =>
      render(
        <MiniMenu
          model={[
            { hashId: "about-us", title: "About Us" },
            { hashId: "five-pillars", title: "Five Pillars" },
          ]}
          onScrollIntoViewMonitor={onScrollIntoViewMonitor}
        />
      );

    it("should call scrollToView to horizontally scroll to itself", async () => {
      const { getByRole } = renderScrollIntoViewComponent();
      const fivePillarsElem = getByRole("link", { name: "Five Pillars" });
      const scrollIntoViewCall = jest
        .spyOn(fivePillarsElem, "scrollIntoView")
        .mockImplementation(() => {});

      await userEvent.click(fivePillarsElem);

      expect(scrollIntoViewCall).toHaveBeenCalledWith({
        behavior: "instant",
        inline: "center",
      });

      scrollIntoViewCall.mockReset();
    });

    it("should underline and italize which anchor is selected", async () => {
      window.location.hash = "";
      const { getByRole } = renderScrollIntoViewComponent();

      //first gets italized
      expect(getByRole("link", { name: "About Us" })).toHaveClass(
        "italic underline"
      );

      const nextLink = getByRole("link", { name: "Five Pillars" });
      await userEvent.click(nextLink);
      expect(nextLink).toHaveClass("italic underline");
    });

    it("should select the right link base on # value on load", () => {
      window.location.hash = "five-pillars";
      const { getByRole } = renderScrollIntoViewComponent();

      expect(getByRole("link", { name: "Five Pillars" })).toHaveClass(
        "italic underline"
      );

      window.location.hash = "";
    });

    it("should not trigger scrollIntoView if hash is empty to minimenu to be in focus during load", async () => {
      const onScrollIntoViewMonitorFn = jest.fn();
      window.location.hash = "";
      const { getByRole } = renderScrollIntoViewComponent(
        onScrollIntoViewMonitorFn
      );

      expect(onScrollIntoViewMonitorFn).not.toHaveBeenCalled();

      await userEvent.click(getByRole("link", { name: "Five Pillars" }));

      expect(onScrollIntoViewMonitorFn).toHaveBeenCalled();
    });
  });
});
