import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { NavBar } from "./NavBar";
import { ThemeDecorator } from "../../../../config/storybook/decorators/themeDecorator";

type StoryProps = ComponentProps<typeof NavBar>;

const meta: Meta<StoryProps> = {
  component: NavBar,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Light: Story = {
  args: {},
  render: ({ ...args }) => {
    return <NavBar {...args} />;
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <NavBar {...args} />;
  },
};
