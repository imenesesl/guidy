import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Text.module.css';

export type TextVariant = 'heading-1' | 'heading-2' | 'heading-3' | 'heading-4' | 'heading-5' | 'body-large' | 'body' | 'body-small' | 'caption' | 'overline';
export type TextColor = 'primary' | 'secondary' | 'subdued' | 'disabled' | 'brand' | 'error' | 'inverse';
type TextElement = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'strong' | 'em';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  color?: TextColor;
  as?: TextElement;
  children: ReactNode;
}

const variantToClass: Record<TextVariant, string> = {
  'heading-1': 'heading1',
  'heading-2': 'heading2',
  'heading-3': 'heading3',
  'heading-4': 'heading4',
  'heading-5': 'heading5',
  'body-large': 'bodyLarge',
  'body': 'body',
  'body-small': 'bodySmall',
  'caption': 'caption',
  'overline': 'overline',
};

const colorToClass: Record<TextColor, string> = {
  primary: 'colorPrimary',
  secondary: 'colorSecondary',
  subdued: 'colorSubdued',
  disabled: 'colorDisabled',
  brand: 'colorBrand',
  error: 'colorError',
  inverse: 'colorInverse',
};

const defaultElementMap: Partial<Record<TextVariant, TextElement>> = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'heading-5': 'h5',
  'body-large': 'p',
  'body': 'p',
  'body-small': 'p',
  'caption': 'span',
  'overline': 'span',
};

export function Text({
  variant = 'body',
  color,
  as,
  className,
  children,
  ...rest
}: TextProps): React.JSX.Element {
  const Element = as ?? defaultElementMap[variant] ?? 'p';
  const classNames = [
    styles[variantToClass[variant]],
    color ? styles[colorToClass[color]] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
}
