import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { Text, Button, Card } from '@guidy/ds';
import styles from './ErrorBoundary.module.css';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error('[ErrorBoundary]', error, info.componentStack);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (!this.state.hasError) {
      return this.props.children;
    }

    if (this.props.fallback) {
      return this.props.fallback;
    }

    return (
      <div className={styles['container']}>
        <Card variant="elevated">
          <div className={styles['content']}>
            <Text variant="heading-4">Something went wrong</Text>
            <Text variant="body-small" color="secondary">
              {this.state.error?.message ?? 'An unexpected error occurred'}
            </Text>
            <Button variant="primary" onClick={this.handleReset}>
              Try again
            </Button>
          </div>
        </Card>
      </div>
    );
  }
}
