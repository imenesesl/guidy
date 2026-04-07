import { useTranslation } from 'react-i18next';
import { Text, Divider } from '@guidy/ds';
import styles from './Footer.module.css';

export function Footer(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <footer className={styles['footer']}>
      <Divider />
      <div className={styles['inner']}>
        <Text variant="body" color="secondary">
          {t('footer.tagline')}
        </Text>
        <Text variant="body-small" color="subdued">
          {t('footer.copyright')}
        </Text>
      </div>
    </footer>
  );
}
