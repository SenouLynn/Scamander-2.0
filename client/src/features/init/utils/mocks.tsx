import { createAppConfig } from "./builders";

export const createMockApp = (app: Partial<AppConfig>): AppConfig => {
  return createAppConfig({
    id: "mock-app",
    label: "Mock App",
    description: "Mock App Description",
    icon: "icon",
    routes: [],
    ...app,
  });
};
