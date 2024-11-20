import { TooltipTrigger as AriaTooltipTrigger } from 'react-aria-components';

import type { TooltipProps } from './Tooltip.types';
import { TooltipContent, TooltipArrow, TooltipTrigger } from './Tooltip.styles';

const ARROW_OFFSET = 8;

const TooltipBase = ({
  children,
  content,
  placement = 'top',
  delay = 300,
  closeDelay = 100,
  className,
  style,
  ...rest
}: TooltipProps) => {
  return (
    <AriaTooltipTrigger
      {...rest}
      delay={delay}
      closeDelay={closeDelay}
      data-testid='tooltip'
    >
      {children}
      <TooltipContent
        style={style}
        className={className}
        placement={placement}
        offset={ARROW_OFFSET}
        data-testid='tooltip-content'
      >
        <TooltipArrow>
          <svg width={8} height={8} viewBox='0 0 8 8'>
            <path d='M0 0 L4 4 L8 0' />
          </svg>
        </TooltipArrow>
        {content}
      </TooltipContent>
    </AriaTooltipTrigger>
  );
};

export const Tooltip = Object.assign(TooltipBase, {
  Trigger: TooltipTrigger,
});
