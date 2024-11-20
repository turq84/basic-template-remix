// Helper export functions to transform the design system tokens into Panda CSS format

export const transformNumberTokens = (
  tokens: Record<string, number>,
  transformer: (value: number) => string
) => {
  return Object.entries(tokens).reduce<Record<string, { value: string }>>(
    (acc, [key, value]) => {
      acc[key] = { value: transformer(value) };
      return acc;
    },
    {}
  );
};

export const transformColors = (
  colorGroups: Record<string, Record<string, string>>
) => {
  const tokens: Record<string, { value: string }> = {};
  Object.values(colorGroups).forEach((colorGroup) => {
    Object.entries(colorGroup).forEach(([key, value]) => {
      tokens[key] = { value };
    });
  });
  return tokens;
};

type TextStyle = {
  fontFamily: string;
  fontWeight: number;
  fontSize: number;
  textTransform: string;
  letterSpacing: number;
  lineHeight: number;
};

type TransformedTypography = {
  [key: string]: {
    value: Omit<TextStyle, 'fontSize'> & { fontSize: string };
  };
};

export const transformTypography = (
  tokens: Record<string, TextStyle>
): TransformedTypography => {
  return Object.entries(tokens).reduce<TransformedTypography>(
    (acc, [key, value]) => {
      acc[`$${key}`] = {
        value: {
          fontFamily: value.fontFamily,
          fontWeight: value.fontWeight,
          fontSize: `${value.fontSize / 16}rem`,
          textTransform: value.textTransform,
          letterSpacing: value.letterSpacing,
          lineHeight: value.lineHeight,
        },
      };
      return acc;
    },
    {}
  );
};

export const transformColorsWithScheme = (tokens: {
  light: Record<string, string>;
  dark: Record<string, string>;
}) => {
  return Object.entries(tokens.light).reduce(
    (acc, [key, value]) => {
      acc[key] = {
        value: {
          _light: value,
          _dark: tokens.dark[key] || value,
        },
      };
      return acc;
    },
    {} as Record<string, { value: { _light: string; _dark: string } }>
  );
};

type Shadow = {
  boxShadow: string;
  offset: { x: number; y: number };
  radius: number;
  opacity: number;
  color: { hex: string; rgba: string };
};

export const transformShadows = (tokens: Record<string, Shadow>) => {
  return Object.entries(tokens).reduce(
    (acc, [key, value]) => {
      // Due to the way shadows are named in Figma we need to remove the leading
      // "shadow" from the key: "shadowLarge" -> "large"
      const name = key.replace('shadow', '').toLowerCase();
      acc[name] = { value: value.boxShadow };
      return acc;
    },
    {} as Record<string, { value: string }>
  );
};
