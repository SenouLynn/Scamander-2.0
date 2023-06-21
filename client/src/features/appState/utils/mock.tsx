import { buildPack } from "../../buildPackage";
import { buildStorePayload, useCreatePackStore } from "./create";

//Dynamically build a store with a pack as the value
export const buildMockStores = (number: number) => {
  return Object.fromEntries(
    Array.from({ length: number }, (_, i) => [
      `loc-${i}`,
      {
        store: () =>
          useCreatePackStore<Pack>(
            buildStorePayload({
              value: buildPack({ label: `Pack ${i}`, location: `pack-${i}` }),
            })
          ),
      },
    ])
  );
};
