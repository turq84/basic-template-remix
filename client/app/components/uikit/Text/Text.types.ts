import type { ComponentProps, CSSProperties, HTMLAttributes } from 'react';
import { Text as AriaText } from 'react-aria-components';

import type { Typography } from '~design-tokens/types';
import type { StyledSystemToken } from '~/utils/styled-system';
import { ColorToken } from '~styled-system/tokens';

export type AllowedElement =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'b'
  | 'em'
  | 'i'
  | 'p'
  | 'small'
  | 'span'
  | 'strong'
  | 'sub';

export type TextProps = HTMLAttributes<HTMLSpanElement> &
  ComponentProps<typeof AriaText> & {
    variant: Typography;
    color?: StyledSystemToken<ColorToken>;
    align?: CSSProperties['textAlign'];
    lineHeight?: CSSProperties['lineHeight'];
    as?: AllowedElement;
  };
