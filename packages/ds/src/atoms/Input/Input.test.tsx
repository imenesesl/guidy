import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders with placeholder', () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument();
  });

  it('applies base class', () => {
    render(<Input placeholder="test" />);
    expect(screen.getByPlaceholderText('test')).toHaveClass('base');
  });

  it('applies error class when error is true', () => {
    render(<Input placeholder="err" error />);
    expect(screen.getByPlaceholderText('err')).toHaveClass('error');
  });

  it('applies fullWidth class', () => {
    render(<Input placeholder="fw" fullWidth />);
    expect(screen.getByPlaceholderText('fw')).toHaveClass('fullWidth');
  });

  it('applies size class', () => {
    render(<Input placeholder="lg" inputSize="lg" />);
    expect(screen.getByPlaceholderText('lg')).toHaveClass('lg');
  });

  it('forwards ref', () => {
    const ref = vi.fn();
    render(<Input ref={ref} placeholder="ref" />);
    expect(ref).toHaveBeenCalled();
  });

  it('handles user input', async () => {
    render(<Input placeholder="type" />);
    const input = screen.getByPlaceholderText('type');
    await userEvent.type(input, 'hello');
    expect(input).toHaveValue('hello');
  });
});
