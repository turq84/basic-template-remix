import type { HTMLAttributes, ReactNode } from 'react';
import type { TooltipTriggerComponentProps } from 'react-aria-components';

export type TooltipProps = Omit<HTMLAttributes<HTMLDivElement>, 'content'> &
  TooltipTriggerComponentProps & {
    content: ReactNode;
    children: ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
  };
