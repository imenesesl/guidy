import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MascotHead } from './MascotHead';
import { MascotLegs } from './MascotLegs';
import { MascotArms } from './MascotArms';

interface GuidyMascotProps {
  size?: number;
}

const walkCycle = {
  duration: 0.8,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

export function GuidyMascot({ size = 220 }: GuidyMascotProps): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ ...walkCycle, duration: 0.4 }}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 220 240"
        width={size}
        height={(size * 240) / 220}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={t('mascot.aria_label')}
        role="img"
        overflow="visible"
      >
        {/* Shadow */}
        <motion.ellipse
          cx="110"
          cy="228"
          rx="45"
          ry="7"
          fill="#0a0a0a"
          opacity="0.2"
          animate={{ rx: [45, 40, 45] }}
          transition={walkCycle}
        />

        <MascotLegs walkCycle={walkCycle} />
        <MascotArms walkCycle={walkCycle} />

        {/* Body */}
        <ellipse cx="110" cy="145" rx="54" ry="55" fill="#1DB954" />
        <ellipse cx="110" cy="150" rx="36" ry="34" fill="#23D35E" />

        <MascotHead walkCycle={walkCycle} />
      </svg>
    </motion.div>
  );
}
