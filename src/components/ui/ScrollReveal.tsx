import React from 'react';
import { motion, UseInViewOptions } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  viewportOptions?: UseInViewOptions;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.7,
  yOffset = 32,
  viewportOptions = { once: true, margin: '-60px' }
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOptions}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom smooth, luxury ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
