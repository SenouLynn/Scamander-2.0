import { createContext } from "react";
import { createAppConfig } from "./builders";

const AppContext = createContext<AppContext>(createAppConfig({}));
const AppProvider = AppContext.Provider;

export { AppContext, AppProvider };
