import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { ThemeDecorator } from "../../../../config/storybook/decorators/themeDecorator";
import { AppLink } from "./AppLink";

type StoryProps = ComponentProps<typeof AppLink>;

const meta: Meta<StoryProps> = {
  component: AppLink,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: "Primary"
  },
  decorators: [ThemeDecorator("light")],
  render: ({ ...args }) => {
    return <AppLink {...args} />;
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary"
  },
  decorators: [ThemeDecorator("light")],
  render: ({ ...args }) => {
    return <AppLink {...args} />;
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "PrimaryDark"
  },
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <AppLink {...args} />;
  },
};

export const SecondaryDark: Story = {
  args: {
    children: "SecondaryDark"
  },
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <AppLink {...args} />;
  },
};
