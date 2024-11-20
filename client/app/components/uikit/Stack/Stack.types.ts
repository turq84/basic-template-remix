import type { CSSProperties, ReactNode } from 'react';

import type { SpacingToken } from '~styled-system/tokens';
import type { StyledSystemToken } from '~/utils/styled-system';

export type StackProps = {
  gap: StyledSystemToken<SpacingToken>;
  direction?: CSSProperties['flexDirection'];
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  wrap?: CSSProperties['flexWrap'];
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};
