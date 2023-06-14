import { tests } from "../../../utility";
import { buildPack } from "../utils/builders";

const testPack: TestPack = {
  name: "buildPack",
  flavor: "function",
  function: buildPack,
  keys: [
    {
      case: "key: label => type check",
      type: "string",
      key: "label",
      initialValue: "",
    },
    {
      case: "key: location => type check",
      type: "string",
      key: "location",
      initialValue: "",
    },
    {
      case: "key: styleId => type check",
      type: "string",
      key: "styleId",
      initialValue: "",
    },
    {
      case: "key: subComponents => type check",
      type: "object",
      key: "subComponents",
      initialValue: [],
    },
    {
      case: "key: children => type check",
      type: "object",
      key: "children",
      initialValue: null,
    },
    {
      case: "key: styles => type check",
      type: "object",
      key: "styles",
      initialValue: {},
    },
    {
      case: "key: logic => type check",
      type: "object",
      key: "logic",
      initialValue: {},
    },
    {
      case: "key: buildSelf => type check",
      type: "function",
      key: "buildSelf",
      initialValue: () => null,
    },
    {
      case: "key: getData => type check",
      type: "function",
      key: "getData",
      initialValue: () => null,
    },
    {
      case: "key: render => type check",
      type: "function",
      key: "render",
      initialValue: () => null,
    },
  ],
};

describe("buildPack", () => {
  tests.happyPath();
  tests.simpleObject({ testPack });
  tests.keyCheck({ testPack });
});

test.todo(
  "Build blank pack and build one built with location, styleId etc that fits into a storage framework"
);
