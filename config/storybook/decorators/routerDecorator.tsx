import React from "react";
import type { Decorator } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export const RouterDecorator: Decorator = (Story) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
