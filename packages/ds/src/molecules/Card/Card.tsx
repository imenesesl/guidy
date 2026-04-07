import type { HTMLAttributes, ReactNode } from 'react';
import styles from './Card.module.css';

export type CardVariant = 'elevated' | 'surface' | 'outlined';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
}

export function Card({
  variant = 'elevated',
  className,
  children,
  ...rest
}: CardProps): React.JSX.Element {
  const classNames = [styles[variant], className].filter(Boolean).join(' ');

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}
