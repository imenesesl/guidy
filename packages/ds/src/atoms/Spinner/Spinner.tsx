import styles from './Spinner.module.css';

export type SpinnerSize = 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

export function Spinner({ size = 'md', className }: SpinnerProps): React.JSX.Element {
  const classNames = [styles['spinner'], styles[size], className].filter(Boolean).join(' ');

  return (
    <svg className={classNames} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" className={styles['track']} strokeWidth="3" />
      <path
        d="M12 2a10 10 0 0 1 10 10"
        className={styles['indicator']}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
