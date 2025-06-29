import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { ThemeDecorator } from "../../../../config/storybook/decorators/themeDecorator";
import { LangSwitcher } from "./LangSwitcher";

type StoryProps = ComponentProps<typeof LangSwitcher>;

const meta: Meta<StoryProps> = {
  component: LangSwitcher,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Normal: Story = {
  args: {},
  decorators: [ThemeDecorator("light")],
  render: ({ ...args }) => {
    return <LangSwitcher {...args} />;
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <LangSwitcher {...args} />;
  },
};
