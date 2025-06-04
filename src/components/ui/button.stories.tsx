import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Add } from "iconsax-reactjs";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "destructive",
        "outline",
        "ghost",
        "link",
        "success",
        "warning",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "default", "lg", "xl", "icon"],
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Add Item",
    variant: "primary",
    leftIcon: <Add variant="Bulk" size="20" />,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading...",
    variant: "primary",
    loading: true,
  },
};
