import { render, screen } from "@testing-library/react";
import { tests } from "../../../utility";
import InitContext from "../providers/InitContext";

describe("Render Test: InitContext", () => {
  tests.happyPath();

  //Dirty Testing: Clean up later.
  it("should render", () => {
    render(<InitContext />);
  });

  it("should render children", () => {
    render(
      <InitContext>
        <div>Test</div>
      </InitContext>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
