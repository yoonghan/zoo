import "@testing-library/jest-dom";
import { render, screen, act } from "@testing-library/react";
import Faq from "./page";

describe("Frequent Asked Questions", () => {
  it("should contains important keys", async () => {
    await act(async ( ) => {
      render(<Faq params={Promise.resolve({lng: "en"})}/>);
    })
    //main
    expect(screen.getByRole("main")).toBeInTheDocument();
    //h1
    expect(
      screen.getByRole("heading", { name: "Frequent Asked Questions" })
    ).toBeInTheDocument();

    expect(
      screen.getByText("How to reach Zoo Negara?")
    ).toBeInTheDocument();
  });
});
