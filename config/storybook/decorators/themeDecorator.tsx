import type { Decorator } from "@storybook/react";
import React from "react";
import "app/styles/themes/dark.scss";
import "app/styles/themes/normal.scss";

export type Theme = "light" | "dark";

export const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) =>
    (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );
