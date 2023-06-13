//Components
import Router from "./components/Router";
import Outlet from "./components/Outlet";

//Builders
import { router } from "./utils/browserRouter";

const index = {
  components: {
    Router,
    Outlet
  },
  functions: {
    router,
  },
};
