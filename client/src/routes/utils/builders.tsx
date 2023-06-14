export const buildRoute: buildRouteFn = (params) => {
  return {
    path: "/_404",
    element: (
      <div>Yo, you didn't pass a component to your route. Do better.</div>
    ),
    children: [],
    ...params,
  };
};

const route = buildRoute;
export default route;
