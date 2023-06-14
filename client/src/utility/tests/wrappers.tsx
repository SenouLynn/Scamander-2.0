import { renderHook } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";

export const testHook = ({ hook }: { hook: Function }) => {
  return renderHook(() => hook()).result.current;
};

export const RenderMemoryRouter = ({ targetPath, routes, children }: any) => {
  return (
    <MemoryRouter initialEntries={[targetPath]}>
      <div data-testId="memory-router">{children}</div>
    </MemoryRouter>
  );
};
