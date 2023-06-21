import { buildPack } from "./builders";

export const mockPack = (config?: Partial<Pack>) =>
  buildPack({
    styleId: "test-pack-id",
    label: "Test Pack",
    ...config,
  });
