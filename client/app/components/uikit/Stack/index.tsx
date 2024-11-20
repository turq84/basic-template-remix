import { token } from '~styled-system/tokens';
import { polymorphicForwardRef } from '~/utils/polymorphic';
import { StackProps } from './Stack.types';

export const Stack = polymorphicForwardRef<'div', StackProps>(
  (
    { as, children, style, gap, direction, align, justify, wrap, ...props },
    ref
  ) => {
    const Element = as || 'div';

    return (
      <Element
        {...props}
        ref={ref}
        style={{
          gap: token.var(`$spacing.${gap}`),
          display: 'flex',
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap,
          ...style,
        }}
      >
        {children}
      </Element>
    );
  }
);

Stack.displayName = 'Stack';
