import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { ThemeDecorator } from "../../../../config/storybook/decorators/themeDecorator";
import AboutPage from "./AboutPage";

type StoryProps = ComponentProps<typeof AboutPage>;

const meta: Meta<StoryProps> = {
  component: AboutPage,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Light: Story = {
  args: {},
  render: ({ ...args }) => {
    return <AboutPage {...args} />;
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <AboutPage {...args} />;
  },
};
