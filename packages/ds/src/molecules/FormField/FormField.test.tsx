import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormField } from './FormField';

describe('FormField', () => {
  it('renders label', () => {
    render(<FormField label="Email"><input /></FormField>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<FormField label="Name"><input placeholder="Enter name" /></FormField>);
    expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<FormField label="Field" required><input /></FormField>);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<FormField label="Field" error="Required"><input /></FormField>);
    expect(screen.getByText('Required')).toBeInTheDocument();
  });

  it('shows hint when no error', () => {
    render(<FormField label="Field" hint="Optional"><input /></FormField>);
    expect(screen.getByText('Optional')).toBeInTheDocument();
  });

  it('hides hint when error is present', () => {
    render(
      <FormField label="Field" hint="Help" error="Error"><input /></FormField>,
    );
    expect(screen.queryByText('Help')).not.toBeInTheDocument();
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
