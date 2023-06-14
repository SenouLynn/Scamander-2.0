interface Route extends RouteObject {
  path: string;
  element: React.ReactNode;
  children?: Route[];
}

type RouterProps = RouterType & {
  routes: RouteObject[];
  type?: "browser" | "memory";
};

type RouterType = MemoryRouter | BrowserRouter;

type MemoryRouter = {
  type: "memory";
  initialEntries: string[];
  initialIndex?: number;
};
type BrowserRouter = {
  type: "browser";
};
