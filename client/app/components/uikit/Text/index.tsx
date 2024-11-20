import { memo } from 'react';
import { Text as AriaText } from 'react-aria-components';

import { token } from '~styled-system/tokens';
import { cx } from '~styled-system/css';
import type { TextProps } from './Text.types';
import { variantToElement, styles } from './Text.styles';

const TextBase = ({
  as,
  align,
  children,
  className,
  lineHeight,
  variant,
  style,
  color = 'text',
  ...rest
}: TextProps) => {
  const elementType = as || variantToElement[variant];

  return (
    <AriaText
      {...rest}
      elementType={elementType}
      className={cx(styles({ variant }), className)}
      style={{
        ...style,
        lineHeight,
        textAlign: align,
        color: token.var(`$colors.${color}`),
      }}
    >
      {children}
    </AriaText>
  );
};

export const Text = memo(TextBase);
