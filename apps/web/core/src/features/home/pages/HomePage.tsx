import { useTranslation } from 'react-i18next';
import { Text, Button, Card, Badge, Chip, SearchField, Divider, Spinner, Avatar } from '@guidy/ds';
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
            <Text variant="body-large" color="secondary">{t('home.subtitle')}</Text>
          </div>
        </div>

        <SearchField placeholder="Search..." fullWidth />

        <Divider />

        <div className={styles['chipGroup']}>
          <Chip selected>All</Chip>
          <Chip>Components</Chip>
          <Chip>Tokens</Chip>
        </div>

        <div className={styles['grid']}>
          <Card variant="elevated">
            <div className={styles['cardHeader']}>
              <Text variant="heading-5">Design System</Text>
              <Badge variant="success">Ready</Badge>
            </div>
            <Text variant="body-small" color="secondary">
              Tokens, atoms, and molecules powered by @guidy/ds
            </Text>
          </Card>

          <Card variant="surface">
            <div className={styles['cardHeader']}>
              <Text variant="heading-5">Core App</Text>
              <Spinner size="sm" />
            </div>
            <Text variant="body-small" color="secondary">
              Rspack + React + TypeScript scaffold
            </Text>
          </Card>
        </div>

        <Divider />

        <div className={styles['actions']}>
          <Button variant="primary">{t('home.cta')}</Button>
          <Button variant="secondary">Docs</Button>
          <Button variant="ghost">Settings</Button>
        </div>
      </div>
    </div>
  );
}
