import type { ReactNode } from 'react';
import styles from './FormField.module.css';

export interface FormFieldProps {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
  children: ReactNode;
}

export function FormField({ label, error, hint, required, children }: FormFieldProps): React.JSX.Element {
  return (
    <div className={styles['container']}>
      <label className={styles['label']}>
        {label}
        {required && <span className={styles['required']}>*</span>}
      </label>
      {children}
      {error && <span className={styles['error']}>{error}</span>}
      {!error && hint && <span className={styles['hint']}>{hint}</span>}
    </div>
  );
}
