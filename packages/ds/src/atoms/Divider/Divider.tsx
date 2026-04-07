import styles from './Divider.module.css';

export interface DividerProps {
  className?: string;
}

export function Divider({ className }: DividerProps): React.JSX.Element {
  return <hr className={[styles['divider'], className].filter(Boolean).join(' ')} />;
}
