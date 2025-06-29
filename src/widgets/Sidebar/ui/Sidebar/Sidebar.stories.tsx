import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "../../../../../config/storybook/decorators/themeDecorator";

type StoryProps = ComponentProps<typeof Sidebar>;

const meta: Meta<StoryProps> = {
  component: Sidebar,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Light: Story = {
  args: {},
  render: ({ ...args }) => {
    return <Sidebar {...args} />;
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <Sidebar {...args} />;
  },
};
