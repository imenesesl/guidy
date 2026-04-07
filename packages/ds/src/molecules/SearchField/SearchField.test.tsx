import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { SearchField } from './SearchField';

describe('SearchField', () => {
  it('renders with placeholder', () => {
    render(<SearchField placeholder="Search..." />);
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('renders as search input type', () => {
    render(<SearchField placeholder="Find" />);
    expect(screen.getByPlaceholderText('Find')).toHaveAttribute('type', 'search');
  });

  it('handles user input', async () => {
    render(<SearchField placeholder="Query" />);
    const input = screen.getByPlaceholderText('Query');
    await userEvent.type(input, 'react');
    expect(input).toHaveValue('react');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<SearchField ref={ref} placeholder="ref" />);
    expect(ref).toHaveBeenCalled();
  });

  it('renders search icon', () => {
    const { container } = render(<SearchField placeholder="Icon" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
