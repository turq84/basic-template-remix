// Base typography styles
const typographyBase = {
  fontFamily: 'Nunito Sans',
  textTransform: 'none',
  letterSpacing: 0,
};

const typographyBaseRegular = {
  ...typographyBase,
  lineHeight: 1.5,
};

const typographyBaseBold = {
  ...typographyBase,
  lineHeight: 1.556,
};

// Typography tokens
export const body = {
  ...typographyBaseRegular,
  fontWeight: 400,
  fontSize: 16,
};
export const bodyBold = {
  ...typographyBaseRegular,
  fontWeight: 700,
  fontSize: 16,
};
export const bodyExtraSmall = {
  ...typographyBaseRegular,
  fontWeight: 400,
  fontSize: 12,
};
export const bodyExtraSmallBold = {
  ...typographyBaseRegular,
  fontWeight: 700,
  fontSize: 12,
};
export const bodyLarge = {
  ...typographyBaseBold,
  fontWeight: 400,
  fontSize: 18,
};
export const bodyLargeBold = {
  ...typographyBaseBold,
  fontWeight: 700,
  fontSize: 18,
};
export const bodySemiBold = {
  ...typographyBaseRegular,
  fontWeight: 600,
  fontSize: 16,
};
export const bodySmall = {
  ...typographyBaseRegular,
  fontWeight: 400,
  fontSize: 14,
};
export const bodySmallBold = {
  ...typographyBaseRegular,
  fontWeight: 700,
  fontSize: 14,
};
export const bodySmallSemiBold = {
  ...typographyBaseRegular,
  fontWeight: 600,
  fontSize: 14,
};
export const displayExtraSmall = {
  ...typographyBaseRegular,
  fontWeight: 500,
  fontSize: 32,
};
export const displayLarge = {
  ...typographyBaseRegular,
  fontWeight: 500,
  fontSize: 64,
};
export const displaySmall = {
  ...typographyBaseRegular,
  fontWeight: 500,
  fontSize: 48,
};
export const headingL = {
  ...typographyBaseRegular,
  fontWeight: 700,
  fontSize: 28,
};
export const headingM = {
  ...typographyBaseRegular,
  fontWeight: 600,
  fontSize: 22,
};
export const headingS = {
  ...typographyBaseRegular,
  fontWeight: 600,
  fontSize: 16,
};
export const headingXl = {
  ...typographyBaseRegular,
  fontWeight: 700,
  fontSize: 42,
};
export const headingXxl = {
  ...typographyBaseRegular,
  fontWeight: 700,
  fontSize: 72,
};
export const label = {
  ...typographyBaseRegular,
  fontWeight: 500,
  fontSize: 14,
};
export const lead = {
  ...typographyBaseRegular,
  fontWeight: 400,
  fontSize: 28,
};
export const leadBold = {
  ...typographyBaseRegular,
  fontWeight: 700,
  fontSize: 28,
};
export const linkText = {
  ...typographyBaseRegular,
  fontWeight: 600,
  fontSize: 16,
};
export const linkTextHover = {
  ...typographyBaseRegular,
  fontWeight: 600,
  fontSize: 16,
};

export type TypographyToken =
  | 'body'
  | 'bodyBold'
  | 'bodyExtraSmall'
  | 'bodyExtraSmallBold'
  | 'bodyLarge'
  | 'bodyLargeBold'
  | 'bodySemiBold'
  | 'bodySmall'
  | 'bodySmallBold'
  | 'bodySmallSemiBold'
  | 'displayExtraSmall'
  | 'displayLarge'
  | 'displaySmall'
  | 'headingL'
  | 'headingM'
  | 'headingS'
  | 'headingXl'
  | 'headingXxl'
  | 'label'
  | 'lead'
  | 'leadBold'
  | 'linkText'
  | 'linkTextHover';
