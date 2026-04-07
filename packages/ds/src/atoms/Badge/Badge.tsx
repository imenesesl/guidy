import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Badge.module.css';

export type BadgeVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

export function Badge({ variant = 'default', className, children, ...rest }: BadgeProps): React.JSX.Element {
  const classNames = [styles[variant], className].filter(Boolean).join(' ');

  return (
    <span className={classNames} {...rest}>
      {children}
    </span>
  );
}
