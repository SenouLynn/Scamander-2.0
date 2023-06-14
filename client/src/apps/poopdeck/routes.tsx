import { buildRoute } from "../../routes";

const Temp = () => {
  return <div>POOPDECK YO</div>;
};
const routes: Route[] = [buildRoute({ path: "/poopdeck", element: <Temp /> })];

export { routes };
