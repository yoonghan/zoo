'use client'

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReactGA from "react-ga4";
import DownloadButton from ".";

jest.mock("react-ga4");

describe("DownloadButton", () => {
  it("should call GA event on click", async () => {
    render(<DownloadButton lng="en" text="Download" />);

    const downloadBtn = screen.getByRole("link", { name: "Download" });
    await userEvent.click(downloadBtn);

    expect(ReactGA.event).toHaveBeenCalledWith({
      category: "Button",
      action: "Click",
      label: "Download Map - en",
    });
  });
});
