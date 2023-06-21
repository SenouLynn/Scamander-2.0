import { getApps } from "./getters";
import { getApp } from "./getters";

const fetchApp = ({ appId }: { appId: string }) => {
  const apps = getApps();
  const app = getApp({ appId, apps });
  return app;
};

export { fetchApp };
