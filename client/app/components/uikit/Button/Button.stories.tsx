import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps, useState } from 'react';

import { Button, Checkbox, Stack, Text } from '~uikit';

export default {
  title: 'Button',
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

const variants = ['filled', 'outlined', 'soft', 'plain'] as const;
const colors = ['primary', 'error', 'success'] as const;
const sizes = ['small', 'normal', 'large'] as const;

export const Variations: Story = {
  render: () => (
    <Stack direction='column' gap='medium'>
      {variants.map((variant) => (
        <Stack key={variant} direction='row' gap='regular' align='flex-start'>
          {colors.map((color) => (
            <Button key={color} variant={variant} color={color}>
              {`${variant} ${color}`}
            </Button>
          ))}
        </Stack>
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction='column' gap='medium'>
      {variants.map((variant) => (
        <Stack key={variant} direction='row' gap='regular' align='flex-start'>
          {sizes.map((size) => (
            <Button key={size} size={size} variant={variant} color='primary'>
              {size}
            </Button>
          ))}
        </Stack>
      ))}
    </Stack>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Stack direction='column' gap='large'>
      <Stack direction='column' gap='small'>
        <Text variant='headingM'>Start icon</Text>
        <ButtonIconExample icon='bellFilled' />
      </Stack>

      <Stack direction='column' gap='small'>
        <Text variant='headingM'>End icon</Text>
        <ButtonIconExample icon='addCircle' iconPlacement='end' />
      </Stack>
    </Stack>
  ),
};

function ButtonIconExample({
  icon,
  iconPlacement,
}: {
  icon?: ComponentProps<typeof Button>['icon'];
  iconPlacement?: ComponentProps<typeof Button>['iconPlacement'];
}) {
  return (
    <Stack direction='column' gap='medium'>
      {sizes.map((size) => (
        <Stack key={size} direction='row' gap='medium'>
          {variants.map((variant) => (
            <Button
              key={variant}
              variant={variant}
              size={size}
              color='primary'
              icon={icon}
              iconPlacement={iconPlacement}
            >
              {variant}
            </Button>
          ))}
        </Stack>
      ))}
    </Stack>
  );
}

export const Loading: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading, setLoading] = useState(false);

    return (
      <Stack direction='column' gap='medium'>
        <Checkbox
          label='Toggle loading'
          isSelected={isLoading}
          onChange={() => setLoading((p) => !p)}
        />
        <Stack direction='row' gap='medium' align='flex-start'>
          {sizes.map((size) => (
            <Button
              key={size}
              size={size}
              variant='filled'
              color='primary'
              isLoading={isLoading}
            >
              They spin me right round
            </Button>
          ))}
        </Stack>
      </Stack>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Stack direction='row' gap='medium'>
      {variants.map((variant) => (
        <Button key={variant} variant={variant} color='primary' isDisabled>
          {variant}
        </Button>
      ))}
    </Stack>
  ),
};
