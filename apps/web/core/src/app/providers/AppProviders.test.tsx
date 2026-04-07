import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AppProviders } from './AppProviders';

describe('AppProviders', () => {
  it('renders children', () => {
    render(
      <AppProviders>
        <div>Test child</div>
      </AppProviders>,
    );
    expect(screen.getByText('Test child')).toBeInTheDocument();
  });
});
