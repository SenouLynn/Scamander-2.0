import { Router } from "../../routes";

import { MemoryRouter } from "react-router-dom";

export const RenderMemoryRouter = ({ targetPath, routes, children }: any) => {
  return (
    <MemoryRouter initialEntries={[targetPath]}>
      <div data-testId="memory-router">{children}</div>
    </MemoryRouter>
  );
};
