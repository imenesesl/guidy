import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Chip } from './Chip';

describe('Chip', () => {
  it('renders children', () => {
    render(<Chip>Rock</Chip>);
    expect(screen.getByText('Rock')).toBeInTheDocument();
  });

  it('has role option', () => {
    render(<Chip>Pop</Chip>);
    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  it('is not selected by default', () => {
    render(<Chip>Jazz</Chip>);
    expect(screen.getByRole('option')).toHaveAttribute('aria-selected', 'false');
  });

  it('is selected when selected prop is true', () => {
    render(<Chip selected>All</Chip>);
    expect(screen.getByRole('option')).toHaveAttribute('aria-selected', 'true');
  });

  it('applies selected class when selected', () => {
    render(<Chip selected>Active</Chip>);
    expect(screen.getByText('Active')).toHaveClass('selected');
  });

  it('applies base class when not selected', () => {
    render(<Chip>Inactive</Chip>);
    expect(screen.getByText('Inactive')).toHaveClass('base');
  });

  it('calls onClick when clicked', async () => {
    const onClick = vi.fn();
    render(<Chip onClick={onClick}>Click</Chip>);
    await userEvent.click(screen.getByText('Click'));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
