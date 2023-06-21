import { createAppConfig } from "../../features/init/utils/builders";
import { routes } from "./routes";

const app = createAppConfig({
  id: "og-poopdeck",
  label: "Poopdeck",
  description: "Internal builder application. Used to build the builder.",
  routes,
});

export default app;
