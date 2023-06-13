import { createBrowserRouter, RouteObject } from "react-router-dom";

//Master router, passed to Router
//Note: I may need to hard code root route and pass in other routes as its children
export const router = (routes: RouteObject[]) => createBrowserRouter(routes);

//Browser Router function builder (from docs)
// function createBrowserRouter(
//   routes: RouteObject[],
//   opts?: {
//     basename?: string;
//     future?: FutureConfig;
//     hydrationData?: HydrationState;
//     window?: Window;
//   }
// ): RemixRouter;
