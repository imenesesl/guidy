import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Text, Button, Blob } from '@guidy/ds';
import { Rocket } from 'lucide-react';
import styles from './StartFreeSection.module.css';

export function StartFreeSection(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <motion.section
      className={styles['section']}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Blob variant="3" color="brand" className={styles['blob1']} />
      <Blob variant="4" color="blue" className={styles['blob2']} />
      <div className={styles['content']}>
        <motion.div
          className={styles['rocketWrap']}
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <Rocket size={80} />
        </motion.div>
        <Text variant="heading-2">{t('startFree.heading')}</Text>
        <Text variant="body-large" color="secondary">
          {t('startFree.description')}
        </Text>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
        >
          <Button variant="primary" size="lg" onClick={() => undefined}>
            {t('startFree.cta')}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
