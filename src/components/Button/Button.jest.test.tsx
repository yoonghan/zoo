import { render } from "@testing-library/react";
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
  }: {
    styling?: ButtonStyles["styling"];
    className?: string;
  }) =>
    render(
      <ButtonLink
        styling={styling}
        href="https://google.com"
        className={className}
      >
        I am a Link
      </ButtonLink>
    );

  it("should render correct link className", () => {
    const { getByRole } = renderLink({ className: "external-className" });
    const linkComponent = getByRole("button", { name: "I am a Link" });
    expect(linkComponent).toHaveClass("button-secondary");
    expect(linkComponent).toHaveClass("external-className");
  });

  it("should not render link with undefined", () => {
    const { getByRole } = renderLink({});
    const linkComponent = getByRole("button", { name: "I am a Link" });
    expect(linkComponent).not.toHaveClass("undefined");
  });
});
