import { FaceIcon, SunIcon } from '@radix-ui/react-icons';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: () => {}, name: '안녕', size: 'sm' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
	args: {
		name: 'Small',
		onClick: () => {},
		size: 'sm',
	},
};

export const Medium: Story = {
	args: {
		name: 'Medium',
		onClick: () => {},
		size: 'md',
	},
};

export const Large: Story = {
	args: {
		name: 'Large',
		onClick: () => {},
		size: 'lg',
	},
};

export const LeftIcon: Story = {
	args: {
		name: 'Left Icon',
		onClick: () => {},
		size: 'md',
		leftIcon: <SunIcon />,
	},
};
export const RightIcon: Story = {
	args: {
		name: 'Right Icon',
		onClick: () => {},
		size: 'lg',
		rightIcon: <FaceIcon />,
	},
};
