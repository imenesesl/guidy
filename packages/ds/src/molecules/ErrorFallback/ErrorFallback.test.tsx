import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ErrorFallback } from './ErrorFallback';

describe('ErrorFallback', () => {
  it('renders title', () => {
    render(<ErrorFallback title="Something went wrong" />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('renders message when provided', () => {
    render(<ErrorFallback title="Error" message="Details here" />);
    expect(screen.getByText('Details here')).toBeInTheDocument();
  });

  it('renders retry button when onRetry and buttonLabel provided', () => {
    const onRetry = vi.fn();
    render(<ErrorFallback title="Error" buttonLabel="Retry" onRetry={onRetry} />);
    expect(screen.getByText('Retry')).toBeInTheDocument();
  });

  it('calls onRetry when button is clicked', async () => {
    const user = userEvent.setup();
    const onRetry = vi.fn();
    render(<ErrorFallback title="Error" buttonLabel="Retry" onRetry={onRetry} />);
    await user.click(screen.getByText('Retry'));
    expect(onRetry).toHaveBeenCalledOnce();
  });

  it('does not render button when onRetry is not provided', () => {
    render(<ErrorFallback title="Error" />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
