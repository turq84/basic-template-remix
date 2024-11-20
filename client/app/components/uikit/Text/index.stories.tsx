import { Stack, Text } from '~uikit';
import { capitalize } from '~/utils/string';
import * as typography from '~design-tokens/typography';
import type { TypographyToken } from '~design-tokens/typography';

export default {
  title: 'Text',
  component: Text,
};

export const AllVariants = () => {
  return (
    <Stack direction='column' gap='large'>
      {Object.keys(typography).map((variant) => (
        <Text variant={variant as TypographyToken} color='text' key={variant}>
          {capitalize(variant).replace(/-/g, ' ')}
        </Text>
      ))}
    </Stack>
  );
};
