import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Announcement } from ".";

describe("Announcement", () => {
  const announcements = ["announcement 1", "announcement 2", "announcement 3"];

  const renderAnnouncement = () =>
    render(
      <Announcement
        ariaAnnouncementTitle={"Announcement Title"}
        announcements={announcements}
      />
    );

  it("should be aria friendly", () => {
    renderAnnouncement();
    expect(
      screen.getByRole("status", { name: "Announcement Title" })
    ).toBeInTheDocument();
  });

  it("should render first component only", () => {
    renderAnnouncement();
    expect(screen.getByText("announcement 1")).toBeInTheDocument();
    expect(screen.queryByText("announcement 2")).not.toBeInTheDocument();
  });

  it("should render second component if click next", async () => {
    renderAnnouncement();
    await userEvent.click(screen.getByRole("button", { name: "next announcement" }));
    expect(screen.getByText("announcement 2")).toBeInTheDocument();
  });

  it("should render first component if click next on last element", async () => {
    renderAnnouncement();
    for (let cnt = 0; cnt < announcements.length; cnt++) {
      await userEvent.click(screen.getByRole("button", { name: "next announcement" }));
    }
    expect(screen.getByText("announcement 1")).toBeInTheDocument();
  });

  it("should render last component if click previous", async () => {
    renderAnnouncement();
    await userEvent.click(
      screen.getByRole("button", { name: "previous announcement" })
    );
    expect(screen.getByText("announcement 3")).toBeInTheDocument();
  });

  it("should render second component if click previous is clicked twice", async () => {
    renderAnnouncement();
    await userEvent.click(
      screen.getByRole("button", { name: "previous announcement" })
    );
    await userEvent.click(
      screen.getByRole("button", { name: "previous announcement" })
    );
    expect(screen.getByText("announcement 2")).toBeInTheDocument();
  });

  it("should have a label name for close", () => {
    renderAnnouncement();
    expect(screen.getByRole("checkbox", { name: "Close Announcement" })).toBeInTheDocument();
  });

  it("should have a test id for playwright test", () => {
    renderAnnouncement();
    expect(screen.getByTestId("announcement")).toBeInTheDocument();
  });

  describe("no announcement", () => {
    const renderEmptyAnnouncements = () =>
      render(<Announcement announcements={[]} ariaAnnouncementTitle={""} />);

    it("should not have navigation buttons", async () => {
      renderEmptyAnnouncements();
      expect(
        screen.queryByRole("button", { name: "next announcement" })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "previous announcement" })
      ).not.toBeInTheDocument();
    });
  });

  describe("one announcement with bolded html", () => {
    const renderEmptyAnnouncements = () =>
      render(
        <Announcement
          announcements={["one *announcement"]}
          ariaAnnouncementTitle={""}
        />
      );

    it("should not have navigation buttons", async () => {
      renderEmptyAnnouncements();
      expect(
        screen.queryByRole("button", { name: "next announcement" })
      ).not.toBeInTheDocument();
      expect(
        screen.queryByRole("button", { name: "previous announcement" })
      ).not.toBeInTheDocument();
      expect(screen.getByText("one").parentElement).toHaveClass("only-one");
      expect(screen.getByText("announcement").tagName).toBe("STRONG");
    });
  });
});
