import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders children', () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('renders as default p element for body variant', () => {
    render(<Text variant="body">Body text</Text>);
    expect(screen.getByText('Body text').tagName).toBe('P');
  });

  it('renders as h1 for heading-1 variant', () => {
    render(<Text variant="heading-1">Title</Text>);
    expect(screen.getByText('Title').tagName).toBe('H1');
  });

  it('renders as custom element via as prop', () => {
    render(<Text as="span">Inline</Text>);
    expect(screen.getByText('Inline').tagName).toBe('SPAN');
  });

  it('applies variant class', () => {
    render(<Text variant="caption">Note</Text>);
    expect(screen.getByText('Note')).toHaveClass('caption');
  });

  it('applies color class', () => {
    render(<Text color="brand">Brand</Text>);
    expect(screen.getByText('Brand')).toHaveClass('colorBrand');
  });

  it('merges custom className', () => {
    render(<Text className="extra">Test</Text>);
    expect(screen.getByText('Test')).toHaveClass('extra');
  });
});
