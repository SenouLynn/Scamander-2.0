import { tests } from "../../../../utility";
import { getAppId, getApps } from "../../utils/helpers";

describe("init function: getApps", () => {
  tests.happyPath();

  it("should return truthy (sources locally for now)", () => {
    const res = getApps();
    expect(res).toBeTruthy();
  });
});
describe("init function: getAppId", () => {
  tests.happyPath();

  it("should return truthy (sources locally for now)", () => {
    const res = getAppId();
    expect(res).toBeTruthy();
  });
});
