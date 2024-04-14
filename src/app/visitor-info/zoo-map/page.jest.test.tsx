import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ZooMap from "./page";
import { checkForImageExist } from "@/util/fileHelper";

describe("ZooMap", () => {
  const zooMapFileName = "zoo-negara-map";

  it("should contains important keys", () => {
    const { getByRole } = render(<ZooMap />);
    //main
    expect(getByRole("main")).toBeInTheDocument();
    //h1
    expect(getByRole("heading", { name: "Zoo Map" })).toBeInTheDocument();
  });

  it("should have map and image", () => {
    const { getByRole } = render(<ZooMap />);

    expect(getByRole("button", { name: "Download Map" })).toHaveAttribute(
      "href",
      `/images/${zooMapFileName}.jpg`
    );
    expect(getByRole("button", { name: "Download Map" })).toHaveAttribute(
      "download",
      ""
    );

    expect(
      getByRole("img", { name: "Zoo Negara Map" }).getAttribute("src")
    ).toContain(`${zooMapFileName}-web.jpg`);
  });

  it("should have 2 important map files to exist", () => {
    expect(checkForImageExist(`${zooMapFileName}.jpg`));
    expect(checkForImageExist(`${zooMapFileName}-web.jpg`));
  });
});
