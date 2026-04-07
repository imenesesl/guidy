import { useTranslation } from 'react-i18next';
import { Text, Button } from '@guidy/ds';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import styles from './Header.module.css';

export function Header(): React.JSX.Element {
  const { t } = useTranslation();
  const { language, toggle } = useLanguage();

  return (
    <header className={styles['header']}>
      <div className={styles['inner']}>
        <Text variant="heading-5" color="brand">
          Guidy
        </Text>
        <div className={styles['actions']}>
          <button
            type="button"
            className={styles['langToggle']}
            onClick={toggle}
            aria-label={t('header.change_lang')}
          >
            <Globe size={16} />
            <span>{language.toUpperCase()}</span>
          </button>
          <Button variant="ghost" size="sm" onClick={() => undefined}>
            {t('header.login')}
          </Button>
        </div>
      </div>
    </header>
  );
}
