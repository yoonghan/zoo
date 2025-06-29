import { render } from "@testing-library/react";
import ContactUs from "./page";
import { zooProfile } from "@/config/profile";

/** Testing is limited for layout, as it renders whole html. The only best solution is via e2e test. */
describe("Contact Us", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<ContactUs />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(getByRole("heading", { name: "Contact Us" })).toBeInTheDocument();
  });

  it("should contain phone numbers", () => {
    const { getByRole } = render(<ContactUs />);
    const { phoneNumber1, phoneNumber2 } = zooProfile.contactus;
    expect(getByRole("link", { name: phoneNumber1 })).toHaveAttribute(
      "href",
      `tel:${phoneNumber1}`
    );

    expect(getByRole("link", { name: phoneNumber2 })).toHaveAttribute(
      "href",
      `tel:${phoneNumber2}`
    );
  });

  it("should contain all defined administration info", () => {
    const { getByRole, getByText } = render(<ContactUs />);
    const administrations = zooProfile.contactus.administration;
    if (administrations.length > 0) {
      administrations.forEach((administration) => {
        expect(
          getByRole("heading", { name: administration.department })
        ).toBeInTheDocument();
        expect(
          getByRole("link", { name: administration.email })
        ).toHaveAttribute("href", `mailto:${administration.email}`);
        expect(
          getByText(administration.departmentFunction)
        ).toBeInTheDocument();
      });
    }
  });
});
