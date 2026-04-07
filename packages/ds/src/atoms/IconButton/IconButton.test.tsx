import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders with aria-label', () => {
    render(<IconButton label="Close">X</IconButton>);
    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<IconButton label="Like">♥</IconButton>);
    expect(screen.getByText('♥')).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(
      <IconButton label="Action" onClick={onClick}>
        +
      </IconButton>,
    );
    await userEvent.click(screen.getByLabelText('Action'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('applies size class', () => {
    render(
      <IconButton label="Big" size="lg">
        B
      </IconButton>,
    );
    expect(screen.getByLabelText('Big')).toHaveClass('lg');
  });

  it('is disabled when disabled prop is true', () => {
    render(
      <IconButton label="Disabled" disabled>
        D
      </IconButton>,
    );
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });
});
