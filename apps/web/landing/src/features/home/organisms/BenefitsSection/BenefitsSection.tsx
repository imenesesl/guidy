import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Text, Card } from '@guidy/ds';
import { BookOpen, GraduationCap, School, CircleCheck } from 'lucide-react';
import styles from './BenefitsSection.module.css';

const ROLES: { key: string; Icon: LucideIcon }[] = [
  { key: 'teacher', Icon: BookOpen },
  { key: 'student', Icon: GraduationCap },
  { key: 'institution', Icon: School },
];

const ITEMS_PER_ROLE = 3;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 18 } },
};

export function BenefitsSection(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <motion.section
      className={styles['section']}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      <motion.div variants={cardVariants}>
        <Text variant="heading-2">{t('benefits.heading')}</Text>
      </motion.div>
      <div className={styles['grid']}>
        {ROLES.map(({ key, Icon }) => (
          <motion.div key={key} variants={cardVariants}>
            <Card variant="surface">
              <motion.div
                className={styles['card']}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className={styles['iconWrap']}>
                  <Icon size={48} />
                </div>
                <Text variant="heading-5">{t(`benefits.${key}_title`)}</Text>
                <ul className={styles['list']}>
                  {Array.from({ length: ITEMS_PER_ROLE }, (_, j) => (
                    <li key={j} className={styles['listItem']}>
                      <CircleCheck size={18} />
                      <Text variant="body-small" color="secondary">
                        {t(`benefits.${key}_${String(j + 1)}`)}
                      </Text>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
