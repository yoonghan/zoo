import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Announcement } from ".";

describe("Announcement", () => {
  const announcments = [
    "announcement 1",
    <div key="x">announcement 2</div>,
    "announcement 3",
  ];

  const renderAccordian = () =>
    render(<Announcement announcements={announcments} />);

  it("should render first component only", () => {
    const { getByText, queryByText } = renderAccordian();
    expect(getByText("announcement 1")).toBeInTheDocument();
    expect(queryByText("announcement 2")).not.toBeInTheDocument();
  });

  it("should render second component if click next", async () => {
    const { getByText, getByRole } = renderAccordian();
    await userEvent.click(getByRole("button", { name: ">" }));
    expect(getByText("announcement 2")).toBeInTheDocument();
  });

  it("should render first component if click next on last element", async () => {
    const { getByText, getByRole } = renderAccordian();
    for (let cnt = 0; cnt < announcments.length; cnt++) {
      await userEvent.click(getByRole("button", { name: ">" }));
    }
    expect(getByText("announcement 1")).toBeInTheDocument();
  });

  it("should render last component if click previous", async () => {
    const { getByText, getByRole } = renderAccordian();
    await userEvent.click(getByRole("button", { name: "<" }));
    expect(getByText("announcement 3")).toBeInTheDocument();
  });

  it("should render second component if click previous is clicked twice", async () => {
    const { getByText, getByRole } = renderAccordian();
    await userEvent.click(getByRole("button", { name: "<" }));
    await userEvent.click(getByRole("button", { name: "<" }));
    expect(getByText("announcement 2")).toBeInTheDocument();
  });
});
