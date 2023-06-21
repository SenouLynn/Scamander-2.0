/* 
    Let's see what this lil' thang can do
      Goals: 
      - Test that the state can be instantiated
      - Test that the state can be initialized
      - Test that the builder function can be stored
      - Test that the builder function can be called programmatically
*/
import { renderHook, waitFor } from "@testing-library/react";
import { testHook } from "../../../../utility";
import { buildStorePayload, useCreatePackStore } from "../../utils/create";
import { buildPack } from "../../../buildPackage";
import { buildMockStores } from "../../utils/mock";
import { tests } from "../../../testing/toolkit";

tests.happyPath();

describe("State system in action", () => {
  //Constant test reference
  const mockFetcher = jest.fn();
  const referencePack = buildPack({
    label: "IM ALIVE",
  });
  const storeStuff = {
    fetcher: mockFetcher,
  };

  //create store with pack as initial value
  const useCustomPackState = testHook({
    hook: () => useCreatePackStore({ ...referencePack, ...storeStuff }),
  });

  describe("setup: store instantiation", () => {
    it("returns passed state => pack", () => {
      const state = testHook({
        hook: () => useCustomPackState((state) => state),
      });

      // Works but including fetcher stuff as well. Might merge StateConfig and Pack
      //   expect(state.value).toEqual(referencePack);
    });

    it("should fire fetcher function when initializer is set", () => {
      const state = testHook({
        hook: () => useCustomPackState((state) => state),
      });
      testHook({ hook: () => state.initialize({}) });
      expect(mockFetcher).toHaveBeenCalled();
    });
  });
});

test.todo("Test buildStorePayload for regression");

describe("State system: Initialization", () => {
  //create store with pack as initial value
  let passedPack = buildPack({ label: "IM ALIVE" });
  const fetcher = () => passedPack;

  passedPack.label = "I'm runnin";
  const useCustomPackState = testHook({
    hook: () =>
      useCreatePackStore<Pack>(
        buildStorePayload({ fetcher, value: passedPack })
      ),
  });

  it("not initialized: should return string for label (blank slate)", () => {
    //Why? Testing truthiness of base state of the store.
    //The initialize function should take fetcher and load it into itself AND into the value bin
    const state = testHook({
      hook: () => useCustomPackState((state) => state),
    });
    expect(state.label).toEqual("");
  });
  it("initialize: return returns function to setStore", async () => {
    //Why? The internal initialize function contains the logic to run the fetcher and then write it to state
    //Consider passing the set function back so you can handle how it updates itself
    //The initialize function should take fetcher and load it into itself AND into the value bin
    const state = renderHook(() => useCustomPackState((state) => state));
    expect(state.result.current.label).toEqual("");
    expect(state.result.current.initialize).toBeTruthy();
  });

  it("initialize: returns setState ", async () => {
    //Why? The initializer will automatically run the fetcher and then write it to value
    //- You can update the store by passing the values to the initializer OR using the setStore function it passes back
    //It passes back a setStore function that writes over the root store values

    //Instantiate consumer and get state
    const state = renderHook(() => useCustomPackState((state) => state));
    //Check state is blank
    expect(state.result.current.label).toEqual("");
    //Run initializer with new label value
    const res = testHook({
      hook: () => state.result.current.initialize({ label: "WOOT" }),
    });
    //Check that the label has been updated
    waitFor(() => expect(state.result.current.label).toEqual("WOOT"));
    //Use the setStore function to update the label
    testHook({
      hook: () => res.setStore({ label: "I'm runnin" }),
    });
    expect(state.result.current.label).toEqual("I'm runnin");
  });
});

describe("Regression: Store builder elsewhere and programatically call it", () => {
  test.todo("Test build fetcher function for regression");

  const packIds = ["loc-0", "loc-1"];

  it("setup: testField returns dictionary of packs", () => {
    expect(Object.keys(buildMockStores(2))).toEqual(packIds);
    expect(buildMockStores(2)[packIds[0]].store).toBeTruthy();
  });

  it("setup: can initialize first packId ", () => {
    //Build test stores
    const stores = buildMockStores(2);
    //Name found store
    const group1Store = stores[packIds[0]].store;
    //Get consumer hook
    const useGroup1 = testHook({ hook: () => group1Store() });
    //Find initialize function
    const initialize = testHook({
      hook: () => useGroup1((state) => state.initialize),
    });
    expect(initialize).toBeTruthy();

    //Run initialize function
    testHook({
      hook: () => initialize(),
    });
    //Check that the label has been updated
    const { value } = testHook({
      hook: () => useGroup1(),
    });

    expect(value.location).toEqual("pack-0");
    expect(value.label).toEqual("Pack 0");
  });
});
