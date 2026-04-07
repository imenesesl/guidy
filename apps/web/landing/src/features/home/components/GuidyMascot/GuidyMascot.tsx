import { motion } from 'motion/react';
import { MascotHead } from './MascotHead';

interface GuidyMascotProps {
  size?: number;
}

const walkCycle = {
  duration: 0.8,
  repeat: Infinity,
  ease: 'easeInOut' as const,
};

export function GuidyMascot({ size = 220 }: GuidyMascotProps): React.JSX.Element {
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
        aria-label="Guidy mascot"
        role="img"
        overflow="visible"
      >
        {/* Shadow — pulses with walk */}
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

        {/* ===== LEFT LEG (walks) ===== */}
        <motion.g
          animate={{ rotate: [15, -15, 15] }}
          transition={walkCycle}
          style={{ transformOrigin: '90px 190px' }}
        >
          <rect x="82" y="190" width="16" height="24" rx="8" fill="#169C46" />
          <ellipse cx="90" cy="216" rx="14" ry="7" fill="#128C3A" />
        </motion.g>

        {/* ===== RIGHT LEG (walks, opposite phase) ===== */}
        <motion.g
          animate={{ rotate: [-15, 15, -15] }}
          transition={walkCycle}
          style={{ transformOrigin: '130px 190px' }}
        >
          <rect x="122" y="190" width="16" height="24" rx="8" fill="#169C46" />
          <ellipse cx="130" cy="216" rx="14" ry="7" fill="#128C3A" />
        </motion.g>

        {/* ===== LEFT ARM + BOOK (swings with walk) ===== */}
        <motion.g
          animate={{ rotate: [-8, 8, -8] }}
          transition={walkCycle}
          style={{ transformOrigin: '58px 120px' }}
        >
          <path
            d="M58 120 C44 135, 36 150, 40 162"
            stroke="#1DB954"
            strokeWidth="13"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="40" cy="162" r="8" fill="#1DB954" />
          {/* Book */}
          <g transform="translate(24, 155) rotate(-12)">
            <rect x="0" y="0" width="28" height="20" rx="2" fill="#3B82F6" />
            <rect x="2" y="2" width="24" height="16" rx="1" fill="#60A5FA" />
            <line x1="14" y1="2" x2="14" y2="18" stroke="#3B82F6" strokeWidth="1.5" />
            <line x1="5" y1="7" x2="12" y2="7" stroke="#93C5FD" strokeWidth="1" />
            <line x1="5" y1="10" x2="11" y2="10" stroke="#93C5FD" strokeWidth="1" />
            <line x1="16" y1="7" x2="23" y2="7" stroke="#93C5FD" strokeWidth="1" />
            <line x1="16" y1="10" x2="22" y2="10" stroke="#93C5FD" strokeWidth="1" />
          </g>
        </motion.g>

        {/* ===== RIGHT ARM + PHONE (swings opposite) ===== */}
        <motion.g
          animate={{ rotate: [8, -8, 8] }}
          transition={walkCycle}
          style={{ transformOrigin: '162px 120px' }}
        >
          <path
            d="M162 120 C176 135, 182 148, 178 158"
            stroke="#1DB954"
            strokeWidth="13"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="178" cy="158" r="8" fill="#1DB954" />
          {/* Phone */}
          <g transform="translate(168, 138) rotate(8)">
            <rect x="0" y="0" width="16" height="26" rx="3" fill="#1E293B" />
            <rect x="2" y="3" width="12" height="18" rx="1" fill="#38BDF8" />
            <circle cx="8" cy="24" r="1.5" fill="#475569" />
          </g>
        </motion.g>

        {/* ===== BODY ===== */}
        <ellipse cx="110" cy="145" rx="54" ry="55" fill="#1DB954" />
        <ellipse cx="110" cy="150" rx="36" ry="34" fill="#23D35E" />

        <MascotHead walkCycle={walkCycle} />
      </svg>
    </motion.div>
  );
}
