import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button, ButtonLink, type ButtonStyles } from ".";

describe("Button", () => {
  const renderButton = ({
    styling = "Primary",
  }: {
    styling?: ButtonStyles["styling"];
  }) => render(<Button styling={styling}>I am a Button</Button>);

  it("should render correct button className", () => {
    const { getByRole } = renderButton({});
    expect(getByRole("button", { name: "I am a Button" })).toHaveClass(
      "button-primary"
    );
  });
});

describe("link", () => {
  const renderLink = ({
    styling = "Secondary",
    className,
    role
  }: {
    styling?: ButtonStyles["styling"];
    className?: string
    role?: string
  }) =>
    render(
      <ButtonLink
        styling={styling}
        href="https://google.com"
        className={className}
        role={role}
      >
        I am a Link
      </ButtonLink>
    );

  it("should render correct link className", () => {
    const { getByRole } = renderLink({className: "external-className"});
    const linkComponent = getByRole("button", { name: "I am a Link" });
    expect(linkComponent).toHaveClass("button-secondary");
    expect(linkComponent).toHaveClass("external-className");
  });

  it("should render correct without adding undefined classname", () => {
    const { getByRole } = renderLink({});
    expect(getByRole("button", { name: "I am a Link" })).not.toHaveClass("undefined");
  });


  it("should always render as a button role", () => {
    const { getByRole } = renderLink({role: "link"});
    expect(getByRole("button", { name: "I am a Link" })).not.toHaveClass("undefined");
  });
});
