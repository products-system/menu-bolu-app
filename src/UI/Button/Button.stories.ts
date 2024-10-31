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
    className: 'bg-primary bg-opacity-50 text-white !w-20 py-1',
  },
};

export const BoluTheme: StoryObj<typeof Button> = {
  args: {
    title: 'Continuar',
    className: 'bg-primary theme-bolu text-white !w-40 py-1',
  },
};
