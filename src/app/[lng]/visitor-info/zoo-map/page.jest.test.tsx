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
    const { getByRole, getAllByRole } = render(<ZooMap />);

    expect(getByRole("button", { name: "Download Map" })).toHaveAttribute(
      "href",
      `/images/${zooMapFileName}.jpg`
    );
    expect(getByRole("button", { name: "Download Map" })).toHaveAttribute(
      "download",
      ""
    );

    expect(
      getAllByRole("img", { name: "Zoo Negara Map" })[0].getAttribute("src")
    ).toContain(`${zooMapFileName}-web-1.jpg`);
    expect(
      getAllByRole("img", { name: "Zoo Negara Map" })[1].getAttribute("src")
    ).toContain(`${zooMapFileName}-web-2.jpg`);
  });

  it("should have 3 important map files to exist", () => {
    expect(checkForImageExist(`${zooMapFileName}.jpg`));
    expect(checkForImageExist(`${zooMapFileName}-web-1.jpg`));
    expect(checkForImageExist(`${zooMapFileName}-web-2.jpg`));
  });
});
