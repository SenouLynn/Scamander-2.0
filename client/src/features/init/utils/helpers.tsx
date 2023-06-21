import apps from "../../../apps";

export const getApps = (): AppConfig[] => {
  return apps;
};

export const getAppId = () => {
  console.log(process.env.APP_ID);
  return process.env.APP_ID || "poopdeck"; //Can't test process.env yet, idk how
};

export const getAppForId = ({ apps, id }: { apps: any; id: string }) => {
  const app = apps.find((app: any) => app.id === id);
  return app;
};
