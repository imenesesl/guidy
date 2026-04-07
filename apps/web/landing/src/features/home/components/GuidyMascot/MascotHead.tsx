import { motion } from 'motion/react';
import type { Transition } from 'motion/react';

interface MascotHeadProps {
  walkCycle: Transition;
}

const blinkTransition = {
  repeat: Infinity,
  duration: 4,
  ease: 'easeInOut' as const,
  times: [0, 0.03, 0.06],
  repeatDelay: 1.5,
};

export function MascotHead({ walkCycle }: MascotHeadProps): React.JSX.Element {
  return (
    <motion.g
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ ...(walkCycle as Record<string, unknown>), duration: 0.4 }}
      style={{ transformOrigin: '110px 110px' }}
    >
      <circle cx="110" cy="82" r="50" fill="#1DB954" />
      <circle cx="110" cy="79" r="44" fill="#23D35E" />

      {/* Left eye */}
      <motion.g
        animate={{ scaleY: [1, 0.05, 1] }}
        transition={blinkTransition}
        style={{ transformOrigin: '94px 74px' }}
      >
        <ellipse cx="94" cy="74" rx="7" ry="8.5" fill="#0D4A22" />
        <ellipse cx="96" cy="71" rx="2.5" ry="3" fill="white" />
      </motion.g>

      {/* Right eye */}
      <motion.g
        animate={{ scaleY: [1, 0.05, 1] }}
        transition={blinkTransition}
        style={{ transformOrigin: '126px 74px' }}
      >
        <ellipse cx="126" cy="74" rx="7" ry="8.5" fill="#0D4A22" />
        <ellipse cx="128" cy="71" rx="2.5" ry="3" fill="white" />
      </motion.g>

      {/* Cheeks */}
      <circle cx="80" cy="88" r="6" fill="#16a34a" opacity="0.4" />
      <circle cx="140" cy="88" r="6" fill="#16a34a" opacity="0.4" />

      {/* Smile */}
      <path
        d="M94 90 Q110 108, 126 90"
        stroke="#0D4A22"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Graduation cap */}
      <ellipse cx="110" cy="44" rx="48" ry="7" fill="#0D4A22" />
      <polygon points="110,26 60,42 110,50 160,42" fill="#0D4A22" />
      <polygon points="110,28 66,42 110,48 154,42" fill="#155E2B" />
      <line x1="160" y1="42" x2="166" y2="60" stroke="#0D4A22" strokeWidth="2" />
      <motion.circle
        cx="166"
        cy="62"
        r="4"
        fill="#FBBF24"
        animate={{ y: [0, 3, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      />
    </motion.g>
  );
}
