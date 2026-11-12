import { Variants } from "framer-motion";

export const appleEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: appleEase },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: appleEase },
  },
};

export const textMaskReveal: Variants = {
  hidden: { y: "110%" },
  visible: (custom: number = 0) => ({
    y: "0%",
    transition: {
      duration: 1.1,
      ease: appleEase,
      delay: custom * 0.08,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const horizontalLine: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: appleEase },
  },
};

