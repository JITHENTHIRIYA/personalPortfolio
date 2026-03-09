import { Variants } from "framer-motion";

// Shared easing curves
export const ease = {
  smooth: [0.25, 0.1, 0.25, 1] as const,
  out: [0, 0, 0.2, 1] as const,
  inOut: [0.4, 0, 0.2, 1] as const,
  spring: { type: "spring" as const, stiffness: 100, damping: 20 },
};

// Fade up reveal (default section animation)
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: ease.smooth,
    },
  }),
};

// Slide from left
export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: ease.smooth,
    },
  }),
};

// Slide from right
export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: ease.smooth,
    },
  }),
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// Stagger item
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: ease.smooth,
    },
  },
};

// Scale fade for cards
export const scaleFadeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: ease.smooth,
    },
  }),
};

// Hero text reveal (character/word level)
export const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 80, skewY: 3 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      duration: 1,
      delay,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

// Viewport animation settings
export const viewportConfig = {
  once: true,
  margin: "-80px" as const,
};
