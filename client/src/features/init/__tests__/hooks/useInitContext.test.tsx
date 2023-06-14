import { useMemo } from "react";
import { testHook, tests } from "../../../../utility";
import { useInitContext } from "../../utils/init";
import { buildRoute } from "../../../../routes";

describe("hook: useInitContext", () => {
  tests.happyPath();

  //Dirty Testing: Clean up later.
  it("should return truthy", () => {
    const res = testHook({ hook: () => useInitContext({}) });
    expect(res).toBeTruthy();
  });

  it("should return routes", () => {
    const testRoute = buildRoute({ path: "test" });
    const res = testHook({
      hook: () => useInitContext({ routes: [testRoute] }),
    });
    expect(res.routes[0]).toEqual(testRoute);
  });

  //   it("should return passed routes", () => {
  //     const res = testHook({ hook: useInitContext, props: { routes: [{}] } });
  //     expect(res.routes).toBeTruthy();
  //   });
});
