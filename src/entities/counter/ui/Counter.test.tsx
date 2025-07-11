import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import Counter from "./Counter";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter", () => {
  test("counter, do you work?", () => {
    renderWithTranslation(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
  });

  test("increment", async () => {
    renderWithTranslation(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    await userEvent.click(screen.getByTestId("increment-btn"));

    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });

  test("decrement", async () => {
    renderWithTranslation(<Counter />, {
      initialState: { counter: { value: 10 } },
    });

    await userEvent.click(screen.getByTestId("decrement-btn"));

    expect(screen.getByTestId("value-title")).toHaveTextContent("9");
  });
});
