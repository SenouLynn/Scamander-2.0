import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "../utils/browserRouter";

import App from "../../App";
const testRoutes = [
  {
    path: "/",
    // element: <App />,
    element: <Outlet />, // Will this work?
    // loader: rootLoader, //Can I use this to load it's own children? Or Should I wrap Router and pass in children routes as props
    children: [
      {
        path: "team",
        // element: <Team />,
        // loader: teamLoader,
      },
    ],
  },
];

export default function Router() {
  const routes = router([]);
  return <RouterProvider router={routes} />;
}
