type AppConfig = {
  id: string;
  label: string;
  description: string;
  icon: "icon";
  routes: Route[];
  field: {};
  styles: {};
  components: {};
  sections: {};
  children?: React.ReactNode;
};
