import { AppProviders } from '@app/providers/AppProviders';
import { ErrorBoundary } from '@app/components/ErrorBoundary';
import { HomePage } from '@features/home';

export function App(): React.JSX.Element {
  return (
    <ErrorBoundary>
      <AppProviders>
        <HomePage />
      </AppProviders>
    </ErrorBoundary>
  );
}
