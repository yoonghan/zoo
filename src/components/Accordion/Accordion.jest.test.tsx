import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
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
    const { getByText } = renderAccordion();
    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("1 Lorem ipsum dolor sit amet!")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
  });

  it("should render component with correct id", () => {
    const { getByText } = renderAccordion();
    expect(getByText("Item 1")).toHaveAttribute("for", "0-item-1");
  });

  it("should be able to render content with custom markdown", () => {
    const { getByRole } = renderAccordion();
    expect(getByRole("link", { name: "link here" })).toHaveAttribute(
      "href",
      "https://www.zoonegara.my"
    );
  });
});
