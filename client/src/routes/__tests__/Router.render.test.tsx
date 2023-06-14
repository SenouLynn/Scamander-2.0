import { render, screen } from "@testing-library/react";
import { tests } from "../../utility";
import Router, { RouterProvider } from "../components/Router";
import route, { buildRoute } from "../utils/builders";

import { _testComponents } from "../../utility/tests";

const testPack: TestPack = {
  name: "buildPack",
  flavor: "function",
  Component: Router,
  routes: [
    {
      case: "route: base route => `/`",
      targetPath: "/",
      routes: [
        buildRoute({
          path: "/",
          element: <_testComponents._testNode.Component />,
        }),
      ],
      assert: () =>
        expect(
          screen.getByTestId(_testComponents._testNode.attributes.testId)
        ).toBeTruthy(),
    },
  ],
};

describe("Render Test: Router", () => {
  tests.happyPath();

  it("should render dumb route", () => {
    const routes = [
      route({
        path: "/",
        element: <div data-testid="test"></div>,
      }),
    ];

    render(
      <RouterProvider routes={routes} initialEntries={["/"]} type="memory" />
    );
    expect(screen.getByTestId("test")).toBeTruthy();
  });

  //Iterate through test routes
  testPack.routes?.forEach((test) => {
    it(test.case, () => {
      render(
        <RouterProvider
          routes={test.routes}
          initialEntries={[test.targetPath]}
          type="memory"
        />
      );
      test.assert();
    });
  });
});
