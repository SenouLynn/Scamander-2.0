import { createAppConfig } from "../../init/utils/builders";

export const getApp = ({
  apps,
  appId,
}: {
  apps: AppConfig[];
  appId: string;
}): AppConfig => {
  const a = apps.find((app) => app.id === appId);
  return createAppConfig({ ...a });
};


export const getApps = () => {
  return [];
};
