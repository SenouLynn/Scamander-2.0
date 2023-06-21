import { render, renderHook, screen } from "@testing-library/react";
import { useContext } from "react";
import { testHook, tests } from "../../../utility";
import { createMockApp } from "../utils/mocks";
import App from "../providers/AppProvider";
import { AppContext } from "../utils/contexts";
//App holds state and provides to children
describe("Render Test: InitContext", () => {
  tests.happyPath();

  //Dirty Testing: Clean up later.
  it("should render", () => {
    render(<App />);
  });

  it("should render children", () => {
    render(
      <App>
        <div>Test</div>
      </App>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});

describe("Context consumption", () => {
  const mockApp = createMockApp({});
  const AppWrapper = ({ children }: any) => {
    return <App {...mockApp}>{children}</App>;
  };
  const contextState: AppConfig = renderHook(() => useContext(AppContext), {
    wrapper: AppWrapper,
  }).result.current;

  describe("keys in appConfig each can be passed to initContext", () => {
    Object.entries(mockApp).forEach(([key, value]) => {
      it(`consumer check: useContext(AppContext) makes '${key}' available to children`, () => {
        expect(contextState[key as keyof AppConfig]).toEqual(value);
      });
    });
  });
});
