import { render } from "@testing-library/react";
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
  };
  const defaultPartners = [
    {
      url: "https://www.partner.com",
      imageSrc: "/abc.jpg",
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
    expect(getByText("Not open on public holidays")).toBeInTheDocument();
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
    expect(getByText("Contact Us")).toHaveAttribute("href", "/contact-us");
    expect(getByText("Careers")).toHaveAttribute("href", "/careers");
    expect(
      getByText(`- ${currentYearUpdated} all rights reserved.`)
    ).toBeInTheDocument();
  });
});
