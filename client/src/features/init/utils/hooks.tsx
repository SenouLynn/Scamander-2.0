import { useMemo } from "react";
import { getApps } from "./helpers";
import { createAppConfig } from "./builders";

const useInitContext = () => {
  //Todo: take appID as param, pass back app through config
  
  return {
    apps: getApps(),
    app: createAppConfig({}),
  };
};
//Gets full built app from init context
const useAppContext = (props: Partial<AppContext>): AppContext => {
  const routes = useMemo(() => props.routes || [], [props.routes]);
  return createAppConfig({
    routes,
    ...props,
  });
};

export { useAppContext };
