import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import FamilyEvent from "./page";
import { checkForImageExist } from "@/util/fileHelper";
import { familyEventImages } from "./config";

describe("Family Event", () => {
  it("should contains important keys", () => {
    const { getByRole } = render(<FamilyEvent />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(getByRole("heading", { name: "Family Event" })).toBeInTheDocument();
  });

  it("should have valid image links", () => {
    const allLocalImages = familyEventImages
      .map((image) => image.url)
      .filter((url) => url.startsWith("/"));

    const allMissingImages = allLocalImages.filter(
      (image) => !checkForImageExist(`.${image}`)
    );

    expect(allMissingImages).toStrictEqual([]);
  });
});
