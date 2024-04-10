import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Link, type LinkStyles } from ".";

describe("link", () => {
  const renderLink = ({ styling }: { styling?: LinkStyles["styling"] }) =>
    render(
      <Link
        styling={styling}
        href="https://google.com"
        className="external-className"
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
});
