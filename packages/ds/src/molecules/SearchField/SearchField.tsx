import { forwardRef, type InputHTMLAttributes } from 'react';
import styles from './SearchField.module.css';

export interface SearchFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  fullWidth?: boolean;
}

export const SearchField = forwardRef<HTMLInputElement, SearchFieldProps>(
  function SearchField({ fullWidth = false, className, ...rest }, ref) {
    const wrapperClass = [styles['wrapper'], fullWidth ? styles['fullWidth'] : '', className].filter(Boolean).join(' ');
    const inputClass = fullWidth ? styles['inputFull'] : styles['input'];

    return (
      <div className={wrapperClass}>
        <svg className={styles['icon']} width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M7 1.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM0 7a7 7 0 1 1 12.45 4.39l3.08 3.08a.75.75 0 1 1-1.06 1.06l-3.08-3.08A7 7 0 0 1 0 7Z"
            fill="currentColor"
          />
        </svg>
        <input ref={ref} type="search" className={inputClass} {...rest} />
      </div>
    );
  },
);
