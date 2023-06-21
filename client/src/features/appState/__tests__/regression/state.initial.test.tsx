import { renderHook } from "@testing-library/react";
import { useCreatePackStore } from "../../utils/create";
import { tests } from "../../../testing/toolkit";
tests.happyPath();
const useStore = useCreatePackStore();

describe("Simple State", () => {
  describe("Regression: Creating a storage object", () => {
    const primitive = ["value", "label", "id"];
    const functions = ["setValue", "updateValue", "initialize"];

    it("should create a storage object", () => {
      const { result } = renderHook(() => useStore());
      expect(result.current).not.toBeUndefined();
    });

    it("should assign state storage custom label", () => {
      const useStore = renderHook(() =>
        useCreatePackStore({ label: "test-label" })
      ).result.current;
      const { label } = renderHook(() => useStore()).result.current;
      expect(label).toEqual("test-label");
    });

    it("should assign state storage custom id", () => {
      const useStore = renderHook(() =>
        useCreatePackStore({ storeId: "test-id" })
      ).result.current;
      const { storeId } = renderHook(() => useStore()).result.current;
      expect(storeId).toEqual("test-id");
    });

    it("should assign state storage custom value (number)", () => {
      const useStore = renderHook(() => useCreatePackStore({ value: 0 })).result
        .current;
      const { value } = renderHook(() => useStore()).result.current;
      expect(value).toEqual(0);
      expect(typeof value).toEqual("number");
    });
    it("should assign state storage custom value (string)", () => {
      const useStore = renderHook(() => useCreatePackStore({ value: "test" }))
        .result.current;
      const { value } = renderHook(() => useStore()).result.current;
      expect(value).toEqual("test");
      expect(typeof value).toEqual("string");
    });

    it("should assign state storage custom value (object)", () => {
      const useStore = renderHook(() => useCreatePackStore({ value: {} }))
        .result.current;
      const { value } = renderHook(() => useStore()).result.current;
      expect(value).toEqual({});
      expect(typeof value).toEqual("object");
    });
  });

  describe("Regression: Creating a storage object with custom setters", () => {
    it("setValue should fire passed function", () => {
      //Mock function
      const mockFn = jest.fn();
      //Pass function
      const useStore = renderHook(() => useCreatePackStore({ fetcher: mockFn }))
        .result.current;
      //Get function
      const { fetcher } = renderHook(() => useStore()).result.current;
      //Fire function
      fetcher({});
      //Test
      expect(mockFn).toHaveBeenCalled();
    });

    it("should update value", () => {
      const useStore = renderHook(() => useCreatePackStore({ value: 3 })).result
        .current;
      const { updateStore } = renderHook(() => useStore()).result.current;
      renderHook(() => updateStore({ test: {} })).result.current;
      const { value } = renderHook(() => useStore()).result.current;
      expect(value).toEqual({ test: {} });
    });
  });
});

describe("Simple State: initialize self", () => {
  /* 
  Theory:
  The idea here is to always separate the declaration from the initialization.
  This ensures that the entire store is configurable elsewhere, while its use case declarations remain separate.

  Initialization: 
  1. The initialize function is given to store builder to be called wherever store creator is called
    - It is responsible for calling the fetcher function, then setting the value of the store to whatever it may return
    - It also will trigger loading state changes depending on the status of the fetcher function
  2. The fetcher function is given to the store builder to be called by the initialize function
    - It is responsible for doing the external work to obtain the data
    - This allows me to separate the api work from the store work
    - Ultimately, the fetcher should be able to take generic asks to retrieve state from other stores

  */
  it("passing fetcher function to createStore should fire when initializer fires", () => {
    const mockFn = jest.fn();
    const useStore = renderHook(() => useCreatePackStore({ fetcher: mockFn }))
      .result.current;
    const { initialize } = renderHook(() => useStore()).result.current;
    renderHook(() => initialize()).result.current;
    expect(mockFn).toHaveBeenCalled();
  });

  it("return from fetcher function should assign to value", () => {
    const useStore = renderHook(() =>
      useCreatePackStore({
        fetcher: () => {
          return "test";
        },
      })
    ).result.current;

    const { initialize } = renderHook(() => useStore()).result.current;
    renderHook(() => initialize()).result.current;
    const { value } = renderHook(() => useStore()).result.current;
    expect(value).toEqual("test");
  });
});
