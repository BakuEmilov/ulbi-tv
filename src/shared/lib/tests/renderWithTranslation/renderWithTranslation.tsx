import { render } from "@testing-library/react";
import { StateSchema, StoreProvider } from "app/providers/StoreProvider";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18nForTests from "shared/config/i18n/i18nForTests";

interface renderWithTranslationOption {
  initialState?: StateSchema;
}

export function renderWithTranslation(
  component: ReactNode,
  options?: renderWithTranslationOption
) {
  const { initialState } = options;
  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter>
        <I18nextProvider i18n={i18nForTests}>{component}</I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  );
}
