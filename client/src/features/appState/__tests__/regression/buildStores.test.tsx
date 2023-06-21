import { renderHook } from "@testing-library/react";
import { testHook } from "../../../../utility";
import { createAppConfig } from "../../../init/utils/builders";
import { tests } from "../../../testing/toolkit";
import { buildStorePayload } from "../../utils/create";

tests.happyPath();

const mockGetApps = jest.fn(({ appId }) => [
  createAppConfig({ id: "app-1" }),
  createAppConfig({ id: "app-2" }),
]);
const mockGetApp = jest.fn(({ appId }) => createAppConfig({ id: "app-2" }));

const mockAppFetcher = ({ appId }: { appId: string }) => {
  //Todo: create + test getApps()
  const getApps = ({ appId }: any) => mockGetApps({ appId });
  const apps = getApps({ appId });

  //Todo: create + test getApp()
  const getApp = ({ appId }: any) => mockGetApp({ appId });
  const app = getApp({ appId });
};

const stores = {
  app: buildStorePayload({
    label: "App",
    fetcher: mockAppFetcher,
  }),
};

describe("build app store", () => {
  it("stores contains app store", () => {
    expect(stores).toHaveProperty("app");
  });

  it("should return app store function", () => {
    expect(typeof stores.app.store).toEqual("function");
  });

  it("should be able call store", () => {
    const appStore = stores.app.store;
    const { initialize } = testHook({ hook: () => appStore() });
    expect(initialize).toBeTruthy();
    expect(typeof initialize).toBe("function");
  });

  it("should call getApp mock", () => {
    const appStore = stores.app.store;
    const { initialize } = testHook({ hook: () => appStore() });
    testHook({ hook: () => initialize({ appId: "hello" }) });
    expect(mockGetApp).toHaveBeenCalled();
    expect(mockGetApp).toHaveBeenCalledWith({ appId: "hello" });
  });

  it("should call getApps mock", () => {
    const appStore = stores.app.store;
    const { initialize } = testHook({ hook: () => appStore() });
    testHook({ hook: () => initialize({ appId: "test" }) });
    expect(mockGetApps).toHaveBeenCalled();
    expect(mockGetApps).toHaveBeenCalledWith({ appId: "test" });
  });
});
