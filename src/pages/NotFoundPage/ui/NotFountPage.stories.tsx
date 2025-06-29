import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { ThemeDecorator } from "../../../../config/storybook/decorators/themeDecorator";
import { NotFoundPage } from "./NotFoundPage";

type StoryProps = ComponentProps<typeof NotFoundPage>;

const meta: Meta<StoryProps> = {
  component: NotFoundPage,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Light: Story = {
  args: {},
  render: ({ ...args }) => {
    return <NotFoundPage {...args} />;
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <NotFoundPage {...args} />;
  },
};
