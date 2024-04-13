import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Carousel } from ".";

describe("Carousel", () => {
  const renderCarousel = () =>
    render(
      <Carousel
        model={[
          {
            link: "/go/fishing",
            shortDescription: "let's go fishing",
            img: {
              alt: "fishing promotion",
              src: "/img/fishing.png",
              width: 200,
              height: 200,
            },
          },
          {
            link: "/go/educamp",
            shortDescription: "education camp",
            img: {
              alt: "education camp",
              src: "/img/camping.png",
              width: 200,
              height: 200,
            },
          },
        ]}
      />
    );

  it("should render carousel with multiple cards", async () => {
    const { getAllByText, findAllByRole, getAllByRole } = renderCarousel();
    expect(
      (await findAllByRole("img", { name: "fishing promotion" })).length
    ).toBeGreaterThan(0);
    expect(
      getAllByRole("link", { name: "fishing promotion let's go fishing" })
        .length
    ).toBeGreaterThan(0);

    //length varies
    expect(getAllByText("education camp").length).toBeGreaterThan(0);
  });
});
