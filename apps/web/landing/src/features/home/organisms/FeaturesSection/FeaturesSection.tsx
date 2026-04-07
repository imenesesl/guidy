import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Text, WavesDivider } from '@guidy/ds';
import { Fingerprint, Lightbulb, BarChart3 } from 'lucide-react';
import styles from './FeaturesSection.module.css';

type FeatureAccent = 'blue' | 'yellow' | 'purple';

const FEATURES: { key: string; Icon: LucideIcon; accent: FeatureAccent }[] = [
  { key: 'variations', Icon: Fingerprint, accent: 'blue' },
  { key: 'guided', Icon: Lightbulb, accent: 'yellow' },
  { key: 'insights', Icon: BarChart3, accent: 'purple' },
];

export function FeaturesSection(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <WavesDivider variant="smooth" />
      <section className={styles['section']}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles['headingWrap']}
        >
          <Text variant="heading-2">{t('features.heading')}</Text>
        </motion.div>

        <div className={styles['rows']}>
          {FEATURES.map(({ key, Icon, accent }, i) => (
            <motion.div
              key={key}
              className={i % 2 === 0 ? styles['row'] : styles['rowReverse']}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles['textSide']}>
                <Text variant="heading-3">{t(`features.${key}_title`)}</Text>
                <Text variant="body-large" color="secondary">
                  {t(`features.${key}_desc`)}
                </Text>
              </div>
              <motion.div
                className={styles['illustrationSide']}
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <div
                  className={`${styles['iconBubble'] ?? ''} ${styles[`iconBubble--${accent}`] ?? ''}`}
                >
                  <Icon size={64} />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
      <WavesDivider variant="smooth" flip />
    </>
  );
}
