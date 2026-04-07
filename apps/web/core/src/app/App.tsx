import { AppProviders } from '@app/providers/AppProviders';
import { HomePage } from '@features/home';

export function App(): React.JSX.Element {
  return (
    <AppProviders>
      <HomePage />
    </AppProviders>
  );
}
