import Button from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Primary = {
  args:{
    children:"Buy Now",
    variant:"primary",
    size:"large",
    type:"button"
  },
};

export const Secondary = {
  args:{
    children:"Secondary Button",
    variant:"secondary",
    size:"small",
    disabled:false,
    type:"reset",
    ariaLabel:""
  },
};

export const Danger = {
  args: {
    children: "Delete",
    variant: "danger",
    size: "medium",
  },
};

export const Outline = {
  args:{
    children:"Outline Button",
    variant:"outline",
    size:"large",
    type:"submit"
  },
};

export const Disabled = {
  args: {
    children: "Disabled",
    variant: "primary",
    size: "medium",
    disabled: true,
  },
};