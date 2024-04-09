import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Button, Link, type ButtonProps } from ".";

describe("Button", () => {
  const renderButton = ({
    text = "I am a Button",
    type = "Primary",
    onClick = () => {},
  }: {
    text?: ButtonProps["text"];
    type?: ButtonProps["type"];
    onClick?: () => void;
  }) => render(<Button text={text} type={type} onClick={onClick} />);

  it("should render correct button className", () => {
    const { getByRole } = renderButton({});
    expect(getByRole("button", { name: "I am a Button" })).toHaveClass(
      "button-primary"
    );
  });

  it("should be able to click on the button", async () => {
    const onClickCallback = jest.fn();
    const { getByRole } = renderButton({ onClick: onClickCallback });

    await userEvent.click(getByRole("button", { name: "I am a Button" }));

    expect(onClickCallback).toHaveBeenCalled();
  });
});

describe("link", () => {
  const renderButton = ({
    text = "I am a Link",
    type = "Secondary",
  }: {
    text?: ButtonProps["text"];
    type?: ButtonProps["type"];
  }) =>
    render(
      <Link text={text} type={type} href="https://google.com" rel="external" />
    );

  it("should render correct link className", () => {
    const { getByRole } = renderButton({});
    const linkComponent = getByRole("button", { name: "I am a Link" });
    expect(linkComponent).toHaveClass("button-secondary");
    expect(linkComponent).toHaveAttribute("rel", "external");
  });
});
