import { queryByText, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer, FooterProps } from ".";

describe("Footer", () => {
  const defaultOperatingTime = {
    day: { from: "Monday", to: "Sunday" },
    time: { from: "9:00am", to: "10:00pm" },
  };
  const defaultAddress = {
    street: "Zoo Negara",
    city: "Hulu Kelang",
    postalCode: 68000,
    state: "Ampang",
    country: "Selangor",
    googleMaps: "https://maps.google.com",
  };
  const defaultPartners = [
    {
      url: "https://www.partner.com",
      imageSrc: "https://www.image.com/abc.jpg",
      alt: "partner",
    },
  ];

  const renderFooterComponent = ({
    operatingTime = defaultOperatingTime,
    address = defaultAddress,
  }: {
    operatingTime?: FooterProps["operatingTime"];
    address?: FooterProps["address"];
  }) => {
    return render(
      <Footer
        language="en"
        companyName="Zoo Negara"
        operatingTime={operatingTime}
        address={address}
        partners={[
          {
            url: "https://www.partner.com",
            imageSrc: "/abc.jpg",
            alt: "partner",
          },
        ]}
      />
    );
  };

  it("should render component correctly", () => {
    const { getByText, getByRole } = renderFooterComponent({});
    expect(getByText("© Zoo Negara")).toBeInTheDocument();
    expect(getByText("Monday - Sunday")).toBeInTheDocument();
    expect(getByText("9:00am - 10:00pm")).toBeInTheDocument();
    expect(getByText("Zoo Negara,")).toBeInTheDocument();
    expect(getByText("Hulu Kelang,")).toBeInTheDocument();
    expect(getByText("Ampang,")).toBeInTheDocument();
    expect(getByText("68000 Selangor.")).toBeInTheDocument();
    expect(getByRole("link", { name: "partner" })).toHaveAttribute(
      "href",
      "https://www.partner.com"
    );
    expect(getByRole("link", { name: "partner" })).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(getByRole("link", { name: "partner" })).toHaveAttribute(
      "rel",
      "external"
    );
  });

  it("should be memozied and forever not modified. It's a footer!", async () => {
    const { getByText, rerender } = renderFooterComponent({});
    expect(getByText("© Zoo Negara")).toBeVisible();
    rerender(
      <Footer
        companyName="Walcron"
        operatingTime={defaultOperatingTime}
        address={defaultAddress}
        partners={defaultPartners}
      />
    );
    expect(getByText("© Zoo Negara")).toBeVisible();
  });

  it("should render component with exceptional operating time", () => {
    const { getByText } = renderFooterComponent({
      operatingTime: {
        ...defaultOperatingTime,
        exception: "Not open on public holidays",
      },
    });
    expect(getByText("(Not open on public holidays)")).toBeInTheDocument();
  });

  it("should render component with city", () => {
    const { getByText } = renderFooterComponent({
      address: {
        ...defaultAddress,
        city: "A city",
      },
    });
    expect(getByText("A city,")).toBeInTheDocument();
  });

  it("should render a set of predefined labels and include maintained from 2021 till today", () => {
    const currentYearUpdated = new Date().getFullYear();

    const { getByText } = renderFooterComponent({});
    expect(getByText("Operation Hours:")).toBeInTheDocument();
    expect(getByText("Address:")).toBeInTheDocument();
    expect(getByText("Partners:")).toBeInTheDocument();
    expect(getByText("Contact Us")).toHaveAttribute("href", "/en/contact-us");
    expect(getByText("Careers")).toHaveAttribute("href", "/en/careers");
    expect(getByText("FAQ")).toHaveAttribute(
      "href",
      "/en/frequent-asked-questions"
    );
    expect(
      getByText(`- ${currentYearUpdated} all rights reserved.`)
    ).toBeInTheDocument();
  });

  it("should have a release version", () => {
    const { getByText } = renderFooterComponent({});
    expect(getByText("(ver. local)")).toBeInTheDocument();
  });

  it("should have a release of process env version", () => {
    const original_val = process.env.RELEASE_VERSION

    process.env.RELEASE_VERSION = "30101010-zoo"
    const { getByText } = renderFooterComponent({});
    expect(getByText("(ver. 30101010-zoo)")).toHaveClass("block");

    process.env.RELEASE_VERSION = original_val
  });


  it("should hide versioning if parameter contains version=none", () => {
    const originalLocation = window.location;

    Object.defineProperty(window, "location", {
      value: new URL("https://www.google.com?version=none"),
      writable: true,
    })

    process.env.RELEASE_VERSION = "30101010-zoo"
    const { getByText } = renderFooterComponent({});
    expect(getByText("(ver. 30101010-zoo)")).toHaveClass("hidden");

    Object.defineProperty(window, "location", {
      value: originalLocation,
      writable: true,
    })
  });
});
