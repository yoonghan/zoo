import { render, screen } from "@testing-library/react";
import { Footer, FooterProps } from ".";

describe("Footer", () => {
  const defaultOperatingTime = {
    day: { from: "Monday", to: "Sunday" },
    time: { from: "9:00am", to: "10:00pm" },
    lastAdmissionTime: "Last admission time at 4.00pm",
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
    partners = [
      {
        url: "https://www.partner.com",
        imageSrc: "/abc.jpg",
        alt: "partner",
      },
    ]
  }: {
    operatingTime?: FooterProps["operatingTime"];
    address?: FooterProps["address"];
    partners?: FooterProps["partners"];
  }) => {
    return render(
      <Footer
        language="en"
        companyName="Zoo Negara"
        operatingTime={operatingTime}
        address={address}
        partners={partners}
        labels={
          {
            operationHours: "Operation Hours",
            address: "Address",
            partners: "Partners",
            maintainedInfo: "all rights reserved.",
            contactUs: "Contact Zoo Negara",
            careers: "Careers",
            faq: "FAQ",
            sitemap: "Sitemap",
          }
        }
      />
    );
  };

  it("should render component correctly", () => {
    renderFooterComponent({});
    expect(screen.getByText("© Zoo Negara")).toBeInTheDocument();
    expect(screen.getByText("Monday - Sunday")).toBeInTheDocument();
    expect(screen.getByText("9:00am - 10:00pm")).toBeInTheDocument();
    expect(screen.getByText("(Last admission time at 4.00pm)")).toBeInTheDocument();
    expect(screen.getByText("Zoo Negara,")).toBeInTheDocument();
    expect(screen.getByText("Hulu Kelang,")).toBeInTheDocument();
    expect(screen.getByText("Ampang,")).toBeInTheDocument();
    expect(screen.getByText("68000 Selangor.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "partner" })).toHaveAttribute(
      "href",
      "https://www.partner.com"
    );
    expect(screen.getByRole("link", { name: "partner" })).toHaveAttribute(
      "target",
      "_blank"
    );
    expect(screen.getByRole("link", { name: "partner" })).toHaveAttribute(
      "rel",
      "external"
    );
  });

  it("should be memozied and forever not modified. It's a footer!", async () => {
    const { rerender } = renderFooterComponent({});
    expect(screen.getByText("© Zoo Negara")).toBeVisible();
    rerender(
      <Footer
        language="en"
        companyName="Walcron"
        operatingTime={defaultOperatingTime}
        address={defaultAddress}
        partners={defaultPartners}
        labels={
          {
            operationHours: "Operation Hours",
            address: "Address",
            partners: "Partners",
            maintainedInfo: "all rights reserved.",
            contactUs: "Contact Zoo Negara",
            careers: "Careers",
            faq: "FAQ",
            sitemap: "Sitemap",
          }
        }
      />
    );
    expect(screen.getByText("© Zoo Negara")).toBeVisible();
  });

  it("should render component with city", () => {
    renderFooterComponent({
      address: {
        ...defaultAddress,
        city: "A city",
      },
    });
    expect(screen.getByText("A city,")).toBeInTheDocument();
  });

  it("should render a set of predefined labels and include maintained from 2021 till today", () => {
    const currentYearUpdated = new Date().getFullYear();

    renderFooterComponent({});
    expect(screen.getByText("Operation Hours:")).toBeInTheDocument();
    expect(screen.getByText("Address:")).toBeInTheDocument();
    expect(screen.getByText("Partners:")).toBeInTheDocument();
    expect(screen.getByText("Contact Zoo Negara")).toHaveAttribute("href", "/en/contact-us");
    expect(screen.getByText("Careers")).toHaveAttribute("href", "/en/careers");
    expect(screen.getByText("FAQ")).toHaveAttribute(
      "href",
      "/en/frequent-asked-questions"
    );
    expect(
      screen.getByText(`- ${currentYearUpdated} all rights reserved.`)
    ).toBeInTheDocument();
  });

  it("should should not render partners section if partners are empty", () => {
    renderFooterComponent({ partners: [] });
    expect(screen.queryByText("Partners:")).not.toBeInTheDocument();
  });

  it("should have a release version", () => {
    renderFooterComponent({});
    expect(screen.getByText("(ver. local)")).toBeInTheDocument();
  });

  it("should have a release of process env version", () => {
    const original_val = process.env.RELEASE_VERSION

    process.env.RELEASE_VERSION = "30101010-zoo"
    renderFooterComponent({});
    expect(screen.getByText("(ver. 30101010-zoo)")).toHaveClass("block");

    process.env.RELEASE_VERSION = original_val
  });


  it("should hide versioning if parameter contains version=none", () => {
    const originalLocation = window.location;

    Object.defineProperty(window, "location", {
      value: new URL("https://www.google.com?version=none"),
      writable: true,
    })

    process.env.RELEASE_VERSION = "30101010-zoo"
    renderFooterComponent({});
    expect(screen.getByText("(ver. 30101010-zoo)")).toHaveClass("hidden");

    Object.defineProperty(window, "location", {
      value: originalLocation,
      writable: true,
    })
  });
});
