import { Text } from '../../atoms/Text';
import { Button } from '../../atoms/Button';
import { Card } from '../Card';
import styles from './ErrorFallback.module.css';

export interface ErrorFallbackProps {
  title: string;
  message?: string;
  buttonLabel?: string;
  onRetry?: () => void;
}

export function ErrorFallback({
  title,
  message,
  buttonLabel,
  onRetry,
}: ErrorFallbackProps): React.JSX.Element {
  return (
    <div className={styles['container']}>
      <Card variant="elevated">
        <div className={styles['content']}>
          <Text variant="heading-4">{title}</Text>
          {message ? (
            <Text variant="body-small" color="secondary">
              {message}
            </Text>
          ) : null}
          {onRetry && buttonLabel ? (
            <Button variant="primary" onClick={onRetry}>
              {buttonLabel}
            </Button>
          ) : null}
        </div>
      </Card>
    </div>
  );
}
