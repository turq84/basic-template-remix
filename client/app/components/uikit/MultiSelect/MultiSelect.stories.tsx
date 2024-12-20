import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import { MultiSelect } from '~uikit';

export default {
  title: 'MultiSelect',
  component: MultiSelect,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MultiSelect>;

type Story = StoryObj<typeof MultiSelect>;

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

export const Regular: Story = {
  args: {
    label: 'Regular select',
    items: options,
  },
  render: (args) => <MultiSelectExample {...args} />,
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select',
    items: options,
    isDisabled: true,
  },
  render: (args) => <MultiSelectExample {...args} />,
};

export const Required: Story = {
  args: {
    label: 'Required select',
    items: options,
    isRequired: true,
  },
  render: (args) => <MultiSelectExample {...args} />,
};

export const WithIcon: Story = {
  args: {
    label: 'With icon',
    items: options,
    icon: 'apps',
  },
  render: (args) => <MultiSelectExample {...args} />,
};

export const WithDescription: Story = {
  args: {
    label: 'Descriptions also',
    description: 'You should pick the third one',
    items: options,
  },
  render: (args) => <MultiSelectExample {...args} />,
};

export const WithError: Story = {
  args: {
    label: 'Some invalid choice',
    errorMessage: 'This is really bad',
    items: options,
  },
  render: (args) => <MultiSelectExample {...args} />,
};

export const WithClearing: Story = {
  args: {
    label: 'Clearing all selected options',
    actions: { clear: true },
    items: options,
  },
  render: (args) => <MultiSelectExample {...args} />,
};

export const WithClearAndConfirm: Story = {
  args: {
    label: 'Confirmation required',
    actions: { confirm: true, clear: true },
    items: options,
  },
  render: (args) => <MultiSelectExample {...args} />,
};

export const WithFiltering: Story = {
  args: {
    label: 'Filtering for options',
    items: Array.from({ length: 100 }, (_, i) => ({
      label: `Option ${randomWord()}`,
      value: `${i + 1}`,
    })),
  },
  render: (args) => <MultiSelectExample {...args} />,
};

function MultiSelectExample(props: ComponentProps<typeof MultiSelect>) {
  const [selected, setSelected] = useState(new Set<string>());

  return (
    <MultiSelect
      label='This is an example'
      placeholder='Select options'
      {...props}
      selected={selected}
      onSelect={setSelected}
    />
  );
}

function randomWord() {
  return Math.random().toString(36).substring(7);
}
