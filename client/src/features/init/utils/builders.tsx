export const createAppConfig = (app: Partial<AppConfig>): AppConfig => {
  return {
    id: "app",
    label: "App",
    description: "",
    icon: "icon",
    routes: [],
    field: {},
    styles: {},
    components: {},
    sections: {},
    ...app,
  };
};
