import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { testHook } from "../../../../utility";
import { mockPack } from "../../../buildPackage/utils/mocks";
import { tests } from "../../../testing/toolkit";
import { useCreatePackStore } from "../../utils/create";

const pack = mockPack({
  label: "Test Pack",
});
const usePackStore = useCreatePackStore<SimpleStateConfig>({
  value: pack,
  ...pack,
});

tests.happyPath();

describe("build simple pack state", () => {
  beforeEach(() => {
    const { result } = renderHook(() => usePackStore());

    // Reset the state
    // act(() => {
    //   result.current.value = 0;
    // });
  });
  it("returns pack", () => {
    const value = testHook({
      hook: () => usePackStore((state) => state.value),
    });
    expect(value).toEqual(pack);
  });
  const keys = Object.keys(pack);

  describe("Regression: store contains entire pack", () => {
    keys.forEach((key) => {
      it(`returns ${key}`, () => {
        const value = testHook({
          hook: () =>
            usePackStore(
              (state: SimpleStateConfig) => state[key as keyof typeof pack]
            ),
        });
        expect(value).toEqual(pack[key as keyof typeof pack]);
      });
    });
  });

  test.todo("updatPack function: add Type");

  it("returns updateStore function", () => {
    const updateStore = testHook({
      hook: () => usePackStore((state) => state.updateStore),
    });
    expect(updateStore).toBeInstanceOf(Function);
  });

  it("updateStore updates label in value (object)", async () => {
    const state = renderHook(() => usePackStore());
    expect(state.result.current.label).toBe("Test Pack");
    await act(() =>
      state.result.current.updateStore({ label: "Updated Pack" })
    );
    expect(state.result.current.value.label).toBe("Updated Pack");
    expect(state.result.current.label).toBe("Updated Pack");
  });

  it("updateStore updates label in value (object)", async () => {
    const state = renderHook(() => usePackStore());
    expect(state.result.current.label).toBe("Updated Pack");
    await act(() => state.result.current.updateStore({ label: "NEW Pack" }));
    expect(state.result.current.label).toBe("NEW Pack");
  });
});
