import { forwardRef, type InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: InputSize;
  error?: boolean;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { inputSize = 'md', error = false, fullWidth = false, className, ...rest },
  ref,
) {
  const classNames = [
    styles['base'],
    styles[inputSize],
    error ? styles['error'] : '',
    fullWidth ? styles['fullWidth'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <input ref={ref} className={classNames} {...rest} />;
});
