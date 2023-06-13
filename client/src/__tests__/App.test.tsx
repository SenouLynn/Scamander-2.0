import { render, screen } from "@testing-library/react";
import App from "../App";


test("render test: App", () => {
  render(<App />);
  expect(screen.getByRole("App")).toBeInTheDocument();
});
