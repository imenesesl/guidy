import { motion } from 'motion/react';
import type { Transition } from 'motion/react';

interface MascotArmsProps {
  walkCycle: Transition;
}

export function MascotArms({ walkCycle }: MascotArmsProps): React.JSX.Element {
  return (
    <>
      {/* Left arm + book */}
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

      {/* Right arm + phone */}
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
        <g transform="translate(168, 138) rotate(8)">
          <rect x="0" y="0" width="16" height="26" rx="3" fill="#1E293B" />
          <rect x="2" y="3" width="12" height="18" rx="1" fill="#38BDF8" />
          <circle cx="8" cy="24" r="1.5" fill="#475569" />
        </g>
      </motion.g>
    </>
  );
}
