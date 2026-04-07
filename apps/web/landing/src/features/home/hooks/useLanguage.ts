import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';

interface UseLanguageReturn {
  language: string;
  toggle: () => void;
}

export function useLanguage(): UseLanguageReturn {
  const { i18n } = useTranslation();
  const language = i18n.language;

  const toggle = useCallback((): void => {
    const next = language === 'es' ? 'en' : 'es';
    void i18n.changeLanguage(next);
  }, [i18n, language]);

  return { language, toggle };
}
