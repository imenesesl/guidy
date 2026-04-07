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
            <Text variant="body-large" color="secondary">
              {t('home.subtitle')}
            </Text>
          </div>
        </div>

        <SearchField placeholder={t('home.search_placeholder')} fullWidth />

        <Divider />

        <div className={styles['chipGroup']}>
          <Chip selected>{t('home.chip_all')}</Chip>
          <Chip>{t('home.chip_components')}</Chip>
          <Chip>{t('home.chip_tokens')}</Chip>
        </div>

        <div className={styles['grid']}>
          <Card variant="elevated">
            <div className={styles['cardHeader']}>
              <Text variant="heading-5">{t('home.card_ds_title')}</Text>
              <Badge variant="success">{t('home.card_ds_badge')}</Badge>
            </div>
            <Text variant="body-small" color="secondary">
              {t('home.card_ds_desc')}
            </Text>
          </Card>

          <Card variant="surface">
            <div className={styles['cardHeader']}>
              <Text variant="heading-5">{t('home.card_core_title')}</Text>
              <Spinner size="sm" />
            </div>
            <Text variant="body-small" color="secondary">
              {t('home.card_core_desc')}
            </Text>
          </Card>
        </div>

        <Divider />

        <div className={styles['actions']}>
          <Button variant="primary">{t('home.cta')}</Button>
          <Button variant="secondary">{t('home.btn_docs')}</Button>
          <Button variant="ghost">{t('home.btn_settings')}</Button>
        </div>
      </div>
    </div>
  );
}
