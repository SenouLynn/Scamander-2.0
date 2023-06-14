import {
  RouterProvider as RP,
  createBrowserRouter,
  createMemoryRouter,
} from "react-router-dom";
import { buildRoute } from "../utils/builders";
import NoRoute from "../../apps/poopdeck/pages/fallback/404";
export default function Router() {
  //Todo: Provide routes through init functions, presumably from api on initial hydration
  const routes = [
    buildRoute({
      path: "/",
      element: (
        <div data-testId="root">
          <h1>Root</h1>
        </div>
      ),
    }),
    buildRoute({
      path: "/*",
      element: <NoRoute />,
    }),
  ];
  return <RouterProvider type="browser" routes={routes} />;
}

export function RouterProvider({ routes, type }: RouterProps) {
  //Toggles between browser and memory router (used for testing scenarios)
  const router =
    type === "browser"
      ? createBrowserRouter(routes)
      : createMemoryRouter(routes);

  return <RP router={router} />;
}
