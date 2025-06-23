import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import LanguageLoader from ".";

describe("LanguageLoader", () => {
  it("should render without crashing", async () => {
    await act(async() => {
        render(<LanguageLoader language="en" label="welcome"/>);
    })
    
    expect(await screen.findByText("Welcome to Zoo Negara")).toBeInTheDocument();
  });
}) 