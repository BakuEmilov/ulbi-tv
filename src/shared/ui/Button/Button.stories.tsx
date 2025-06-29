import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Button, ThemeButton } from "./Button";
import { ThemeDecorator } from "../../../../config/storybook/decorators/themeDecorator";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
  render: ({ ...args }) => {
    return <Button {...args} />;
  },
};

export const Clear: Story = {
  args: {
    children: "Clear",
    theme: ThemeButton.CLEAR,
  },
  render: ({ ...args }) => {
    return <Button {...args} />;
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    theme: ThemeButton.OUTLINE,
  },
  render: ({ ...args }) => {
    return <Button {...args} />;
  },
};

export const OutlineDark: Story = {
  args: {
    children: "OutlineDark",
    theme: ThemeButton.OUTLINE,
  },
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <Button {...args} />;
  },
};
