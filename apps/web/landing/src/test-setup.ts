/// <reference types="vitest/globals" />
import '@testing-library/jest-dom/vitest';
import { i18n } from '@i18n/index';

class MockIntersectionObserver implements IntersectionObserver {
  readonly root = null;
  readonly rootMargin = '0px';
  readonly thresholds: readonly number[] = [0];
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

globalThis.IntersectionObserver = MockIntersectionObserver;

void i18n.changeLanguage('en');
