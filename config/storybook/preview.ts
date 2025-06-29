import type { Preview } from "@storybook/react-webpack5";
import { StyleDecorator } from "./decorators/styleDecorator";
import { ThemeDecorator } from "./decorators/themeDecorator";

const preview: Preview = {
  decorators: [StyleDecorator, ThemeDecorator("light")],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;


