import type { ComponentProps } from 'react';
import { TextField } from 'react-aria-components';

export type TextAreaProps = ComponentProps<typeof TextField> & {
  label: string;
  description?: string;
  errorMessage?: string; // Passing an `errorMessage` as prop toggles the input as invalid.
  placeholder?: string;
  className?: string;
  autoResize?: boolean; // The textarea will resize automatically based on its content.
  rows?: number;
};
