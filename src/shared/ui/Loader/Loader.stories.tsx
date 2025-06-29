import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { ThemeDecorator } from "../../../../config/storybook/decorators/themeDecorator";
import { Loader } from "./Loader";

type StoryProps = ComponentProps<typeof Loader>;

const meta: Meta<StoryProps> = {
  component: Loader,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Normal: Story = {
  args: {},
  decorators: [ThemeDecorator("light")],
  render: ({ ...args }) => {
    return <Loader {...args} />;
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <Loader {...args} />;
  },
};
