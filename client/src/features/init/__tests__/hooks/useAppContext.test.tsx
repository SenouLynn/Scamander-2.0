import { testHook, tests } from "../../../../utility";
import { useAppContext } from "../../utils/hooks";
import { createMockApp } from "../../utils/mocks";

const mockApp = createMockApp({});

//useAppContext resides within AppContext provider, it holds state for application
describe("hook: useAppContext", () => {
  tests.happyPath();

  it("should return truthy", () => {
    const res = testHook({ hook: () => useAppContext({}) });
    expect(res).toBeTruthy();
  });

  it("appContext provides app config", () => {
    const res = testHook({ hook: () => useAppContext(mockApp) });
    expect(res).toEqual(mockApp);
  });

  describe("keys in appConfig each can be passed to initContext", () => {
    Object.entries(mockApp).forEach(([key, value]) => {
      it(`passthrough check: passing '${key}' to appContext provider`, () => {
        const res = testHook({ hook: () => useAppContext({ [key]: value }) });
        expect(res[key]).toEqual(value);
      });
    });
  });

  test.todo(
    "Init Context: Test with mock app routing with mock routes, then add mock routes"
  );

  // it("should pass and return", () => {
  //   const testRoute = buildRoute({ path: "test" });
  //   const res = testHook({
  //     hook: () => useAppContext({ routes: [testRoute] }),
  //   });
  //   expect(res.routes[0]).toEqual(testRoute);
  // });

  //   it("should return passed routes", () => {
  //     const res = testHook({ hook: useAppContext, props: { routes: [{}] } });
  //     expect(res.routes).toBeTruthy();
  //   });
});

describe("Regression: Mock App", () => {
  const regression_mockApp: AppConfig = {
    id: "mock-app",
    label: "Mock App",
    description: "Mock App Description",
    icon: "icon", //Todo: add icon logic
    routes: [],
    styles: {},
    components: {},
    sections: {},
    field: {},
  };
  it("createMockApp() builds regression_mockapp", () => {
    const mockApp = createMockApp({});
    expect(regression_mockApp).toEqual(mockApp);
  });
});
