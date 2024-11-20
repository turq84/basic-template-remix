import { cva } from '~styled-system/css';
import type { Typography } from '~design-tokens/types';
import type { AllowedElement } from './Text.types';

export const variantToElement: {
  [key in Typography]: Partial<AllowedElement>;
} = {
  body: 'span',
  bodyBold: 'strong',
  bodyExtraSmall: 'span',
  bodyExtraSmallBold: 'strong',
  bodyLarge: 'span',
  bodyLargeBold: 'strong',
  bodySemiBold: 'strong',
  bodySmall: 'span',
  bodySmallBold: 'strong',
  bodySmallSemiBold: 'strong',
  displayExtraSmall: 'span',
  displayLarge: 'span',
  displaySmall: 'span',
  headingL: 'h2',
  headingM: 'h3',
  headingS: 'h4',
  headingXl: 'h1',
  headingXxl: 'h1',
  label: 'span',
  lead: 'span',
  leadBold: 'strong',
  linkText: 'span',
  linkTextHover: 'span',
};

export const styles = cva({
  base: {
    margin: '0px',
    maxWidth: '100%',
  },
  variants: {
    variant: {
      body: { textStyle: '$body' },
      bodyBold: { textStyle: '$bodyBold' },
      bodyExtraSmall: { textStyle: '$bodyExtraSmall' },
      bodyExtraSmallBold: { textStyle: '$bodyExtraSmallBold' },
      bodyLarge: { textStyle: '$bodyLarge' },
      bodyLargeBold: { textStyle: '$bodyLargeBold' },
      bodySemiBold: { textStyle: '$bodySemiBold' },
      bodySmall: { textStyle: '$bodySmall' },
      bodySmallBold: { textStyle: '$bodySmallBold' },
      bodySmallSemiBold: { textStyle: '$bodySmallSemiBold' },
      displayExtraSmall: { textStyle: '$displayExtraSmall' },
      displayLarge: { textStyle: '$displayLarge' },
      displaySmall: { textStyle: '$displaySmall' },
      headingL: { textStyle: '$headingL' },
      headingM: { textStyle: '$headingM' },
      headingS: { textStyle: '$headingS' },
      headingXl: { textStyle: '$headingXl' },
      headingXxl: { textStyle: '$headingXxl' },
      label: { textStyle: '$label' },
      lead: { textStyle: '$lead' },
      leadBold: { textStyle: '$leadBold' },
      linkText: { textStyle: '$linkText' },
      linkTextHover: { textStyle: '$linkTextHover' },
    },
  },
});
