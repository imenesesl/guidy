import { useTranslation } from 'react-i18next';
import { Text, Button, Card, Avatar, Divider } from '@guidy/ds';
import styles from './HomePage.module.css';

export function HomePage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <div className={styles['page']}>
      <div className={styles['container']}>
        <div className={styles['header']}>
          <Avatar name="Guidy" size="lg" />
          <div>
            <Text variant="heading-2">{t('home.title')}</Text>
            <Text variant="body-large" color="secondary">
              {t('home.subtitle')}
            </Text>
          </div>
        </div>

        <Divider />

        <div className={styles['grid']}>
          <Card variant="elevated">
            <Text variant="heading-5">Fast</Text>
            <Text variant="body-small" color="secondary">
              Built with Rspack for instant dev server startup
            </Text>
          </Card>

          <Card variant="elevated">
            <Text variant="heading-5">Type-safe</Text>
            <Text variant="body-small" color="secondary">
              Strict TypeScript from end to end
            </Text>
          </Card>

          <Card variant="elevated">
            <Text variant="heading-5">Scalable</Text>
            <Text variant="body-small" color="secondary">
              Monorepo architecture with shared packages
            </Text>
          </Card>
        </div>

        <Divider />

        <div className={styles['actions']}>
          <Button variant="primary">{t('home.cta')}</Button>
        </div>
      </div>
    </div>
  );
}
