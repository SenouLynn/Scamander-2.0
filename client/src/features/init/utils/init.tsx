import { useMemo } from "react";
import { getApps } from "./helpers";

const useInitContext = (props: Partial<InitContext>) => {
  const apps = getApps();
  
  const routes = useMemo(() => props.routes || [], [props.routes]);
  return {
    routes,
    ...props,
  };
};
export { useInitContext };
