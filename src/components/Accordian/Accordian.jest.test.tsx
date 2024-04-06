import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Accordian } from ".";

describe("Accordian", () => {
  const renderAccordian = () =>
    render(
      <Accordian
        model={[
          {
            label: "Item 1",
            content: "Lorem ipsum dolor sit amet!",
          },
        ]}
      ></Accordian>
    );

  it("should render component correctly", () => {
    const { getByText } = renderAccordian();
    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Lorem ipsum dolor sit amet!")).toBeInTheDocument();
  });

  it("should render component with correct id", () => {
    const { getByText } = renderAccordian();
    expect(getByText("Item 1")).toHaveAttribute("for", "0-item-1");
  });
});
