import { Suspense } from 'react';
import { Spinner } from '@guidy/ds';
import { AppProviders } from '@app/providers/AppProviders';
import { ErrorBoundary } from '@app/components/ErrorBoundary';
import { HomePage } from '@features/home';

export function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <AppProviders>
        <Suspense fallback={<Spinner size="lg" />}>
          <HomePage />
        </Suspense>
      </AppProviders>
    </ErrorBoundary>
  );
}
