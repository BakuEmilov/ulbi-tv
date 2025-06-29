import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { ThemeDecorator } from "../../../../config/storybook/decorators/themeDecorator";
import MainPage from "./MainPage";

type StoryProps = ComponentProps<typeof MainPage>;

const meta: Meta<StoryProps> = {
  component: MainPage,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Light: Story = {
  args: {},
  render: ({ ...args }) => {
    return <MainPage {...args} />;
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <MainPage {...args} />;
  },
};
