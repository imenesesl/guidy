import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './IconButton.module.css';

export type IconButtonSize = 'sm' | 'md' | 'lg';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: IconButtonSize;
  label: string;
  children: ReactNode;
}

export function IconButton({
  size = 'md',
  label,
  className,
  children,
  ...rest
}: IconButtonProps): React.JSX.Element {
  const classNames = [styles['base'], styles[size], className].filter(Boolean).join(' ');

  return (
    <button className={classNames} aria-label={label} {...rest}>
      {children}
    </button>
  );
}
