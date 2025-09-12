'use client'

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DownloadButton from ".";
import { trackEvent } from "@/util/ga";

jest.mock("@/util/ga", () => ({
  trackEvent: jest.fn(),
}));

describe("DownloadButton", () => {
  it("should call GA event on click", async () => {
    render(<DownloadButton lng="en" text="Download" />);

    const downloadBtn = screen.getByRole("link", { name: "Download" });
    await userEvent.click(downloadBtn);

    expect(trackEvent).toHaveBeenCalledWith(
      "Button",
      "Click",
      "Download Map - en",
    );
  });
});
