import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input.tsx';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const Template: Story = {};

export const Default: Story = Template;
