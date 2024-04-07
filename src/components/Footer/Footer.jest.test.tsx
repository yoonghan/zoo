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
  const defaultContact = {
    phone: "Phone: +65 999 9999, Fax: +60 999 99999",
  };

  const renderFooterComponent = ({
    operatingTime = defaultOperatingTime,
    address = defaultAddress,
    contact = defaultContact,
  }: {
    operatingTime?: FooterProps["operatingTime"];
    address?: FooterProps["address"];
    contact?: FooterProps["contact"];
  }) => {
    return render(
      <Footer
        companyName="Zoo Negara"
        operatingTime={operatingTime}
        address={address}
        contact={contact}
      />
    );
  };

  it("should render component correctly", () => {
    const { getByText } = renderFooterComponent({});
    expect(getByText("© Zoo Negara")).toBeInTheDocument();
    expect(getByText("Monday - Sunday")).toBeInTheDocument();
    expect(getByText("9:00am - 10:00pm")).toBeInTheDocument();
    expect(getByText("Zoo Negara,")).toBeInTheDocument();
    expect(getByText("Hulu Kelang,")).toBeInTheDocument();
    expect(getByText("Ampang,")).toBeInTheDocument();
    expect(getByText("68000 Selangor.")).toBeInTheDocument();
    expect(
      getByText("Phone: +65 999 9999, Fax: +60 999 99999")
    ).toBeInTheDocument();
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

  it("should render component with email", () => {
    const { getByText } = renderFooterComponent({
      contact: {
        ...defaultContact,
        email: "walcoorperation@gmail.com",
      },
    });
    expect(getByText("walcoorperation@gmail.com")).toBeInTheDocument();
  });
});
