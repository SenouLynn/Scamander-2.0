import React from "react";

const attributes = {
  testId: "test-node",
  role: "test-node",
};

export const _testNode = {
  attributes,
  Component: TestNode,
};
export default function TestNode() {
  return (
    <div data-testid={attributes.testId} role={"role"}>
      Components
    </div>
  );
}
