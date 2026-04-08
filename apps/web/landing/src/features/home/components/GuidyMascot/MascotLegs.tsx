import { motion } from 'motion/react';
import type { Transition } from 'motion/react';

interface MascotLegsProps {
  walkCycle: Transition;
}

export function MascotLegs({ walkCycle }: MascotLegsProps): React.JSX.Element {
  return (
    <>
      {/* Left leg */}
      <motion.g
        animate={{ rotate: [15, -15, 15] }}
        transition={walkCycle}
        style={{ transformOrigin: '90px 190px' }}
      >
        <rect x="82" y="190" width="16" height="24" rx="8" fill="#169C46" />
        <ellipse cx="90" cy="216" rx="14" ry="7" fill="#128C3A" />
      </motion.g>

      {/* Right leg (opposite phase) */}
      <motion.g
        animate={{ rotate: [-15, 15, -15] }}
        transition={walkCycle}
        style={{ transformOrigin: '130px 190px' }}
      >
        <rect x="122" y="190" width="16" height="24" rx="8" fill="#169C46" />
        <ellipse cx="130" cy="216" rx="14" ry="7" fill="#128C3A" />
      </motion.g>
    </>
  );
}
