import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Text, Button, Blob } from '@guidy/ds';
import { GuidyMascot } from '../../components/GuidyMascot';
import styles from './HeroSection.module.css';

export function HeroSection(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <section className={styles['hero']}>
      <Blob variant="1" color="brand" className={styles['blob1']} />
      <Blob variant="2" color="purple" className={styles['blob2']} />
      <div className={styles['inner']}>
        <motion.div
          className={styles['textCol']}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Text variant="heading-1" className={styles['title']}>
            {t('hero.title')}
          </Text>
          <Text variant="body-large" color="secondary">
            {t('hero.subtitle')}
          </Text>
          <div className={styles['ctas']}>
            <Button variant="primary" size="lg" onClick={() => undefined}>
              {t('hero.cta_teacher')}
            </Button>
            <Button variant="secondary" size="lg" onClick={() => undefined}>
              {t('hero.cta_institution')}
            </Button>
            <Button variant="ghost" size="lg" onClick={() => undefined}>
              {t('hero.cta_interested')}
            </Button>
          </div>
        </motion.div>
        <motion.div
          className={styles['illustrationCol']}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15, delay: 0.3 }}
        >
          <GuidyMascot size={240} />
        </motion.div>
      </div>
    </section>
  );
}
