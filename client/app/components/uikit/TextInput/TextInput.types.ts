import type { ComponentProps } from 'react';
import { TextField } from 'react-aria-components';
import type { IconName } from '../Icon';

export type TextInputProps = ComponentProps<typeof TextField> & {
  label: string;
  icon?: IconName;
  description?: string;
  errorMessage?: string; // Passing an `errorMessage` as prop toggles the input as invalid.
  placeholder?: string;
  className?: string;
};
