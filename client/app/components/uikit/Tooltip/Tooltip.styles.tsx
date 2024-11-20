import {
  Button as AriaButton,
  Tooltip as AriaTooltip,
  OverlayArrow,
} from 'react-aria-components';

import { styled } from '~styled-system/jsx';

export const TooltipContent = styled(AriaTooltip, {
  base: {
    backgroundColor: '$text',
    paddingBlock: '$xs',
    paddingInline: '$small',
    borderRadius: '$regular',
    color: '$neutral5',
    outline: 'none',
    textStyle: '$bodySmall',
    boxShadow: '$regular',
  },
});

export const TooltipArrow = styled(OverlayArrow, {
  base: {
    display: 'inline-flex',

    '& svg': {
      fill: '$text',
    },

    '&[data-placement="bottom"] svg': {
      transform: 'rotate(180deg)',
    },

    '&[data-placement="right"] svg': {
      transform: 'rotate(90deg)',
    },

    '&[data-placement="left"] svg': {
      transform: 'rotate(-90deg)',
    },
  },
});

/**
 * Use this when the wrapped element is not a button-like element.
 * React Aria requires the trigger to be a button-like element,
 * otherwise the tooltip won't show up.
 */
export const TooltipTrigger = styled(AriaButton, {
  base: {
    all: 'unset',
  },
});
