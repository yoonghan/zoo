import { render } from "@testing-library/react";
import { ImageSlider } from ".";
import userEvent from "@testing-library/user-event";

describe("ImageSlider", () => {
  const renderImageSlider = () =>
    render(
      <ImageSlider
        width={100}
        height={100}
        model={[
          { caption: "first image", url: "/image1.jpg" },
          { caption: "second image", url: "/image2.jpg" },
        ]}
      />
    );

  it("should render image slider with multiple images", async () => {
    const { findAllByRole } = renderImageSlider();
    expect(
      (await findAllByRole("img", { name: "first image" })).length
    ).toBeGreaterThan(0);

    expect(
      (await findAllByRole("img", { name: "second image" })).length
    ).toBeGreaterThan(0);
  });

  it("should always select first image", async () => {
    const { findAllByRole } = renderImageSlider();
    const firstImages = (await findAllByRole("img", { name: "first image" }))
      .length;

    expect(
      (await findAllByRole("img", { name: "second image" })).length
    ).toBeLessThan(firstImages);
  });

  it("should select second image if clicked", async () => {
    const { findAllByRole } = renderImageSlider();
    const secondImages = (await findAllByRole("img", { name: "second image" }))
      .length;

    await userEvent.click(
      (
        await findAllByRole("img", { name: "second image" })
      )[0]
    );

    expect(
      (await findAllByRole("img", { name: "second image" })).length
    ).toBeGreaterThan(secondImages);
  });
});
