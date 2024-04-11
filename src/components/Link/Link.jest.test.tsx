import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Link, type LinkStyles } from ".";

describe("link", () => {
  const renderLink = ({ styling, className = "external-className" }: { styling?: LinkStyles["styling"], className?: string }) =>
    render(
      <Link
        styling={styling}
        href="https://google.com"
        className={className}
      >
        I am a Link
      </Link>
    );

  it("should render correct link className", () => {
    const { getByRole } = renderLink({});
    const linkComponent = getByRole("link", { name: "I am a Link" });
    expect(linkComponent).toHaveClass("link-primary");
    expect(linkComponent).toHaveClass("external-className");
  });

  it("should render styling for chosen style", () => {
    const { getByRole } = renderLink({ styling: "Secondary" });
    expect(getByRole("link", { name: "I am a Link" })).toHaveClass(
      "link-secondary"
    );
  });

  it("should render no styling for chosen style is None", () => {
    const { getByRole } = renderLink({ styling: "None" });
    expect(getByRole("link", { name: "I am a Link" })).not.toHaveClass(
      "link-none"
    );
  });

  it("should render correct without adding undefined classname", () => {
    const { getByRole } = renderLink({className: undefined});
    expect(getByRole("link", { name: "I am a Link" })).not.toHaveClass("undefined");
  });
});
