import type { TextColor, TextElement, TextVariant } from './Text';

export const variantToClass: Record<TextVariant, string> = {
  'heading-1': 'heading1',
  'heading-2': 'heading2',
  'heading-3': 'heading3',
  'heading-4': 'heading4',
  'heading-5': 'heading5',
  'body-large': 'bodyLarge',
  body: 'body',
  'body-small': 'bodySmall',
  caption: 'caption',
  overline: 'overline',
};

export const colorToClass: Record<TextColor, string> = {
  primary: 'colorPrimary',
  secondary: 'colorSecondary',
  subdued: 'colorSubdued',
  disabled: 'colorDisabled',
  brand: 'colorBrand',
  error: 'colorError',
  inverse: 'colorInverse',
};

export const defaultElementMap: Partial<Record<TextVariant, TextElement>> = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'heading-5': 'h5',
  'body-large': 'p',
  body: 'p',
  'body-small': 'p',
  caption: 'span',
  overline: 'span',
};
