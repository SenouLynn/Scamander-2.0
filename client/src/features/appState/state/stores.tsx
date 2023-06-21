import { buildStorePayload } from "../utils/create";
import { fetchApp } from "./fetchers";

const stores = {
  app: buildStorePayload({
    label: "App",
    fetcher: fetchApp,
  }),
};

export default stores;
