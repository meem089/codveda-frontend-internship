import { fn } from 'storybook/test';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],

  argTypes: {
    backgroundColor: {
      control: 'color',
    },

    primary: {
      control: 'boolean',
    },

    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },

    label: {
      control: 'text',
    },
  },

  args: {
    onClick: fn(),
  },
};

export const Primary = {
  args:{
    primary:true,
    label:"Buy Now",
    size:"large",
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: 'Button',
    size: 'medium',
  },
};

export const Large = {
  args: {
    primary: true,
    label: 'Large Button',
    size: 'large',
  },
};

export const Small = {
  args: {
    primary: true,
    label: 'Small Button',
    size: 'small',
  },
};