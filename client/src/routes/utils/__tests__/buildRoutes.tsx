import { tests } from "../../../utility";
import { buildRoute } from "../builders";

const testPack: TestPack = {
  name: "buildRoute",
  flavor: "function",
  function: buildRoute,
  keys: [
    {
      case: "key: path => type check",
      type: "string",
      key: "path",
      initialValue: "/",
    },
  ],
};

describe("builder: buildRoute", () => {
  tests.happyPath();
  tests.simpleObject({ testPack });
  tests.keyCheck({ testPack });
});
