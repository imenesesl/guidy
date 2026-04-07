import type { HTMLAttributes } from 'react';
import styles from './Blob.module.css';

export type BlobVariant = '1' | '2' | '3' | '4';
export type BlobColor = 'brand' | 'blue' | 'purple' | 'yellow' | 'pink';

export interface BlobProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BlobVariant;
  color?: BlobColor;
}

const variantToClass: Record<BlobVariant, string> = {
  '1': 'v1',
  '2': 'v2',
  '3': 'v3',
  '4': 'v4',
};

const colorToClass: Record<BlobColor, string> = {
  brand: 'brand',
  blue: 'blue',
  purple: 'purple',
  yellow: 'yellow',
  pink: 'pink',
};

export function Blob({
  variant = '1',
  color = 'brand',
  className,
  ...rest
}: BlobProps): React.JSX.Element {
  const classes = [
    styles['blob'],
    styles[variantToClass[variant]],
    styles[colorToClass[color]],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={classes} aria-hidden="true" {...rest} />;
}
