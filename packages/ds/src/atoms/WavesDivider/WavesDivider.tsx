import type { HTMLAttributes } from 'react';
import styles from './WavesDivider.module.css';

export type WavesDividerVariant = 'smooth' | 'sharp';

export interface WavesDividerProps extends HTMLAttributes<HTMLDivElement> {
  variant?: WavesDividerVariant;
  flip?: boolean;
}

export function WavesDivider({
  variant = 'smooth',
  flip = false,
  className,
  ...rest
}: WavesDividerProps): React.JSX.Element {
  const classes = [styles['waves'], styles[variant], flip ? styles['flip'] : '', className]
    .filter(Boolean)
    .join(' ');

  return <div className={classes} aria-hidden="true" {...rest} />;
}
