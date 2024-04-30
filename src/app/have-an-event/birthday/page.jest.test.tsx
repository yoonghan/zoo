import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import BirthdayEvent from "./page";
import { checkForImageExist } from "@/util/fileHelper";
import { birthdayImages } from "./config";

describe("Have An Event", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<BirthdayEvent />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(
      getByRole("heading", { name: "Birthday Event" })
    ).toBeInTheDocument();
  });

  it("should have valid image links", () => {
    const allLocalImages = birthdayImages
      .map((image) => image.url)
      .filter((url) => url.startsWith("/"));

    const allMissingImages = allLocalImages.filter(
      (image) => !checkForImageExist(`.${image}`)
    );

    expect(allMissingImages).toStrictEqual([]);
  });
});
