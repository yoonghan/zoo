import { render, screen } from "@testing-library/react";
import { Accordion } from ".";

describe("Accordion", () => {
  const renderAccordion = () =>
    render(
      <Accordion
        model={[
          {
            label: "Item 1",
            content: "1 Lorem ipsum dolor sit amet!",
          },
          {
            label: "Item 2",
            content: "I am a [https://www.zoonegara.my|link here]",
          },
        ]}
        groupName="faq"
      ></Accordion>
    );

  it("should render component correctly", () => {
    renderAccordion();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("1 Lorem ipsum dolor sit amet!")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("should render component with correct id", () => {
    renderAccordion();
    expect(screen.getByText("Item 1")).toHaveAttribute("for", "0-item-1");
  });

  it("should be able to render content with custom markdown", () => {
    renderAccordion();
    expect(screen.getByRole("link", { name: "link here" })).toHaveAttribute(
      "href",
      "https://www.zoonegara.my"
    );
  });
});
