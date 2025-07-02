import { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { ThemeDecorator } from "../../../../config/storybook/decorators/themeDecorator";
import { Modal } from "./Modal";

type StoryProps = ComponentProps<typeof Modal>;

const meta: Meta<StoryProps> = {
  component: Modal,
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Light: Story = {
  args: {
    children: "lorem lorem lorem lorem lorem",
    isOpen: true
  },
  render: ({ ...args }) => {
    return <Modal {...args} />;
  },
};

export const Dark: Story = {
  args: {
    children: "lorem lorem lorem lorem lorem",
    isOpen: true
  },
  decorators: [ThemeDecorator("dark")],
  render: ({ ...args }) => {
    return <Modal {...args} />;
  },
};
