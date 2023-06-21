import { create } from "zustand";
import { buildPack } from "../../buildPackage";

//
//Creates store to build final object passed to createStore
export const useCreatePackStore = <T,>(
  state?: Partial<SimpleStateConfig<Pack extends T ? any : Pack>>
) => {
  const pack: Pack = buildPack({ ...state });
  const useStore = create<SimpleStateConfig<Pack>>((set, get) => ({
    storeId: "simple-state",
    value: pack,
    loadingState: "idle",
    updateValue: (value) => {
      set((state) => ({
        value,
      }));
    },
    fetcher: () => null,
    initialize: (store) => {
      set({ loadingState: "pending" });
      const response: any = state?.fetcher && state?.fetcher(store);
      //handle response here
      const loadingState = response ? "idle" : "error";
      set({ value: response, loadingState });

      return {
        setStore: (storeValue) => set({ ...storeValue }),
      };
    },

    updateStore: async (pack) => {
      set({
        ...pack, //=> temp: should use immer or my fracker  here to update immutable state
        value: { ...state?.value, ...pack }, //=> updating temp version of itself (for payloads?)
      });
    },

    ...pack,
    ...state,
  }));
  return useStore;
};

export const buildStorePayload = ({
  value,
  fetcher,
  ...rest
}: Partial<SimpleStateConfig>): Partial<SimpleStateConfig> & { store: any } => {
  const passthrough = {
    fetcher: fetcher || (() => value),
    ...rest,
  };
  return {
    ...passthrough,
    store: useCreatePackStore(passthrough),
  };
};
