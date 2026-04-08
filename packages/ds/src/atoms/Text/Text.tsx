import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Text.module.css';
import { variantToClass, colorToClass, defaultElementMap } from './Text.mappings';

export type TextVariant =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'body-large'
  | 'body'
  | 'body-small'
  | 'caption'
  | 'overline';
export type TextColor =
  | 'primary'
  | 'secondary'
  | 'subdued'
  | 'disabled'
  | 'brand'
  | 'error'
  | 'inverse';
export type TextElement =
  | 'p'
  | 'span'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'
  | 'strong'
  | 'em';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  color?: TextColor;
  as?: TextElement;
  children: ReactNode;
}

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
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Element className={classNames} {...rest}>
      {children}
    </Element>
  );
}
