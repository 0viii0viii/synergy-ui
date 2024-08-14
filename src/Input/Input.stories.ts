import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input.tsx';

const meta: Meta<typeof Input> = {
	title: 'Input',
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

const Template: Story = {
	argTypes: {
		type: {
			table: {
				type: {
					summary: 'HTMLInputTypeAttribute',
					detail:
						'"button"\n' +
						'| "checkbox"\n' +
						'| "color"\n' +
						'| "date"\n' +
						'| "datetime-local"\n' +
						'| "email"\n' +
						'| "file"\n' +
						'| "hidden"\n' +
						'| "image"\n' +
						'| "month"\n' +
						'| "number"\n' +
						'| "password"\n' +
						'| "radio"\n' +
						'| "range"\n' +
						'| "reset"\n' +
						'| "search"\n' +
						'| "submit"\n' +
						'| "tel"\n' +
						'| "text"\n' +
						'| "time"\n' +
						'| "url"\n' +
						'| "week"\n' +
						'| (string & {})',
				},
			},
			control: 'text',
		},
	},
};

export const Default: Story = Template;
