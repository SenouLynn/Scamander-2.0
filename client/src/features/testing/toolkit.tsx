import { screen, waitFor } from "@testing-library/dom";
import { act } from "@testing-library/react";

//Full unit test
export const tests = {
  happyPath: () => {
    it("is happy :)", () => {
      expect(true).toBe(true);
    });
  },
};

export const target = {
  role: (role: string) => ({
    should: assert(screen.getByRole(role)),
    do: actions(screen.getByRole(role)),
    element: screen.getByRole(role),
  }),
  testId: (role: string) => ({
    should: assert(screen.getByTestId(role)),
    do: actions(screen.getByTestId(role)),
    element: screen.getByTestId(role),
  }),

  text: (text: string) => ({
    should: assert(screen.getByText(text)),
    element: screen.getByText(text),
    do: actions(screen.getByText(text)),
  }),

  //Returns arrays
  testIds: (role: string) => ({
    should: assert(screen.getAllByTestId(role)),
    elements: screen.getAllByTestId(role),
  }),
  roles: (role: string) => ({
    should: assert(screen.getAllByRole(role)),
    elements: screen.getAllByRole(role),
  }),
};

export const assert = (element: HTMLElement | HTMLElement[]) => ({
  render: () => waitFor(() => expect(element).toBeInTheDocument()),
  haveLength: (expected: number) =>
    waitFor(() => expect(element).toHaveLength(expected)),
  haveClassName: (expected: string) =>
    waitFor(() => expect(element).toHaveClass(expected)),
});

export const actions = (element: HTMLElement) => ({
  click: (times?: number) => {
    const iterate = times || 1;
    for (let i = 0; i < iterate; i++) act(() => element.click());
  },
});
