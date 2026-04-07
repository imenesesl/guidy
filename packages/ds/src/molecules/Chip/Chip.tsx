import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Chip.module.css';

export interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children: ReactNode;
}

export function Chip({
  selected = false,
  className,
  children,
  ...rest
}: ChipProps): React.JSX.Element {
  const classNames = [selected ? styles['selected'] : styles['base'], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} role="option" aria-selected={selected} {...rest}>
      {children}
    </button>
  );
}
