import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { ThemeDecorator } from "../../../config/storybook/decorators/themeDecorator";
import { PageError } from "./PageError";

type StoryProps = ComponentProps<typeof PageError>;

const meta: Meta<StoryProps> = {
  component: PageError,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Light: Story = {
  args: {},
  render: ({ ...args }) => {
    return <PageError {...args} />;
  },
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <PageError {...args} />;
  },
};
