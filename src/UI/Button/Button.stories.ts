import { Meta, StoryObj } from '@storybook/react';
import '../../app/globals.css';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<typeof Button> = {
  args: {
    title: 'Botão',
    className: 'bg-secondary-orange text-white !w-20',
  },
};
