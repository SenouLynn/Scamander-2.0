import { createContext } from "react";

const InitContext = createContext<InitContext>({
  routes: [],
});
const InitProvider = InitContext.Provider;

export { InitContext, InitProvider };
