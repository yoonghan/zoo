import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Link, type LinkStyles } from ".";

describe("link", () => {
  const renderLink = ({
    styling,
    className,
  }: {
    styling?: LinkStyles["styling"];
    className?: string;
  }) =>
    render(
      <Link
        styling={styling}
        href="https://www.google.com"
        className={className}
      >
        I am a Link
      </Link>
    );

  it("should render correct link className", () => {
    const { getByRole } = renderLink({ className: "external-className" });
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
    const linkComponent = getByRole("link", { name: "I am a Link" });
    expect(linkComponent).not.toHaveClass("link-none");
    expect(linkComponent).not.toHaveClass("undefined");
  });

  it("should render correct without adding undefined classname", () => {
    const { getByRole } = renderLink({});
    expect(getByRole("link", { name: "I am a Link" })).not.toHaveClass(
      "undefined"
    );
  });

  describe("rel attribute", () => {
    const externalUrl = "https://www.google.com";

    it("should render link with rel external if url starts with http", () => {
      const { getByRole } = render(
        <Link styling="Primary" href={externalUrl}>
          I am a Link
        </Link>
      );
      expect(getByRole("link", { name: "I am a Link" })).toHaveAttribute(
        "rel",
        "external"
      );
    });

    it("should override users setup ref even if it's external", () => {
      const { getByRole } = render(
        <Link styling="Primary" href={externalUrl} rel="me">
          I am a Link
        </Link>
      );
      expect(getByRole("link", { name: "I am a Link" })).toHaveAttribute(
        "rel",
        "me"
      );
    });

    it("should not send rel if url is internal", () => {
      const { getByRole } = render(
        <Link styling="Primary" href={"/localurl/back"}>
          I am a Link
        </Link>
      );
      expect(
        getByRole("link", { name: "I am a Link" }).hasAttribute("rel")
      ).toBeFalsy();
    });
  });
});
